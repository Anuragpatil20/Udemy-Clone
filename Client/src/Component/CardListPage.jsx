import React, { useState, useEffect } from "react";
import Card from "../Component/Card";
import Footer from "./Footer";

const dummyCourses = [{
    id: 1,
    title: "React for Beginners",
    instructor: "John Doe",
    price: 29.99,
    rating: 4.5,
    category: "Development",
    level: "Beginner",
    createdAt: "2024-05-10",
    thumbnail: "https://elearningharbor.com/wp-content/uploads/2023/01/THUMBNAIL-React-for-beginners.png"
  },
  {
    id: 2,
    title: "UI/UX Design",
    instructor: "Jane Smith",
    price: 39.99,
    rating: 4.7,
    category: "Design",
    level: "Intermediate",
    createdAt: "2023-12-01",
    thumbnail: "https://wallpaperaccess.com/full/6000163.jpg"
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    instructor: "Mike Johnson",
    price: 19.99,
    rating: 4.3,
    category: "Marketing",
    level: "Beginner",
    createdAt: "2024-03-15",
    thumbnail: "https://tse3.mm.bing.net/th?id=OIP.oKgO70fZWpTuMRZUUqC9_wHaEK"
  },
  {
    id: 4,
    title: "Advanced JavaScript",
    instructor: "Anna Lee",
    price: 49.99,
    rating: 4.8,
    category: "Development",
    level: "Advanced",
    createdAt: "2022-08-01",
    thumbnail: "https://swall.teahub.io/photos/small/88-881361_javascript.jpg"
  },
  {
    id: 5,
    title: "Clo3D for Beginners",
    instructor: "Anna Lee",
    price: 69.99,
    rating: 4.8,
    category: "Design",
    level: "Beginner",
    createdAt: "2024-02-12",
    thumbnail: "https://tse1.mm.bing.net/th?id=OIP.u8XB-YTqtest1SAdnS4lxAHaEK"
  },
  {
    id: 6,
    title: "Python Essentials",
    instructor: "David Green",
    price: 25.00,
    rating: 4.6,
    category: "Development",
    level: "Intermediate",
    createdAt: "2024-04-01",
    thumbnail: "https://tse2.mm.bing.net/th?id=OIP.gqtCxfSDl4DaIaY1rCY3XQHaE8&pid=Api&P=0&h=180"
  },
  {
    id: 7,
    title: "SEO Fundamentals",
    instructor: "Sara White",
    price: 15.00,
    rating: 4.2,
    category: "Marketing",
    level: "Beginner",
    createdAt: "2023-11-10",
    thumbnail: "https://tse4.mm.bing.net/th?id=OIP.2Dkuq5cHJsww61I_6vFeqgHaD4&pid=Api&P=0&h=180"
  },
  {
    id: 8,
    title: "Java",
    instructor: "Sara White",
    price: 15.00,
    rating: 4.2,
    category: "Development",
    level: "Beginner",
    createdAt: "2023-11-10",
    thumbnail: "https://tse1.mm.bing.net/th?id=OIP.ZqJV-52lj5g0Ry9x0Ee9lgHaEK&pid=Api&P=0&h=180"
  },
  {
    id: 9,
    title: "Dot net",
    instructor: "Sara White",
    price: 15.00,
    rating: 4.2,
    category: "Development",
    level: "Beginner",
    createdAt: "2023-11-10",
    thumbnail: "https://tse4.mm.bing.net/th?id=OIP.Xph9q_Hs3ZbJa0bwJ68RnQHaEc&pid=Api&P=0&h=180"
  }
];
const categories = ["All", "Development", "Design", "Marketing"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];
const difficultyValue = {
  beginner: 1,
  intermediate: 2,
  advanced: 3
};

const CardListPage = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [sortOption, setSortOption] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const handleClearFilters = () => {
    setSearchText("");
    setCategory("All");
    setLevel("All");
    setSortOption("newest");
  };

  const filteredCourses = dummyCourses.filter((course) => {
    const matchSearch =
      course.title.toLowerCase().includes(searchText.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchText.toLowerCase()) ||
      course.category.toLowerCase().includes(searchText.toLowerCase());

    const matchCategory = category === "All" || course.category === category;
    const matchLevel = level === "All" || course.level === level;

    return matchSearch && matchCategory && matchLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortOption) {
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      case "newest":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "oldest":
        return new Date(a.createdAt) - new Date(b.createdAt);
      case "difficulty-asc":
        return difficultyValue[a.level.toLowerCase()] - difficultyValue[b.level.toLowerCase()];
      case "difficulty-desc":
        return difficultyValue[b.level.toLowerCase()] - difficultyValue[a.level.toLowerCase()];
      default:
        return 0;
    }
  });

  // Reset to first page when filters/search/sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, category, level, sortOption]);

  // Pagination Logic
  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const paginatedCourses = sortedCourses.slice(startIndex, startIndex + coursesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Courses</h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search courses..."
          className="w-full max-w-xl px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500"
        />
      </div>

      {/* Filters + Sort */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                category === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          >
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
          <button
            onClick={handleClearFilters}
            className="px-4 py-2 rounded-full border bg-gray-200 hover:bg-gray-300"
          >
            Clear Filters
          </button>
        </div>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="title-asc">Title (A–Z)</option>
          <option value="title-desc">Title (Z–A)</option>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="difficulty-asc">Difficulty (Beginner → Advanced)</option>
          <option value="difficulty-desc">Difficulty (Advanced → Beginner)</option>
        </select>
      </div>

      {/* Course Grid */}
      {sortedCourses.length === 0 ? (
        <p className="text-center text-gray-500">No matching courses found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-opacity duration-500 ease-in-out">
          {paginatedCourses.map((course) => (
            <Card key={course.id} {...course} />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded border ${
              currentPage === 1 ? "text-gray-400 border-gray-300" : "hover:bg-gray-200"
            }`}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded-full border ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white border-blue-500"
                  : "hover:bg-gray-100 border-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded border ${
              currentPage === totalPages ? "text-gray-400 border-gray-300" : "hover:bg-gray-200"
            }`}
          >
            Next
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CardListPage;
