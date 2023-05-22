import React, { useEffect } from 'react'
import DonationCard from './DonationCard'
import Title from '../HomeComponents/Title' 
import clothes from '../../assets/clothes.png'
import axios from '../../axios/axios'
import { useUser } from '../../contexte/UserContext'
const MyDonation = () => {
  const {user}=useUser()
  const getUserRole=async()=>{
    const res = await axios.get(`/donations`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        mode: "cors",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    console.log(res.data);
    
  }
  useEffect(()=>{
    getUserRole()
  },[])
  return (
    <div className='flex flex-col items-center mt-10'>
        <h1 className='text-textcolor sm:text-2xl text-xl font-bold  '>Be The Reason Someone Smiles Today</h1>
        <img src={clothes} alt='clothes_image' width={400}/>
        <div className='w-full'>
            <Title title='My Donation' color='bg-green5'/>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-2 gap-y-8 mt-8 sm:gap-x-14 gap-x-6'>
            <DonationCard/>
            <DonationCard/>
            <DonationCard/>
            <DonationCard/>
            <DonationCard/>
            <DonationCard/>
            <DonationCard/>
            <DonationCard/>
            <DonationCard/>
        </div>
        <button className='text-green5 bg-green2 px-16 py-2 font-bold text-sm mt-5'>Make a new donation here</button>
    </div>
  )
}

export default MyDonation