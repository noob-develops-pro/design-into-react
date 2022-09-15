import React from 'react'
import {
  FaFacebookSquare,
  FaTwitter,
  FaGooglePlusG,
  FaUser,
} from 'react-icons/fa'
import { FaShoppingBasket } from 'react-icons/fa'
import '../../index.css'

export const SocialItem = ({ icon }) => {
  return <span className='social__item'>{icon}</span>
}

function SocialNavbar() {
  return (
    <div className='social__container'>
      <div className='social'>
        <span className='social__text'>Follow us: </span>
        <SocialItem icon={<FaGooglePlusG />} />
        <SocialItem icon={<FaFacebookSquare />} />
        <SocialItem icon={<FaTwitter />} />
      </div>
      <div className='social-right'>
        <div className='item-wraper'>
          <SocialItem icon={<FaShoppingBasket />} />
          <span className='social__text'>(0)</span>
        </div>
        <div className='item-wraper'>
          <SocialItem icon={<FaUser />} />
          <span className='social__text'>login or register</span>
        </div>
      </div>
    </div>
  )
}

export default SocialNavbar
