import React from 'react'
import Hero3 from '../Components_2/Hero3'
import NavScrollExample from '../Components_2/NavScrollExample'
import ConnectCoaches from '../Components_2/ConnectCoaches'
import Contactus from '../Components_2/Contactus'
import Navvv from '../Components_2/Navvv'
import GetMore from '../Components_2/GetMore'

export default function Doubt_courses() {
  return (
    <div>
          <Navvv/>
          <Hero3/>
          <h2 className="highlights my-5 text-center " >...... Get Connect to your Coaches ......</h2>
          <ConnectCoaches/>
          <h2 className="highlights my-5 text-center " >...... Get More With Writo ......</h2>
          <GetMore/>
          <Contactus />
    </div>
  )
}
