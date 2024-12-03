import React from 'react';
import { GraduationCap, Book, User, Settings } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">EduLearn</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
              <Book className="w-5 h-5 mr-1" />
              Courses
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
              <User className="w-5 h-5 mr-1" />
              My Learning
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
              <Settings className="w-5 h-5 mr-1" />
              Settings
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">Sign In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};