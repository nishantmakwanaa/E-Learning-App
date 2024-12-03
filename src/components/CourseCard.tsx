import React from 'react';
import { Course } from '../types';
import { Clock, Users, Star, BookOpen } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
            <p className="text-sm text-gray-600 mt-1">by {course.instructor}</p>
          </div>
          <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
            {course.level}
          </span>
        </div>

        <p className="mt-4 text-gray-600 line-clamp-2">{course.description}</p>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span>{course.studentsEnrolled} students</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <BookOpen className="w-4 h-4 mr-2" />
            <span>{course.lessons.length} lessons</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${course.price}</span>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};