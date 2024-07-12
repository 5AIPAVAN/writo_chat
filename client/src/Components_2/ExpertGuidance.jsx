import React from 'react'
import './Expert.css'
import img1 from './img1.png'

export default function ExpertGuidance() {
  return (
    <div className="outerexpert my-5">
        <div className="innerexpert">
        <div className="imagee">
        <img className="imgg" src={img1} alt="missing image" />
        </div>

        <div className="content">
            <h3 className='gradientheading'>Unlock Your Potential With Expert Guidance ! </h3>

            <p className='para'>Tailored advice and support from experienced mentors.Join Our Mentorship Program Today! Transform your aspirations into achievements with our dedicated mentors.</p>
 
            <button  type="button" style={{backgroundColor:'#488b80',fontWeight:'600'}} class="btn btn-success my-2">Join Our mentorship Program</button>
        </div>

        </div>
      
    </div>
  )
}
