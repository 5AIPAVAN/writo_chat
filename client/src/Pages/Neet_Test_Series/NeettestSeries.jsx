/* eslint-disable react/prop-types */
import { useState} from 'react';
import { FaFilePdf, FaBars, FaTimes,  } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import Whywaits1 from "../../assets/whywaits1.png";
import Whywaits2 from "../../assets/whywaits2.png";
import Whywaits3 from "../../assets/whywaits3.png";
import Contactus from "../../Components/Contactus";
import Writo from "../../assets/Clip path group.png";
// import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import Hero3 from './Hero3';
import Testimonials from './Testimonials';
import Cart from './Cart';

const answerKeys = [
  { id: 1, text: 'Download NEET mock test answer key and solutions - 1', link: '#' },
  { id: 2, text: 'Download NEET mock test answer key and solutions - 2', link: '#' },
  { id: 3, text: 'Download NEET mock test answer key and solutions - 3', link: '#' },
];

const features = [
  {
    id: 1,
    image: Whywaits1,
    title: 'Latest Exam Patterns',
    description: 'Prepare for the level expected in the upcoming exams.',
  },
  {
    id: 2,
    image: Whywaits2,
    title: 'Save Tests and Questions',
    description: 'Save important Tests & Questions to revise or reattempt them later.',
  },
  {
    id: 3,
    image: Whywaits3,
    title: 'Performance Analysis',
    description: 'Get insights on your Strengths & Weaknesses, Compare with the Topper',
  },
];

const NeetTestSeries = () => {
  
  
  const [isOpen, setIsOpen] = useState(false);



  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  return (
    <>
      {/* Nav bar */}
      <nav className="bg-[#a5cac5] w-full">
        <div className="container mx-auto flex justify-between items-center py-4 px-12">
          <div className="flex items-center">
            <img src={Writo} alt="Logo" className="h-12 w-12" />
            <span className="ml-2 text-lg font-bold text-black">Writo Education</span>
          </div>
          <div className="hidden md:flex font-medium items-center space-x-14">
            <a href="#" className="text-black">Community</a>
            <a href="#" className="text-black">Mentors</a>
            <a href="#" className="text-black">Programs</a>
            <button className="bg-[#5C8D8D] text-white px-4 py-2 rounded-lg">Join now</button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className="text-black h-6 w-6" /> : <FaBars className="text-black h-6 w-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-[#E2F5F2] p-4">
            <a href="#" className="block text-black px-4 py-2">Community</a>
            <a href="#" className="block text-black px-4 py-2">Mentors</a>
            <a href="#" className="block text-black px-4 py-2">Programs</a>
            <button className="w-full bg-[#5C8D8D] text-white px-4 py-2 rounded-lg mt-2">Join now</button>
          </div>
        )}
      </nav>

      {/* Hero section */}
      <Hero3 />
      <h1 className='text-center text-[#488B80]  text-2xl font-semibold mb-8 '>Waits All India Test Series for NEET UG</h1>
      <h1 className='text-center text-[#ED7E0A]  text-2xl font-semibold mb-8' >Select the right test for you</h1>
      <Testimonials/>
      

      {/* Download section */}
      <div className="w-full mx-auto p-4">
        <h1 className="text-center text-2xl text-[#488B80] font-semibold mb-8">NEET Test Answer key and solutions</h1>
        <div className="flex flex-col md:flex-row p-4 md:p-10 justify-center gap-4">
          {answerKeys.map((key) => (
            <div key={key.id} className="border p-4 rounded shadow-lg w-full md:w-1/2 flex flex-col items-center">
              <div className='flex flex-row gap-x-2'>
                <FaFilePdf className='h-8 w-8 text-[#488B80]' />
                <p className="mb-4 text-center font-medium text-lg">{key.text}</p>
              </div>
              <a href={key.link} className="text-black border border-black px-4 py-2 rounded flex items-center">
                Download
                <LuDownload className='ml-2' />
              </a>
            </div>
          ))}
        </div>
      </div>

      <h1 className='text-center text-[#488B80]  text-2xl font-semibold mb-8 '>Subject wise All India Test series</h1>
          <Cart/>

      {/* Why WAITS section */}
      <div className="container mx-auto p-4">
        <h1 className="text-center text-2xl font-semibold mb-8">Why take WAITS?</h1>
        <div className="flex flex-col md:flex-row justify-center gap-12 p-4">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center w-full md:w-1/3 p-4">
              <img src={feature.image} alt={feature.title} className="mb-4 h-20 w-20" />
              <h2 className="text-lg font-semibold text-[#07744E] mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>


      

      <Contactus />
    </>
  );
};

export default NeetTestSeries;
