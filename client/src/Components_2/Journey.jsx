import React from 'react'
import journey1image from './journey1image.png'
import journey2image from './journey2image.png'
import journey3image from './journey3image.png'
import journey4image from './journey4image.png'
import './Journey.css'


export default function Journey() {
  return (
    <div className='outerjourney my-5'>

        <div className="innerjourney">


<div className="box1" style={{backgroundColor:'#efeffe'}}> 
<div class="notification-circle">1</div>
    Enroll For One to One Mentorship Program.
    <img class="inner-image1" src={journey1image} alt=""/>
</div>

<div className="box1 hadmargin" style={{backgroundColor:'#fcf0f2'}} > 
<div class="notification-circle">2</div>
    Get your Personalized classes.
    <img class="inner-image2" src={journey2image} alt=""/>
</div>

<div className="box1" style={{backgroundColor:'#efeffe'}}>  
<div class="notification-circle">3</div>
   One to One live session with alumni of IIT's and NIT's.
   <img class="inner-image3" src={journey3image} alt=""/>
</div>

<div className="box1 hadmargin" style={{backgroundColor:'#fcf0f2'}}>  
<div class="notification-circle">4</div>
    Get your doubts solved with detailed explanation.
    <img class="inner-image4" src={journey4image} alt=""/>
</div>


        </div>
      
    </div>
  )
}
