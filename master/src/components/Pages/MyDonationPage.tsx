import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import MyDonation from '../MyDonationComponents/MyDonation'
import Footer from '../HomeComponents/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
        <MyDonation/>
        <Footer/>
    </div>
  )
}

export default page