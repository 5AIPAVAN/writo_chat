import React, { useState, useEffect } from 'react';
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
const TestimonialCard = ({ testimonials }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [sliderInterval, setSliderInterval] = useState(null);

  const handlePrev = () => {
    clearInterval(sliderInterval);
    setStartIndex((prevIndex) => prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1);
    setActiveDot((prevDot) => prevDot === 0 ? 2 : prevDot - 1);
    startSlider();
  };

  const handleNext = () => {
    clearInterval(sliderInterval);
    setStartIndex((prevIndex) => prevIndex === testimonials.length - 3 ? 0 : Math.min(testimonials.length - 3, prevIndex + 1));
    setActiveDot((prevDot) => prevDot === 2 ? 0 : prevDot + 1);
    startSlider();
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

  const startSlider = () => {
    clearInterval(sliderInterval);
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => prevIndex === testimonials.length - 3 ? 0 : Math.min(testimonials.length - 3, prevIndex + 1));
      setActiveDot((prevDot) => prevDot === 2 ? 0 : prevDot + 1);
    }, 10000);
    setSliderInterval(interval);
  };

  useEffect(() => {
    startSlider();
    return () => clearInterval(sliderInterval);
  }, []);

  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex justify-center items-center ">
      <p className='text-center text-[#ED7E0A] text-2xl item5'>- - - -   Our love  - - - </p>
    </div>
    <div className="flex justify-center items-center mb-4 mt-6 ">
      <p className='text-center text-[#488B80] text-4xl mt-2 item1'>Faculty At Writo</p>
    </div>

    <div className="flex flex-wrap -m-4 mt-4">
      {visibleTestimonials.map((testimonial, index) => (
        <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <img
              alt="testimonial"
              className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              src={testimonial.image}
            />
            <h2 className="text-gray-900 title-font tracking-wider font-semibold text-sm item4">
              {testimonial.name}
            </h2>
            <div className="flex justify-center mt-2">
              {[...Array(testimonial.stars)].map((_, index) => (
                <IoMdStar key={index} className="text-[#FFE249] text-2xl" />
              ))}
              {[...Array(5 - testimonial.stars)].map((_, index) => (
                <IoMdStarOutline key={index} className="text-[#E4E4E4] text-2xl" />
              ))}
            </div>
            <p className="leading-relaxed">{testimonial.text}</p>
            <span className="inline-block h-1 w-10 rounded bg-[#54C8B4] mt-6 mb-4"></span>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center items-center mt-4">
      <button onClick={handlePrev} className="mr-4 text-2xl text-gray-800 hover:text-[#54C8B4] font-semibold py-2 px-4 rounded-l">
        <FaArrowLeft />
      </button>
      {[...Array(3)].map((_, index) => (
        <FaCircle key={index} className={`text-xs ${index === activeDot ? 'text-[#54C8B4] mr-4' : 'text-[#D9D9D9]'} mx-2 cursor-pointer`} onClick={() => setStartIndex(index * 3)} />
      ))}
      <button onClick={handleNext} className="ml-4 text-2xl hover:text-[#54C8B4] text-gray-800 font-semibold py-2 px-4 rounded-r">
        <FaArrowRight />
      </button>
    </div>
  </div>
</section>

  );
};

export default TestimonialCard;
