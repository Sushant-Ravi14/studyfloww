import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CheckCircle, Calendar, TrendingUp } from 'lucide-react';

const Home = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
      {/* Hero Section */}
      <div className="relative w-full max-w-6xl mx-auto py-12 md:py-24 animate-fade-in">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-semibold mb-6 border border-primary-200 dark:border-primary-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            New: Smart Task Prioritization
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
            Focus on what matters,<br />
            Master with <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">StudyFlow</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            The ultimate companion for your academic journey. StudyFlow helps you organize subjects, 
            track assignments, and visualize your progress with a minimalist, high-performance interface.
          </p>
      
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link to="/signup" className="btn-primary text-lg px-10 py-4 shadow-xl shadow-primary-500/25 flex items-center gap-2 group">
              Start Your Journey
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link to="/login" className="px-10 py-4 text-lg font-semibold bg-white dark:bg-dark-surface dark:text-white border border-gray-200 dark:border-dark-border rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm">
              Sign In
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto py-10 relative">
          <FeatureCard 
            icon={<Calendar className="w-8 h-8 text-primary-500" />}
            title="Subject Central"
            description="Visual subject management with custom color coding and organized resource tracking."
          />
          <FeatureCard 
            icon={<CheckCircle className="w-8 h-8 text-blue-500" />}
            title="Smart Checklists"
            description="Dynamic task management with priority levels and real-time completion status."
          />
          <FeatureCard 
            icon={<TrendingUp className="w-8 h-8 text-purple-500" />}
            title="Insights Engine"
            description="Beautiful analytics that show your growth patterns and help you optimize study time."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="glass-card p-8 rounded-[2rem] flex flex-col items-center text-center group hover:bg-white dark:hover:bg-dark-surface transition-all duration-500 border-transparent hover:border-primary-500/20">
    <div className="mb-6 p-4 rounded-2xl bg-gray-50 dark:bg-dark-bg/50 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{description}</p>
  </div>
);

export default Home;
