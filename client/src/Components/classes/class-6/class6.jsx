/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";
import PHYSICS_IMG from "../../..//assets/class6-physics.png";
import MATHS_IMG from "../../../assets/claas6-maths.jpg";
import BIOLOGY_IMG from "../../../assets/class6-biology.jpg";

import CHEMISTRY_IMG from "../../../assets/class6-chemistry.png";

function class6() {
  return (
    <div className="bg-[#FFFFFF]">
      <header className=" p-8">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-bold text-black">Online Coaching</h1>
            <h1 className="text-3xl font-bold text-black">Class 6</h1>
          </div>
          <p className="mt-4 text-lg p-4 rounded-lg bg-[#288f8db0] text-gray-700">
            Writo Education's provides affordable Class 6 online coaching,
            offering the latest study material, mock test series, lectures, and
            live classes. Our best Class 6 online coaching in India ensures a
            state-of-the-art learning experience for students of Class 12, Class
            10, & Class 9, following the NCERT pattern. The best faculty members
            conduct live classes, providing solutions to students' doubts
            through our excellent doubt app.
          </p>
        </div>
      </header>
      <main className="container mx-auto py-6 ">
        <div className=" bg-[#FFFFFF] shadow-md rounded-lg border border-gray-400 overflow-hidden flex flex-col md:flex-row mb-4 ">
          <div className="w-full md:w-1/3 h-72 p-2">
            <img
              src={PHYSICS_IMG}
              alt="Fundo (Class 6th)"
              className="w-full h-full object-fit rounded-lg" // Added rounded-lg here
            />
          </div>
          <div className="flex flex-col flex-1 p-6 ml-12  ">
            <h2 className="text-3xl font-bold mb-2">physics </h2>
            <div className="flex flex-row flex-wrap md:flex-nowrap mb-4">
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0 mr-4 mb-2 md:mb-0 ">
                <p className="text-lg font-lg text-[#2b8b89ea]">20+</p>
                <p className="text-sm text-gray-600">Assignments</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-lg text-[#2b8b89ea]">120+</p>
                <p className="text-sm text-gray-600">Lectures</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-lg text-[#2b8b89ea]">10</p>
                <p className="text-sm text-gray-600">Mock Test</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2   mr-4 mb-2 md:mb-0">
                <p className="text-lg font-lg text-[#2b8b89ea]">20+</p>
                <p className="text-sm text-gray-600">Practice Test</p>
              </div>
            </div>
            <div className="relative py-4 px-2 font-bold  bg-yellow-400   w-64 transform -skew-x-35  flex items-center justify-center">
              {" "}
              Special Discounted Price
            </div>
            <div className="flex flex-row gap-x-4 mt-4">
              <LuIndianRupee className="w-8 h-8" />
              <div className="text-3xl text-black font-semibold">2999</div>
              <div className="relative inline-block text-lg  text-black crossed">
                <div className="relative top-[17px] border bg-black border-red-600 w-12 transform rotate-[27deg]"></div>
                6999
                <div className="relative bottom-[14px] border bg-black border-red-600  w-12 transform -rotate-[27deg]"></div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end mr-16 ">
              <Link to={"/class-6/physics"}>
                <button className="bg-[#2b8b89ea] hover:bg-[#2b8b89] text-white px-10 py-2 rounded">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row mb-4 border border-gray-400">
          <div className="w-full md:w-1/3 h-72 p-2">
            <img
              src={CHEMISTRY_IMG}
              alt="Fundo (Class 6th)"
              className="w-full h-full object-fit rounded-lg" // Added rounded-lg here
            />
          </div>
          <div className="flex flex-col flex-1 p-6 ml-12  ">
            <h2 className="text-3xl font-bold mb-2">Chemistry </h2>
            <div className="flex flex-row flex-wrap md:flex-nowrap mb-4">
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0 mr-4 mb-2 md:mb-0 ">
                <p className="text-lg font-lg text-[#2b8b89ea]">20+</p>
                <p className="text-sm text-gray-600">Assignments</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-lg text-[#2b8b89ea]">120+</p>
                <p className="text-sm text-gray-600">Lectures</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-lg text-[#2b8b89ea]">10</p>
                <p className="text-sm text-gray-600">MOCK TEST</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-lg text-[#2b8b89ea]">20+</p>
                <p className="text-sm text-gray-600">Practice</p>
              </div>
            </div>
            <div className="relative py-4 px-2 font-bold  bg-yellow-400   w-64 transform -skew-x-35  flex items-center justify-center">
              {" "}
              Special Discounted Price
            </div>
            <div className="flex flex-row gap-x-4 mt-4">
              <LuIndianRupee className="w-8 h-8" />
              <div className="text-3xl text-black font-semibold">2999</div>
              <div className="relative inline-block text-lg  text-black crossed">
                <div className="relative top-[17px] border bg-black border-red-600 w-12 transform rotate-[27deg]"></div>
                6999
                <div className="relative bottom-[14px] border bg-black border-red-600  w-12 transform -rotate-[27deg]"></div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end mr-16">
              <Link to={"/class-6/chemistry"}>
                <button className="bg-[#2b8b89ea] hover:bg-[#2b8b89] text-white px-10 py-2 rounded">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row mb-4 border border-gray-400">
          <div className="w-full md:w-1/3 h-72 p-2">
            <img
              src={MATHS_IMG}
              alt="Fundo (Class 6th)"
              className="w-full h-full object-fit rounded-lg" // Added rounded-lg here
            />
          </div>
          <div className="flex flex-col flex-1 p-6 ml-12 ">
            <h2 className="text-3xl font-bold mb-2">Maths </h2>
            <div className="flex flex-row flex-wrap md:flex-nowrap mb-4">
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0 mr-4 mb-2 md:mb-0 ">
                <p className="text-lg font-lg text-[#2b8b89ea]">20+</p>
                <p className="text-sm text-gray-600">Assignments</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-lg text-[#2b8b89ea]">120+</p>
                <p className="text-sm text-gray-600">Lectures</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-lg text-[#2b8b89ea]">10</p>
                <p className="text-sm text-gray-600">MOCK TEST</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-lg text-[#2b8b89ea]">20+</p>
                <p className="text-sm text-gray-600">Practice</p>
              </div>
            </div>
            <div className="relative py-4 px-2 font-bold  bg-yellow-400   w-64 transform -skew-x-35  flex items-center justify-center">
              {" "}
              Special Discounted Price
            </div>
            <div className="flex flex-row gap-x-4 mt-4">
              <LuIndianRupee className="w-8 h-8" />
              <div className="text-3xl text-black font-semibold">2999</div>
              <div className="relative inline-block text-lg  text-black crossed">
                <div className="relative top-[17px] border bg-black border-red-600 w-12 transform rotate-[27deg]"></div>
                6999
                <div className="relative bottom-[14px] border bg-black border-red-600  w-12 transform -rotate-[27deg]"></div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end mr-16">
              <Link to={"/class-6/physics"}>
                <button className="bg-[#2b8b89ea] hover:bg-[#2b8b89] text-white px-10 py-2 rounded">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row mb-4 border border-gray-400">
          <div className="w-full md:w-1/3 h-72 p-2">
            <img
              src={BIOLOGY_IMG}
              alt="Fundo (Class 6th)"
              className="w-full h-full object-fit rounded-lg" // Added rounded-lg here
            />
          </div>
          <div className="flex flex-col flex-1 p-6 ml-12 ">
            <h2 className="text-3xl font-bold mb-2">Biology</h2>
            <div className="flex flex-row flex-wrap md:flex-nowrap mb-4">
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0 mr-4 mb-2 md:mb-0 ">
                <p className="text-lg font-lg text-[#2b8b89ea]">20+</p>
                <p className="text-sm text-gray-600">Assignments</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-lg text-[#2b8b89ea]">120+</p>
                <p className="text-sm text-gray-600">Lectures</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-lg text-[#2b8b89ea]">10</p>
                <p className="text-sm text-gray-600">MOCK TEST</p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 py-2 border border-l-0 border-gray-400 border-t-0 border-b-0  mr-4 mb-2 md:mb-0">
                <p className="text-lg font-lg text-[#2b8b89ea]">20+</p>
                <p className="text-sm text-gray-600">Practice</p>
              </div>
            </div>
            <div className="relative py-4 px-2 font-bold  bg-yellow-400   w-64 transform -skew-x-35  flex items-center justify-center">
              {" "}
              Special Discounted Price
            </div>
            <div className="flex flex-row gap-x-4 mt-4">
              <LuIndianRupee className="w-8 h-8" />
              <div className="text-3xl text-black font-semibold">2999</div>
              <div className="relative inline-block text-lg  text-black crossed">
                <div className="relative top-[17px] border bg-black border-red-600 w-12 transform rotate-[27deg]"></div>
                6999
                <div className="relative bottom-[14px] border bg-black border-red-600  w-12 transform -rotate-[27deg]"></div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end mr-16">
              <Link to={"/class-6/physics"}>
                <button className="bg-[#2b8b89ea] hover:bg-[#2b8b89] text-white px-10 py-2 rounded">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default class6;
