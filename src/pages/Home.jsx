import React from 'react'
import Banner from '../components/Banner'
import Intro from '../components/Intro'
import Homepart1 from '../components/Homepart1'
import HomePart2 from '../components/HomePart2'

function Home() {
  return (
    <div>
      HOME PAGE
      <HomePart2/>
      <Homepart1/>
      <Intro/>
      <Banner/>
    </div>
  )
}

export default Home
