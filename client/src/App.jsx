import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Home from './Home';
import Choose from './Choose';
import Privacy from './Components/Privacy';
import TermandConditions from './Components/TermandConditions';
import Faq from './Components/Faq';
import Community from './Components/Community';
import Menotor_home1 from './Components/Mentor_home1';
import Services1 from './Components/Services1';
import ChatwithMentor from './Components/ChatwithMentor';
import Community_neet from './Components/Community_neet';
import About_Hero from './Components_2/About_Hero';
import NavScrollExample from './Components_2/NavScrollExample';
import About6to10 from './Pages/About6to10';
import AboutJee from './Pages/AboutJee';
import AboutNeet from './Pages/AboutNeet';
import Doubt_courses from './Pages/Doubt_courses';
import DoubtSection from './Pages/DoubtSection';
  import Blogs from './Components/Blogs';
import VideoPage from "./Pages/videopage/videopage";
import Waits from "./Pages/waits/Waits";
import JeePrice from "./Pages/jee price/jee_price";
import NeetPrice from "./Pages/neet price/neet_price";
import Class6befpay from "./Pages/class6-beforepay/class6_beforepay";
import AllCoursesPage from "./Components/CourdsesPages/CoursesPages";
import Class6 from "./Components/classes/class-6/class6";
import Class7 from "./Components/classes/class-7/class7";
import Class8 from "./Components/classes/class-8/class8";
import Class9 from "./Components/classes/class-9/class9";
import Class10 from "./Components/classes/class-10/class10";
import Class11 from "./Components/classes/class-11/class11";
import Class12 from "./Components/classes/class-12/class12";
import NEET from "./Components/classes/NeetCourses/NeetCourses";
import JEE from "./Components/classes/JEECourses/JeeCourses";
// class page before pay
import Class7befpay from "./Pages/class7-beforepay/class7_beforepay"
import Class8befpay from "./Pages/class8-beforepay/class8_beforepay";
import Class9befpay from "./Pages/class9-beforepay/class9_beforepay";
import Class10befpay from "./Pages/class10-beforepay/class10_beforepay";
import NeetTestSeries from "./Pages/Neet_Test_Series/NeettestSeries";
import JeeTestSeries from "./Pages/Jeet_Test_Series/JeetestSeries";
import AboutJeeCommunity from "./Pages/about-jee-community/about_jee_community";
// All india test series
import NeetAllIndiaTestseries from "./Pages/NeetAllIndiaTestSeries/NeetAllIndiaTestseries";
import JeeAllIndiaTestSeries from "./Pages/JeeAllIndiaTestSeries/JeeAllIndiaTestSeries";

import RegisterPage from "./Chatpages/RegisterPage";
import CheckEmailPage from "./Chatpages/CheckEmailPage";
import CheckPasswordPage from "./Chatpages/CheckPasswordPage";
// import Chathome from "../Chatpages/Chathome";
import MessagePage from "./Chatcomponents/MessagePage";
import AuthLayouts from "./layout";
import Forgotpassword from "./Chatpages/Forgotpassword";
import Chathome from './Chatpages/Chathome';
import ProtectedRoutes from './ProtectedRoutes';
import ResultsComponent from './Components/ResultsComponent';


function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/home' element={<Home />} />
      <Route path='/mentorship' element={<Menotor_home1 />} />
      <Route path='/careers' element={<ResultsComponent/>} />
      <Route path="/mentorservices" element={<Services1/>}></Route>
      <Route path='/why_writo' element={<Choose />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/terms' element={<TermandConditions />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/community' element={<Community/>}/>
      <Route path="/chatwithmentors" element={<ChatwithMentor/>}/>
      <Route path='/communityneet' element={<Community_neet/>}/>
      <Route path="/about6to10" element={<About6to10/>}/>
      <Route path="/aboutjee" element={<AboutJee/>}/>
      <Route path="/aboutneet" element={<AboutNeet/>}/>
      <Route path="/doubtcourses" element={<Doubt_courses/>}/>
      <Route path="/doubtsection" element={<DoubtSection/>}/>
      <Route path="/blogs" element={<Blogs/>}/>

      <Route path="/all" element={<AllCoursesPage />} />
   
      {/*<Route path="/class-6/maths" element={<Maths />} />*/}
      <Route path="/class-6beforepay" element={<Class6befpay />} />
      <Route path="/class-7beforepay" element={<Class7befpay />} />
      <Route path="/class-8beforepay" element={<Class8befpay />} />
      <Route path="/class-9beforepay" element={<Class9befpay />} />
      <Route path="/class-10beforepay" element={<Class10befpay />} />
      {/*neet and jee test series */}
      <Route path="/jee-test-series" element={<JeeTestSeries />} />
      <Route path="/neet-test-series" element={<NeetTestSeries />} />
      {/*<Route path="/class-6/chemistry" element={<Chemistry />} />*/}
      {/* <Route path="/class-6" element={<Class6 />} />
      <Route path="/class-7" element={<Class7 />} />
      <Route path="/class-8" element={<Class8 />} />
      <Route path="/class-9" element={<Class9 />} />
      <Route path="/class-10" element={<Class10 />} />*/}
      <Route path="/class-11" element={<Class11 />} />
      <Route path="/class-12" element={<Class12 />} /> 

      <Route path="/neet-courses" element={<NEET />} />
      <Route path="/jee-courses" element={<JEE />} />
      
      <Route path="/class-6/physics/video" element={<VideoPage />} />
      <Route path="/waits" element={< Waits/>} />
      <Route path="/neet-price" element={< NeetPrice/>} />
      {/* <Route path="/mains+advance" element={< JEEMainsAndAdvance/>} />*/}
      <Route path="/jee-price" element={< JeePrice/>} />
      <Route path="/neet-all-india-test-series" element={< NeetAllIndiaTestseries/>} />
      <Route path="/jee-all-india-test-series" element={< JeeAllIndiaTestSeries/>} />


      <Route path="/register" element={<AuthLayouts><RegisterPage /></AuthLayouts>} />
        <Route path="/email" element={<AuthLayouts><CheckEmailPage /></AuthLayouts>} />
        <Route path="/password" element={<AuthLayouts><CheckPasswordPage /></AuthLayouts>} />
        {/* <Route path="/forgot-password" element={<AuthLayouts><ForgotPassword /></AuthLayouts>} /> */}
  
        <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Chathome />}>
          <Route path=":userId" element={<MessagePage />} />
        </Route>
        </Route>


    </Routes>
  );
}

export default App;
