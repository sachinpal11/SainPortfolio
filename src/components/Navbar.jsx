import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.webp'
function Navbar() {

  const [isopen, setOpen] = useState(false);
  return (
    <div className='animation-1'>
      <div className="bg-white fixed  top-0 w-full p-4 z-2 shadow-md">
        <div className="container  mx-auto flex justify-between z-2 items-center">
          <div className="flex items-center gap-2 rounded-full">
            <img src={logo} alt="Logo" className="h-12 w-12 mr-2 rounded-full" loading='lazy' />
            <span className="text-sky-700 text-xl font-bold">SAIN</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-7 font-semibold uppercase">
              <li className="text-sky-700 cursor-pointer hover:text-sky-500"><a href="#home">Home</a></li>
              <li className="text-sky-700 cursor-pointer hover:text-sky-500"><a href="#about">About</a></li>
              <li className="text-sky-700 cursor-pointer hover:text-sky-500"><a href="#projects">Projects</a></li>
              <li className="text-sky-700 cursor-pointer hover:text-sky-500"><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="text-sky-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => setOpen(!isopen)}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden animation-1">
        <ul className={`flex flex-col w-full items-center top-[10%] fixed z-1 space-y-4 p-4 font-semibold uppercase bg-neutral-50 ${isopen ? "right-0" : "right-[-100%]"} animation-1`}>
          <li className="text-sky-700 cursor-pointer hover:text-sky-500"><a href="#home">Home</a></li>
          <li className="text-sky-700 cursor-pointer hover:text-sky-500"><a href="#about">About</a></li>
          <li className="text-sky-700 cursor-pointer hover:text-sky-500"><a href="#projects">Projects</a></li>
          <li className="text-sky-700 cursor-pointer hover:text-sky-500"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
