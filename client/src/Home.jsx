import React,{useState} from 'react'
import Navbar from './Components/Navbar';

import MentorCard from './Components/MentorCard';
import HeroSection from './Components/HeroSection';
import NavScrollExample from './Components/NavScrollExample';
import About from './Components/About';
import TestimonialCard from './Components/TestominalCard';
import image from './assets/image copy.png';
import image1 from './assets/image3.png';
import Contactus from './Components/Contactus';
import Test from './Components/Test';
import Demo from './Components/Demo';
import Query from './Components/Query';
import Doubt from './Components/Doubt';
import Courses from './Components/Courses';
import ExpertGuidance from './Components/ExpertGuidance';
import Courses1 from './Components/Courses1';
import Courses2 from './Components/Courses2';
import Navbar2 from './Components/Navbar2';
const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
    const testimonialsData = [
        {
          name: "Henry Letham",
          text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
          image: image,
          stars: 4 
        },
        {
          name: "Holden Caulfield",
          text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
          image: image,
          stars: 3
        },
        {
          name: "Alper Kamu",
          text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
          image: image,
          stars: 5
        },
        {
          name: "Henry Letham",
          text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
          image: image,
          stars: 2
        }
      ];
  return (

       <div>
          <div className="font-[Poppins]  overflow-h  bg-[#EAF3F3]">
            <Navbar />
            <Navbar2 setDropdownOpen={setDropdownOpen}/>
        </div>
        <div className='bg1 overflow-h'>
        <HeroSection dropdownOpen={dropdownOpen}/>
        </div>
        {/* <Courses /> */}
        <About />
        <Courses1 />
        <Courses2 />
          {/* <MentorCard mentors={mentors} /> */}
          <ExpertGuidance/>
          <Doubt />
          <Test />
         
          <TestimonialCard testimonials={testimonialsData} />
          <Demo />
          <Query  />
          <Contactus />
        </div>
  )
}

export default Home
