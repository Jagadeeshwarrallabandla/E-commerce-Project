import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-Styling'>

        <div className='icon-content'>
          <div className='icon-mart-design'>
        <FontAwesomeIcon icon={faBagShopping} className='icon' />
        <h6>Mart</h6>
        </div>
        <li>Lorem ipsum dolor sit amet</li>
        <li>consectetur adipisicing elit</li>
        <li>Optio nostrum accusantium iste</li>
        <li>voluptas cumque provident</li>
        <li>voluptates labore tempore!</li>
      </div>

        <div className='About'>
            <h6>About us</h6>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Term's and Conditions</li>
            <li>Privacy Policy</li>
        </div>

        <div className='customer'>
            <h6>Customer Care</h6>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Track your Order</li>
            <li>Corporate & Bulk</li>
            <li>Returns & Refunds</li>
        </div>

        <div className='contact-us'>
            <h6>Contact us</h6>
            <li>70 Washington Square</li>
            <li>South,NewYork,NY 10012</li>
            <li>United States</li>
            <li>E-mail:example@email.com</li>
            <li>phone:7793977211</li>
        </div>

        </div>
      </div>
    
  )
}

export default Footer
