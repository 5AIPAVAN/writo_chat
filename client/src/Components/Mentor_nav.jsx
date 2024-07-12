import React,{useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import img from '../assets/image.png'
import { Link } from 'react-router-dom';
const Mentor_nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setIsOpen(!isOpen)
    };
   
  return (
    <header className="">
      <nav className=" w-full bg-green-500 bg-opacity-80 backdrop-blur-md shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white">
                <img src={img}></img>
              </div>
            </div>
            <div className="hidden md:flex md:items-center">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* <a
                  href="/mentor/home"
                  className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a> */}
                {/* <a
                  href="#about"
                  className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a> */}
                <Link to="/mentorservices">
                  <h1 className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                    Services
                  </h1>
                </Link>
                <Link to="/chatwithmentors">
                  <h1 className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                    Chat With Mentors
                  </h1>
                </Link>
                {/* <a
                  href="#contact"
                  className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a> */}
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <Link to="/mentorservices">
              
              <h1 className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium">
                Services
              </h1>
            </Link>
            <a
              href="#contact"
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Mentor_nav
