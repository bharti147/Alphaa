import React from 'react'
import hp1 from '../assets/hp1.jpg'
import hp2 from '../assets/hp2.jpg'
import hp3 from '../assets/hp3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Homepart3() {
  return (
    <div className='relative w-full h-auto border  border-red-700'>
    <Carousel className='h-auto ' autoPlay infiniteLoop interval={1500}>
                <div className='h-[30rem] object-center '>
                    <img src={hp1}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div className='h-[30rem]'>
                    <img className='object-center' src={hp2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className='h-[30rem]'>
                    <img className='object-center' src={hp3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}

export default Homepart3
