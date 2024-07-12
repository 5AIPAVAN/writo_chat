// src/Hero.js

import React from 'react';
import Typewriter from 'typewriter-effect';
import {Link } from "react-router-dom"
const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center "
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="absolute inset-0 bg-white opacity-60 md:mt-12 "></div>
      <div className="relative z-10 text-center text-black p-4  mt-6">
        <h1 className="md:text-5xl text-3xl font-bold mb-4 mt-32">Welcome to Writo Mentorship</h1>
        <h2 className="md:text-3xl text-2xl mb-24 mt-8">
          <Typewriter
            options={{
              strings: [
                "Guiding you from ambition to achievement, one mentorship at a time.",
                "Empowering tomorrow's leaders through mentorship today.",
                "Chart your course to success with personalized mentorship.",
                "Fuel your growth with the power of mentorship.",
                "Inspiring greatness through mentorship, one connection at a time.",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h2>
        <div className="space-x-4 mb-8 md:flex md:flex-row md:justify-center flex flex-col items-center gap-12">
          <Link to="./book_mentor">
          <a
            href="#book-trial"
            className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition duration-300"
          >
            Book your free trial
          </a>
          </Link>
          <a
            href="#find-mentor"
            className="bg-white text-green-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-green-100 transition duration-300"
          >
            Find your Mentor
          </a>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8 mt-8">
          <div className="flex items-center mb-2 md:mb-0">
            <svg
              className="w-6 h-6 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-lg font-medium">No payment required</span>
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <svg
              className="w-6 h-6 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-lg font-medium">Verified mentors only</span>
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <svg
              className="w-6 h-6 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-lg font-medium">Reschedule anytime</span>
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <svg
              className="w-6 h-6 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-lg font-medium">Customizable message</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
