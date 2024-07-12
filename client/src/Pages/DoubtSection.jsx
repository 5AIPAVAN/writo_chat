import React from 'react'
import Hero2 from '../Components_2/Hero2'
import image from '../assets/image copy.png';
import Contactus from '../Components_2/Contactus'
import Journey from '../Components_2/Journey'
import Reviews2 from '../Components_2/Reviews2'
import TestimonialCard from '../Components_2/TestominalCard'
// import Mentors from '../Components_2/Mentors'
import Navvv from '../Components_2/Navvv'




export default function DoubtSection() {

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
    <div style={{maxWidth:'1600px'}}>
        <Navvv/>
       <Hero2/>

   <h2 className="highlights my-5 text-center " >...... Student Journey ......</h2>
   <Journey/> 
   <h2 className="highlights my-5 text-center " >Join Millions Of Students using Writo</h2>
<div className="mentorshead gradientheading">
       
         {/* <p> Faculty at writo</p>  */}
      </div>
   <Reviews2/>
   {/* <Mentors/> */}
    <TestimonialCard testimonials={testimonialsData}/> 
   <Contactus/>
   </div>

  )
}
