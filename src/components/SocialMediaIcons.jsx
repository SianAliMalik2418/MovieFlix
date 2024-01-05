import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function SocialIcons() {
  return (
    <div className='flex gap-8 mt-3'>
      <div className='hover:shadow-2xl w-[50px] h-[50px] bg-[#04152D]  flex items-center justify-center rounded-[50%] hover:bg-sky-700 transition-all'>
      <FaFacebookF size={28} cursor={"pointer"}  color='white' />
      </div>

      <div className='hover:shadow-2xl w-[50px] h-[50px] bg-[#04152D] flex items-center justify-center rounded-[50%] hover:bg-pink-500 transition-all'>
      <FaInstagram size={28} cursor={"pointer"}  color='white' />
      </div>

      <div className='hover:shadow-2xl w-[50px] h-[50px] bg-[#04152D] flex items-center justify-center rounded-[50%] hover:bg-gray-500 transition-all'>
      <FaGithub size={28} cursor={"pointer"}  color='white' />
      </div>

      <div className='hover:shadow-2xl w-[50px] h-[50px] bg-[#04152D] flex items-center justify-center rounded-[50%] hover:bg-sky-600 transition-all'>
      <FaTwitter size={28} cursor={"pointer"}  color='white' />
      </div>

   
    </div>
  )
}

export default SocialIcons
