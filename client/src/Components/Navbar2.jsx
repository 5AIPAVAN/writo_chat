import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Services from "./Services";
import "./NavBar2.css";
import { RxCross2 } from "react-icons/rx";
import Events from "./Events";
import { MdMenu } from "react-icons/md"; // Assuming you have imported MdMenu or another appropriate icon for your menu toggle

const NavBar2 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showEvents, setShowEvents] = useState(false); // State for Events component visibility
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleComponent1Click = () => {
    setShowServices((prevState) => !prevState);
    setShowEvents(false); // Hide Events component when Services component is clicked
    setDropdownOpen(false); // Close the dropdown when Component 1 is clicked
    console.log("Clicked Component 1");
  };

  const handleComponent2Click = () => {
    setShowEvents((prevState) => !prevState);
    setShowServices(false); // Hide Services component when Events component is clicked
    setDropdownOpen(false); // Close the dropdown when Component 2 is clicked
    console.log("Clicked Component 2");
  };

  return (
    <nav className=" w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-12">
        <a href="#" className="text-[#1AB780] font-semibold md:hidden">
          Writo
        </a>
        <div className="hidden md:flex items-center space-x-10">
          <a href="#" className="text-[#1AB780] font-semibold text-2xl item1">
            Writo
          </a>
          <div className="relative">
            <button
              className="text-black item2 hover:text-gray-400 flex items-center"
              onClick={handleComponent1Click}
            >
              <span className="mr-1 font-medium text-2xl item2">Services</span>
            </button>
          </div>
          <div className="relative">
            <button
              className="text-black item2 hover:text-gray-400 flex items-center"
              onClick={handleComponent2Click}
            >
              <span className="mr-1 ont-medium text-2xl item2">Events</span>
              
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-10">
          <button className="hidden md:block px-16 py-1 border border-gray-400 font-semibold rounded-lg hover:border-black">
            Search class
          </button>
          <button className="hidden md:block px-4 py-2 bg-[#488B80] text-white rounded">
            View plans
          </button>
          <button
            className="md:hidden block text-gray-900"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <RxCross2 className="w-6 h-6" />
            ) : (
              <MdMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      <div className={`${menuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <div className="relative">
            <button
              className="text-black item2 hover:text-gray-400 flex items-center"
              onClick={handleComponent1Click}
            >
              <span className="mr-1">Component 1</span>
            </button>
          </div>
          <div className="relative">
            <button
              className="text-black item2 hover:text-gray-400 flex items-center"
              onClick={handleComponent2Click}
            >
              <span className="mr-1">Component 2</span>
              <IoIosArrowDropdownCircle className="text-lg" />
            </button>
          </div>
          <button className="px-16 py-1 border border-gray-400 font-semibold rounded-lg hover:border-black">
            Search class
          </button>
          <button className="px-4 py-2 bg-[#488B80] text-white rounded">
            View plans
          </button>
        </div>
      </div>
        {/* Conditional rendering of Services component */}
        {showServices && <Services className="services-component" />}
      
        {/* Conditional rendering of Events component */}
        {showEvents && <Events className="events-component" />}
    </nav>
  );
};

export default NavBar2;