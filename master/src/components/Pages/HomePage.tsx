import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import Main from '../HomeComponents/Main'
import Services from '../HomeComponents/Services'
import Contact from '../HomeComponents/Contact'
import Footer from '../HomeComponents/Footer'
import Testimonials from '../HomeComponents/Testimonials'
import { useUser } from '../../contexte/UserContext'

const Homepage = () => {
const {user}=useUser()
  return (
    <main className="overflow-hidden">
      {user}
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