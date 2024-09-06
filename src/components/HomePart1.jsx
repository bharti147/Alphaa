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


import React, { useState, useEffect } from 'react';
import homepart1 from '../assets/homepart1.jpg';
import '../index.css'; // Import global CSS

function Homepart1() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the transition after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='relative h-auto w-full p-8 my-28 border-2 border-green-600'>
      {/* Top background */}
      <div className='absolute top-0 left-0 -z-10 h-1/2 w-full bg-custom-dark'></div>

      {/* Bottom background */}
      <div className='absolute bottom-0 left-0 -z-10 h-1/2 w-full bg-custom-gray'></div>

      {/* Content */}
      <div className={`relative h-auto w-full z-10 border-2 border-red-600 ${isVisible ? 'contentSlideInActive' : 'contentSlideIn'}`}>
        <h1 className='text-4xl mb-5 font-bold text-white'>We Believe You're Bright</h1>
        <div className='h-80 w-full'>
          <img className='object-cover h-full rounded-t-3xl' src={homepart1} alt="Home Part 1"/>
        </div>
        <div className='bg-custom-dark2 h-64 rounded-b-3xl text-white relative'>
          {/* Cards*/}
        <div className='flex flex-col justify-around items-center h-full w-full px-6 relative'>
            <div className='relative -top-20 bg-white text-custom-dark font-bold flex flex-col items-center justify-center h-44 w-full border-b-8 border-custom-orange rounded-3xl'>
            <h1 className='text-4xl'>320+</h1>
            <p className='text-lg'>Lenders</p>
            </div>
            <div className='relative -top-10 bg-white text-custom-dark font-bold flex flex-col items-center justify-center  h-44 w-full border-b-8 border-custom-orange rounded-3xl'>
            <h1 className='text-4xl'>20+</h1>
            <p className='text-lg'>Years Experience</p>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Homepart1;
