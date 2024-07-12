import React, { useState } from 'react';
import img1 from '../assets/member1.png';
import img2 from '../assets/member2.png';
import img3 from '../assets/member3.png';
import img4 from '../assets/member4.png';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const membersData = [
  {
    id: 1,
    imgSrc: img1,
    title: 'Blogs',
    description: 'Submit blog about what you have built'
  },
  {
    id: 2,
    imgSrc: img2,
    title: 'Workshops',
    description: 'Participate in workshops and learn more!'
  },
  {
    id: 3,
    imgSrc: img3,
    title: 'Challenges',
    description: 'Participate in challenges and skill-up yourself'
  },
  {
    id: 4,
    imgSrc: img4,
    title: 'Practical projects',
    description: 'Join upcoming events and networking sessions'
  },
  {
    id: 5,
    imgSrc: img2,
    title: 'Workshops',
    description: 'Participate in workshops and learn more!'
  },
];

const Member = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const cardsPerView = 4; // Number of cards to display per view

  const nextMembers = () => {
    setCurrentStartIndex(current => (current + cardsPerView) % membersData.length);
  };

  const prevMembers = () => {
    setCurrentStartIndex(current => (current - cardsPerView + membersData.length) % membersData.length);
  };

  const getDisplayedMembers = () => {
    const endIndex = currentStartIndex + cardsPerView;
    if (endIndex <= membersData.length) {
      return membersData.slice(currentStartIndex, endIndex);
    } else {
      return membersData.slice(currentStartIndex).concat(membersData.slice(0, endIndex % membersData.length));
    }
  };

  return (
    <section className="bg-white ">
      <div className="container px-6 py-8 mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h2>

        <div className="relative flex flex-wrap -mx-4 mt-8">
          {getDisplayedMembers().map((member, index) => (
            <div key={member.id} className="relative px-4 lg:w-1/4 md:w-1/2 sm:w-full sm:max-w-xs w-full sm:mt-2 mt-10">
              <div className="h-full flex flex-col items-center text-center">
                <div className="relative w-full">
                  <img alt="team" className="flex-shrink-0 rounded-lg w-full h-66  lg:h-66 sm:h-40 sm:w-full object-cover object-center" src={member.imgSrc} />
                  {index === 0 && (
                    <button className="absolute top-1/2 left-0 transform -translate-y-1/2 text-[#026C39] hover:text-gray-900 w-10 h-10 p-2 bg-[#EDE6E0] rounded-full hidden lg:flex" onClick={prevMembers}>
                      <FaChevronLeft className="w-full h-full" />
                    </button>
                  )}
                  {index === cardsPerView - 1 && (
                    <button className="absolute top-1/2 right-0 transform -translate-y-1/2 text-[#026C39] hover:text-gray-900 w-10 h-10 p-2 bg-[#EDE6E0] rounded-full hidden lg:flex" onClick={nextMembers}>
                      <FaChevronRight className="w-full h-full" />
                    </button>
                  )}
                </div>
                <div className="w-full bg-[#F5F5F5]">
                  <h2 className="title-font font-medium text-2xl text-[#026C39] text-start justify-start item1 mt-1 ml-1">{member.title}</h2>
                  <h3 className="text-black mb-2 text-lg justify-start text-start item2 ml-1">{member.description}</h3>
                </div>
              </div>
            </div>
          ))}
          {/* Conditional rendering for the arrows on small screens */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#026C39] hover:text-gray-900 sm:flex lg:hidden w-10 h-10 p-2 bg-[#EDE6E0] rounded-full" onClick={prevMembers}>
            <FaChevronLeft className="w-full h-full" />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#026C39] hover:text-gray-900 sm:flex lg:hidden w-10 h-10 p-2 bg-[#EDE6E0] rounded-full" onClick={nextMembers}>
            <FaChevronRight className="w-full h-full" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Member;
