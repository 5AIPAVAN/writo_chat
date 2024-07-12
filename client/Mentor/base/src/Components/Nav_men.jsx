import React, { useState } from 'react';
import img from '../assets/logo.png';
import { IoIosSearch } from 'react-icons/io'; // Import IoIosSearch icon
import profilePic from '../assets/profile.png'; // Replace with your profile picture import

const Nav_men = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="p-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center sm:mr-2">
            <img src={img} className="w-10" alt="Logo" />

            {/* Search bar */}
            <div className="relative ml-0 lg:ml-4 sm:ml-2">
              <input
                type="text"
                placeholder="Search or Start a conversation"
                className="border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none w-64 lg:w-96 lg:w-600"
              />
              <button className="absolute right-0 top-0 mt-2 mr-4">
                <IoIosSearch className="h-6 w-6 text-gray-600" /> {/* IoIosSearch icon */}
              </button>
            </div>
          </div>

          {/* Hamburger menu for small screens */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <div className={`lg:flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl`}>
            <a href="/" className="text-black px-4 py-2 hover:text-orange-600 item1 font-meduim">Community</a>
            <a href="/blogs" className="text-black px-4 py-2 hover:text-orange-600 item1 font-meduim">Blogs</a>
            <a href="/" className="text-black px-4 py-2 hover:text-orange-600 item1 font-meduim">Mentors</a>
            <a href="/" className="text-black px-4 py-2 hover:text-orange-600 item1 font-meduim">Programs</a>
            
            {/* Profile picture and down arrow */}
            <div className="flex items-center">
              <img src={profilePic} className="w-8 h-8 rounded-full ml-4" alt="Profile" />
              <svg
                className="h-4 w-4 ml-1 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav_men;
