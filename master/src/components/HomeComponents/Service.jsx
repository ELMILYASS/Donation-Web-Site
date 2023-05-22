import React from 'react'
import Line from './Line'
import money from '../../assets/money.png'
import Title from './Title'

const Service = ({color,title}) => {
  return (
    <div className={`${color} flex ${color?'md:flex-row':'md:flex-row-reverse'} flex-col  justify-between md:h-[270px] md:gap-6 px-2 md:px-10`}>
        <div className='md:hidden block '>
          <Title title={title} color='bg-green3'/>
        </div>
        <div className='w-[90%] self-center  flex justify-center items-center'>
            <img width={300} height={300} className='sm:w-[300px] w-[230px]' src={money} alt='money'/>
        </div>
        <div className='flex flex-col gap-4 w-full py-8 items-center'>
            <div className={` md:flex hidden ${color?'flex-row':'flex-row-reverse'} gap-3 items-center md:w-[90%]`}>                
                <h3 className='text-lg font-bold text-green5'>{title}</h3>
                <Line right={!color} color="bg-green5" />
            </div>
            <p className='sm:text-sm  text-xs  font-medium text-green3 md:w-[78%] w-[80%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates autem quod corrupti officia, cum veritatis iste totam ipsam accusantium blanditiis possimus debitis dolore Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
    </div>
  )
}

export default Service