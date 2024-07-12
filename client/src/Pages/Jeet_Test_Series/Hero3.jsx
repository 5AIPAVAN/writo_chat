/* eslint-disable react/no-unescaped-entities */

import curvedline from '../../assets/Vector 515.png'
import './Hero3.css'
import Heroimage3 from '../../assets/jee3.png'

export default function Hero3() {
  return (
    <>
    <div className='outerhero3'>

            <div className="innerhero3">



                <div className="left3">
                    <div className="con13">
                        <h2 className='test my-4'> JEE online Test series</h2>
                        <p className='Greentitle3'> Boost your JEE-UG preparation with <br/> Writo's Online Test Series,</p>
                        <img src={curvedline} className="curvedline3" alt="..." />
                    </div>

                    <div className="con23">
                        <h2 className='Blacktitle3'>This program is designed to enhance your<br/> speed and memory retention, which are <br/> crucial for Jee success.</h2>
                        
                    </div>
                </div>
                <div className="right3">


                    <img src={Heroimage3} className="heroimagee3 relative top-6 -left-12 " alt="..." />

                </div>


            </div>

            

        </div>
        <div className='flex justify-center items-center relative -top-14  sm:p-2'>
        <div className="offer">
        <p>Hurry Up ! offer on WAITS ends soon</p>
    </div>
        </div>
            </>
  )
}
