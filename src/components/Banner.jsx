import React from 'react'
import Button from './Button'

function Banner() {
  return (
    <div id='home' className="bg-neutral-100 gap-5 p-5 text-center h-[70vh] flex flex-col justify-center items-center mt-14 ">
      <h1 className="text-4xl md:text-7xl font-bold text-sky-600">Hey, I am <b>SAIN</b></h1>
      <p className="mt-2 text-lg text-gray-600 text-center max-w-2xl">
        A.K.A Sachin A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
      </p>
      <Button link={"#projects"} >
        Projects
      </Button>
    </div>
  )
}

export default Banner
