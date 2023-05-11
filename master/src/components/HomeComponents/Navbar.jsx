
import { useState } from 'react'
import Profile from './Profile'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import Line from './Line'
import ProfileMenuRes from './ProfileMenuRes'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [showMenu,setShowMenu]=useState(false);
  return (
    <>
        <nav className='px-14 py-2  justify-between items-center md:flex hidden h-[8vh] relative'>
            <Link to="/" className='font-bold text-xl text-green1'><h3>I.L.A.B</h3></Link>
            <div className='flex gap-8 items-center'>
                <ul className='flex items-center gap-8 justify-center'>
                    <li ><a href="#Services" className='text-[16px] font-medium text-green1'>Services</a></li>
                    <li ><a href="#Testimonial" className='text-[16px] font-medium text-green1'>Testimonial</a></li>
                    <li ><a href="#Contact Us" className='text-[16px] font-medium text-green1'>Contact Us</a></li>
                </ul>
                <Profile menu={menu} setMenu={setMenu}/>
            </div>
        </nav>
        <nav className='relative px-6  py-2  justify-between items-center md:hidden flex overflow-x-hidden h-[8vh]'>
            <Link to="/" className='font-bold text-xl text-green1'><h3>I.L.A.B</h3></Link>
            <div className={` flex ${showMenu?'translate-y-[30%]':'translate-y-[-100%]'} z-30 h-[30%] inset-x-0 transition-all duration-500  flex-col justify-center gap-6 items-center  bg-green2 fixed`}>
                <Link to="/" className='font-bold text-xl text-green3'><h3>I.L.A.B</h3></Link>
                <ul className='flex flex-row items-start gap-6 justify-center'>
                    <li className='text-[16px] font-medium text-green3 text-start' ><a href="#Services" >Services</a></li>
                    <li className='text-[16px] font-medium text-green3 text-start' ><a href="#Testimonial" >Testimonial</a></li>
                    <li className='text-[16px] font-medium text-green3 text-start' ><a href="#Contact Us" >Contact Us</a></li>
                </ul>

                {
                showMenu
                ?<AiOutlineClose  onClick={()=>setShowMenu(!showMenu)} className='z-50 absolute top-10 right-6 text-green1' size={27}/>
                :<AiOutlineMenu  onClick={()=>setShowMenu(!showMenu)} className='z-40 hidden absolute top-5 right-5 text-green1' size={27}/>
                }
            </div>
            <Profile menu={menu} setMenu={setMenu}/>
            <ProfileMenuRes menu={menu}/>
            {
                showMenu
                ?<AiOutlineClose  onClick={()=>setShowMenu(!showMenu)} className={`  ${showMenu?'text-green2 z-0':'text-green1 z-40'}`} size={27}/>
                :<AiOutlineMenu  onClick={()=>setShowMenu(!showMenu)} className={`z-40  text-green1`} size={27}/>
            }
        </nav>
    </>
  )
}

export default Navbar