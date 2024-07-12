import React from 'react'

import Mentor_nav from './Mentor_nav'
import Hero from './Hero'
import Cards_section from './Card_section'
import Promotion from './Promotions'

import Testimonial from './Testimonial'
import GetStarted from './GetStarted'
import MentorSection from './MentorSection'
import Faq1 from './Faq1'
import Community_footer from './Community_footer'
import Navbar from './Navbar'
const Mentor_home1 = () => {
  return (
    <div>
         <Navbar/>
      <Mentor_nav/>
   
      <Hero/>
      <Cards_section></Cards_section>
      <Promotion/>
      <Testimonial/>
      <GetStarted/>
      <MentorSection/>
      <Faq1/>
      <Community_footer/>
    </div>
  )
}

export default Mentor_home1
