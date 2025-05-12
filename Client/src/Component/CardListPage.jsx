// src/pages/CourseListPage.jsx
import React, { useState } from "react";
import CourseCard from "../Component/Card";
import Footer from "./Footer";

const dummyCourses = [
  {
    id: 1,
    thumbnail: "https://tse2.mm.bing.net/th?id=OIP.7aPsstRzUoRCNT6eWRPhzQHaEK&pid=Api&P=0&h=180",
    title: "React for Beginners",
    instructor: "John Doe",
    price: 29.99,
    rating: 4.5,
    category: "Development",
  },
  {
    id: 2,
    thumbnail: "https://tse4.mm.bing.net/th?id=OIP.aS3DRoXloWAp2Oil_GH6pgHaEK&pid=Api&P=0&h=180",
    title: "UI/UX Design",
    instructor: "Jane Smith",
    price: 39.99,
    rating: 4.7,
    category: "Design",
  },
  {
    id: 3,
    thumbnail: "https://wallpapercave.com/wp/wp3950314.png",
    title: "Digital Marketing Mastery",
    instructor: "Mike Johnson",
    price: 19.99,
    rating: 4.3,
    category: "Marketing",
  },
  {
    id: 4,
    thumbnail: "https://swall.teahub.io/photos/small/88-881361_javascript.jpg",
    title: "Advanced JavaScript",
    instructor: "Anna Lee",
    price: 49.99,
    rating: 4.8,
    category: "Development",
  },
   {
    id: 5,
    thumbnail: "https://i.ytimg.com/vi/SeOxbR91Am0/maxresdefault.jpg",
    title: "Clo3D for beginners",
    instructor: "Anna Lee",
    price: 69.99,
    rating: 4.8,
    category: "Design",
  },
   {
    id: 6,
    thumbnail: "https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=1024x1024&w=is&k=20&c=N65ufLsxvt6b5XaKSitmu09gDUhEitFqfM4cWG7CTMk=",
    title: "Digital Marketing MasterClass:AI & Social Media Marketing",
    instructor: "Anna Lee",
    price: 99.99,
    rating: 4.8,
    category: "Marketing",
  },
   {
    id: 7,
    thumbnail: "https://learningbangladesh.com/wp-content/uploads/2024/05/DALL%C2%B7E-2024-05-15-16.02.29-A-dynamic-and-colorful-illustration-representing-a-masterclass-on-using-MidJourney-and-ChatGPT-for-social-media-content-generation.-The-image-features.webp",
    title: "The Complete Disgital Marketing",
    instructor: "Anna Lee",
    price: 79.99,
    rating: 4.8,
    category: "Marketing",
  },
  {
    id: 8,
    thumbnail: "https://wallpaperaccess.com/full/9445601.jpg",
    title: "MERN STACK",
    instructor: "Anna Lee",
    price: 59.99,
    rating: 4.8,
    category: "Development",
  },
];

const categories = ["All", "Development", "Design", "Marketing"];

const CardListPage = () => {
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const filteredCourses =
    category === "All"
      ? dummyCourses
      : dummyCourses.filter((course) => course.category === category);

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
        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap">
         
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
             <a href="/wishlist" className="px-4 py-2 rounded-full border hover:bg-gray-500">
             Wishlist</a>

        </div>

        {/* Sorting */}
       
        <select
          onChange={(e) => setSortOption(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="default">Sort By</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="ratingHigh">Rating: High to Low</option>
        </select>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default CardListPage;
