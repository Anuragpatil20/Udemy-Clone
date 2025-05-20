import React from "react";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../Component/WishlistContext"; // Adjust path if needed

const Card = ({
  id,
  title,
  instructor,
  price,
  rating,
  category,
  level,
  thumbnail,
  createdAt,
  handleViewDetails,
}) => {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(id);

  const handleWishlistClick = (e) => {
    e.stopPropagation(); // Prevent card click if needed
    const course = { id, thumbnail, title, instructor, price, rating, createdAt };
    toggleWishlist(course);
  };

  return (
    <div className="relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-white">
      {/* Wishlist icon */}
      <button
        onClick={handleWishlistClick}
        className="absolute top-3 right-3 text-xl focus:outline-none"
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <FaHeart className={wishlisted ? "text-red-500" : "text-gray-300"} />
      </button>

      <img
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">Instructor: {instructor}</p>
        <p className="text-sm text-gray-600">
          Category: {category} | Level: {level}
        </p>
        <p className="text-sm text-yellow-500">Rating: {rating} ⭐</p>
        <p className="text-lg font-bold mt-2">${price.toFixed(2)}</p>
        <button
          onClick={handleViewDetails}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
