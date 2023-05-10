import React from 'react'
import { FaMailBulk } from 'react-icons/fa'
import { MdLocationOn, MdPhone } from 'react-icons/md'

const Info2 = () => {
  return (
    <div className='md:hidden  flex-col flex self-start sm:self-auto  sm:px-10 px-0 '>
        <div className='flex items-center gap-3'>
            <div className='border boder-2 border-green6 text-green3 rounded-full p-1'>
                <MdLocationOn className='text-green6' size={20}/>
            </div>
            <h6 className='font-bold text-sm text-textcolor'>INPT-Rabat</h6>
        </div>
        <div className='flex items-center gap-3'>
            <div className='border boder-2 border-green6 text-green3 rounded-full p-1'>
                <FaMailBulk className='text-green6' size={20}/>
            </div>
            <h6 className='font-bold text-sm text-textcolor'>ilab2023@gmail.com</h6>
        </div>
        <div className='flex items-center gap-3'>
            <div className='border boder-2 border-green6 text-green3 rounded-full p-1'>
                <MdPhone className='text-green6' size={20}/>
            </div>
            <h6 className='font-bold text-sm text-textcolor'>0637477299</h6>
        </div>
    </div>
  )
}

export default Info2