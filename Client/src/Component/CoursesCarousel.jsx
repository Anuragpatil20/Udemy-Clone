import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    instructor: 'Dr. Angela Yu',
    rating: 4.7,
    reviews: 435610,
    discountPrice: 539,
    originalPrice: 3219,
    tags: ['Premium', 'Bestseller'],
    image: 'https://tse1.mm.bing.net/th?id=OIP.mKY-0yC_auFTnfEJa4UW-wHaD6&pid=Api&P=0&h=180'
  },
  {
    title: 'The Web Developer Bootcamp 2025',
    instructor: 'Colt Steele',
    rating: 4.7,
    reviews: 280429,
    discountPrice: 549,
    originalPrice: 3499,
    tags: ['Premium'],
    image: 'https://i.ytimg.com/vi/j8HTAuESjMs/maxresdefault.jpg'
  },
  {
    title: 'Web Development Masterclass - Online Certification Course',
    instructor: 'YouAccel Training',
    rating: 4.6,
    reviews: 10148,
    discountPrice: 549,
    originalPrice: 3299,
    tags: ['Premium'],
    image: 'http://certificates-edu.s3.amazonaws.com/czoxMjoiMzA2NDQxXzEwNDQ1Ijs='
  },
  {
    title: 'The Complete Web Developer Course 3.0',
    instructor: 'Rob Percival, Codestars',
    rating: 4.3,
    reviews: 72474,
    discountPrice: 799,
    originalPrice: 4999,
    tags: ['Premium'],
    image: 'https://tse3.mm.bing.net/th?id=OIP.1BWOsb_5fybawLONI-K9zAHaFj&pid=Api&P=0&h=180'
  }
];

const CoursesCarousel = () => {
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-4">Top Courses in Web Development</h2>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {courses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesCarousel;
