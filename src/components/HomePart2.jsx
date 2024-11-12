import React from 'react'
import buyhome from '../assets/buyhome.jpg'
import sellhome from '../assets/sellhome.jpg'
import renthome from '../assets/renthome.png'

function Homepart2() {
  return (
    <div className='relative bg-[#F7F7F7] w-full h-auto py-6 px-10 flex flex-col items-center justify-center
   lg:flex-row 
    '>
    <div className='w-full h-auto  bg-white rounded-2xl shadow-lg my-6 shadow-slate-400 flex-col flex px-8 py-12 justify-around 
     xs-sm:flex-row xs-sm:items-start
     sm:px-8
     md:py-8 md:items-center 
     lg:w-[25%] lg:flex-col lg:h-[35rem] lg:items-center lg:justify-center lg:mx-8
    '>
    <img src={buyhome} className='w-1/2 sm:w-1/3 lg:w-auto lg:mb-5'/>
    <div className='w-full h-auto flex flex-col 
   xs-sm:ml-6
   md:ml-10
   lg:ml-0 lg:items-center
    '>
        
        <h1 className='text-xl font-extrabold xs-sm:text-left lg:text-center'>Buy a Home</h1>
        <p className='text-center mt-2 xs-sm:text-left lg:text-center'>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
        <button className='hover:bg-[#dbe5fb] w-auto px-4 py-2 text-[#003ECA] rounded-lg outline font-bold mt-5 xs-sm:text-sm sm:w-1/2 md:mt-7 lg:mt-8 lg:mb-4 lg:w-full xl:w-1/2'>Browse Homes</button>
    </div>
    </div>

    <div className='w-full h-auto  bg-white rounded-2xl shadow-lg my-6 shadow-slate-400 flex-col flex px-8 py-12 justify-around 
     xs-sm:flex-row xs-sm:items-start
     sm:px-8
     md:py-8 md:items-center 
     lg:w-[25%] lg:flex-col lg:h-[35rem] lg:items-center lg:justify-center lg:mx-8
    '>
    <img src={sellhome} className='w-1/2 sm:w-1/3 lg:w-auto lg:mb-5'/>
    <div className='w-full h-auto flex flex-col 
   xs-sm:ml-6
   md:ml-10
   lg:ml-0 lg:items-center
    '>
        
        <h1 className='text-xl font-extrabold xs-sm:text-left lg:text-center'>Sell a Home</h1>
        <p className='text-center mt-2 xs-sm:text-left lg:text-center'>No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
        <button className='hover:bg-[#dbe5fb] w-auto px-4 py-2 text-[#003ECA] rounded-lg outline font-bold mt-5 xs-sm:text-sm sm:w-1/2 md:mt-7  lg:mt-8 lg:mb-4 lg:w-full xl:w-1/2'>See your options</button>
    </div>
    </div>

    <div className='w-full h-auto  bg-white rounded-2xl shadow-lg my-6 shadow-slate-400 flex-col flex px-8 py-12 justify-around 
     xs-sm:flex-row xs-sm:items-start
     sm:px-8
     md:py-8 md:items-center 
     lg:w-[25%] lg:flex-col lg:h-[35rem] lg:items-center lg:justify-center lg:mx-8
    '>
    <img src={renthome} className='w-1/2 sm:w-1/3 lg:w-auto lg:mb-5'/>
    <div className='w-full h-auto flex flex-col 
   xs-sm:ml-6
   md:ml-10
   lg:ml-0 lg:items-center
    '>
        
        <h1 className='text-xl font-extrabold xs-sm:text-left lg:text-center'>Rent a Home</h1>
        <p className='text-center mt-2 xs-sm:text-left lg:text-center'>We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
        <button className='hover:bg-[#dbe5fb] w-auto px-4 py-2 text-[#003ECA] rounded-lg outline font-bold mt-5 xs-sm:text-sm sm:w-1/2 md:mt-7 lg:w-full xl:w-1/2 lg:mt-8 lg:mb-4'>Find Rentals</button>
    </div>
    </div>
   
 
 
   
   
      
    </div>
  )

}

export default Homepart2
