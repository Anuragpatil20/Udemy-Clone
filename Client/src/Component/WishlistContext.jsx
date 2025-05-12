import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";  // Import toast
import "react-toastify/dist/ReactToastify.css";  // Import styles

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Fetch wishlist from server when the component is mounted
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const userId = "someUserId"; // Replace with actual user ID or fetch logic
        const res = await axios.get(`http://localhost:5000/api/wishlist/${userId}`);
        setWishlist(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching wishlist:", err);
        toast.error("Failed to load wishlist!");  // Error toast
      }
    };

    fetchWishlist();
  }, []);

  const toggleWishlist = async (course) => {
    const exists = wishlist && wishlist.some((item) => item.id === course.id);
    if (exists) {
      try {
        const userId = "someUserId"; // Replace with actual user ID
        await axios.delete(`http://localhost:5000/api/wishlist/remove/${userId}/${course.id}`);
        setWishlist(wishlist.filter((item) => item.id !== course.id));
        toast.success("Course removed from wishlist!");  // Success toast
      } catch (err) {
        console.error("Error removing course from wishlist:", err);
        toast.error("Failed to remove course from wishlist!");  // Error toast
      }
    } else {
      try {
        const userId = "someUserId"; // Replace with actual user ID
        await axios.post("http://localhost:5000/api/wishlist/add", { userId, course });
        setWishlist([...wishlist, course]);
        toast.success("Course added to wishlist!");  // Success toast
      } catch (err) {
        console.error("Error adding course to wishlist:", err);
        toast.error("Failed to add course to wishlist!");  // Error toast
      }
    }
  };

  const isWishlisted = (id) => {
    return wishlist && wishlist.some((item) => item.id === id);
  };

  const removeFromWishlist = async (id) => {
    try {
      const userId = "someUserId"; // Replace with actual user ID
      await axios.delete(`http://localhost:5000/api/wishlist/remove/${userId}/${id}`);
      setWishlist(wishlist.filter((item) => item.id !== id));
      toast.success("Course removed from wishlist!");  // Success toast
    } catch (err) {
      console.error("Error removing course:", err);
      toast.error("Failed to remove course from wishlist!");  // Error toast
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isWishlisted, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
