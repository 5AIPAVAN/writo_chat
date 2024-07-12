import React from 'react';
import HeroImage from './hero-image.png';
import './Hero.css';

const HeroSection = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-text item1">
          <h1><span>Thrive with our tailored mentorship</span></h1>
          <p className='text-3xl'>Unlock your potential with our interactive online classes, where learning knows no boundaries.</p>
          <button>Book your individual classes now</button>
        </div>
        <div className="hero-image flex justify-center items-center relative">
          <div className="image-wrapper p-2 rounded-full border-2 border-dashed border-green-800">
            <img 
              src={HeroImage} 
              alt="Students studying" 
              className="rounded-full" 
            />
          </div>
          <div className="student-count absolute bottom-0 left-1/6 transform -translate-x-1/2 translate-y-1/2 bg-white px-8 py-2 rounded shadow">
            <p>10k+</p>
            online students
          </div>
        </div>
      </section>

     
      <section className="stats-box w-11/12 md:w-1/2 mx-auto rounded-lg mt-44 p-4 border border-gray-300 shadow-lg bg-[rgba(26,183,157,0.74)]">
  <div className="flex flex-wrap justify-around text-center space-y-2 md:space-y-0 md:space-x-0 divide-x divide-gray-300">
    <div className="mb-2 w-1/2 md:w-auto px-2 md:px-4 flex-1">
      <h3 className="text-lg md:text-xl font-bold">12000+</h3>
      <p className="text-gray-700 text-sm md:text-base">Students</p>
    </div>
    <div className="mb-2 w-1/2 md:w-auto px-2 md:px-4 flex-1">
      <h3 className="text-lg md:text-xl font-bold">30+</h3>
      <p className="text-gray-700 text-sm md:text-base">Classes</p>
    </div>
    <div className="mb-2 w-1/2 md:w-auto px-2 md:px-4 flex-1">
      <h3 className="text-lg md:text-xl font-bold">100+</h3>
      <p className="text-gray-700 text-sm md:text-base">Mentors</p>
    </div>
    <div className="mb-2 w-1/2 md:w-auto px-2 md:px-4 flex-1">
      <h3 className="text-lg md:text-xl font-bold">50+</h3>
      <p className="text-gray-700 text-sm md:text-base">Subjects</p>
    </div>
  </div>
</section>


    </div>
  );
};

export default HeroSection;
