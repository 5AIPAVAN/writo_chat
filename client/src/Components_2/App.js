import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Contactus from './Contactus';
import Courses from './Courses';
import Courses2 from './Courses2';
import ExpertGuidance from './ExpertGuidance';
import Foundationalcourse from './Foundationalcourse';
import ImagePart from './ImagePart';
import Imagess from './Imagess';
import NavScrollExample from './NavScrollExample';
import Mentors from './Mentors';
import Reviews from './Reviews';
import Journey from './Journey';
import Reviews2 from './Reviews2';
import Reviews3 from './Reviews3';
import HeroSection from './HeroSection';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import ConnectCoaches from './ConnectCoaches';
import About_Hero from './About_Hero';
import CommunityAim from './CommunityAim';
import Whyjoin from './Whyjoin';
import Whocanjoin from './Whocanjoin';
import Howtojoin from './Howtojoin';

function App() {
  return (
    <Router>
   <div style={{maxWidth:'1600px'}}>
   <NavScrollExample/>

   {/* <div className="font-[Poppins] h-screen overflow-h bg1">
            <HeroSection/>
        </div> */}


 {/* <Hero2/> */}
{/* <Hero3/>  */}
<About_Hero/>
<CommunityAim/>
<Whyjoin/>
<Whocanjoin/>
<Howtojoin/>
{/* <ConnectCoaches/> */}

   {/* <h2 className="highlights text-center my-4" >..... What We Offer .....</h2> */}
   {/* <Courses/>
   <Courses2/> */}
   {/* <Foundationalcourse/> */}
   {/* <h2 className="coursetitle my-5 text-center" > Foundational Courses</h2> */}
   {/* <Imagess/> */}
   {/* <ImagePart/> */}
   
   {/* <h2 className="coursetitle my-5 text-center" > Categories</h2>
   <Imagess/>
   <ExpertGuidance/>
   <h2 className="highlights text-center" >...... Suggestions ......</h2>
   <h2 className="coursetitle my-5 text-center" > Foundational Courses</h2> */}
   {/* <Imagess/> */}
   {/* <ImagePart/> */}
 
   {/* <Reviews text="This is a simple marquee component in React!" speed={10} /> */}
   <div className="mentorshead gradientheading">
        {/* <h1 className='text-centered'>Join Millions Of Students using Writo</h1> */}
        {/* <p> Faculty at writo</p> */}
      </div>
   {/* <Reviews2/> */}
   {/* <Reviews3/> */}
  
   {/* <h2 className="highlights my-5 text-center " >...... Student Journey ......</h2>
   <Journey/> */}
   <Contactus/>
   </div>
   </Router>
  );
}




export default App;
