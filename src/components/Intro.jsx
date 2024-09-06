import React from 'react'
import { MdLocationOn, MdCall, MdAccessTimeFilled } from "react-icons/md";
import { FaTwitter, FaTelegram, FaViber, FaGitlab, FaWordpress } from "react-icons/fa";
import contact from '../assets/contact.jpg'
import founder from '../assets/founder.jpg'


function Intro() {
  return (
    <div className='flex flex-col items-center pt-16 pb-8 px-4  '>
         <h1 className='text-custom-dark text-3xl font-bold text-center mb-16 lg:text-4xl'>Meet Our Founder</h1>

{/* first section */}
      <div className=' w-full flex flex-col items-center px-6 mb-16 
     md:px-10 md:justify-start md:flex-row 
     lg:justify-center lg:mb-36
      '>
{/* image card */}
        <div className=' flex flex-col items-center rounded-xl px-4  border-b-4  border-custom-orange
        
        '>
        <img className=' mb-5' src = {founder} alt="founder"/>
        <h1 className='font-bold text-lg text-custom-dark mb-2'>Mr. Pawan Punjabi</h1>
        <p className='font-thin text-custom-dark mb-5'>Founder</p>

        </div>
      </div>

{/* second section */}
      <div className=' bg-white h-auto px-4 py-16 w-full flex flex-col items-center
      md:flex-row 
    lg:flex lg:justify-between lg:px-12
    xl:px-40 
    '>

{/* left part of second section */}
    <div className='lg:flex lg:flex-col lg:w-1/2  
     md:w-1/2
    '>
      <h1 className='text-custom-dark font-bold text-3xl mb-5 '>Contact Us</h1>
      <p className='bg-white text-custom-dark text-base font-extralight mb-5 xl:text-xl'>Please feel free to ask if you have any further questions.</p>
      <ul className='text-custom-dark font-bold flex flex-col mb-5'>
        <li className='flex items-center text-base mb-3 xl:text-xl'><MdLocationOn className='text-custom-orange text-lg mr-3'/>Sydney, Australia</li>
        <li className='flex items-center text-base mb-3 xl:text-xl'><MdCall className='text-custom-orange text-lg mr-3'/>0468328227</li>
        <li className='flex items-center text-base mb-3 xl:text-xl'> <MdAccessTimeFilled className="text-custom-orange text-base mr-3" />
        Mon - Fri: 9:00am - 5:00pm</li>
        <li className='flex items-center  text-base mb-3 xl:text-xl'> <MdAccessTimeFilled className="text-custom-orange text-lg mr-3" />
        Weekends Appointments Only</li>
      </ul>

      <ul className='flex items-center mb-8
    lg:mb-0
    '>
        <li className='bg-custom-orange px-[0.65rem] py-[0.65rem] rounded mr-1 lg:m-2'><FaGitlab className='text-custom-dark2 text-lg xl:text-xl' /></li>
        <li className='bg-custom-orange px-[0.65rem] py-[0.65rem] rounded mx-1 lg:m-2'><FaTwitter className='text-custom-dark2 text-lg xl:text-xl' /></li>
        <li className='bg-custom-orange px-[0.65rem] py-[0.65rem] rounded mx-1 lg:m-2'><FaTelegram className='text-custom-dark2 text-lg xl:text-xl'/></li>
        <li className='bg-custom-orange px-[0.65rem] py-[0.65rem] rounded mx-1 lg:m-2'><FaWordpress className='text-custom-dark2 text-lg xl:text-xl' /></li>
        <li className='bg-custom-orange px-[0.65rem] py-[0.65rem] rounded mx-1 lg:m-2'><FaViber className='text-custom-dark2 text-lg xl:text-xl' /></li>
      </ul>
      </div>

{/* right part of second section */}
      {/* <div className='w-full mx-auto rounded-2xl bg-white p-6 flex flex-col
      md:w-1/2 md:mx-2
      lg:ml-16 lg:mr-2 lg:py-14 lg:px-12
      xl:px-16
      '> */}
      <img className='w-full 
      md:w-1/2 md:h-full
      ' src={contact} alt="Contact Us"/>
      {/* </div> */}
    </div>

    </div>
  )
}

export default Intro