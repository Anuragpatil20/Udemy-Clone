import React from "react";

const CourseCard = ({ course }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden w-72">
    <img src={course.image} alt="Course" className="w-full h-40 object-cover" />
    <div className="p-4">
      <h2 className="font-semibold text-md">{course.title}</h2>
      <p className="text-sm text-gray-600">{course.instructors}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 mr-1">{'★'.repeat(Math.floor(course.rating))}</span>
        <span className="text-gray-600 text-sm">({course.reviews})</span>
      </div>
      <div className="mt-2 text-lg font-bold text-purple-700">
        ₹{course.price}{' '}
        <span className="line-through text-gray-500 text-sm">₹{course.originalPrice}</span>
      </div>
      <div className="flex gap-2 mt-2">
        <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">Premium</span>
        {course.badge && (
          <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded">{course.badge}</span>
        )}
      </div>
    </div>
  </div>
);

export default CourseCard;
