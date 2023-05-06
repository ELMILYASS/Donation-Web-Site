import React from 'react'
import TestLine from './TestLine'
import vector3 from '../../assets/Vector3.png'

const Testimonial = () => {
  return (
    <div className='flex flex-col sm:gap-20 gap-2'>
        <TestLine picture={vector3} text='Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit. Officia at atque magnam aliquam accusantium. Natus, officia laudantium veniam pari. Officia at atque magnam aliquam accusantium. Natus, officia laudantium veniam pari'   inverse={false}/>
        <TestLine picture={vector3} text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia at atque magnam aliquam accusantiumLorem ipsum dolor sit amet, consectetur adipisicing elit. Officia at atque magnam aliquam accusantium. Natus, officia laudantium veniam pari. Natus, officia laudantium veniam pari'  inverse={true}/>
    </div>
  )
}

export default Testimonial