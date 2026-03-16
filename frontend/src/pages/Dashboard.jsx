import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { BookOpen, CheckCircle, Clock, Loader2 } from 'lucide-react';
import api from '../services/api';

const Dashboard = () => {
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await api.get('/analytics');
        setAnalytics(res.data.data);
      } catch (error) {
        console.error('Error fetching analytics', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
      </div>
    );
  }
  
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Welcome back, {user?.name || 'Student'}! 👋
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Here's a quick overview of your study progress.
      </p>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          icon={<BookOpen className="text-blue-500 w-6 h-6" />}
          label="Active Subjects"
          value={analytics?.overview?.totalSubjects || 0}
          color="border-blue-500"
        />
        <StatCard 
          icon={<Clock className="text-orange-500 w-6 h-6" />}
          label="Pending Tasks"
          value={analytics?.overview?.pendingTasks || 0}
          color="border-orange-500"
        />
        <StatCard 
          icon={<CheckCircle className="text-green-500 w-6 h-6" />}
          label="Completed Tasks"
          value={analytics?.overview?.completedTasks || 0}
          color="border-green-500"
        />
      </div>
      
      {/* Recent Activity/Tasks Placeholder */}
      <div className="glass-card p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Deadlines</h2>
        {!analytics?.upcomingDeadlines || analytics.upcomingDeadlines.length === 0 ? (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            <p>No upcoming tasks. Add a new task to get started!</p>
            <button className="btn-primary mt-4">Add Task</button>
          </div>
        ) : (
          <div className="space-y-3">
            {analytics.upcomingDeadlines.map((task, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-dark-bg/50 border border-transparent hover:border-gray-200 dark:hover:border-dark-border transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${task.priority === 'High' ? 'bg-red-500' : task.priority === 'Medium' ? 'bg-orange-500' : 'bg-green-500'}`}></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{task.title}</h4>
                    <p className="text-xs text-gray-500">{task.subject?.title || 'No Subject'}</p>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {new Date(task.dueDate).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, color }) => (
  <div className={`glass-card p-6 rounded-xl border-l-4 ${color} flex items-center justify-between`}>
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">{label}</p>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
    <div className="p-3 bg-gray-50 dark:bg-dark-bg/50 rounded-full">
      {icon}
    </div>
  </div>
);

export default Dashboard;
