import React from 'react';

const Demo = () => {
  return (
    <div className="flex items-center justify-center py-8 mt-3">
      <div
        className="w-4/5 p-6 rounded-lg shadow-md"
        style={{ backgroundColor: 'rgba(234, 243, 254, 0.45)' }}
      >
        <h2 className="text-2xl font-semibold item-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-center">
          What are you waiting for?
        </h2>
        <p className="mt-4 text-lg text-black text-center">
          Check out our 1-minute demo! We`ll capture and replay your visit immediately!
        </p>
        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 bg-[#488B80] text-white rounded-md hover:bg-green-700 focus:outline-none">
            Try our Free Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
