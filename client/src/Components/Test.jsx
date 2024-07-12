import React from 'react';
import image from '../assets/test.png';

const Test = () => {
  return (
    <div>
      <section
        className="text-white py-12 px-4 relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(34, 34, 34,0.86)' }}
        ></div>
        <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center relative z-10">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
            <h1 className="text-3xl font-bold mb-4 text-[#85E8C5]">All India test</h1>
            <h2 className="text-2xl text-[#85E8C5] mb-4">Boost your Exam preparation</h2>
            <p className="mb-2 text-white">
              Enhance your exam preparation with the All India Test Series.
            </p>
            <p className="mb-4">
              Achieve your academic goals and secure top ranks!
            </p>
            <button className="bg-[#488B80] text-white font-semibold py-2 px-4 rounded hover:bg-green-600">
              Join Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;
