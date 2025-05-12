import React from "react";
import { useWishlist } from "../Component/WishlistContext";
import CourseCard from "../Component/CourseCard";

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No courses in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {wishlist.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
