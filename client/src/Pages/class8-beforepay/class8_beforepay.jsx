
/* eslint-disable react/no-unescaped-entities */
//import { FaPlay } from "react-icons/fa6";
import { LuIndianRupee } from "react-icons/lu";
import { FaStar, FaBoxOpen, FaStarHalfAlt } from "react-icons/fa";
import { IoMdPlayCircle } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";
import { IoTrendingUpSharp } from "react-icons/io5";
//import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
//import Chempic from "../../assets/class6-chemistry.png"
import Chempic from "../../assets/chemistry1.png";
import Mathpic from '../../assets/maths1.png';
import Biopic from '../../assets/biology1.png';
import Phypic from "../../assets/physics1.png";
//import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";

function class8_beforepay() {
    const subjects = [
        { name: "Physics", imgSrc: Phypic },
        { name: "Maths", imgSrc: Mathpic },
        { name: "Chemistry", imgSrc: Chempic },
        { name: "Biology", imgSrc: Biopic },
      ];
      return (
        <>
        <Navbar/>
        <div className=" p-6 bg-white min-h-screen">
          <div className="w-full  p-4 bg-white rounded-lg shadow-lg mb-6 lg:mb-0  ">
            {/*Heading */}
           
    
            <div className="mt-6 w-full md:px-6 sm:p-2  gap-x-8 flex flex-col lg:flex-row items-center lg:items-start justify-between">
              {/* Left Column */}
              <div className="  md:w-2/3 sm:w-full">
                <h1 className="text-3xl font-bold mb-3 ">
                  Online Coaching for class8
                </h1>
                <h2 className="text-lg font-semibold mb-3 ">By Brice Wilson</h2>
                <div className="flex items-center mb-4 text-yellow-500 ">
                  {[...Array(4)].map((_, index) => (
                    <FaStar key={index} className="h-6 w-6" />
                  ))}
                  <FaStarHalfAlt className="h-6 w-6" />
                </div>
                <p className="mb-6">
                  Our comprehensive program is designed to empower your child to
                  excel in all their class 6 fundamental subjects, including
                  Mathematics, Physics, Chemistry, Biology through interactive
                  lessons, clear explanations, captivating content, and engaging
                  storytelling.
                </p>
    
                <p className="md:ml-8  md:w-11/12 sm:w-full flex justify-center border mt-16 mb-4 border-[#488b80c9]  items-center opacity-50"></p>
                <div className="flex flex-row gap-x-5 text-[#488B80] md:ml-8 my-8">
                  <FaBoxOpen className="h-6 w-6" />
                  <h3 className="text-xl font-mrdium ">What You'll Get</h3>
                </div>
    
                {/* sessions like assignment and practice test etc */}
                <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap mb-4 gap-4 md:gap-8">
                  <div className="flex flex-col justify-center items-center px-4 py-2 mb-4 md:ml-6 md:mr-4 md:mb-0">
                    <p className="text-lg font-semibold text-[#2b8b89ea]">20+</p>
                    <p className="text-sm text-gray-600">Assignments</p>
                  </div>
                  <div className="flex justify-center items-center h-18 md:h-22">
                    <div className="border-t md:border-l md:border-t-0 border-black w-full md:w-auto h-full opacity-50"></div>
                  </div>
    
                  <div className="flex flex-col justify-center items-center px-4 py-2 mb-4 md:mr-4 md:mb-0">
                    <p className="text-lg font-semibold text-[#2b8b89ea]">120+</p>
                    <p className="text-sm text-gray-600">Lectures</p>
                  </div>
                  <div className="flex justify-center items-center h-18 md:h-22">
                    <div className="border-t md:border-l md:border-t-0 border-black w-full md:w-auto h-full opacity-50"></div>
                  </div>
    
                  <div className="flex flex-col justify-center items-center px-4 py-2 mb-4 md:mr-4 md:mb-0">
                    <p className="text-lg font-semibold text-[#2b8b89ea]">10</p>
                    <p className="text-sm text-gray-600">MOCK TEST</p>
                  </div>
                  <div className="flex justify-center items-center h-18 md:h-22">
                    <div className="border-t md:border-l md:border-t-0 border-black w-full md:w-auto h-full opacity-50"></div>
                  </div>
    
                  <div className="flex flex-col justify-center items-center px-4 py-2 mb-4 md:mr-4 md:mb-0">
                    <p className="text-lg font-semibold text-[#2b8b89ea]">20+</p>
                    <p className="text-sm text-gray-600">Practice</p>
                  </div>
                </div>
    
                {/* subject covered section */}
                <div className="flex flex-row gap-x-5 text-[#488B80] md:ml-8 my-8">
                  <BsBookHalf className="h-6 w-6" />
                  <h3 className="text-xl font-mrdium ">Subjects Covered</h3>
                </div>
    
                {/*subjects showing section*/}
    
                <div className="container mx-auto p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {subjects.map((subject) => (
                      <div
                        key={subject.name}
                        className="flex flex-col items-center"
                      >
                        <img
                          src={subject.imgSrc}
                          alt={subject.name}
                          className=" object-fill w-56  h-52 hover:pb-2 hover:scale-125  rounded-xl mb-4"
                        />
                        <h2 className="text-xl  font-semibold">{subject.name}</h2>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right Column cart */}
              <div className="w-full lg:w-1/3 p-4 bg-white rounded-lg shadow-lg  border border-[#4eac9c]">
                <h3 className="text-xl font-bold mb-4">Try For Free</h3>
                <p className="mb-4">
                  Get this course plus top-rated picks in tech skills and other
                  popular topics.
                </p>
                <Link to={"/payment-page"}>
                  <button className="bg-[#488B80] text-white py-2 px-4 rounded w-full hover:bg-[#4eac9c] mb-4">
                    Get Started
                  </button>
                </Link>
                <p className="text-center mb-6">
                  ₹ 749 per month after 10 day trial
                </p>
                <p className=" md:w-11/12 sm:w-full flex justify-center border mb-4 border-[#488b80c9]  items-center md:ml-4 opacity-50"></p>
                <div className="mb-6 ">
                  <h4 className="font-medium  md:ml-7  text-lg mb-2">
                    Your 10 day Standard free trial includes
                  </h4>
                  <div className="flex flex-col mb-2 md:w-4/5 md:justify-center md:items-center">
                    <div className="flex flex-row gap-x-3">
                      <IoMdPlayCircle className="text-[#488B80] h-8 w-8" />
                      <p className="font-bold text-lg">Expert-led courses</p>
                    </div>
                    <div className=" md:ml-20">
                      <p className="text-gray-600 ">
                        Keep up with the pace of change with thousands of
                        expert-led, in-depth courses.
                      </p>
                    </div>
                  </div>
                </div>
                <p className=" md:w-3/4 sm:w-full flex justify-center border mb-4 border-[#488b80c9]  items-center md:ml-10 opacity-50"></p>
                <div className="ml-8">
                  <div className="flex flex-row gap-x-4">
                    <HiUserGroup className="h-6 w-6 text-[#488B80] " />
                    <h4 className="font-semibold mb-2">For teams</h4>
                  </div>
    
                  <p className="text-gray-600 mb-2">
                    <Link to={"/user-details"}>
                      <strong className=" hover:underline">
                        Give up to 50 users
                      </strong>
                    </Link>{" "}
                    access to our full library including this course{" "}
                    <strong>free for 30 days</strong>
                  </p>
                </div>
                <p className=" md:w-3/4 sm:w-full flex justify-center border mb-4 border-[#488b80c9] mt-8 items-center md:ml-10 opacity-50"></p>
    
                <div className="flex flex-col  items-center justify-center  gap-36">
                  <div>
                    <p className="text-black mt-4 mb-4">
                      Do not miss out the deal!!
                    </p>
                  </div>
                  <div className="flex flex-col gap-x-4 mt-6">
                    <div className="relative py-4 px-2 font-bold  bg-yellow-400   w-64 transform -skew-x-35  flex items-center justify-center">
                      Special Discounted Price
                    </div>
                    <div className="flex flex-row gap-x-4 mt-4">
                      <LuIndianRupee className="w-8 h-8" />
                      <div className="text-3xl text-black font-semibold">2999</div>
                      <div className="relative inline-block text-lg  text-black crossed">
                        <div className="relative top-[17px] border bg-black border-red-600 w-12 transform rotate-[27deg]"></div>
                        6999
                        <div className="relative bottom-[14px] border bg-black border-red-600  w-12 transform -rotate-[27deg]"></div>
                      </div>
                    </div>
                    <Link to={"/payment-page"}>
                      <button className="mt-6 bg-[#488B80] text-white py-2 px-4 rounded w-full hover:bg-[#4eac9c] mb-4">
                        Join today
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
    
            {/*course outcomes */}
    
            <div className="w-full md:px-12 sm:px-4 flex flex-col gap-x-6">
              <div className="flex flex-col md:flex-row md:gap-x-5 text-[#488B80] my-8 items-center">
                <TbSchool className="h-6 w-6 mb-2 md:mb-0" />
                <h3 className="text-xl font-medium">Course Outcomes</h3>
              </div>
    
              <div >
                Physics has advanced significantly in recent years. This course will
                provide you with an overview of the fundamental principles of
                physics as well as the skills required to apply these principles in
                various real-world scenarios. You will explore the concepts of
                motion, forces, energy, and matter, learning how they interact and
                influence each other. From understanding the laws of gravity to
                exploring the principles of electromagnetism, this course will equip
                you with the knowledge needed to comprehend the physical world
                around us. Whether you're interested in the mechanics of everyday
                objects or the vast phenomena of the universe, this course will
                offer the foundational insights necessary to pursue further studies
                or careers in physics and related fields.You'll also investigate
                atomic and nuclear physics, gaining insights into the behavior of
                particles at the smallest scales. Practical experiments and
                problem-solving sessions will enhance your understanding and help
                you develop critical thinking skills. This comprehensive approach
                ensures you not only grasp theoretical concepts but also appreciate
                their practical applications in technology, engineering, and
                everyday life.
              </div>
            </div>
            <p className="md:ml-12  md:w-11/12 sm:w-full flex justify-center border mt-10 mb-4 border-[#488b80c9]  items-center opacity-50"></p>
    
            <div className=" w-full md:px-6 sm:p-2  gap-x-8 flex flex-col lg:flex-row items-center lg:items-start justify-between">
              <div className="w-full p-4 md:p-8">
                {/* Course Info */}
                <h1 className="text-2xl mt-2 text-[#488B80] font-medium">
                  Course info
                </h1>
                <div className="flex flex-col md:flex-row mt-4 justify-between">
                  <div className="flex flex-col w-full md:w-5/12 gap-y-4">
                    <div className="flex flex-row justify-between">
                      <p>Rating</p>
                      <div className="flex flex-row gap-x-2">
                        <div className="flex flex-row text-yellow-400 mt-1">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfAlt />
                        </div>
                        <p>{"(159)"}</p>
                      </div>
                    </div>
                    <div className="border w-full border-[#488B80] mt-1 border-opacity-50 mb-2"></div>
                    <div className="flex flex-row justify-between">
                      <p>Level</p>
                      <div className="flex flex-row gap-x-2">
                        <p>Beginner</p>
                        <IoTrendingUpSharp className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="border w-full border-[#488B80] mt-1 border-opacity-50 mb-2 md:hidden sm:block"></div>
                  </div>
    
                  {/* Vertical Line */}
                  <div className="hidden md:flex justify-center items-center h-24">
                    <div className="border-l border-[#488B80] h-full opacity-50"></div>
                  </div>
    
                  <div className="flex flex-col w-full md:w-5/12 gap-y-4 mt-4 md:mt-0">
                    <div className="flex flex-row justify-between">
                      <p>Updated</p>
                      <div className="flex flex-row gap-x-2">
                        <p>June 11, 2024</p>
                        <MdDateRange className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="border w-full border-[#488B80] mt-1 border-opacity-50 mb-2"></div>
                    <div className="flex flex-row justify-between">
                      <p>Duration</p>
                      <div className="flex flex-row gap-x-2">
                        <p>30 m</p>
                        <FaRegClock className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      );
}

export default class8_beforepay
