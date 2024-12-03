import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { CourseFiltersComponent } from './components/CourseFilters';
import { CourseCard } from './components/CourseCard';
import { courses } from './data/courses';
import { CourseFilters } from './types';

function App() {
  const [filters, setFilters] = useState<CourseFilters>({
    query: '',
    category: '',
    level: '',
    priceRange: ''
  });

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesQuery = course.title.toLowerCase().includes(filters.query.toLowerCase()) ||
                          course.description.toLowerCase().includes(filters.query.toLowerCase());
      const matchesCategory = !filters.category || course.category === filters.category;
      const matchesLevel = !filters.level || course.level === filters.level;
      
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(price => 
          price === '+' ? Infinity : Number(price)
        );
        if (!(course.price >= min && course.price <= max)) {
          return false;
        }
      }
      
      return matchesQuery && matchesCategory && matchesLevel;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Courses</h2>
          <CourseFiltersComponent filters={filters} onFilterChange={setFilters} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;