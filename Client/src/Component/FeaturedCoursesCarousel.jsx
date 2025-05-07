import React from 'react';

const courses = [
  { title: 'React for Beginners', instructor: 'John Doe', price: '$19.99' },
  { title: 'Advanced Node.js', instructor: 'Jane Smith', price: '$24.99' },
  { title: 'UI/UX Design Basics', instructor: 'Alex Lee', price: '$14.99' },
  // Add more courses
];

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-lg shadow-md p-4 w-64">
    <h3 className="font-semibold">{course.title}</h3>
    <p className="text-sm text-gray-500">{course.instructor}</p>
    <p className="mt-2 font-bold">{course.price}</p>
  </div>
);

const FeaturedCoursesCarousel = () => {
  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-4">Top Courses in Development</h2>
      <div className="flex gap-4 overflow-x-auto">
        {courses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCoursesCarousel;
