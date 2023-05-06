import React, { useState } from 'react'
import {CgProfile} from 'react-icons/cg'
import Line from './Line'
import { Link } from 'react-router-dom'
const Profile = ({menu,setMenu}) => {
  return (
    <div className={`  `}>
        <CgProfile onClick={()=>setMenu(!menu)} className='text-green1 cursor-pointer absolute sm:static top-5 right-[45%]' size={27}/>
        {
          menu&&(
            <>
              <div className='bg-green2 md:flex hidden border-8 border-white h-[130px] w-[130px]  py-4 top-[3.2rem] right-1 absolute z-50 rounded-2xl  flex-col justify-center items-center gap-2'>
                <p className='text-textcolor font-medium text-xs '>Profile</p>
                <div className='w-full flex px-2'>
                  <Line color=' bg-green3' right={false}/>
                  <Line color=' bg-green3' right/>
                </div>
                <Link to={'/mydonation'} className='text-textcolor font-medium text-xs'><p>My Donation</p></Link >
                <div className='w-full flex px-2'>
                  <Line color=' bg-green3' right={false}/>
                  <Line color=' bg-green3' right/>
                </div>
                <p className='text-textcolor font-medium text-xs'>Logout</p>
              </div>

              {/* responsive */}
            </>
          )
        }


    </div>
  )
}

export default Profile