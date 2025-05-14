import React, { useState } from "react";
import CourseCard from "../Component/Card";
import Footer from "./Footer";

// 1. Add `level` to each course
const dummyCourses = [
  {
    id: 1,
    thumbnail: "https://elearningharbor.com/wp-content/uploads/2023/01/THUMBNAIL-React-for-beginners.png",
    title: "React for Beginners",
    instructor: "John Doe",
    price: 29.99,
    rating: 4.5,
    category: "Development",
    level: "Beginner",
  },
  {
    id: 2,
    thumbnail: "https://wallpaperaccess.com/full/6000163.jpg",
    title: "UI/UX Design",
    instructor: "Jane Smith",
    price: 39.99,
    rating: 4.7,
    category: "Design",
    level: "Intermediate",
  },
  {
    id: 3,
    thumbnail: "https://tse3.mm.bing.net/th?id=OIP.oKgO70fZWpTuMRZUUqC9_wHaEK&pid=Api&P=0&h=180",
    title: "Digital Marketing Mastery",
    instructor: "Mike Johnson",
    price: 19.99,
    rating: 4.3,
    category: "Marketing",
    level: "Beginner",
  },
  {
    id: 4,
    thumbnail: "https://swall.teahub.io/photos/small/88-881361_javascript.jpg",
    title: "Advanced JavaScript",
    instructor: "Anna Lee",
    price: 49.99,
    rating: 4.8,
    category: "Development",
    level: "Advanced",
  },
  {
    id: 5,
    thumbnail: "https://tse1.mm.bing.net/th?id=OIP.u8XB-YTqtest1SAdnS4lxAHaEK&pid=Api&P=0&h=180",
    title: "Clo3D for beginners",
    instructor: "Anna Lee",
    price: 69.99,
    rating: 4.8,
    category: "Design",
    level: "Beginner",
  },
  {
    id: 6,
    thumbnail: "https://tse3.mm.bing.net/th?id=OIP.W1tkfPskQHzK4gozWLoiBgHaDV&pid=Api&P=0&h=180",
    title: "Digital Marketing MasterClass",
    instructor: "Anna Lee",
    price: 99.99,
    rating: 4.8,
    category: "Marketing",
    level: "Advanced",
  },
  {
    id: 7,
    thumbnail: "https://tse1.mm.bing.net/th?id=OIP.7TqOYZgLlX2SpKThDRIYeAHaEK&pid=Api&P=0&h=180",
    title: "The Complete Digital Marketing",
    instructor: "Anna Lee",
    price: 79.99,
    rating: 4.8,
    category: "Marketing",
    level: "Intermediate",
  },
  {
    id: 8,
    thumbnail: "https://wallpaperaccess.com/full/9445601.jpg",
    title: "MERN STACK",
    instructor: "Anna Lee",
    price: 59.99,
    rating: 4.8,
    category: "Development",
    level: "Intermediate",
  },
];

const categories = ["All", "Development", "Design", "Marketing"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const CardListPage = () => {
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const handleClearFilters = () => {
    setCategory("All");
    setLevel("All");
    setSortOption("default");
  };

  // 2. Filter by category AND level
  const filteredCourses = dummyCourses.filter((course) => {
    const categoryMatch = category === "All" || course.category === category;
    const levelMatch = level === "All" || course.level === level;
    return categoryMatch && levelMatch;
  });

  // 3. Sort
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortOption) {
      case "priceLow":
        return a.price - b.price;
      case "priceHigh":
        return b.price - a.price;
      case "ratingHigh":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Courses</h2>

      {/* Filter & Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {/* Category Buttons */}
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                category === cat ? "bg-blue-600 text-white" : "bg-white text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}

          {/* Difficulty Dropdown */}
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="border px-3 py-2 rounded-lg"
          >
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>

          {/* Clear Filters Button */}
          <button
            onClick={handleClearFilters}
            className="px-4 py-2 rounded-full border bg-gray-200 hover:bg-gray-300"
          >
            Clear Filters
          </button>

          <a href="/wishlist" className="px-4 py-2 rounded-full border hover:bg-gray-500">
            Wishlist
          </a>
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="default">Sort By</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="ratingHigh">Rating: High to Low</option>
        </select>
      </div>

      {/* Count */}
      <p className="mb-4 text-gray-600">Showing {sortedCourses.length} courses</p>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default CardListPage;
