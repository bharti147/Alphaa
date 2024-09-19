import React, { useEffect, useRef, useState } from 'react'
import homepart2pic1 from '../assets/homepart2pic1.jpg'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.png'

function HomePart2() {
   const[pic1Visible, setPic1Visible] = useState(false)
   const[pic2Visible, setPic2Visible] = useState(false)

    const pic1Ref = useRef(null)
    const pic2Ref = useRef(null)

    useEffect(()=>{
       const observer = new IntersectionObserver((entries)=>{
        console.log(entries)
           const entry1 = entries[0];
           const entry2 = entries[1];

           if(entry1.isIntersecting) setPic1Visible(true)
           if(entry2.isIntersecting) setPic2Visible(true)
         },
         {threshold:0.5}
        )
        observer.observe(pic1Ref.current)
        observer.observe(pic2Ref.current)


        return()=>{
            observer.unobserve(pic1Ref.current)
            observer.unobserve(pic2Ref.current)
        }
    },[])




  return (
    <div className='h-auto w-full flex flex-col items-center py-20 px-6 md:pb-0 lg:pb-0  '>
      <div className='w-full h-auto  mb-6 flex items-center md:justify-end lg:justify-start lg:pl-28  xl:pl-36 2xl:pl-52' >
        <img 
        className='rounded-3xl sm:h-80 md:w-[80%] md:h-80 lg:w-[55%] xl:h-[22rem]  xl:w-[60%] object-cover md:object-center'
        src={homepart2pic1} alt="family"
       
        />

      </div>
      <div className='w-full h-auto relative '>
      <div className='w-full h-auto flex flex-col items-center px-6 justify-between mt-6 sm:flex-row sm:px-10 md:pl-6  xl:px-0 2xl:pl-0 '>  
      <img ref={pic1Ref} className={`h-40 mb-5 transform ${pic1Visible?"translate-x-0 opacity-100":"-translate-x-20 opacity-0"} md:absolute md:-top-60 md:h-64 lg:h-56 lg:-top-52 lg:ml-10 xl:ml-16  2xl:-top-56 2xl:ml-24`} src={pic3} alt="pic1" style={{transition: "transform 1s ease-in-out, opacity 2s ease-in-out"}} />
      <img ref={pic2Ref} className={`h-40 mt-5 transform ${pic2Visible?"translate-x-0 opacity-100":"translate-x-20 opacity-0"} hidden sm:inline md:hidden lg:block lg:absolute lg:-top-[22rem] lg:right-0 lg:h-72 lg:mr-10 xl:px-0 xl:ml-0 xl:mr-14 xl:-top-[22rem] 2xl:mr-36 `} src={pic2} alt="pic2" style={{transition: "transform 1s ease-in-out, opacity 2s ease-in-out"}} />
      </div>
      </div>
    </div>
  )
}

export default HomePart2
