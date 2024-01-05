import React, { useEffect, useState } from 'react'
import axios from "axios"
import HeroSection from './HeroSection'
import CardsContainer from './CardsContainer'
import Footer from './footer'


function Home() {

 


  return (
    <div className='pb-20 '>
   <HeroSection/>
   <CardsContainer/>
   <Footer/>
    </div>
  )
}

export default Home