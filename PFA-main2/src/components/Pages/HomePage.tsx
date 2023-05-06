import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import Main from '../HomeComponents/Main'
import Services from '../HomeComponents/Services'
import Contact from '../HomeComponents/Contact'
import Footer from '../HomeComponents/Footer'
import Testimonials from '../HomeComponents/Testimonials'

const Homepage = () => {
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