import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Bell, MessageSquare, User, Briefcase, PieChart, 
  Settings, LogOut, DollarSign, Calendar, Star, Clock
} from 'lucide-react';
import './styles.css';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Dummy data for demonstration
  const recentJobs = [
    { id: 1, title: 'WordPress Website Development', budget: '$750', proposals: 12, category: 'Web Development', posted: '2 days ago' },
    { id: 2, title: 'Logo Design for Tech Startup', budget: '$250', proposals: 24, category: 'Graphic Design', posted: '3 days ago' },
    { id: 3, title: 'Content Writing for Blog', budget: '$150', proposals: 8, category: 'Writing', posted: '5 days ago' },
  ];
  
  const notifications = [
    { id: 1, message: 'Your proposal for "Mobile App Development" was accepted', time: '1 hour ago' },
    { id: 2, message: 'New message from Client XYZ', time: '3 hours ago' },
    { id: 3, message: 'Payment received for Project ABC', time: '1 day ago' },
  ];

  // Stats data for dashboard
  const stats = [
    { label: 'Active Projects', value: '4', icon: <Briefcase size={20} className="text-teal-600" /> },
    { label: 'Earnings', value: '$2,450', icon: <DollarSign size={20} className="text-peach-500" /> },
    { label: 'Completed', value: '28', icon: <Star size={20} className="text-yellow-500" /> },
    { label: 'Pending', value: '3', icon: <Clock size={20} className="text-gray-500" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-teal-700 text-white min-h-screen p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Freelance Portal</h1>
        </div>
        
        <nav>
          <ul>
            <li className="mb-2">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`flex items-center w-full p-3 rounded-lg transition ${activeTab === 'overview' ? 'bg-teal-600' : 'hover:bg-teal-600'}`}
              >
                <PieChart size={18} className="mr-3" />
                Dashboard
              </button>
            </li>
            <li className="mb-2">
              <button 
                onClick={() => setActiveTab('jobs')}
                className={`flex items-center w-full p-3 rounded-lg transition ${activeTab === 'jobs' ? 'bg-teal-600' : 'hover:bg-teal-600'}`}
              >
                <Briefcase size={18} className="mr-3" />
                Find Jobs
              </button>
            </li>
            <li className="mb-2">
              <button 
                onClick={() => setActiveTab('messages')}
                className={`flex items-center w-full p-3 rounded-lg transition ${activeTab === 'messages' ? 'bg-teal-600' : 'hover:bg-teal-600'}`}
              >
                <MessageSquare size={18} className="mr-3" />
                Messages
              </button>
            </li>
            <li className="mb-2">
              <Link 
                to="/profile"
                className="flex items-center w-full p-3 rounded-lg transition hover:bg-teal-600"
              >
                <User size={18} className="mr-3" />
                Profile
              </Link>
            </li>
            <li className="mb-2">
              <button 
                onClick={() => setActiveTab('settings')}
                className={`flex items-center w-full p-3 rounded-lg transition ${activeTab === 'settings' ? 'bg-teal-600' : 'hover:bg-teal-600'}`}
              >
                <Settings size={18} className="mr-3" />
                Settings
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="mt-auto pt-8">
          <button className="flex items-center w-full p-3 rounded-lg text-white hover:bg-teal-600 transition">
            <LogOut size={18} className="mr-3" />
            Log Out
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search jobs..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 w-64"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-peach-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  3
                </span>
              </button>
              <Link to="/profile" className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-teal-600 flex items-center justify-center text-white mr-2">
                  MF
                </div>
                <span className="font-medium">Muhammad Faizan</span>
              </Link>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-6">Welcome, Muhammad!</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500">{stat.label}</h3>
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Jobs */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Recent Job Postings</h2>
              </div>
              <div className="p-4">
                {recentJobs.map(job => (
                  <div key={job.id} className="border-b border-gray-100 pb-4 mb-4 last:mb-0 last:pb-0 last:border-0">
                    <h3 className="font-medium text-teal-600 mb-1">{job.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="mr-4">{job.category}</span>
                      <span className="mr-4">Budget: {job.budget}</span>
                      <span>{job.proposals} proposals</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Posted {job.posted}</span>
                      <button className="bg-peach-500 hover:bg-peach-600 text-white px-4 py-1 rounded text-sm transition">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
                <div className="text-center mt-4">
                  <button className="text-teal-600 hover:underline">View All Jobs</button>
                </div>
              </div>
            </div>
            
            {/* Notifications */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Recent Notifications</h2>
              </div>
              <div className="p-4">
                {notifications.map(notification => (
                  <div key={notification.id} className="mb-4 pb-4 border-b border-gray-100 last:mb-0 last:pb-0 last:border-0">
                    <p className="text-sm mb-1">{notification.message}</p>
                    <span className="text-xs text-gray-400">{notification.time}</span>
                  </div>
                ))}
                <div className="text-center mt-4">
                  <button className="text-teal-600 hover:underline">View All Notifications</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;