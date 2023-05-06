import React from 'react'
import {BiHide} from "react-icons/bi"
import {AiOutlineUser,AiFillLock,AiOutlineMail,AiFillPhone} from 'react-icons/ai'
import{FaRegAddressCard} from 'react-icons/fa'

import { Context } from "./Home";
import { useContext } from 'react';
const SignupForm = () => {
    const [State, setState] = useContext(Context);
  return (
    <div className='sign Up component' style={{transform:`translateX(${State.signUp}%)`}}>
    <h1>Sign up</h1>
    <form action="">
    <div className='input'>
        <div className="field">
            <AiOutlineUser className='icon'/>
            
            <input type="text" id='fname' name='fname' placeholder='First name'/>
        </div>
        <div className="field">
            <AiOutlineUser className='icon'/>
            
            <input type="text" id='lname' name='lname' placeholder='Last name'/>
        </div>
    </div>
    
    <div className='input'>
        <div className="field">
            <AiOutlineUser className='icon'/>
           
            <input type="text" id='uname' placeholder='Username' />
        </div>
        <div className="field">
           <AiFillPhone className='icon'/> 
           
            <input type="text" id='phone' name='phone' placeholder='Phone'/>
        </div>
    </div>
    <div className='field'>
        <FaRegAddressCard className='icon'/>
      
        <input type="text" id='address' name='address' placeholder='Address'/>
    </div>
    <div className='field'>
        <AiOutlineMail className='icon'/>
        
        <input type="text" id='email' name='email' placeholder='Email'/>
    </div>
    <div className='field '>
       
       
        <input type="password" id='password' name='password' placeholder='password'/>
        <BiHide className='icon'/>
    </div>
   <input type="submit" value="SIGN UP" />
    </form>
    </div>
  )
}

export default SignupForm