import React, { useState, useEffect } from 'react';
import img1 from '../assets/neet_member1.png';
import img2 from '../assets/neet_member2.png';
import img3 from '../assets/neet_member3.png';
import img4 from '../assets/neet_member4.png';
const membersData = [
    {
      id: 1,
      imgSrc: img1,
      title: 'General discussion',
      description: 'Share stories, ideas, pictures and more!'
    },
    {
      id: 2,
      imgSrc: img2,
      title: 'Your NEET mission',
      description: 'Participate in NEET mission and achieve your goal'
    },
    {
      id: 3,
      imgSrc: img3,
      title: 'Previour year paper',
      description: 'Practice previous year paper and boost your score!'
    },
    {
      id: 4,
      imgSrc: img4,
      title: 'All India Test Series',
      description: 'Boost your confidence to achieve thier best possible performance.'
    },
    {
      id: 5,
      imgSrc: img2,
      title: 'Workshops',
      description: 'Participate in workshops and learn more!'
    },
  ];
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Neet_members = () => {
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const cardsPerView = 4; // Number of cards to display per view

  useEffect(() => {
    const handleTouchStart = () => setIsTouch(true);
    const handleTouchEnd = () => setIsTouch(false);

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const nextMembers = () => {
    setCurrentStartIndex(current => (current + 1) % membersData.length);
  };

  const prevMembers = () => {
    setCurrentStartIndex(current => (current - 1 + membersData.length) % membersData.length);
  };

  const isPrevArrowVisible = currentStartIndex > 0;
  const isNextArrowVisible = currentStartIndex + cardsPerView < membersData.length;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-1 text-[#ED7E0A] item5">------Access-----</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed item1 text-2xl text-[#488B80]">Members only area</p>
        </div>
        <div className="relative flex flex-wrap -mx-4">
          {membersData.slice(currentStartIndex, currentStartIndex + cardsPerView).map((member, index) => (
            <div key={member.id} className="relative px-4 lg:w-1/4 md:w-1/2 w-full sm:mt-3">
              <div className="h-full flex flex-col items-center text-center">
                <div className="relative w-full">
                  <img alt="team" className="flex-shrink-0 rounded-lg w-full h-66 object-cover object-center" src={member.imgSrc} />
                  {index === 0 && (
                    <button className="absolute top-1/2  left-0 transform -translate-y-1/2 text-[#026C39] hover:text-gray-900 sm:hidden md:flex w-10 h-10 p-2 bg-[#EDE6E0] rounded-full" onClick={prevMembers}>
                      <FaChevronLeft className="w-full h-full" />
                    </button>
                  )}
                  {index === cardsPerView - 1 && (
                    <button className="absolute top-1/2 right-0 transform -translate-y-1/2 text-[#026C39] hover:text-gray-900 sm:hidden md:flex w-10 h-10 p-2 bg-[#EDE6E0] rounded-full" onClick={nextMembers}>
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
          {currentStartIndex + cardsPerView > membersData.length && membersData.slice(0, (currentStartIndex + cardsPerView) % membersData.length).map((member, index) => (
            <div key={member.id} className="relative px-4 lg:w-1/4 md:w-1/2 w-full">
              <div className="h-full flex flex-col items-center text-center">
                <div className="relative w-full">
                  <img alt="team" className="flex-shrink-0 rounded-lg w-full h-66 object-cover object-center" src={member.imgSrc} />
                  {index === 0 && (
                    <button className="absolute top-1/2 left-0 transform -translate-y-1/2 text-[#026C39] hover:text-gray-900 sm:hidden md:flex w-10 h-10 p-2 bg-gray-200 rounded-full" onClick={prevMembers}>
                      <FaChevronLeft className="w-full h-full" />
                    </button>
                  )}
                  {index === (currentStartIndex + cardsPerView) % membersData.length - 1 && (
                    <button className="absolute top-1/2 right-0 transform -translate-y-1/2 text-[#026C39] hover:text-gray-900 sm:hidden md:flex w-10 h-10 p-2 bg-gray-200 rounded-full" onClick={nextMembers}>
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
        </div>
      </div>
    </section>
  )
}

export default Neet_members
