/* eslint-disable react/no-unescaped-entities */
//import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import MathsIcon from "../../assets/class6-maths.jpg";
import ScienceIcon from "../../assets/class6-physics.png";

// import Class6 from "../../assets/class-6.jpg";
// import Class7 from "../../assets/class-7.jpg";
// import Class8 from "../../assets/class-8.jpg";
// import Class9 from "../../assets/class-9.jpg";
// import Class10 from "../../assets/class-10.jpg";
// import Class11 from "../../assets/class-11.jpg";
// import Class12 from "../../assets/class-12.jpg";
import NEET from "../../assets/neet.jpg";
import JEE from "../../assets/jee.jpg";

function CoursesPages() {
  const classes = [
    {
      title: "Class 6",
      description: "All subjects covered",
      students: "3000+ Students Enrolled",
      destination: "/class-6/beforepay",
    },
    {
      title: "Class 7",
      description: "All subjects covered",
      students: "3000+ Students Enrolled",
      destination: "/class-7/beforepay",
    },
    {
      title: "Class 8",
      description: "All subjects covered",
      students: "3000+ Students Enrolled",
      destination: "/class-8/beforepay",
    },
    {
      title: "Class 9",
      description: "All subjects covered",
      students: "3000+ Students Enrolled",
      destination: "/class-9/beforepay",
    },
    {
      title: "Class 10",
      description: "All subjects covered",
      students: "3000+ Students Enrolled",
      destination: "/class-10/beforepay",
    },
  ];
  return (
    <>
      {/* Our Features Section */}

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mt-8">Our Features</h2>
        <div className="relative mt-10 w-full max-w-md mx-auto">
          <div className="relative w-80 h-72 mx-auto mt-10">
            <div className="absolute inset-0 border-dashed border-4 border-black rounded-full"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 flex flex-col items-center">
              <img src={NEET} alt="Practice Tests" className="w-20 h-20" />
              <p className="mt-2 text-center">Practice Tests</p>
            </div>
            <div className="absolute   left-1/2 transform translate-x-1/2 -bottom-10 flex flex-col items-center">
              <img src={NEET} alt="Video Lectures" className="w-20 h-20" />
              <p className="mt-2 text-center">Video Lectures</p>
            </div>
            <div className="absolute   right-2/4 transform -translate-x-1/2 -bottom-10 flex flex-col items-center">
              <img src={NEET} alt="Video Lectures" className="w-20 h-20" />
              <p className="mt-2 text-center">Video Lectures</p>
            </div>
            <div className="absolute -left-10 top-1/3 transform -translate-y-1/3  tra flex flex-col items-center">
              <img src={NEET} alt="Happy Customers" className="w-20 h-20" />
              <p className="mt-2 text-center">Happy Customers</p>
            </div>
            <div className="absolute -right-10 top-1/3 transform -translate-y-1/3 flex flex-col items-center">
              <img src={NEET} alt="Happy Customers" className="w-20 h-20" />
              <p className="mt-2 text-center">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Classes Available Section */}

      <div className="flex flex-col items-center mt-16">
        <h2 className="text-2xl font-bold mt-8">Classes Available</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="border-2 border-[#488B80] rounded-lg shadow-md hover:shadow-lg transition-shadow w-80"
            >
              <Link to={`${classItem.destination}`}>
                <h3 className="text-xl font-semibold text-white p-2 bg-[#488B80] rounded-b-lg mb-2 text-center">
                  {classItem.title}
                </h3>
              </Link>
              <p className="mb-1 p-2 text-center">{classItem.description}</p>
              <p className="font-bold text-[#488B80] p-2 text-center">
                {classItem.students}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/*Subjects Covered Section */}

     
      <div className="flex flex-col items-center justify-center mt-16 bg-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-8">Subjects Covered</h1>
      <div className="grid grid-cols-2 md:grid-cols-4  gap-x-20">
        <div className="flex flex-col items-center">
          <img src={ScienceIcon} alt="Social" className=" w-32 md:h-32 rounded-lg mb-4 hover:scale-125" />
          <p className="text-center text-lg md:text-xl">Social</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={MathsIcon} alt="Maths" className=" w-32 md:h-32 rounded-lg mb-4 hover:scale-125" />
          <p className="text-center text-lg md:text-xl">Maths</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={ScienceIcon} alt="Science" className=" w-32 md:h-32 rounded-lg mb-4 hover:scale-125" />
          <p className="text-center text-lg md:text-xl">Science</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={MathsIcon} alt="Competitive" className=" w-32 md:h-32 rounded-lg mb-4 hover:scale-125" />
          <p className="text-center text-lg md:text-xl">Competitive</p>
        </div>
      </div>
    </div>

    {/*lurning companion section */}
    <div className="flex flex-col items-center justify-center mt-32 bg-white p-4 md:p-8 space-y-8">
    <h1 className="text-black text-xl font-bold mb-8 text-center">
      The Learning App is every student's favourite learning companion
    </h1>
    
    {/* Comprehensive Curriculum Section */}
    <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center justify-center">
      <div className="flex flex-col md:flex-row w-full md:w-11/12 gap-y-8 md:gap-x-16">
        <img src={JEE} alt="Comprehensive Curriculum" className="w-full md:w-1/2 h-64 md:h-72 rounded-3xl border border-black" />
        <div className="flex flex-col justify-center gap-y-4 md:gap-y-7">
          <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">Comprehensive curriculum</h2>
          <p className="text-md md:text-sm w-full md:w-3/4 text-center md:text-left mx-auto md:mx-0">
            The app should cover all the major subjects that students in grades 6-10 typically learn, such as math, English, science, social studies, and history.
          </p>
        </div>
      </div>
    </div>
    
    {/* Engaging Content Section */}
    <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center justify-center">
      <div className="flex flex-col md:flex-row w-full md:w-11/12 gap-y-8 md:gap-x-16">
        <div className="flex flex-col justify-center items-center gap-y-4 md:gap-y-7">
          <h2 className="text-xl md:text-2xl font-bold text-center md:text-left md:mr-20">Engaging Content</h2>
          <p className="text-md md:text-sm w-full md:w-3/4 text-center md:text-left mx-auto md:mx-0">
            The app should use a variety of engaging content formats to keep students interested, such as interactive lessons, videos, simulations, games, and quizzes.
          </p>
        </div>
        <img src={NEET} alt="Engaging Content" className="w-full md:w-1/2 h-64 md:h-72 rounded-3xl border border-black" />
      </div>
    </div>
    
    {/* Personalized Learning Section */}
    <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center justify-center">
      <div className="flex flex-col md:flex-row w-full md:w-11/12 gap-y-8 md:gap-x-16">
        <img src={JEE} alt="Personalized Learning" className="w-full md:w-1/2 h-64 md:h-72 rounded-3xl border border-black" />
        <div className="flex flex-col justify-center gap-y-4 md:gap-y-7">
          <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">Personalized learning</h2>
          <p className="text-md md:text-sm w-full md:w-3/4 text-center md:text-left mx-auto md:mx-0">
            The app should allow students to learn at their own pace and level by providing personalized learning paths. This could include adaptive learning technology that adjusts the difficulty of the content based on the student's performance.
          </p>
        </div>
      </div>
    </div>
    
    {/* Performance Tracking Section */}
    <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center justify-center">
      <div className="flex flex-col md:flex-row w-full md:w-11/12 gap-y-8 md:gap-x-16">
        <div className="flex flex-col justify-center md:items-center gap-y-4 md:gap-y-7">
          <h2 className="text-xl md:text-2xl font-bold text-center md:mr-8 md:text-left">Performance tracking</h2>
          <p className="text-md md:text-sm w-full md:w-3/4 text-center md:text-left mx-auto md:mx-0">
            The app should track student progress and provide feedback to help them identify areas where they need improvement. This could include features such as progress reports, quizzes, and diagnostic tests.
          </p>
        </div>
        <img src={NEET} alt="Performance Tracking" className="w-full md:w-1/2 h-64 md:h-72 rounded-3xl border border-black" />
      </div>
    </div>
  </div>
    </>
  );
}

export default CoursesPages;
