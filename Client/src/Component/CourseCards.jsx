import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="w-64 bg-white rounded-lg overflow-hidden shadow-sm border">
      <img src={course.image} alt={course.title} className="w-full h-36 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-sm line-clamp-2">{course.title}</h3>
        <p className="text-sm text-gray-600">{course.instructor}</p>
        <div className="flex items-center gap-1 mt-1 text-yellow-500 text-sm">
          <span>{course.rating}</span>
          <span className="text-gray-500">({course.reviews.toLocaleString()})</span>
        </div>
        <div className="mt-2 text-sm font-semibold">
          ₹{course.discountPrice}{' '}
          <span className="line-through text-gray-400 text-xs">₹{course.originalPrice}</span>
        </div>
        <div className="flex gap-2 mt-2 text-xs">
          {course.tags.includes('Premium') && (
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Premium</span>
          )}
          {course.tags.includes('Bestseller') && (
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Bestseller</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
