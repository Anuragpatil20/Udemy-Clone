import React from "react";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../Component/WishlistContext"; // Adjust path as needed

const Card = ({ id, thumbnail, title, instructor, price, rating }) => {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(id);

  const handleWishlistClick = () => {
    const course = { id, thumbnail, title, instructor, price, rating };
    toggleWishlist(course); // Toggle course in wishlist
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition relative">
      {/* Wishlist Icon */}
      <button
        onClick={handleWishlistClick}
        className="absolute top-3 right-3 text-xl"
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
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

export default Card;
