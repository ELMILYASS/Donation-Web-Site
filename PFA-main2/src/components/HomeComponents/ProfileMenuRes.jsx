import React from 'react'
import Line from './Line'
import { Link } from 'react-router-dom'

const ProfileMenuRes = ({menu}) => {
  return (
    <>
    {
                menu&&(
                    <div className='bg-green2 md:hidden flex inset-x-0  top-14 border-8 border-white py-6 fixed z-[999] rounded-2xl flex-col justify-center items-center gap-2 '>
                        <p className='text-textcolor font-medium text-xs px-6 '>Profile</p>
                        <div className='w-full flex px-2'>
                        <Line color=' bg-green3' right={false}/>
                        <Line color=' bg-green3' right/>
                        </div>
                        <Link href={'/mydonation'} className='text-textcolor font-medium text-xs'><p>My Donation</p></Link>
                        <div className='w-full flex px-2'>
                        <Line color=' bg-green3' right={false}/>
                        <Line color=' bg-green3' right/>
                        </div>
                        <p className='text-textcolor font-medium text-xs'>Logout</p>
                    </div>
                )
            }
   </>
  )
}

export default ProfileMenuRes