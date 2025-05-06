import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          See what others are achieving through learning
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer Survey.
        </p>
        <p className="text-sm text-gray-500 mb-12">37,076 responses collected</p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic mb-4">
              “Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.”
            </p>
            <div>
              <p className="font-semibold text-gray-900">Alvin Lim</p>
              <p className="text-sm text-gray-500">Technical Co-Founder, CTO at Dimensional</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic mb-4">
              “Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.”
            </p>
            <div>
              <p className="font-semibold text-gray-900">William A. Wachlin</p>
              <p className="text-sm text-gray-500">Partner Account Manager at Amazon Web Services</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic mb-4">
              “With Udemy Business, employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.”
            </p>
            <div>
              <p className="font-semibold text-gray-900">Ian Stevens</p>
              <p className="text-sm text-gray-500">Head of Capability Development, North America at Publicis Sapient</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
