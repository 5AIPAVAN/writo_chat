import React from 'react'
import heroimage from './heroimage.png'
import curvedline from './Vector 514.png'
import './Hero3.css'
import Heroimage3 from './Heroimage3.png'

export default function Hero3() {
  return (
    <div className='outerhero33'>

            <div className="innerhero33">



                <div className="left33">
                    <div className="con133">
                        <p className='Greentitle33'> Your Personal <span className='yellowword3'>Coach</span> is just a click away</p>
                        <img src={curvedline} className="curvedline33" alt="..." />
                    </div>

                    <div className="con233">
                        <h2 className='Blacktitle'>Connect Live With Your Coach</h2>
                        <p>Have a comprehensive experience</p>
                        <button type="button" class="btn btn-dark my-4" style={{color:'white',backgroundColor:'black',padding:'12px',borderRadius:'21px'}}>Subscribe now</button>
                    </div>
                </div>
                <div className="right33">


                    <img src={Heroimage3} className="heroimagee33" alt="..." />

                </div>


            </div>

        </div>
  )
}
