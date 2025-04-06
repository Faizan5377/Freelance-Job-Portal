import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Mail, MapPin, ExternalLink, Edit, Star, Clock, DollarSign,
  Briefcase, Award, ChevronRight, Upload, Save, MessageSquare
} from 'lucide-react';
import './styles.css';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data
  const userData = {
    name: 'Muhammad Faizan',
    title: 'Full Stack Web Developer',
    location: 'Lahore, Pakistan',
    hourlyRate: '$25',
    availability: 'Full-time',
    memberSince: 'January 2024',
    completedJobs: 24,
    rating: 4.9,
    totalEarnings: '$8,750',
    bio: "Experienced full-stack developer with expertise in React, Node.js, and MongoDB. I specialize in building responsive web applications with clean, efficient code and intuitive user interfaces.",
    skills: ['React JS', 'Node.js', 'MongoDB', 'Express', 'HTML/CSS', 'JavaScript', 'UI/UX Design', 'API Development'],
    education: [
      { institution: 'FAST National University', degree: 'BS Computer Science', year: '2021 - 2025' }
    ],
    workHistory: [
      { project: 'E-commerce Platform Development', client: 'TechRetail Inc.', completed: 'March 2024', rating: 5.0 },
      { project: 'Portfolio Website Redesign', client: 'Creative Studio', completed: 'January 2024', rating: 4.8 },
      { project: 'CRM System Integration', client: 'Business Solutions Ltd', completed: 'November 2023', rating: 5.0 }
    ]
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = () => {
    // Handle save logic here
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Freelance Portal</Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/dashboard" className="hover:text-peach-200">Dashboard</Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-peach-200">Jobs</Link>
              </li>
              <li>
                <Link to="/messages" className="hover:text-peach-200">Messages</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Profile Info */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col items-center">
                  <div className="h-24 w-24 rounded-full bg-teal-600 flex items-center justify-center text-white text-3xl mb-4">
                    MF
                  </div>
                  {!isEditing && (
                    <button 
                      onClick={handleEditToggle}
                      className="flex items-center text-teal-600 text-sm hover:underline"
                    >
                      <Edit size={14} className="mr-1" />
                      Edit Profile
                    </button>
                  )}
                  {isEditing && (
                    <button 
                      onClick={() => setIsEditing(false)}
                      className="text-gray-500 text-sm hover:underline"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              
                {isEditing && (
                  <button 
                    onClick={handleSaveProfile}
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-teal-700 transition"
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {isEditing ? (
                  <>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue={userData.name}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Professional Title</label>
                      <input 
                        type="text" 
                        defaultValue={userData.title}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Location</label>
                      <input 
                        type="text" 
                        defaultValue={userData.location}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Hourly Rate ($)</label>
                      <input 
                        type="text" 
                        defaultValue={userData.hourlyRate.replace('$', '')}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Profile Picture</label>
                      <input 
                        type="file" 
                        accept="image/*"
                        className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Bio</label>
                      <textarea 
                        defaultValue={userData.bio}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Skills</label>
                      <input 
                        type="text" 
                        defaultValue={userData.skills.join(', ')}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Education</label>
                      {userData.education.map((edu, index) => (
                        <div key={index} className="mb-2">
                          <input 
                            type="text" 
                            defaultValue={`${edu.institution}, ${edu.degree}, ${edu.year}`}
                            className="w-full px-3 py-2 border rounded-lg"
                          />
                        </div>
                      ))}
                        <button 
                            className="text-teal-600 hover:underline"
                            onClick={() => alert('Add Education')}
                        >
                            Add More
                        </button>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Work History</label>
                      {userData.workHistory.map((work, index) => (
                        <div key={index} className="mb-2">
                          <input 
                            type="text" 
                            defaultValue={`${work.project}, ${work.client}, ${work.completed}`}
                            className="w-full px-3 py-2 border rounded-lg"
                          />
                        </div>
                      ))}
                        <button 
                            className="text-teal-600 hover:underline"
                            onClick={() => alert('Add Work History')}
                        >
                            Add More
                        </button>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Availability</label>
                      <input 
                        type="text" 
                        defaultValue={userData.availability}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Member Since</label>
                      <input 
                        type="text" 
                        defaultValue={userData.memberSince}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Completed Jobs</label>
                      <input 
                        type="text" 
                        defaultValue={userData.completedJobs}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Rating</label>
                      <input 
                        type="text" 
                        defaultValue={userData.rating}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Total Earnings</label>
                      <input 
                        type="text" 
                        defaultValue={userData.totalEarnings.replace('$', '')}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    </>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold">{userData.name}</h2>
                    <p className="text-gray-600">{userData.title}</p>
                    <p className="text-gray-500 flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {userData.location}
                    </p>
                    <p className="text-gray-500 flex items-center">
                      <DollarSign size={16} className="mr-1" />
                      {userData.hourlyRate}
                    </p>
                    <p className="text-gray-500 flex items-center">
                      <Clock size={16} className="mr-1" />
                      {userData.availability}
                    </p>
                  </>
                )}
                </div>
            </div>
          </div>
            {/* Right Column - Profile Stats */}
            <div className="md:w-2/3">
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Profile Stats</h2>
                    <div className="grid grid-cols-2 gap-4">
                    {userData.completedJobs && (
                        <div className="flex items-center bg-teal-50 p-4 rounded-lg shadow">
                        <Star size={24} className="text-teal-600 mr-3" />
                        <div>
                            <p className="text-sm text-gray-500">Completed Jobs</p>
                            <p className="text-lg font-semibold">{userData.completedJobs}</p>
                        </div>
                        </div>
                    )}
                    {userData.rating && (
                        <div className="flex items-center bg-peach-50 p-4 rounded-lg shadow">
                        <Star size={24} className="text-peach-500 mr-3" />
                        <div>
                            <p className="text-sm text-gray-500">Rating</p>
                            <p className="text-lg font-semibold">{userData.rating}</p>
                        </div>
                        </div>
                    )}
                    {userData.totalEarnings && (
                        <div className="flex items-center bg-yellow-50 p-4 rounded-lg shadow">
                        <DollarSign size={24} className="text-yellow-500 mr-3" />
                        <div>
                            <p className="text-sm text-gray-500">Total Earnings</p>
                            <p className="text-lg font-semibold">{userData.totalEarnings}</p>
                        </div>
                        </div>
                    )}
                    {userData.memberSince && (
                        <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow">
                        <Clock size={24} className="text-gray-500 mr-3" />
                        <div>
                            <p className="text-sm text-gray-500">Member Since</p>
                            <p className="text-lg font-semibold">{userData.memberSince}</p>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
    
                {/* Work History */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Work History</h2>
                    {userData.workHistory.map((work, index) => (
                    <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                        <h3 className="text-lg font-semibold">{work.project}</h3>
                        <p className="text-gray-500">{work.client}</p>
                        <p className="text-gray-400">Completed: {work.completed}</p>
                        <p className="text-yellow-500">Rating: {work.rating}</p>
                    </div>
                    ))}
                    <div className="text-center">
                    <button className="text-teal-600 hover:underline">
                        View All Work History
                    </button>
                    </div>
                </div>
                {/* Education */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Education</h2>
                    {userData.education.map((edu, index) => (
                    <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                        <h3 className="text-lg font-semibold">{edu.institution}</h3>
                        <p className="text-gray-500">{edu.degree}</p>
                        <p className="text-gray-400">{edu.year}</p>
                    </div>
                    ))}
                    <div className="text-center">
                    <button className="text-teal-600 hover:underline">
                        View All Education
                    </button>
                    </div>
                </div>
                {/* Notifications */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Notifications</h2>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <MessageSquare size={24} className="text-teal-600 mr-3" />
                            <p className="text-gray-600">You have a new message from a client.</p>
                        </div>
                        <div className="flex items-center">
                            <ExternalLink size={24} className="text-peach-500 mr-3" />
                            <p className="text-gray-600">Your proposal has been accepted!</p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button className="text-teal-600 hover:underline">
                            View All Notifications
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </main>
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Freelance Portal. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
}
export default ProfilePage;