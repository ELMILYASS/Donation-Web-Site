import React, { useState } from 'react'
import { useLocation,Navigate,Outlet } from 'react-router-dom'
import  { useEffect } from 'react'
import axios from '../axios/axios'
import Home from '../components/Login/Home'
const RequireAuth = () => {
    const [valid,setValid]=useState(false)
    const location =useLocation()
    const testUser=async()=>{
      const access_token =localStorage.getItem('access_token')
      console.log(access_token);
      if(access_token){
        const res= await axios.get('/test/user',{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('access_token')}`
          }
        })
        if( res.status===200){
          if(location.pathname==="/"){
            <Navigate to={"/home"}/>
          }
          setValid(true)
        }
      }
    }

    useEffect(()=>{
      testUser()
    },[])

  return (
    valid?<Outlet/>:<Home/>
  )
}

export default RequireAuth