import studyTimeImg from "../../assets/allindiatest.png"
import vectoeImg from "../../assets/Vector 515.png"
import { MdDateRange } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import Whywaits1 from "../../assets/whywaits1.png";
import Whywaits2 from "../../assets/whywaits2.png";
import Whywaits3 from "../../assets/whywaits3.png";
import Contactus from "../../Components/Contactus";
import Writo from "../../assets/Clip path group.png";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";

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


function JeeAllIndiaTestSeries() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    {/*nav bar */}

    <nav className="bg-[#EFF4F4] w-full">
    <div className="container mx-auto flex justify-around items-center p-4">
      <div className="flex items-center">
        <img src={Writo} alt="Logo" className="h-12 w-12" />
        <span className="ml-2 text-lg font-bold text-black">Writo Education</span>
      </div>
      <div className="hidden md:flex items-center space-x-14">
        <div className="relative">
          <input
            type="text"
            placeholder="Search or Start a conversation"
            className="px-4 py-2 w-80 bg-[#EFF4F4] rounded-full border border-gray-300"
          />
          <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
            <CiSearch className="w-5 h-5" />
          </span>
        </div>
        <a href="#" className="text-black font-medium">Community</a>
        <a href="#" className="text-black font-medium">Mentors</a>
        <a href="#" className="text-black font-medium">Programs</a>
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
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search or Start a conversation"
            className="px-4 py-2 w-full bg-white rounded-full border border-gray-300"
          />
          <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
            <CiSearch className="w-5 h-5" />
          </span>
        </div>
        <a href="#" className="block text-black px-4 py-2">Community</a>
        <a href="#" className="block text-black px-4 py-2">Mentors</a>
        <a href="#" className="block text-black px-4 py-2">Programs</a>
        <button className="w-full bg-[#5C8D8D] text-white px-4 py-2 rounded-lg mt-2">Join now</button>
      </div>
    )}
  </nav>


    {/*hero section */}
    <div className="flex flex-col md:flex-row border p-6 rounded-lg shadow-lg max-w-screen-lg mx-auto mb-6">
    <div className="flex-1">
      <h2 className="text-[#488B80] text-xl font-semibold mb-2">JEE All India Test Series</h2>
      <div>
      <img className=" w-52 ml-4 h-8 mt-2 mb-2" src={vectoeImg} alt="vector img"/>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-[#0A7F56]  mt-8">Mock Test – 01</h3>
      <div className="mb-4">
        <div className="flex gap-y-3 flex-col md:flex-row  md:gap-x-12">
        <p className="flex items-center"><MdDateRange className="h-6 w-6  text-gray-600 mr-2"/>From 12 June 2024</p>
        <p className="flex items-center"><TbAddressBook className="h-6 w-6 text-gray-600 mr-2"/>180 Questions 720 Marks</p>
        </div>
        <p className="flex items-center mt-4"><IoMdTime className="h-6 w-6 text-gray-600  mr-2"/>200 minutes</p>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold mb-4">Syllabus</h4>
        <p>Biology <span className="ml-8 mr-4"> -</span> <span className="text-sm">Full syllabus mock questions</span></p>
        <p>Physics<span className="ml-7 mr-4"> -</span> <span className="text-sm">Full syllabus mock questions</span></p>
        <p>Chemistry<span className="ml-3 mr-3"> -</span> <span className="text-sm">Full syllabus mock questions</span></p>
      </div>
      <button className="bg-[#488B80] mt-4 text-white py-2 px-4 rounded">Take test</button>
    </div>
    <div className="flex-1 mt-6 md:mt-0 md:ml-6">
      <img src={studyTimeImg} alt="Study Time" className="w-3/4 h-auto rounded" />
    </div>
  </div>

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
<Contactus/> 
    </>
  )
}

export default JeeAllIndiaTestSeries
