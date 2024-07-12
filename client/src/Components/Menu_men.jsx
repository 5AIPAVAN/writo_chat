import React, { useState, useEffect, useRef } from 'react';
import { FaUserCircle, FaAngleDown } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { SiCodementor } from "react-icons/si";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import Refer from './Refer_men';

const Menu_men = () => {
  const [showRefer, setShowRefer] = useState(false);
  const referRef = useRef(null); // Ref for the Refer component

  const handleReferClick = () => {
    setShowRefer(true);
  };

  const handleCloseRefer = () => {
    setShowRefer(false);
  };

  // Effect to handle click outside of Refer component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (referRef.current && !referRef.current.contains(event.target)) {
        setShowRefer(false);
      }
    };

    // Add event listener when Refer component is shown
    if (showRefer) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showRefer]);

  return (
    <div className="flex flex-col items-center relative z-10">
      <div className="bg-gray-200 p-4 rounded flex items-center justify-between w-full">
        <div className="flex items-center">
          <FaUserCircle className="text-blue-500 text-2xl mr-4" />
          <span className="font-bold">Personal Information</span>
        </div>
        <FaAngleDown />
      </div>
      <div className="bg-white p-4 rounded flex items-center justify-between w-full">
        <div className="flex items-center">
          <MdSubscriptions className="text-blue-500 text-2xl mr-4" />
          <span className="font-bold">My Subscription</span>
        </div>
        <FaAngleDown />
      </div>
      <div className="bg-gray-300 p-4 rounded flex items-center justify-between w-full">
        <div className="flex items-center">
          <SiCodementor className="text-blue-500 text-2xl mr-4" />
          <span className="font-bold">My Mentor's</span>
        </div>
        <FaAngleDown />
      </div>
      <div className="bg-white p-4 rounded flex items-center justify-between w-full" onClick={handleReferClick}>
        <div className="flex items-center">
          <AiOutlineDollarCircle className="text-[#FFC700] text-2xl mr-4" />
          <span className="font-bold">Refer and Earn</span>
        </div>
        <FaAngleDown />
      </div>
      <div className="bg-gray-300 p-4 rounded flex items-center justify-between w-full">
        <div className="flex items-center">
          <IoSettings className="text-blue-500 text-2xl mr-4" />
          <span className="font-bold">Settings</span>
        </div>
        <FaAngleDown className='text-[#080505]'/>
      </div>

      {showRefer && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-gray-900 bg-opacity-50">
          <div ref={referRef}>
            <Refer onClose={handleCloseRefer} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu_men;
