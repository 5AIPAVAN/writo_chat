import React from 'react';
import { FaAngleRight, FaChevronLeft } from "react-icons/fa";

const Testimonials = () => {
  const tests = [
    {
      title: 'Mock test-1',
      date: '12 June 2024',
      time: '10.00 am Onwards',
      questions: 200,
      duration: '200 minutes',
      subjects: 'Biology, Physics, Chemistry'
    },
    {
      title: 'Mock test-2',
      date: '15 June 2024',
      time: '11.00 am Onwards',
      questions: 150,
      duration: '150 minutes',
      subjects: 'Mathematics, Physics, Chemistry'
    },
    {
      title: 'Mock test-3',
      date: '20 June 2024',
      time: '9.00 am Onwards',
      questions: 180,
      duration: '180 minutes',
      subjects: 'English, History, Geography'
    },
    {
      title: 'Mock test-4',
      date: '25 June 2024',
      time: '2.00 pm Onwards',
      questions: 170,
      duration: '170 minutes',
      subjects: 'Literature, Economics, Telugu'
    }
  ];
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const totalCards = tests.length;
  const maxCardsToShow = 3;
  const getCardsToShow = () => {
    const cards = [];
    for (let i = 0; i < maxCardsToShow; i++) {
      cards.push(tests[(currentCardIndex + i) % totalCards]);
    }
    return cards;
  };

  const cardsToShow = getCardsToShow();
  const handleLeftArrowClick = () => {
    setCurrentCardIndex((currentCardIndex - 1 + totalCards) % totalCards);
  };
  const handleRightArrowClick = () => {
    setCurrentCardIndex((currentCardIndex + 1) % totalCards);
  };

  return (
    <section className="bg-white">
      <div className="container px-6 py-8 mx-auto relative">
        {/* Left Arrow for small screens */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer sm:hidden ml-3 z-50">
          <div className="rounded-full bg-gray-200 p-2">
            <FaChevronLeft className="text-[#026C39] text-xl" onClick={handleLeftArrowClick} />
          </div>
        </div>

        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {cardsToShow.map((test, index) => (
            <div key={index} className="w-full max-w-sm text-center sm:align-middle sm:justify-center mx-auto relative">
              <div className="object-cover object-center w-full h-80 mx-auto rounded-lg bg-white shadow-lg relative">
                {index === 0 && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer hidden sm:block" style={{ marginLeft: '-15px' }}>
                    <div className="rounded-full bg-gray-200 p-2">
                      <FaChevronLeft className="text-[#026C39] text-xl" onClick={handleLeftArrowClick} />
                    </div>
                  </div>
                )}
                <p className='text-[#07744E] text-start ml-2 mt-2 text-xl item2'>{test.title}</p>
                <p className='text-lg item2 text-start ml-2 mt-3'>Conducted from {test.date}</p>
                <p className='text-lg item2 text-start ml-2 mt-3'>{test.time}</p>
                <p className='text-lg item2 text-start ml-2 mt-3'>
                  <span className='text-lg item2 font-bold ml-3 mr-5'>Questions</span>
                  <span className='mr-3'>:</span>{test.questions}
                </p>
                <p className='text-lg item2 text-start ml-2 mt-2'>
                  <span className='text-lg item2 font-bold ml-3 mr-14'>Time</span>
                  <span className='mr-3'>:</span>{test.duration}
                </p>
                <p className='text-lg item2 text-start ml-2 mt-2 mb-4'>
                  <span className='text-lg item2 font-bold ml-3 mr-7'>Subjects</span>
                  <span className='mr-3'>:</span>{test.subjects}
                </p>
                {/* Conditionally render right arrow icon on the last card */}
                {index === maxCardsToShow - 1 && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer hidden sm:block" style={{ marginRight: '-15px' }}>
                    <div className="rounded-full bg-gray-200 p-2">
                      <FaAngleRight className="text-[#026C39] text-xl" onClick={handleRightArrowClick} />
                    </div>
                  </div>
                )}
                <button className="absolute left-0 bottom-2 ml-2 px-2 py-2 bg-[#07744E] mb-2 mt-3 text-white rounded item1">GoTo Test</button>
                <button className="absolute right-0 bottom-2 mr-2 px-2 py-2 bg-[#07744E] mb-2 mt-3 text-white rounded item1">View Details</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow for small screens */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer sm:hidden mr-3">
          <div className="rounded-full bg-gray-200 p-2">
            <FaAngleRight className="text-[#026C39] text-xl" onClick={handleRightArrowClick} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;