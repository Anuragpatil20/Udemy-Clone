import React from "react";

const WatchVideo = ({ course }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 w-[280px]">
      <img src={course.image} alt={course.title} className="h-36 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 leading-snug">{course.title}</h3>
        <p className="text-xs text-gray-500 mt-1">{course.instructor}</p>
        <div className="flex items-center text-sm mt-2">
          <span className="text-yellow-500 font-semibold">{course.rating}</span>
          <span className="text-gray-500 ml-1">⭐ ({course.ratingCount})</span>
        </div>
        <div className="mt-2 text-base font-semibold">
          ₹{course.discountedPrice}{" "}
          <span className="line-through text-gray-500 text-sm">₹{course.originalPrice}</span>
        </div>
        <div className="flex gap-2 mt-3 flex-wrap">
          {course.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs font-semibold px-2 py-1 rounded ${
                tag === "Premium" ? "bg-purple-100 text-purple-700" : "bg-teal-100 text-teal-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
