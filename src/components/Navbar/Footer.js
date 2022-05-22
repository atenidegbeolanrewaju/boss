import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import './Footer.css'


const Footer = () => {
  return (

    <div className='footer'>
      <div className='Nav-container-footer'>
        <nav className='Nav-bar-footer'>
          <div className='Nav-bar-items-footer Nav-menu-footer'>
              <li className='Nav-social'>
                  <Link to='/' className='Nav-link' target='_blank'>
                      Staking
                  </Link>
              </li>
              <li className='Nav-social'>
                <Link to='/discord' className='social-icon Nav-link'>
                  <i class="fa-brands fa-discord"></i>
                </Link>
              </li>
              <li className='Nav-social'>
                <Link to='/twitter' className='social-icon Nav-link'>
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </li>
          </div>
        </nav>
      </div>
      <div className='foot'>
         
          <h4 className='footer-right'>© 2022 THE DON FAMILY . All Rights Reserved.</h4>
          <hr />
      </div>
    </div>
  )
}

export default Footer