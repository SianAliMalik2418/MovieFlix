import React, { useEffect, useState } from 'react'
import axios from "axios"
import HeroSection from './HeroSection'
import CardsContainer from './CardsContainer'


function Home() {

 

  return (
    <div className='pb-20 '>
   <HeroSection/>
   <CardsContainer/>
    </div>
  )
}

export default Home