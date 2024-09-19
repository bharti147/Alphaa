import React from 'react'
import { MdLocationOn, MdCall, MdMailOutline } from "react-icons/md";
import { FaTwitter, FaTelegram, FaViber, FaGitlab, FaWordpress } from "react-icons/fa";


function Footer() {
  return (
    <footer className='font-sans'>

{/* first part of footer */}
    <div className='footer-1 bg-custom-blue2 h-auto px-10 py-16
    lg:flex lg:justify-between lg:px-12
    xl:px-40 
    '>
    <div className='lg:flex lg:flex-col lg:w-1/2  '>
      <h1 className='text-white font-bold text-lg mb-5 xl:text-2xl'>Quick Contact</h1>
      <p className='bg-custom-blue2 text-custom-gray2 text-lg mb-5 xl:text-xl'>At Sahani Properties, we believe in empowering your property dreams with our premium services. </p>
      <ul className='text-custom-gray2 flex flex-col '>
        <li className='flex items-center text-lg mb-3 xl:text-xl'><MdLocationOn className='text-custom-blue mr-2'/>Hisar, Haryana</li>
        <li className='flex items-center text-lg mb-3 xl:text-xl'><MdCall className='text-custom-blue mr-2'/>9728181252</li>
        <li className='flex items-center text-lg mb-8 xl:text-xl'><MdMailOutline className='text-custom-blue mr-2' /></li>
      </ul>
      </div>
      <div className='w-full mx-auto rounded-2xl bg-custom-blue3 p-6 flex flex-col
      md:w-1/2 md:mx-2
      lg:ml-16 lg:mr-2 lg:py-14 lg:px-12
      xl:px-16
      '>
      <h1 className='text-white font-bold text-lg mb-5 lg:text-xl xl:text-2xl'>Opening Hours</h1>
      <ul className='flex flex-col justify-center mb-3'>
        <li className='mb-3 flex items-center justify-between text-white font-semibold text-sm xl:text-lg'><span className='text-custom-blue mr-2'>MON TO FRI </span> <span className='text-white'>9:00am | 5:00pm</span> </li>
        <li className='mb-3 flex items-center justify-between text-white font-semibold text-sm xl:text-lg'><span className='text-custom-blue mr-2'>SAT TO SUN :</span>     <span className='text-white'>APPOINTMENTS ONLY</span></li>
      </ul>
      <button
            className="p-4 mb-1 text-sm bg-custom-blue text-white font-bold rounded-lg
        "
          >
           SCHEDULE A VISIT
          </button>
      </div>
    </div>

{/* break */}
    <div className='w-full bg-custom-blue3 h-2'></div>


{/* second part of footer */}
    <div className='footer-2 bg-custom-blue2 h-auto px-8 py-16 flex flex-col justify-center
    lg:flex-row lg:items-center lg:justify-between
    xl:px-36
    '>
    <ul className='flex justify-center px-4 mb-5
    lg:mb-0
    '>
        <li className='bg-custom-blue px-[0.65rem] py-[0.65rem] rounded mx-1 lg:m-2'><FaGitlab className='text-white text-lg xl:text-xl' /></li>
        <li className='bg-custom-blue px-[0.65rem] py-[0.65rem] rounded mx-1 lg:m-2'><FaTwitter className='text-white  text-lg xl:text-xl' /></li>
        <li className='bg-custom-blue px-[0.65rem] py-[0.65rem] rounded mx-1 lg:m-2'><FaTelegram className='text-white text-lg xl:text-xl'/></li>
        <li className='bg-custom-blue px-[0.65rem] py-[0.65rem] rounded mx-1 lg:m-2'><FaWordpress className='text-white text-lg xl:text-xl' /></li>
        <li className='bg-custom-blue px-[0.65rem] py-[0.65rem] rounded mx-1 lg:m-2'><FaViber className='text-white text-lg xl:text-xl' /></li>
      </ul>
      <p className='text-white px-4 text-center xl:text-xl'>2024 © All Rights Reserved | Developed with ❤️ by <span className='text-custom-blue'>Bharti Sahani</span></p>
    </div>
      
    </footer>
  )
}

export default Footer
