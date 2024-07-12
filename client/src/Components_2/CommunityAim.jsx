import React from 'react'
import aimimg1 from './aimimg1.png'
import aimimg2 from './aimimg2.png'
import aimimg3 from './aimimg3.png'
import './CommunityAim.css'

export default function CommunityAim() {
  return (
    <div className='outeraim my-20'>
       <h1 className='text-centered aimheading my-4 mx-2'>
            Writo Student Community Aims to
        </h1>
      <div className="inneraim">

        <div className="aim">
        <img src={aimimg1} className="aboutheroimage" alt="..." />
        <p className='aim_para'>Provide a platform for students to come together for learning and sharing experiences</p>
        </div>
        <div className="aim">
        <img src={aimimg2} className="aboutheroimage" alt="..." />
        <p className='aim_para'>Leverage their Knowledge to create all subjects enabled social impact solutions</p>
        </div>
        <div className="aim">
        <img src={aimimg3} className="aboutheroimage" alt="..." />
        <p className='aim_para'>Spread all subjects awareness in an inclusive way</p>
        </div>


      </div>
    </div>
  )
}
