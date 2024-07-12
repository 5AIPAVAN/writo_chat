import React from 'react'
import './Whyjoin.css'

export default function Whyjoin() {
  return (
    <div className='outerwhyjoin'>

     <h1 className='text-centered aimheading my-4 mx-2'>
            Why join community?
        </h1>

        <div className="innerwhyjoin my-4">
            <div className="join">
                <p className='joinheading my-2'>Connect and Collaborate</p>
                <p className='joincontent'>with like minded people across the country</p>
            </div>
            <div className="join ">
            <p className='joinheading my-2'>Participate In Challenges</p>
            <p className='joincontent'>To test your knowledege and uplevel yourself</p>
            </div>
            <div className="join">
            <p className='joinheading my-2'>Discuss,deliberate,share</p>
            <p className='joincontent'>On relevant topics through blogs and forums</p>
            </div>
            <div className="join">
            <p className='joinheading my-2'>Learn all Subjects</p>
            <p className='joincontent'>Learn skills through webinars with expert coaches</p>
            </div>
        </div>
      
    </div>
  )
}
