import React from 'react'
import { LiaCopyrightSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const Lower_footer = () => {
  return (
    <footer className="bg-[#006756] w-full p-4 text-white">
      <div className="flex flex-row items-center space-x-4">
        <LiaCopyrightSolid className="text-white h-6 w-6" />
        <Link to={"/"}>
          <p className="text-white font-semibold">Writo Education</p>
        </Link>
        <Link to={"/copyrights"}>
          <p className="text-gray-500 text-sm hover:text-gray-400">
            All rights reserved
          </p>
        </Link>
      </div>
    </footer>
  )
}

export default Lower_footer
