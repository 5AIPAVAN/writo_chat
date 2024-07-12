import React from 'react'
import zoology from './zoology.png'
import mathss from './mathss.png'
import biologyy from './biologyy.png'
import chemistryy from './chemistryy.png'
import physicss from './physicss.png'
import playbtn from './PlayBtn.png'
import { Link } from 'react-router-dom';
import './ConnectCoaches.css'

export default function ConnectCoaches() {
  return (
    <div className='outerjourney3 my-5'>

    <div className="innerjourney3">

    <Link to="/" style={{ textDecoration: 'none' }}>
<div className="box13" style={{backgroundColor:'#dfeeeb',backgroundImage: `url('mathss.png')`}}> 
    <div className="subjectdetails">
    <h2 className="subject">Mathematics</h2>
    <p className="faculty">by Prashant Sir</p>
    </div>
    <div className="subjectimages">

    <img class="inner-image13" src={mathss} alt=""/>
    <img class="play" src={playbtn} alt=""/>   
    </div>

</div>
</Link>

<Link to="/" style={{ textDecoration: 'none' }}>
<div className="box13" style={{backgroundColor:'#fae6e9'}} > 
<div className="subjectdetails">
    <h2 className="subject">Physics</h2>
    <p className="faculty">by Prashant Sir</p>
    </div>
    <div className="subjectimages">
    <img class="inner-image23" src={physicss} alt=""/>
    <img class="play" src={playbtn} alt=""/>   
    </div>

</div>
</Link>

<Link to="/" style={{ textDecoration: 'none' }}>
<div className="box13" style={{backgroundColor:'#f2e7fa'}}>  
<div className="subjectdetails">
    <h2 className="subject">Chemistry</h2>
    <p className="faculty">by Prashant Sir</p>
    </div>
    <div className="subjectimages">
    <img class="inner-image33" src={chemistryy} alt=""/>
    <img class="play" src={playbtn} alt=""/>   
    </div>

</div>
</Link>


<Link to="/" style={{ textDecoration: 'none' }}>
<div className="box13" style={{backgroundColor:'#d4f1d3'}}>  


<div className="subjectdetails">
    <h2 className="subject">Biology</h2>
    <p className="faculty">by Prashant Sir</p>
    </div>
    <div className="subjectimages">
    <img class="inner-image43" src={biologyy} alt=""/>
    <img class="play" src={playbtn} alt=""/>   
    </div>

</div>
</Link>


<Link to="/" style={{ textDecoration: 'none' }}>
<div className="box13" style={{backgroundColor:'#e4d6a7'}}>  

<div className="subjectdetails">
    <h2 className="subject">Zoology</h2>
    <p className="faculty">by Prashant Sir</p>
    </div>
    <div className="subjectimages">
    <img class="inner-image43" src={zoology} alt=""/>
    <img class="play" src={playbtn} alt=""/>   
    </div>

</div>
</Link>


    </div>
  
</div>
  )
}
