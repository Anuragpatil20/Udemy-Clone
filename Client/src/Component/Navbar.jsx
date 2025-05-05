import React, { useState } from 'react';
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy"
            className="h-6 md:h-7"
          />
          <div className="hidden md:block">
            <button className="text-gray-700 hover:text-black text-[12px] font-medium">
              Categories
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-1 hidden md:block">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full text-[12px] px-4 py-2 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-1.5 text-sm">
          <button className="hover:bg-purple-200 h-8 w-28 border-hidden text-[12px] rounded-2xl">Plane & Pricing</button>
          <button className="hover:bg-purple-200 h-8 w-28 border-hidden text-[12px] rounded-2xl">Udemy Business</button>
          <button className="hover:bg-purple-200 h-8 w-28 border-hidden text-[12px] rounded-2xl">Teach on Udemy</button>

          <button className="px-3 py-2 hover:bg-purple-200 rounded-full">
            <MdOutlineShoppingCart className="text-xl cursor-pointer" />
          </button>
          <button className="px-3 py-1 border border-purple-700 text-purple-700 rounded-full hover:bg-purple-100">
            Log in
          </button>
          <button className="px-3 py-1 bg-purple-700 text-white rounded-full hover:bg-purple-800">
            Sign up
          </button>
          <button className="px-3 py-2 bg-white border rounded-2xl hover:bg-purple-300 rounded-full">
            <GrLanguage />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 border-t border-gray-200 space-y-3 bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          <div className="space-y-2">
            <button className="block w-full text-left px-4 py-2  rounded-md hover:bg-purple-50">Categories</button>
            <button className="block w-full text-left px-4 py-2  rounded-md hover:bg-purple-50">Plane & Pricing</button>
            <button className="block w-full text-left px-4 py-2  rounded-md hover:bg-purple-50">Udemy Business</button>
            <button className="block w-full text-left px-4 py-2  rounded-md hover:bg-purple-50">Teach on Udemy</button>
          </div>

          <div className="flex items-center justify-start space-x-4 pt-2 border-t border-gray-200">
            <button className="p-2 hover:bg-purple-100 rounded-full">
              <MdOutlineShoppingCart className="text-xl" />
            </button>
            <button className="p-2 hover:bg-purple-100 rounded-full">
              <FaUserCircle className="text-2xl" />
            </button>
            <button className="p-2 hover:bg-purple-100 rounded-full">
              <GrLanguage />
            </button>
          </div>

          <div className="flex space-x-3 pt-3">
            <button className="flex-1 px-4 py-2 border border-purple-700 text-purple-700 rounded-full hover:bg-purple-100">
              Log in
            </button>
            <button className="flex-1 px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
