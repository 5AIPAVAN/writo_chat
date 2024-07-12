/* eslint-disable react/no-unescaped-entities */
import Heroimg from "../../assets/aboutjeeimg.png";
import Writocomm1 from "../../assets/writocomm1.png";
import Writocomm2 from "../../assets/writocomm2.png";
import Writocomm3 from "../../assets/writocomm3.png";
import Contactus from "../../Components/Contactus";
import { RxCross2 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

function AboutJeeCommunity() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <nav className="bg-[#a5cac5] w-full">
    <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-12">
      <a href="#" className="text-[#1AB780] font-semibold md:hidden">
        About
      </a>
      <div className="hidden md:flex items-center space-x-10">
        <a href="#" className="text-gray-900 font-semibold">
          Community
        </a>
        <a href="#" className="text-[#1AB780] font-semibold">
          About
        </a>
        <a href="#" className="text-gray-900">
          FAQ
        </a>
        <a href="#" className="text-gray-900">
          Community Guidelines
        </a>
      </div>
      <div className="flex items-center space-x-10">
        <button className="hidden md:block px-16 py-1 border border-gray-400 font-semibold rounded-lg hover:border-black">
          Search class
        </button>
        <button className="hidden md:block px-4 py-2 bg-[#488B80] text-white rounded">
          View plans
        </button>
        <button className="md:hidden block text-gray-900" onClick={toggleMenu}>
          {menuOpen ? <RxCross2 className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
        </button>
      </div>
    </div>
    <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
      <div className="flex flex-col items-center space-y-4 py-4">
        <a href="#" className="text-gray-900 font-semibold">
          Community
        </a>
        
        <a href="#" className="text-gray-900">
          FAQ
        </a>
        <a href="#" className="text-gray-900">
          Community Guidelines
        </a>
        <button className="px-16 py-1 border border-gray-400 font-semibold rounded-lg hover:border-black">
          Search class
        </button>
        <button className="px-4 py-2 bg-[#488B80] text-white rounded">
          View plans
        </button>
      </div>
    </div>
  </nav>

      {/*Hero section */}

      <section className="bg-gradient-to-r from-[#6bbbacc0] to-[#ffe07081]  p-4 md:p-8">
        <div className="container mx-auto p-4 md:p-8">
          <h1 className="text-[#488B80] text-xl text-center md:text-2xl lg:text-3xl font-semibold mb-4">
            About Writo Student Community for JEE Students
          </h1>
          <div className="mt-6 md:mt-12 px-4 md:px-20">
            <p className="text-gray-700 text-sm md:text-base lg:text-lg mb-8">
              Writo Student Community is a unique initiative by Writo Education
              designed to foster students' knowledge through collaborative
              learning and resource sharing.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-x-4 md:gap-x-8 justify-center">
              <img
                src={Heroimg}
                alt="Community"
                className="w-full md:w-1/2 lg:w-1/3 rounded-lg mb-4 md:mb-0"
              />
              <div className="text-left">
                <p className="text-gray-700 text-sm md:text-base lg:text-lg mb-2">
                  Join interactive study groups and participate in workshops
                  tailored to JEE students. Learn collaboratively with peers,
                  tackling complex problems and enhancing your understanding
                  through group discussions.
                </p>
                <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                  Engage in peer-to-peer learning sessions where students can
                  teach and learn from one another.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*writo students communty aims */}
      <section className=" py-8 px-24">
        <div className="container mx-auto text-center">
          <h1 className="text-green-700 text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
            Writo Student community aims to
          </h1>
          <div className="flex flex-col md:flex-row justify-around items-center  md:space-x-8">
            <div className="flex flex-col items-center mb-8 md:mb-0 md:px-8">
              <img src={Writocomm1} alt="Aim 1" className="w-24 h-24 mb-4" />
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                Provide a platform for students to come together for learning
                and sharing experiences
              </p>
            </div>
            <div className="hidden md:block h-44 border-l border-dashed border-gray-500"></div>
            <div className="flex flex-col items-center mb-8 md:mb-0  md:px-8">
              <img src={Writocomm2} alt="Aim 2" className="w-24 h-24 mb-4" />
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                Leverage their Knowledge to create all subjects enabled social
                impact solutions
              </p>
            </div>
            <div className="hidden md:block h-44 border-l border-dashed border-gray-500"></div>
            <div className="flex flex-col items-center ">
              <img src={Writocomm3} alt="Aim 3" className="w-24 h-24 mb-4" />
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                Spread JEE awareness in an inclusive way
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* why join community section */}

      <div className="flex flex-col items-center p-6">
        <h2 className="text-xl font-semibold mb-12 text-[#1D5F6B]">
          Why join community?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full md:px-24">
          <div className="border border-[#1D5F6B] p-4 rounded-lg text-center">
            <h3 className="font-semibold mb-2 text-[#1D5F6B]">
              Connect and collaborate
            </h3>
            <p>With like minded people across the country.</p>
          </div>
          <div className="border border-[#1D5F6B] p-4 rounded-lg text-center">
            <h3 className="font-semibold mb-2 text-[#1D5F6B]">
              Participate in Tests
            </h3>
            <p>To test your knowledge and up level yourself.</p>
          </div>
          <div className="border border-[#1D5F6B] p-4 rounded-lg text-center">
            <h3 className="font-semibold mb-2 text-[#1D5F6B]">
              Discuss, deliberate, share
            </h3>
            <p>On relevant topics through blogs and forums.</p>
          </div>
          <div className="border border-[#1D5F6B] p-4 rounded-lg text-center">
            <h3 className="font-semibold mb-2 text-[#1D5F6B]">
              Clear all Doubts
            </h3>
            <p>Clear all your doubts using doubt clearing session.</p>
          </div>
        </div>
      </div>

      {/*who can join the community section */}

      <h1 className="text-xl text-center font-semibold mb-12 text-[#1D5F6B] mt-12">
        Who can join community?
      </h1>
      <p className="font-medium text-center mb-12 text-black text-lg">
        The community will be open for students from across the country – from
        School students pursuing 6th to 10th standards.
      </p>

      <h1 className="text-xl text-center font-semibold mb-12 text-[#1D5F6B] mt-12">
        How to join community?
      </h1>
      <div className="flex flex-col md:gap-y-2 sm:gap-y-0 md:ml-52 sm:ml-8 mb-12">
        <div className="flex flex-row gap-x-2">
          <p className="text-black text-4xl">.</p>
          <p className="mt-5">Visit the Writo Student Community Home page</p>
        </div>
        <div className="flex flex-row gap-x-2">
          <p className="text-black text-4xl">.</p>
          <p className="mt-5">
            {" "}
            Click on Sign Up; fill in the required details and submit
          </p>
        </div>
        <div className="flex flex-row gap-x-2">
          <p className="text-black text-4xl">.</p>
          <p className="mt-5">
            A verification email will be sent on your registered email-ID
          </p>
        </div>
        <div className="flex flex-row gap-x-2">
          <p className="text-black text-4xl">.</p>
          <p className="mt-5">
            Open the email, click on the link provided to verify your email
            address
          </p>
        </div>
        <div className="flex flex-row gap-x-2">
          <p className="text-black text-4xl">.</p>
          <p className="mt-5">
            This will create your profile and confirm your registration as a
            member of the Writo
          </p>
        </div>
        <div className="flex flex-row gap-x-2">
          <p className="text-black text-4xl">.</p>
          <p className="mt-5">
            You can now Log in anytime using your Email address and Password
          </p>
        </div>
      </div>

      <Contactus/>
    </>
  );
}

export default AboutJeeCommunity;
