export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  thumbnail: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  price: number;
  rating: number;
  studentsEnrolled: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted?: boolean;
}

export interface CourseFilters {
  query: string;
  category: string;
  level: string;
  priceRange: string;
}