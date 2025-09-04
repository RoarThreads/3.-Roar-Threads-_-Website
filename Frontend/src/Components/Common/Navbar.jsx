import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../Assets/Roar-Threads.png";
import { HiOutlineUser,HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from '../Common/SearchBar';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between P-[10px]">
      <div className="flex items-center justify-between w-[98%] px-4">
        {/* Left Logo */}
        <div>
      <Link to="/" className="flex items-center p-[10px] w-full">
        <img src={logo} alt="Roar-Threads.png"className="h-[1.7cm] w-[3.5cm]"/>
      </Link>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex space-x-6 mx-auto w-[70%] justify-center">
        <Link to="#" className="text-gray-700 hover:text-black text-sm font-large uppercase">Men</Link>
        <Link to="#" className="text-gray-700 hover:text-black text-sm font-large uppercase">Women</Link>
        <Link to="#" className="text-gray-700 hover:text-black text-sm font-large uppercase">About</Link>
        <Link to="#" className="text-gray-700 hover:text-black text-sm font-large uppercase">Contact</Link>
      </div>

      {/* Right - Icons */}
      <div className="flex items-center space-x-6 ml-auto w-[5%] justify-end">
        <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-7 w-7 text-gray-700" />        
        </Link>
        <button className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-7 w-7 text-gray-700" />     
            <span className="absolute -top-1 bg-Roar_Threads-red text-white text-xs rounded-full px-[11.9%] py-[3.5%]">4</span>   
        </button>
        
        {/* Search */}
        <SearchBar />
           
        <button className="md:hidden hover:text-black">
            <HiBars3BottomRight className="h-7 w-7 text-gray-700" /> 
        </button>
      </div>
      </div>
    </nav>

  )
}

export default Navbar