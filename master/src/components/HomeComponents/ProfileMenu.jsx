import React from 'react'
import Line from './Line'
import { Link } from 'react-router-dom'

const ProfileMenu = ({menu}) => {
  return (
   <>
    {
                menu&&(
                    <div className='bg-green2 md:hidden flex inset-x-0  top-14 border-8 border-white py-6 fixed z-[999] rounded-2xl flex-col justify-center items-center gap-2 '>
                        
                        <Link to={"/profile"} className='text-textcolor font-medium text-xs px-6 cursor-pointer '> Profile</Link>
                        <div className='w-full flex px-2'>
                        <Line color=' bg-green3' right={false}/>
                        <Line color=' bg-green3' right/>
                        </div>
                        <Link to={"/donations"} className='text-textcolor font-medium text-xs px-6 cursor-pointer '>My Donation</Link>
                        <div className='w-full flex px-2'>
                        <Line color=' bg-green3' right={false}/>
                        <Line color=' bg-green3' right/>
                        </div>
                        <Link to={"/home"} className='text-textcolor font-medium text-xs px-6 cursor-pointer '>Logout</Link>
                    </div>
                )
            }
   </>
  )
}

export default ProfileMenu