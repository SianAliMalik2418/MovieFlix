import React from 'react'
import SocialIcons from './socialIcons'

function Footer() {
  return (
    <div className='bg-[#020C1B] flex flex-col justify-center items-center w-full  p-5 pb-15 mt-20 gap-5'>
  <div className='text-white flex gap-10 text-lg sm:text-sm' >
   <p>Terms Of Use</p>
   <p>Privacy Policy</p>
   <p>About</p>
   <p>Blog</p>
   <p>FAQ</p>
  </div>

  <div >
<p className='w-[50rem] text-center text-[#777C84] mt-5 smd:w-[40rem] sm:w-[30rem] xsm:w-[20rem]' >Dive into the world of cinema with app made by <span className='text-[yellow]'>SIAN ALI MALIK</span>! Explore a vast collection of movies and TV shows, from classics to the latest releases. Enjoy a seamless experience discovering, watching trailers, and getting detailed info. Lights, camera, action – let the cinematic adventure begin!</p>
  </div>

<SocialIcons/>
    </div>
  )
}

export default Footer