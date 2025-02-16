import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import 'remixicon/fonts/remixicon.css'
function Footer() {
  return (
    <div className='w-full flex-col flex justify-center items-center bg-neutral-950 h-auto tex-white py-10'>
      <div className='border-b-1 w-[90%] flex flex-col items-center justify-center md:flex-row border-neutral-600'>
        <div className='w-[50%] py-10 '>
          <h1 className='text-white font-semibold text-2xl'>SAIN</h1>
          <p className="mt-2 text-sm text-gray-400 text-start max-w-2xl">
            A.K.A Sachin A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
          </p>
        </div>
        <div className='w-[50%] flex sm:justify-end justify-center mb-10 sm:mb-0'>
          <span className=' text-white animation-1 gap-4 text-2xl justify-end flex'>
            <RiInstagramFill className='hover:text-sky-400 animation-1' />
            <FaLinkedin className='hover:text-sky-400 animation-1' />
          </span>
        </div>
      </div>
      <div className='w-full mt-5 text-white text-center'>copyright@2025 <b>SAIN</b></div>
    </div>
  )
}

export default Footer
