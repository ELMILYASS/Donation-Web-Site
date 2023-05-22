import React, { useEffect, useState } from 'react'
import Navbar from '../HomeComponents/Navbar'
import Main from '../HomeComponents/Main'
import Services from '../HomeComponents/Services'
import Contact from '../HomeComponents/Contact'
import Footer from '../HomeComponents/Footer'
import Testimonials from '../HomeComponents/Testimonials'
import { useUser } from '../../contexte/UserContext'
import axios from '../../axios/axios'

const Homepage = () => {
  const {user}=useUser()
  const [role,setRole]=useState()
  const getUserRole=async()=>{
    const res = await axios.get(`/role/user/${user?.sub}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        mode: "cors",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    setRole(res.data)    
  }
  useEffect(()=>{
    getUserRole()
  },[])
  console.log(role);
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <Main/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default Homepage