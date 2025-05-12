import React from "react";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../Component/WishlistContext"; // path may change based on structure

const CourseCard = ({ id, thumbnail, title, instructor, price, rating }) => {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(id);

  const handleWishlistClick = () => {
    const course = { id, thumbnail, title, instructor, price, rating };
    toggleWishlist(course);
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition relative">
      <button
        onClick={handleWishlistClick}
        className="absolute top-3 right-3 text-xl"
      >
        <FaHeart className={wishlisted ? "text-red-500" : "text-gray-300"} />
      </button>

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

export default CourseCard;
