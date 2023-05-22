import React from 'react'
import Line from './Line'

const Title = ({title,color}) => {
  return (
    <div id={title} className='flex gap-3 items-center  mt-8 mb-5'>
        <Line right color={color}/>
        <h3 className={`font-bold sm:text-2xl text-lg text-textcolor`}><pre>{title}</pre></h3>
        <Line right={false} color={color}/>
    </div>
  )
}

export default Title