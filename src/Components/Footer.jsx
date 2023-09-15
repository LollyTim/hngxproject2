import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube} from "react-icons/ai"

const Footer = () => {
  return (
    <div className='justify-center items-center pt-[60px]'>
      <div className='flex justify-between w-56 items-center text-3xl mx-auto'>
        <AiFillFacebook  />
        <AiFillInstagram />
        <AiFillTwitterCircle />
        <AiFillYoutube />
      </div>
      <div className='flex justify-between w-6/12 items-center text-xl mx-auto my-8 font-semibold'>
        <h5>Conditions of Use</h5>
        <h5>Privacy & Policy</h5>
        <h5>Press Room</h5>
      </div>
      <p className='ml-[500px] text-gray-400 mb-[20px]'>© 2023 MovieBox by Sanya Ololade </p>
    </div>
  )
}

export default Footer
