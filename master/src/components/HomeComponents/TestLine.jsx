import React from 'react'
import user from '../../assets/user.png'
import vector3 from '../../assets/Vector3.png'
import {FaQuoteRight,FaQuoteLeft} from 'react-icons/fa'
const TestLine = ({picture,text,inverse}) => {
  return (
    <div className={`flex ${inverse?'md:flex-row-reverse':'md:flex-row'}  ${'flex-col'} justify-center sm:gap-16 gap-8 items-center mt-10`}>
        <div className='relative w-[300px] flex justify-center items-center '>
            <img className='absolute sm:w-[200px] w-[150px] ' width={200} src={vector3} alt='user'/>
            <img  width={150} className='z-10 sm:w-[150px] w-[100px]' src={user} alt='user'/>
        </div>
        <div className='relative   h-fit flex flex-col items-center sm:w-[400px] w-[90%]'>
            <FaQuoteRight  size={20} className='absolute text-textcolor top-0 left-0 rotatee'/>
            <p className='sm:text-sm text-xs text-green5 font-medium p-5'>{text}</p>
            <FaQuoteLeft size={20} className='absolute text-textcolor bottom-0 right-0 rotatee'/>
        </div>
    </div>
  )
}

export default TestLine