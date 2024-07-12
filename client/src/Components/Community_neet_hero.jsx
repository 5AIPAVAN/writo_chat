import React from 'react'
import img from '../assets/vector.png'
import HeroImage from '../assets/neet.png'
const Community_neet_hero = () => {
  return (
    <div className=" bg-white ">
      <section className="hero bg-[#DFF2E5]">
        <div className="hero-text items-center text-center item1">
          <h1>Writo Student Community for 6th - 10th students</h1>
          <img src={img} alt="" className='ml-3 mb-2'/>
          <p className='text-4xl text-start'>
            Student communities are groups of like-minded individuals brought together by a shared interest, academic field, career goal, or hobby.
          </p>
          <div className='flex justify-start'>
            <button className='mt-2 px-6 py-3 item2 font-semibold bg-green-500 text-white rounded-full'>
            Know more
            </button>
          </div>
        </div>
        
        <div className="hero-image flex justify-center items-center relative">
          <div className="image-wrapper p-2">
            <img 
              src={HeroImage} 
              alt="Students studying" 
            />
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Community_neet_hero
