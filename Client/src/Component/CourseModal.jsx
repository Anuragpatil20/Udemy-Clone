// CourseModal.js
import React from "react";

const CourseModal = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-2xl relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          ✖
        </button>
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold">{course.title}</h2>
        <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
        <p className="text-gray-800 mb-4">
          {course.description || "Detailed course description goes here."}
        </p>
        <p><strong>Category:</strong> {course.category || "General"}</p>
        <p><strong>Level:</strong> {course.level || "Beginner"}</p>
        <p><strong>Created At:</strong> {new Date(course.createdAt).toLocaleDateString()}</p>
        <p><strong>Rating:</strong> {course.rating} ⭐</p>
      </div>
    </div>
  );
};

export default CourseModal;
