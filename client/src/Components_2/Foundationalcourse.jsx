import React from 'react'
import './Foundationalcourses.css';
import class6 from './class6.png'

export default function Foundationalcourse() {
  return (
    <div className="outerfoundational"> 
    <h2> Foundational Course</h2>
    <div className="innerfoundational"> 
    <img src={class6} style={{width:'250px'}} alt="Placeholder image" />
    <img src={class6} style={{width:'250px'}} alt="Placeholder image" />
    <img src={class6} style={{width:'250px'}} alt="Placeholder image" />
    <img src={class6} style={{width:'250px'}} alt="Placeholder image" />
    </div>
      
    </div>
  )
}
