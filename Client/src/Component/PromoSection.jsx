import React from "react";
import edu from "../Images/learning-concept-illustration.png";


const PromoSection = () => (
  <section className="relative w-full bg-white overflow-hidden mt-5">
    <div className="absolute top-0 right-0 w-3/4 h-full bg-yellow-300 transform -skew-x-12 origin-top-left z-0"></div>
    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-12 max-w-7xl mx-auto">
      <div className="bg-white shadow-lg p-6 md:p-10 rounded-lg max-w-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          The skills for now — now on sale
        </h2>
        <p className="text-gray-700 text-lg">
          Courses that meet today’s challenges (and tomorrow’s). They start at just ₹519. Sale ends tomorrow.
        </p>
      </div>
      <div className="mt-10 lg:mt-0 lg:ml-10">
        <img
          src={edu}
          alt="Promo"
          className="w-full max-w-sm object-contain"
        />
      </div>
    </div>
  </section>
);

export default PromoSection;
