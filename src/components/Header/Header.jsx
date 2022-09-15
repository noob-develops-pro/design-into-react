import React from 'react'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import SocialNavbar from './SocialNavbar'

function Header() {
  return (
    <>
      <SocialNavbar />
      <Navbar />
      <HeroSection />
    </>
  )
}

export default Header
