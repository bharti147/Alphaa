import React from 'react'
import Banner from '../components/Banner'
import Intro from '../components/Intro'
import Homepart1 from '../components/Homepart1'
import Homepart2 from '../components/HomePart2'
import Homepart3 from '../components/HomePart3'

function Home() {
  return (
    <div className='w-full h-auto bg-[#F7F7F7]'>
      <Homepart3/>
      <Homepart2/>
      <Homepart1/>
      <Intro/>
      <Banner/>
    </div>
  )
}

export default Home
