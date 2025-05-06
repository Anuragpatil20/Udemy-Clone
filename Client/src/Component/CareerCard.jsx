import React from "react";
import { FaStar } from "react-icons/fa";

const CareerCard = ({ image, title, stats, rating, ratingsCount, hours }) => (
  <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
    <div className="p-4 flex justify-center" style={{ backgroundColor: "#facc15" }}>
      <img src={image} alt={title} className="rounded-lg h-48 object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-700 text-sm">{stats}</p>
      <div className="flex flex-wrap items-center gap-2 mt-3 text-sm text-gray-700">
        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
          <FaStar size={14} className="text-yellow-500" />
          {rating}
        </div>
        <div className="bg-gray-100 px-2 py-1 rounded">{ratingsCount}</div>
        <div className="bg-gray-100 px-2 py-1 rounded">{hours}</div>
      </div>
    </div>
  </div>
);

export default CareerCard;
