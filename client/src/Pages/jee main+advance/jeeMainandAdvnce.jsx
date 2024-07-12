import pen1 from "../../assets/pen and pad 1.png";
import pen2 from "../../assets/pen and paD 2.png";
import pen3 from "../../assets/pen and pad 3.png";
import { TfiCup } from "react-icons/tfi";
import { LuShieldCheck } from "react-icons/lu";
import { GiBookmarklet } from "react-icons/gi";
import { RxCountdownTimer } from "react-icons/rx";

function jeeMainandAdvnce() {
    return (
        <div className="flex flex-col items-center justify-center bg-white p-4 md:p-8 space-y-8">
          {/* Header */}
    
          <div className="flex flex-row gap-x-4 justify-center items-center">
          <p className="text-3xl text-[#ED7E0A] ">- - - - -</p>
          <h2 className="text-xl md:text-2xl text-[#ED7E0A] font-bold text-center">why we</h2>
          <p className="text-3xl text-[#ED7E0A] ">- - - - -</p>
          </div>
          
          {/* Test section */}
          <h2 className="text-xl md:text-2xl text-[#488B80] font-bold text-center">
          
          Our Test Series For NEET
          </h2>
    
          {/* Test Series Cards */}
          <div className="flex flex-col w-3/4  md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/3 flex flex-row items-center bg-blue-200 p-4 rounded-lg shadow-md">
              <div className="flex flex-col flex-grow pr-4 gap-y-10">
                <div>
                <h3 className="text-xl font-bold whitespace-nowrap text-[#488B80]">For 11th Standard</h3>
                <p className="text-[#488B80] text-sm ">2 year program</p>
                </div>
                <a
                href="#"
                className="relative inline-block mt-auto text-blue-500 overflow-hidden group"
              >
                <span className="relative z-10 group-hover:px-1 group-hover:text-white transition-colors duration-500 text-black font-bold ">Buy now →</span>
                <span className="absolute left-0 top-0 h-full bg-blue-400 transform -translate-x-full transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:w-24 group-hover:px-4 group-hover:rounded-lg"></span>
              </a>
              </div>
              <div>
                <img
                  src={pen1}
                  alt="book top img"
                  className="relative h-28 w-28"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row items-center bg-purple-200 p-4 rounded-lg shadow-md">
              <div className="flex flex-col flex-grow pr-4 gap-y-10">
              <div>
              <h3 className="text-xl font-bold whitespace-nowrap text-[#488B80]">For 12th Standard</h3>
              <p className="text-[#488B80] text-sm ">1 year program</p>
              </div>
                <a
                href="#"
                className="relative inline-block mt-auto text-purple-500 overflow-hidden group"
              >
                <span className="relative z-10 group-hover:px-2 group-hover:text-white transition-colors duration-500 text-black font-bold ">Buy now →</span>
                <span className="absolute left-0 top-0 h-full bg-purple-400 transform -translate-x-full transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:w-24 group-hover:px-6 group-hover:rounded-lg"></span>
              </a>
              
              </div>
              <div>
                <img
                  src={pen2}
                  alt="book top img"
                  className="relative h-28 w-28"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row items-center bg-green-200 p-4 rounded-lg shadow-md">
              <div className="flex flex-col flex-grow pr-4 gap-y-10">
              <div>
              <h3 className="text-xl font-bold whitespace-nowrap text-[#488B80]">For 12th plus</h3>
              <p className="text-[#488B80] text-sm ">1 year program</p>
              </div>
                <a
                href="#"
                className="relative inline-block mt-auto text-green-500 overflow-hidden group"
              >
                <span className="relative z-10 group-hover:px-2 group-hover:text-white transition-colors duration-500 text-black font-bold">Buy now →</span>
                <span className="absolute left-0 top-0 h-full bg-green-400 transform -translate-x-full transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:w-24 group-hover:px-5 group-hover:rounded-lg"></span>
              </a>
              </div>
              <div>
                <img
                  src={pen3}
                  alt="book top img"
                  className="relative h-28 w-28"
                />
              </div>
            </div>
          </div>
    
          {/* Advantages  Headingd*/}
            <div className="flex flex-row gap-x-4 justify-center items-center">
            <p className="text-3xl text-[#ED7E0A] ">- - - - -</p>
            <h2 className="text-xl md:text-2xl text-[#ED7E0A] font-bold text-center">Advantage</h2>
            <p className="text-3xl text-[#ED7E0A] ">- - - - -</p>
            </div>
          <h3 className="text-lg  md:text-2xl text-[#488B80] font-bold text-center">
            Special about Online Test
          </h3>
    
          {/* Advantage Details */}
          <div className="flex flex-col w-3/4 md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/5 flex flex-col items-center">
            <TfiCup className="text-black h-6 w-6" />
            <h4 className="text-lg text-[#1D5F6B] font-bold">Ranks</h4>
            <p className="text-center">
              All India ranks for benchmarking performance
            </p>
          </div>
          <div className="hidden md:block w-0.5 h-36 border-opacity-50 border-l-2 border-dashed border-black"></div>
          <div className="block md:hidden w-36 h-0.5 border-opacity-50 border-t-2 border-dashed border-black"></div>
    
          <div className="w-full md:w-1/5 flex flex-col items-center">
            <LuShieldCheck className="text-black h-6 w-6" />
            <h4 className="text-lg font-bold text-[#1D5F6B]">Solutions</h4>
            <p className="text-center">
              Provides detailed solution and performance analysis
            </p>
          </div>
          <div className="hidden md:block w-0.5 h-36 border-opacity-50 border-l-2 border-dashed border-black"></div>
          <div className="block md:hidden w-36 h-0.5 border-opacity-50 border-t-2 border-dashed border-black"></div>
    
          <div className="w-full md:w-1/5 flex flex-col items-center">
            <GiBookmarklet className="text-black h-6 w-6" />
            <h4 className="text-lg font-bold text-[#1D5F6B]">Practice</h4>
            <p className="text-center">
              5000+ practice questions to improve your score
            </p>
          </div>
          <div className="hidden md:block w-0.5 h-36 border-opacity-50 border-l-2 border-dashed border-black"></div>
          <div className="block md:hidden w-36 h-0.5 border-opacity-50 border-t-2 border-dashed border-black"></div>
    
          <div className="w-full md:w-1/5 flex flex-col items-center">
            <RxCountdownTimer className="text-black h-6 w-6" />
            <h4 className="text-lg font-bold text-[#1D5F6B]">Previous Year</h4>
            <p className="text-center">
              Discuss and practice previous year paper
            </p>
          </div>
        </div>
    
        <div className="flex flex-row md:gap-x-4 sm:gap-x-2 justify-center items-center">
            <p className="text-3xl text-[#ED7E0A] ">- - - - -</p>
            <h2 className="text-xl md:text-2xl text-[#ED7E0A] font-bold text-center">More Advantages</h2>
            <p className="text-3xl text-[#ED7E0A] ">- - - - -</p>
            </div>
        <div className="flex flex-col items-center w-full px-4 md:px-8 lg:px-16">
        
        <h3 className="text-green-800 text-2xl md:text-3xl font-bold mb-8">
          Added Advantages on Writo
        </h3>
        <div className="flex w-3/4 flex-col md:flex-row justify-center items-center  space-y-8 md:space-y-0 md:space-x-8">
          {/* Gain Section */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start w-full md:w-1/3">
            <div className="text-5xl text-black font-bold mb-2">1</div>
            <div className="text-lg font-semibold text-purple-600 mb-2">Gain</div>
            <p className="text-md text-gray-700">
              Pick the subjects or topics you want to practice from 5000+ questions.
            </p>
          </div>
    
          {/* Earn Section */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start w-full md:w-1/3">
            <div className="text-5xl text-black font-bold mb-2">2</div>
            <div className="text-lg font-semibold text-purple-600 mb-2">Earn</div>
            <p className="text-md text-gray-700">
              Online practice problems for all topics and test paper available for reattempt and practices.
            </p>
          </div>
    
          {/* Learn Section */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start w-full md:w-1/3">
            <div className="text-5xl text-black font-bold mb-2">3</div>
            <div className="text-lg font-semibold text-purple-600 mb-2">Learn</div>
            <p className="text-md text-gray-700">
              To track and analyze your mistakes, and take steps to correct them for better future performance.
            </p>
          </div>
        </div>
      </div>
        </div>
      )
}

export default jeeMainandAdvnce
