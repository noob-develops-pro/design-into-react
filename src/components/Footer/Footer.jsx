import React from 'react'
import { SocialItem } from '../Header/SocialNavbar'
import { FaFacebookSquare, FaTwitter, FaGooglePlusG } from 'react-icons/fa'

function Paycard({ lnk }) {
  return (
    <div className='img-wraper'>
      <img src={lnk} alt='' />
    </div>
  )
}

function Footer() {
  const links = [
    'home',
    'About Us',
    'Our Story',
    'cajun/Creole Recipes',
    'Contact Us',
  ]
  const payLinks = [
    'https://financefeeds.com/wp-content/uploads/2021/07/Visa_Inc._logo.svg.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNrAf_tpNv3w5Q0AHA1GEGCmhryCj4WE9Zusnxfcukw2cuGjqFKfMarRqmIx5PUuDhds&usqp=CAU',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png',
    'https://cdn-icons-png.flaticon.com/512/179/179431.png',
  ]

  return (
    <div className='footer'>
      <div className='footer-wraper'>
        <ul className='footer-nav'>
          {links.map((link) => {
            return <li className='f-nav-item'>{link}</li>
          })}
        </ul>
        <div className='row-2'>
          <ul className='footer-nav'>
            {payLinks.map((link) => {
              return (
                <li>
                  <Paycard lnk={link} />
                </li>
              )
            })}
          </ul>
        </div>
        <div className='row-3'>
          <SocialItem icon={<FaGooglePlusG />} />
          <SocialItem icon={<FaFacebookSquare />} />
          <SocialItem icon={<FaTwitter />} />
        </div>
        <div className='row-4'>
          <p>&copy; 2016 freedesignstore.com - All Right Reserved </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
