// import React from 'react'
// import homepart1 from '../assets/homepart1.jpg'
// // px-8py-16

// function Homepart1() {
//   return (
//     <section className='relative h-auto w-full p-8 my-28 border-2 border-green-600'>

// {/* top background */}
//         <div className=' absolute top-0 left-0 -z-10 h-1/2 w-full bg-custom-dark'></div>
// {/* bottom background */}
//         <div className=' absolute bottom-0 left-0 -z-10 h-1/2 w-full bg-custom-gray'></div>

// {/* Content */}
//         <div className='relative h-auto w-full z-10 border-2 border-red-600 '>
//         <h1 className='text-4xl mb-5 font-bold text-white'>We Believe You're Bright</h1>
//             <div className='h-80 w-full '>
//                 <img className='object-cover h-full rounded-t-3xl' src={homepart1}/>
//             </div>
//             <div className='bg-custom-dark2 h-64 rounded-b-3xl text-white'>
//         {/* Cards*/}
//         <div className='flex flex-col justify-around items-center h-full w-full px-6 relative'>
//             <div className='relative -top-20 bg-white text-custom-dark font-bold flex flex-col items-center justify-center h-44 w-full border-b-8 border-custom-orange rounded-3xl'>
//             <h1 className='text-4xl'>320+</h1>
//             <p className='text-lg'>Lenders</p>
//             </div>

//             <div className='relative -top-10 bg-white text-custom-dark font-bold flex flex-col items-center justify-center  h-44 w-full border-b-8 border-custom-orange rounded-3xl'>
//             <h1 className='text-4xl'>20+</h1>
//             <p className='text-lg'>Years Experience</p>
//             </div>
//         </div>
//             </div>
//         </div>
//     </section>
 
//   )
// }

// export default Homepart1


import React, { useState, useEffect, useRef } from 'react';
import homepart1 from '../assets/homepart1.jpg';
import '../index.css'; // Import global CSS

function Homepart1() {
  const [isVisible, setIsVisible] = useState(false);
  const part1Ref = useRef(null);

  useEffect(()=>{
   const observer = new IntersectionObserver((entries)=>{
    const entry = entries[0]; //since we're observing just one element
    if(entry.isIntersecting){
      setIsVisible(true) //when that element is visible, set isVisible to true
    }
   },{threshold: 0.5}); // only trigger when 10% of the element is visible
  
   observer.observe(part1Ref.current); 
   
   return()=>{
    observer.unobserve(part1Ref.current); // Stop observing when the component unmounts
   }
  },[])

  return (
    <section className='relative overflow-hidden h-auto w-full p-8 my-28 
    lg:pr-0 lg:pl-24 lg:pt-0

    '>
      {/* Top background */}
      <div className='absolute top-0 left-0 -z-10 h-1/2 w-full bg-custom-dark'></div>

      {/* Bottom background */}
      <div className='absolute bottom-0 left-0 -z-10 h-1/2 w-full bg-custom-gray'></div>

      {/* Content */}
      <div className={`relative h-auto w-full z-10  
       md:flex md:h-screen  md:flex-col 
      lg:flex-row lg:items-center  lg:justify-end lg:h-auto  lg:rounded-bl-3xl
      xl:justify-between xl:pl-12
      
      `}>
      <div className='rounded-bl-[2rem] p-4  
      md:bg-custom-dark2 md:h-screen md:rounded-none 
      lg:h-[145vh] lg:flex lg:items-center lg:justify-center lg:w-[65%] lg:rounded-bl-[2rem] lg:border-purple-500
      xl:w-[50%] xl:h-[39.6rem] xl:flex xl:items-center xl:justify-center xl:border-red-500 xl:rounded-bl-[2rem]
    2xl:h-[107.8vh] 2xl:rounded-bl-[2rem] 2xl:border-yellow-400  
      
         '>
        <h1 className='text-4xl mb-10 font-bold text-white
        md:text-5xl md:tracking-tighter md:mb-16 
        lg:pl-12 lg:leading-normal lg:text-[2.90rem] lg:tracking-tighter 
       xl:pl-12 xl:mb-0 xl:text-[3.60rem] 
        
        
        '>We Believe You're Bright</h1>
        </div>
<div
ref={part1Ref}
className={` w-full 

 lg:h-full 
 xl:w-[55%]
transform ${isVisible? "translate-x-0 opacity-100":"translate-x-20 opacity-0"}`}

style={{
  transition: "transform 1s ease-in-out, opacity 2s ease-in-out"
}}
>
        <div className='h-80 w-full  
        md:flex md:justify-end  md:bg-custom-dark2  
        lg:h-screen
        xl:h-screen
        

        '>

          <img className='object-cover h-full rounded-t-3xl 
          sm:w-full
          md:rounded-none md:w-[80%]
          lg:w-full lg:rounded-bl-3xl
          xl:w-full xl:h-[80%]
          ' src={homepart1} alt="Home Part 1"/>
        </div>
        <div className='bg-custom-dark2 h-64  rounded-b-3xl text-white relative
        lg:rounded-none
        xl:h-auto xl:rounded-none
        '>
          {/* Cards*/}
        <div className='flex flex-col justify-around items-center h-full w-full px-6 relative  md:flex-row  md:px-12
        lg:px-6
       xl:h-16
      
        '>
            <div className='relative -top-20 bg-white text-custom-dark font-bold flex flex-col items-center justify-center h-44 w-full border-b-8 border-custom-orange rounded-3xl  hover:cursor-pointer transition-transform duration-300 ease-in-out
            transform hover:-translate-y-4 hover:border-none 
            sm:py-[30px] 
            md:w-[40%] md:py-24 md:px-6 md:-top-36
            xl:-top-56 xl:h-56
            '>
            <h1 className='text-4xl md:text-5xl md:mb-2 '>320+</h1>
            <p className='text-lg md:text-xl'>Lenders</p>
            </div>
            <div className='relative -top-10 bg-white text-custom-dark font-bold flex flex-col items-center justify-center  h-44 w-full border-b-8 border-custom-orange rounded-3xl hover:cursor-pointer transition-transform duration-300 ease-in-out
            transform hover:-translate-y-4 hover:border-none 
            sm:py-[30px]
            md:w-[40%]  md:py-24 md:px-6 md:-top-20
            xl:-top-36 xl:h-56 
            '>
            <h1 className='text-4xl md:text-5xl md:mb-2'>25+</h1>
            <p className='text-lg md:text-xl text-center'>Years Experience</p>
            </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Homepart1;
