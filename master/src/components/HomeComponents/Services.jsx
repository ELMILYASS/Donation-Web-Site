import React from 'react'
import Title from './Title'
import Service from './Service'

const Services = () => {
  return (
    <div >
        <Title title='Services' color='bg-green2'/>

        <Service title='Money' color='bg-green4'/>
        <Service title='Clothes' color=''/>
        <Service title='Books' color='bg-green4'/>
        <Service title='Foods' color=''/>
        <Service title='Other' color='bg-green4'/>
    </div>
  )
}

export default Services