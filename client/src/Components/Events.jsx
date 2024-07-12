import React from 'react'
import course1Image from '../assets/course1.png'; // Import your images
import { FaArrowRight } from "react-icons/fa";
const Events = () => {
  return (
    <div className="flex justify-center items-center z-10">
      <div className="bg-[#FAFAFA] rounded-lg shadow-lg p-6 w-full max-w-screen-lg">
        <h2 className="text-3xl mb-8 mt-6">Events
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex">
            <img src={course1Image} alt="Course 1" className="mr-4 rounded-lg" style={{ maxWidth: '120px', height: 'auto' }} />
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">JEE and NEET Course</h3>
              <p className="text-gray-700 mb-4">Mentors from Prestigious IIT/NIT background. One year access to expert mentors.</p>
              <div className="self-end ml-auto">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex">
            <img src={course1Image} alt="Course 2" className="mr-4 rounded-lg" style={{ maxWidth: '120px', height: 'auto' }} />
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Mentorship Program</h3>
              <p className="text-gray-700 mb-4">Discover a personalized mentorship program designed to guide you towards your goals with expert support.</p>
              <div className="self-end ml-auto">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex">
            <img src={course1Image} alt="Course 3" className="mr-4 rounded-lg" style={{ maxWidth: '120px', height: 'auto' }} />
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Doubt session</h3>
              <p className="text-gray-700 mb-4">Now you can solve all your doubts, even sitting at home with our expert mentors.</p>
              <div className="self-end ml-auto">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex">
            <img src={course1Image} alt="Course 4" className="mr-4 rounded-lg" style={{ maxWidth: '120px', height: 'auto' }} />
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Career counselling</h3>
              <p className="text-gray-700 mb-4">Book a free trial session to see how the mentor can help you.</p>
              <div className="self-end ml-auto">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex">
            <img src={course1Image} alt="Course 5" className="mr-4 rounded-lg" style={{ maxWidth: '120px', height: 'auto' }} />
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Foundational Courses from 6th to 10th</h3>
              <p className="text-gray-700 mb-4">We are there for you to cover all syllabus from 6th standard to 12th standard.</p>
              <div className="self-end ml-auto">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex">
            <img src={course1Image} alt="Course 6" className="mr-4 rounded-lg" style={{ maxWidth: '120px', height: 'auto' }} />
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2">All India Test series</h3>
              <p className="text-gray-700 mb-4">To score more try our all India test series and improve yourselves.</p>
              <div className="self-end ml-auto">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex space-x-4">
          <button className="bg-[#488B80] text-white py-2 px-4 rounded">Enroll Now</button>
          <button className="border-2 border-[#488B80] py-2 px-4 rounded text-[#488B80] hover:bg-[#488B80] hover:text-white transition-colors duration-300">Book your Free Demo</button>

        </div>
      </div>
    </div>
  )
}

export default Events
