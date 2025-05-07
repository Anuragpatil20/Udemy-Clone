import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-[500px] bg-fixed" style={{ backgroundImage: "url('https://www.corporatevision-news.com/wp-content/uploads/2020/07/online-learning-1.jpg'), url('https://wallpapers.com/images/hd/education-pictures-gwhjen78gja9sel9.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-center h-full text-center text-white p-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Learn Anything, Anytime</h1>
          <form className="flex justify-center items-center space-x-4">
            <input
              type="text"
              placeholder="Search for courses"
              className="px-4 py-2 border-2 border-white rounded-l-full w-80 md:w-96 text-white"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-r-full bg-yellow-500 text-white font-semibold"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Keyframe Animation for Scrolling Background */}
      <style>{`
        @keyframes scrollBackground {
          0% {
            background-position: 0 0, 50% 0, 100% 0;
          }
          100% {
            background-position: 100% 0, 150% 0, 200% 0;
          }
        }

        .bg-cover {
          animation: scrollBackground 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
