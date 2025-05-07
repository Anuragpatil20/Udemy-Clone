import React from "react";
import WatchVideo from "./WatchVideo";

const courses = [
  {
    title: "Complete React, Next.js & TypeScript Projects Course 2025",
    instructor: "John Smilga",
    rating: 4.7,
    ratingCount: "11,896",
    discountedPrice: 759,
    originalPrice: 4559,
    tags: ["Premium", "Bestseller"],
    image: "https://i.ytimg.com/vi/iS1K64X_eXg/maxresdefault.jpg", // replace with your actual image URL
  },
  {
    title: "Microservices with NodeJS, React, Typescript and Kubernetes",
    instructor: "Uzochukwu Eddie Odozi",
    rating: 4.5,
    ratingCount: "338",
    discountedPrice: 569,
    originalPrice: 799,
    tags: [],
    image: "https://tse1.mm.bing.net/th?id=OIP.A2H34tI0K-Q0oshZ-vZIXAHaEc&pid=Api&P=0&h=180",
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    ratingCount: "435,610",
    discountedPrice: 539,
    originalPrice: 3219,
    tags: ["Premium", "Bestseller"],
    image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
  },
];

const LearnersSection = () => {
  return (
    <section className="py-10 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Learners Are Watching Now
        </h2>
        <div className="flex flex-wrap gap-6">
          {courses.map((course, index) => (
            <WatchVideo key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnersSection;
