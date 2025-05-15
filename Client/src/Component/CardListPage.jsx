import React, { useState } from "react";
import CourseCard from "../Component/Card";
import Footer from "./Footer";

// Dummy courses
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
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const handleClearFilters = () => {
    setSearchText("");
    setCategory("All");
    setLevel("All");
    setSortOption("default");
  };

  const filteredCourses = dummyCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchText.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchText.toLowerCase()) ||
      course.category.toLowerCase().includes(searchText.toLowerCase());

    const categoryMatch = category === "All" || course.category === category;
    const levelMatch = level === "All" || course.level === level;

    return matchesSearch && categoryMatch && levelMatch;
  });

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
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Courses</h2>

      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search courses by title, instructor or category..."
          className="w-full max-w-xl px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filter & Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                category === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>

          <button
            onClick={handleClearFilters}
            className="px-4 py-2 rounded-full border bg-gray-200 hover:bg-gray-300 transition"
          >
            Clear Filters
          </button>

          <a
            href="/wishlist"
            className="px-4 py-2 rounded-full border bg-white hover:bg-gray-100 transition"
          >
            Wishlist
          </a>
        </div>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="default">Sort By</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="ratingHigh">Rating: High to Low</option>
        </select>
      </div>

      {/* Result Count */}
      <p className="mb-4 text-gray-600 text-center">
        Showing {sortedCourses.length} course{sortedCourses.length !== 1 && "s"}
      </p>

      {/* Courses Grid or No Results */}
      {sortedCourses.length === 0 ? (
        <p className="text-center text-gray-500">No courses found for your search criteria.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CardListPage;
