import React from 'react'
import { logo_center } from '../images/images'

function HeroSection() {
  return (
    <div className='hero'>
      <img src={logo_center} alt='logo-center' className='logo-center' />
      <div className='hero-textbox'>
        <h1>Delicious Food</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          voluptatem, eum magnam ullam possimus exercitationem dolores. Quasi
          illo quidem temporibus.
        </p>
        <button type='button' className='btn'>
          Read More
        </button>
      </div>
    </div>
  )
}

export default HeroSection
