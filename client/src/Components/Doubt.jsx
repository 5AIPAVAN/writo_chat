import React from 'react';
import sampleImage from '../assets/doubt.png';
import { Link } from 'react-router-dom';

const Doubt = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-white">
      <h2 className="text-xl text-orange-600 font-bold mb-2 item5">
       - - - -   Having doubts -- - - -
      </h2>
      <h1 className="text-2xl font-semibold text-green-700 mb-6 item1">
        Clear your doubts
      </h1>
      <div className="flex flex-col lg:flex-row items-center w-full lg:w-4/5">
        <div className="lg:w-2/3 w-full mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-center mb-4">
            Are you struggling with doubts while preparing for JEE/NEET ?
          </h2>
          <p className="mb-4 text-lg text-gray-800 item2">
            Look no further! Writo Education offers a unique live doubt session program
            designed to address all your queries in real-time. Our platform connects you
            with experienced faculties from renowned institutions like IITs and NITs,
            ensuring personalized guidance and support tailored to your needs.
          </p>
          <Link to ='/doubtcourses'>
          <button className="px-6 py-3 bg-[#488B80] item2 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none">
            Try Doubt clearing session
          </button>
          </Link>
        </div>
        <div className="lg:w-1/4 w-full flex justify-center lg:ml-10">
          <img
            src={sampleImage}
            alt="Doubt clearing"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Doubt;
