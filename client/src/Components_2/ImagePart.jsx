import React from 'react'
import class6 from './class6.png'
import class7 from './class7.png'
import class8 from './class8.png'
import class9 from './class9.png'
import './ImagePart.css'

export default function ImagePart() {
  return (
    <div className='outerpartimg'>
    <div className='innerpartimg'>
       <img src={class6} alt="NOT FOUND" />
       <img src={class7} alt="NOT FOUND" />
       <img src={class8} alt="NOT FOUND" />
       <img src={class9} alt="NOT FOUND" />
    </div>
    </div>
  )
}
