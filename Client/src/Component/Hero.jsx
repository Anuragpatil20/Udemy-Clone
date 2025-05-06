import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const sliderImages = [
  "https://www.corporatevision-news.com/wp-content/uploads/2020/07/online-learning-1.jpg",
  "https://wallpapers.com/images/hd/education-pictures-gwhjen78gja9sel9.jpg",
  "https://img-c.udemycdn.com/notices/web_carousel_slide/image/2d38191f-c8f8-4934-86bb-10f8e836d2fc.jpg",
];

const Hero = () => (
  <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden">
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{ delay: 4000 }}
      loop={true}
      className="absolute inset-0 z-0"
    >
      {sliderImages.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`slide-${index}`} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="absolute inset-0  bg-opacity-50 z-10"></div>
    <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-4 text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Learn anything, anytime, anywhere</h2>
      <p className="text-base md:text-lg text-gray-200 mb-6">
        Thousands of courses from top instructors
      </p>
      <input
        type="text"
        placeholder="Search for courses..."
        className="px-4 py-2 rounded w-4/5 md:w-1/3 text-black mb-4"
      />
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded">
        Explore Courses
      </button>
    </div>
  </div>
);

export default Hero;
