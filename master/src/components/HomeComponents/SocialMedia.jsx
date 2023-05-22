'use client'
import React, { useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const SocialMedia = () => {
    const [show, setShow]=useState(false)
  return (
    <div onClick={()=>setShow(!show)} className={`cursor-pointer absolute ${show?'translate-x-0':'translate-x-7'} transition-all duration-300 bottom-0 right-0  px-6 py-2 flex gap-1 border boder-2 border-green6 rounded-3xl`}>
        <FaLinkedinIn className='text-green6 ' size={27}/>
        <FaFacebookF className='text-green6 ' size={27}/>
        <FaTwitter className='text-green6 ' size={27}/>
    </div>
  )
}

export default SocialMedia