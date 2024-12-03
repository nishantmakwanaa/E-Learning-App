import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Boot Camp',
    instructor: 'Sarah Johnson',
    description: 'Learn Web Development From Scratch. Master HTML, CSS, JavaScript, React, And Node.js.',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80',
    duration: '40 Hours',
    level: 'Beginner',
    category: 'Web Development',
    price: 99.99,
    rating: 4.8,
    studentsEnrolled: 1500,
    lessons: [
      { id: 'l1', title: 'Introduction to HTML', duration: '45 Min.' },
      { id: 'l2', title: 'CSS Fundamentals', duration: '1 Hour' },
      { id: 'l3', title: 'JavaScript Basics', duration: '1.5 Hours' }
    ]
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    instructor: 'Michael Chen',
    description: 'Master Advanced React Concepts Including Hooks, Context, And Performance Optimization.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    duration: '20 Hours',
    level: 'Advanced',
    category: 'React',
    price: 129.99,
    rating: 4.9,
    studentsEnrolled: 800,
    lessons: [
      { id: 'l1', title: 'Custom Hooks', duration: '1 Hour' },
      { id: 'l2', title: 'Context API Deep Dive', duration: '1.5 Hours' },
      { id: 'l3', title: 'Performance Optimization', duration: '2 Hours' }
    ]
  }
];