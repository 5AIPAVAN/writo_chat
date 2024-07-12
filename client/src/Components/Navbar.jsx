import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import img from '../assets/image.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo and Title */}
        <Link to='/home' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={img} alt="Logo" className="w-10 h-10" />
          <span className="ml-3 text-2xl font-bold">WritoTech</span>
        </Link>

        {/* Menu Icon - Displayed on Mobile */}
        <button className="md:hidden flex items-center bg-[#1AB780] border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded text-base ml-auto" onClick={toggleMenu}>
          <IoMenu className="text-white text-3xl" />
        </button>

        {/* Navigation Links */}
        <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden md:block'} ${isOpen ? '' : 'md:ml-32'}`}>
          <Link to='/home' className="block py-2 px-4 text-2xl text-black hover:text-green-600">Writo</Link>
          <Link to='/mentorship' className="block py-2 px-4 text-2xl text-black hover:text-green-600">Mentorship</Link>
          <Link to='/community' className="block py-2 px-4 text-2xl text-black hover:text-green-600">Community</Link>
          <Link to='/careers' className="block py-2 px-4 text-2xl text-black hover:text-green-600">Careers</Link>
          <Link to='/blogs' className="block py-2 px-4 text-2xl text-black hover:text-green-600">Blogs</Link>
        </nav>

        {/* Buttons - Displayed on Larger Screens */}
        <div className="ml-auto hidden md:flex items-center">
          <button className="bg-[#1AB780] border-0 py-3 px-6 mr-3 focus:outline-none hover:bg-gray-200 rounded text-base">Sign up</button>
          <button className="border border-[#1AB780] py-3 px-6 mr-3 focus:outline-none hover:bg-gray-200 rounded text-base">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
