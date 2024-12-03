import React from 'react';
import { Search, BookOpen, DollarSign } from 'lucide-react';
import { CourseFilters } from '../types';

interface CourseFiltersProps {
  filters: CourseFilters;
  onFilterChange: (filters: CourseFilters) => void;
}

export const CourseFiltersComponent: React.FC<CourseFiltersProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.query}
            onChange={(e) => onFilterChange({ ...filters, query: e.target.value })}
          />
        </div>

        <div className="relative">
          <BookOpen className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <select
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.category}
            onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
          >
            <option value="">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
          </select>
        </div>

        <div className="relative">
          <select
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.level}
            onChange={(e) => onFilterChange({ ...filters, level: e.target.value })}
          >
            <option value="">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="relative">
          <DollarSign className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <select
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.priceRange}
            onChange={(e) => onFilterChange({ ...filters, priceRange: e.target.value })}
          >
            <option value="">All Prices</option>
            <option value="0-50">Under $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100+">Over $100</option>
          </select>
        </div>
      </div>
    </div>
  );
};