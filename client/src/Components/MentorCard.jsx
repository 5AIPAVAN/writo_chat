import React, { useState } from 'react';
import { FaLeftLong, FaRightLong } from "react-icons/fa6";

const MentorCard = ({ mentors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mentors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mentors.length) % mentors.length);
  };

  const getDisplayedMentors = () => {
    const mentorsToDisplay = [];
    for (let i = 0; i < 3; i++) {
      mentorsToDisplay.push(mentors[(currentIndex + i) % mentors.length]);
    }
    return mentorsToDisplay;
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2">
        <FaLeftLong size={68} className="text-[#54C8B4] ml-2 cursor-pointer" onClick={prevSlide} />
      </div>
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
        <FaRightLong size={68} className="text-[#54C8B4] mr-2 cursor-pointer" onClick={nextSlide} />
      </div>
      <div className="container px-12 py-28 mx-auto">
        <div className="flex flex-wrap justify-center -m-8">
          {getDisplayedMentors().map((mentor, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/3 p-8">
              <div className="bg-white p-6 shadow-lg relative" style={{ borderLeft: '1.34px solid #07744E' }}>
                <div className="w-full flex justify-center">
                  <img
                    className="w-20 h-20 rounded-full mb-4 mt-2"
                    src={mentor.image}
                    alt="profile"
                  />
                </div>
                <h2 className="text-center text-2xl font-extrabold text-gray-900 title-font mb-2">{mentor.name}</h2>
                <div className="flex justify-center space-x-4 mb-10 mt-6">
                  {mentor.subjects.map((subject, index) => (
                    <span key={index} className="border border-[#848484] rounded-lg px-3 py-1 text-gray-700">{subject}</span>
                  ))}
                </div>
                <p className="text-center text-gray-700 mb-4 font-bold font-base">{mentor.university}, {mentor.year}</p>
                <div className="flex justify-center">
                  <button className="bg-[#488B80] text-white py-2 px-6 rounded-lg font-extrabold">View detail</button>
                </div>
                <div className="absolute top-0 left-0 w-full mt-4" style={{ height: '1.34px', background: '#07744E' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorCard;
