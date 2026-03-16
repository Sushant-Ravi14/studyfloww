# 📚 StudyFlow — Smart Study Planner

## 🚀 Project Overview

**StudyFlow** is a full-stack web application designed to help students and self-learners organize their study schedules, manage subjects, and track their learning progress efficiently.

Many students struggle with planning their study time, prioritizing tasks, and maintaining consistency. Traditional tools like simple to-do lists or generic calendar apps do not provide structured study planning features tailored specifically for learners.

StudyFlow solves this problem by providing a **centralized platform where students can plan, manage, and track their study tasks in an organized and productive way.**

The application allows users to:

- Create and manage subjects
- Add study tasks and deadlines
- Track completed and pending tasks
- Search and filter tasks quickly
- Analyze study productivity
- Use the application across devices with a responsive UI

The system is built using a modern full-stack architecture.

---

# 🎯 Problem Statement

Students often face difficulty in organizing their academic workload due to:

- Lack of structured study planning tools
- Difficulty tracking progress across multiple subjects
- Managing multiple assignments and deadlines
- Poor prioritization of tasks
- Overwhelming study schedules

Most existing tools are **either too generic or overly complex**, making them inefficient for daily student use.

There is a need for a **simple, focused, and intelligent study planner** that helps students manage tasks, prioritize learning activities, and visualize their productivity.

**StudyFlow addresses this challenge by providing a user-friendly platform that combines task management, subject tracking, and productivity insights in one place.**

---

# 💡 Proposed Solution

StudyFlow provides a **personalized study management system** where users can organize their learning activities efficiently.

The platform enables students to:

- Create subjects for different courses
- Add study tasks and assignments
- Assign priorities and deadlines
- Track completed work
- Search and filter tasks easily
- View study productivity analytics

The application uses a **dashboard-based interface** that allows users to quickly view their tasks, subjects, and study progress.

---

# 👥 Target Users

StudyFlow is designed for:

- 🎓 College students
- 🏫 School students
- 📖 Self-learners
- 📝 Competitive exam aspirants
- 💻 Online course learners

Anyone who wants to **plan their study sessions and track learning progress** can use this application.

---

# 🛠 Tech Stack

## Frontend
- ReactJS
- Tailwind CSS
- React Router
- Context API (State Management)

## Backend
- Node.js
- Express.js

## Database
- MongoDB

---

# ✨ Core Features

## 1️⃣ User Authentication

The application includes a basic authentication system where users can:

- Sign up for a new account
- Log in securely
- Access protected routes
- Maintain login sessions using LocalStorage

Authentication ensures that each user manages their **own study data securely**.

---

# 🧭 Routing & Navigation

The application uses **React Router** for navigation.

### Main Pages

- Home
- Login
- Signup
- Dashboard
- Subjects
- Profile / Settings

Protected routes ensure that only authenticated users can access private sections.

---

# ⚛ React Hooks Usage

The project demonstrates the usage of essential React Hooks.

### useState
Used for managing component states such as:

- Form inputs
- Task lists
- UI toggles

### useEffect
Used for:

- Fetching API data
- Updating UI after data changes
- Handling side effects

### useRef
Used for:

- Managing input focus
- DOM element references

### useContext
Used for global state management such as:

- Authentication state
- Theme preference

---

# 🌍 Global State Management

Global state is handled using **Context API**.

It manages:

- Logged-in user information
- Theme settings
- Shared application data

This helps maintain consistent state across the application.

---

# 🎨 Theme Support

StudyFlow supports both:

- 🌞 Light Mode
- 🌙 Dark Mode

Features include:

- Theme toggle button
- Theme persistence using LocalStorage
- Automatic UI update based on theme

---

# 🔍 Search, Filtering & Sorting

To make task management efficient, the application includes powerful data handling features.

### Search
Users can search tasks by title or subject.

### Filtering
Tasks can be filtered by:

- Subject
- Completion status
- Priority level

### Sorting
Tasks can be sorted by:

- Due date
- Priority
- Recently created tasks

---

# ⚡ Debounced Search

Debouncing is implemented in the search functionality to improve performance.

This ensures that API requests are only triggered **after the user stops typing**, reducing unnecessary server calls.

---

# 📄 Pagination

When displaying large numbers of tasks, pagination is implemented to improve performance and usability.

MongoDB pagination is handled using:limit and skip


This ensures faster loading and a smoother user experience.

---

# 🔄 CRUD Operations

The application supports full **Create, Read, Update, Delete** functionality.

Users can:

### Create
- Add subjects
- Add study tasks

### Read
- View all subjects
- View all tasks

### Update
- Edit tasks
- Update priorities
- Mark tasks as completed

### Delete
- Remove tasks
- Remove subjects

All operations interact with the backend APIs and MongoDB database.

---

# 🔗 REST API Integration

The frontend communicates with backend services through REST APIs built using Express.js.

The APIs handle:

- User authentication
- Task management
- Subject management
- Search and filtering
- Pagination

Proper loading states and error responses are implemented.

---

# 📝 Form Handling & Validation

Forms are used for:

- Signup
- Login
- Creating tasks
- Updating tasks

Validation includes:

- Required fields
- Email format validation
- Password length validation
- Error messages for invalid input

All forms use **controlled React components**.

---

# 📱 Responsive UI

The application is fully responsive using Tailwind CSS.

It adapts to different devices:

- 💻 Desktop
- 📱 Mobile
- 📟 Tablet

This allows students to manage their study plans anywhere.

---

# 📊 Study Analytics (Productivity Tracking)

StudyFlow provides simple productivity insights:

- Number of completed tasks
- Number of pending tasks
- Most studied subject
- Weekly productivity percentage

These insights help students understand their study patterns.

---

# ⚠️ Error Handling

The application includes robust error handling mechanisms.

Examples include:

- API request failures
- Invalid form inputs
- Server errors

Meaningful messages are displayed to guide users.

---

# 🗂 Database Structure

### Users Collection
- name
- email
- password
- themePreference


### Subjects Collection


title
color
userId


### Tasks Collection


title
subjectId
priority
dueDate
completed
userId


---

# 🎯 Expected Outcomes

With StudyFlow, students will be able to:

- Organize study schedules efficiently
- Manage tasks across multiple subjects
- Improve productivity through structured planning
- Track learning progress visually

The platform aims to make **study planning simple, effective, and motivating.**

---

# 🏁 Conclusion

StudyFlow demonstrates the power of modern full-stack development by combining a scalable backend, responsive frontend, and flexible database to solve a real-world problem faced by students.

By integrating features like authentication, task management, debounced search, pagination, and responsive UI, the application provides a complete productivity solution for learners.

---