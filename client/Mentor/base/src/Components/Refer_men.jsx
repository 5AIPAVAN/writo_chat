import React, { useState } from 'react';
import { IoIosCopy } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";

const Refer_men = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Logic to copy the referral code
    navigator.clipboard.writeText("2e2efcy8g3riough9074");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
  };

  return (
    <div className="bg1 rounded-lg p-6 max-w-md mx-auto relative">
      <h1 className="text-4xl item1 font-bold mb-4">Refer Your Friends & Win Writo Tokens</h1>
      
      <div className="rectangle mt-4 mb-2 w-full h-[7rem] bg-white rounded flex flex-col items-center justify-center">
        <div className="flex items-center w-5/6">
          <input
            type="text"
            className="border border-gray-300 bg-[#E8E8E8] px-4 py-3 rounded-md focus:outline-none w-full"
            placeholder="2e2efcy8g3riough9074"
            readOnly
          />
          <IoIosCopy onClick={handleCopy} className="ml-2 cursor-pointer" />
        </div>
        <button className="mt-2 bg-black text-white px-10 py-2 rounded-3xl" onClick={handleCopy}>
          {copied ? "Copied!" : "Share"}
        </button>
      </div>
      
      <div className="rectangle mt-4 mb-2 w-full h-[7rem] bg-white rounded flex flex-col ">
        <div className="flex items-center w-4/6 justify-start space-x-4 ml-1">
          <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center">
            <FaRegStar className="text-4xl text-yellow-500" />
          </div>
          <div>
            <p className="font-bold">Reward Points</p>
            <p className="font-bold">20/500</p>
          </div>
        </div>
        <div className="mt-2 flex space-x-4 justify-center items-center mb-2">
          <button className="bg-black text-white px-4 py-2 rounded-3xl" onClick={handleCopy}>
            {copied ? "Copied!" : "Button 1"}
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-3xl">
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Refer_men;
