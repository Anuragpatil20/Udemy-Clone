import React from "react";
import HeroSlider from "../Component/Hero";
import PromoSection from "../Component/PromoSection";
import CareerCard from "../Component/CareerCard";
import CourseCard from "../Component/CourseCard";
import GoalsSection from "../Component/GoalsSection";
import PricingPlans from "../Component/PricingPlans";
import Testimonials from "./Testimonials";

const careerData = [
  {
    title: "Full Stack Web Developer",
    image:
      "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?t=st=1746510749~exp=1746514349~hmac=280a63c72682c3c08d0b5efa642882b79f4150df71c008018aa07e845baf29cc&w=1380",
    stats: "$127,005 average salary (US) • 16,500 open roles (US)",
    rating: 4.7,
    ratingsCount: "440K ratings",
    hours: "87.5 total hours",
  },
  {
    title: "Digital Marketer",
    image:
      "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063150.jpg?t=st=1746510816~exp=1746514416~hmac=0025abb6f6751bacf13b7ccbf0cc63cc2b0a9873d4ec6b0826ff66c419db90b4&w=1380",
    stats: "$61,126 average salary (US) • 36,600 open roles (US)",
    rating: 4.6,
    ratingsCount: "3.3K ratings",
    hours: "28.4 total hours",
  },
  {
    title: "Data Scientist",
    image:
      "https://img.freepik.com/premium-vector/statistics-data-analysis-concept-business-team-working-monitor-chart-dashboard_675567-3231.jpg?w=1380",
    stats: "$126,629 average salary (US) • 20,800 open roles (US)",
    rating: 4.6,
    ratingsCount: "215K ratings",
    hours: "46.8 total hours",
  },
];

const courses = [
  // Add your actual course data here
];

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <PromoSection />

      {/* Career Cards Section */}
      <section className="px-4 md:px-12 py-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Ready to reimagine your career?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get the skills and real-world experience employers want with Career Accelerators.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {careerData.map((card, i) => (
              <CareerCard key={i} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <GoalsSection />

      {/* Course Section */}
      <section className="bg-gray-50 py-10">
        <div className="flex flex-wrap gap-6 justify-center px-4">
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} />
          ))}
        </div>
      </section>

      {/* Pricing Plans Section */}
      <PricingPlans />
      <Testimonials/>

    </div>
  );
};

export default Home;
