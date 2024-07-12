import React,{useState} from 'react';
import img1 from '../assets/neet1.png';
import img2 from '../assets/neet2.png';
import './Connect.css'; // Import your CSS file for styling

const Connect = () => {
  return (
    <div className="outerexpert bg-[#F6FAFF]">
      <div className="innerexpert">
        <div className="content">
          <h3 className='gradientheading text-xl'>Connect and collabrate</h3>
          
          <ul className='list-disc mt-4 pl-5'>
            <p className='text-xl mb-4 leading-8'>
            Join a vibrant community of Writo who share your passion and drive.
          </p>
          <p className='text-xl mb-4 leading-8'>
            Connect with individuals who are as excited about NEET Exam as you are, fostering an environment of collaboration and mutual growth.
          </p>
          <ul className='list-disc mt-4 pl-5'>
            <li className='text-xl mt-6 sm:mt-2'>
              Meet like minded people
            </li>
            <li className='text-xl mt-6 sm:mt-2'>
              Participate in challenges, competitions, and win digital badges.
            </li>
            <li className='text-xl mt-6 sm:mt-2'>
              Join the self-learning environment and explore on your own.
            </li>
          </ul>
          </ul>
        </div>

        <div className="image-container items-center justify-center ml-40">
          <img className="w-60 sm:w-30" src={img1} alt="child1" />
          <img src={img2} alt="child2" className='w-40 overlay-img sm:w-18' />
        </div>
      </div>
    </div>
  );
}

export default Connect;
