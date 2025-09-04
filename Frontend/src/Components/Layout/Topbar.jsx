import React from 'react'
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-Roar_Threads-red text-white">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
            <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <TbBrandMeta className="h-4 w-4" /> 
                </a>
                <a href="#" className="hover:text-gray-300">
                  <IoLogoInstagram className="h-4 w-4" /> 
                </a>
                <a href="#" className="hover:text-gray-300">
                  <RiTwitterXLine className="h-4 w-4" /> 
                </a>
            </div>
            <div className="text-sm text-center flex-grow">
                <span>Roar Threads — The Signature of the Elite</span>
            </div>
            <div className="text-sm hidden md:block">
                <a href="mailto:roarthreads@gmail.com" className="hover:text-gray-300">
                    roarthreads@gmail.com
                </a>
            </div>
        </div>
    </div>
  )
}

export default Topbar