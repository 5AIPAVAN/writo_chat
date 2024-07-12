import React from 'react'
import { LiaCopyrightSolid } from "react-icons/lia";
const Footer_men = () => {
  return (
    <footer className="bg-[#006756] w-full p-4 text-white">
      <div className="flex flex-row items-center space-x-4">
        <LiaCopyrightSolid className="text-white h-6 w-6" />

          <p className="text-white font-semibold">Writo Education</p>
          <p className="text-gray-500 text-sm hover:text-gray-400">
            All rights reserved
          </p>

      </div>
    </footer>
  )
}

export default Footer_men
