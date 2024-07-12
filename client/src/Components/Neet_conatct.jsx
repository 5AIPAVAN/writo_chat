import React from 'react'
import { FaFile } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
const Neet_conatct = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-12 mx-auto">
      <div class="flex flex-col text-center w-full mb-10">
        <h2 class=" text-[#ED7E0A] text-lg item5 tracking-widest font-medium title-font mb-1">-------Connect----</h2>
        <h1 class="sm:text-2xl text-xl font-medium title-font item1 text-[#488B80]">Contact</h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
       <div>
          <div class="flex rounded-lg bg-white p-8 flex-col shadow-md">
              <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-2 inline-flex items-center justify-center rounded-full text-[#058C70] flex-shrink-0">
                      <FaFile />
                  </div>
                  <h2 class="text-[#058C70] text-xl title-font font-medium item1">About</h2>
              </div>
              <div class="flex-grow">
                  <p class="leading-relaxed text-base">Your curious? Learn more about us and how the AI Student Community functions!</p>
                  <button class="flex  mt-2 text-white bg-[#488B80] border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Know more</button>
              </div>
              </div>
              <div class="mt-auto py-3 px-4 bg-[#F5F9FE] text-white rounded-b-lg">
                      <p class="text-lg colour-item text-center items-center">About</p>
              </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
       <div>
          <div class="flex rounded-lg bg-white p-8 flex-col shadow-md">
              <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-2 inline-flex items-center justify-center rounded-full text-[#058C70] flex-shrink-0">
                  <IoMdMenu />
                  </div>
                  <h2 class="text-[#058C70] text-xl title-font font-medium item1">Community guidelines</h2>
              </div>
              <div class="flex-grow">
                  <p class="leading-relaxed text-base">Guidelines to be a part of the Community to ensure an amazing experience !</p>
                  <button class="flex  mt-2 text-white bg-[#488B80] border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Know more</button>
              </div>
              </div>
              <div class="mt-auto py-3 px-4 bg-[#F5F9FE] text-white rounded-b-lg">
                      <p class="text-lg colour-item text-center items-center">Community Guidelines</p>
              </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
       <div>
          <div class="flex rounded-lg bg-white p-8 flex-col shadow-md">
              <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-2 inline-flex items-center justify-center rounded-full text-[#058C70] flex-shrink-0">
                  <AiOutlineMessage />
                  </div>
                  <h2 class="text-[#058C70] text-xl title-font font-medium item1">FAQ</h2>
              </div>
              <div class="flex-grow">
                  <p class="leading-relaxed text-base">This is where you will find answers to all the Whats and Whys you have right now.</p>
                  <button class="flex  mt-2 text-white bg-[#488B80] border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Know more</button>
              </div>
              </div>
              <div class="mt-auto py-3 px-4 bg-[#F5F9FE] text-white rounded-b-lg">
                      <p class="text-lg colour-item text-center items-center">FAQ</p>
              </div>
          </div>
        </div>
        
        
      </div>
    </div>
  </section>
  )
}

export default Neet_conatct
