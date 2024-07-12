import React from 'react'
import img1 from '../assets/connect.png'
import img2 from '../assets/access.png'
import img3 from '../assets/ai.png'

const Why_community = () => {
  return (
    <div className='bg-white'>
      <div className="flex justify-center items-center">
        <p className='text-center text-[#ED7E0A] text-2xl item5 mt-10'>- - - -   Why we? - - - </p>
      </div>
      <div className="flex justify-center items-center mt-5 mb-3">
        <p className='text-center text-[#488B80] text-2xl item1'>Why Join Writo student community?</p>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            {/* Optional: Additional content here */}
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 mt-2 justify-center">
            <div className="p-4 md:w-1/3 sm:w-full mb-6 flex flex-col items-center">
              <div className="rounded-lg overflow-hidden flex items-center justify-center bg-white">
                <img 
                  alt="content" 
                  className="object-cover object-center w-34 h-13" 
                  src={img1} 
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Connect and collaborate</h2>
            </div>

            <div className="p-4 md:w-1/3 sm:w-full mb-6 flex flex-col items-center">
              <div className="rounded-lg overflow-hidden flex items-center justify-center bg-white">
                <img 
                  alt="content" 
                  className="object-cover object-center w-34 h-13" 
                  src={img2} 
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Get access to Right toolset</h2>
            </div>

            <div className="p-4 md:w-1/3 sm:w-full mb-6 flex flex-col items-center">
              <div className="rounded-lg overflow-hidden flex items-center justify-center bg-white">
                <img 
                  alt="content" 
                  className="object-cover object-center w-34 h-13" 
                  src={img3} 
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Build AI enabled solution</h2>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Why_community
