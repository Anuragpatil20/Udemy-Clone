// src/components/CourseCard.jsx
import React from "react";

const Card = ({ thumbnail, title, instructor, price, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <img
        src={thumbnail}
        alt={title}
        className="rounded-md h-40 w-full object-cover"
      />
      <h3 className="text-lg font-semibold mt-3">{title}</h3>
      <p className="text-sm text-gray-500">{instructor}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-primary font-bold">${price}</span>
        <span className="text-yellow-500">⭐ {rating}</span>
      </div>
    </div>
  );
};

export default Card;
