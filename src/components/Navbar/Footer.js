import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import './Footer.css'



const Footer = () => {
  return (
    <div className='footer'>
      {/* <hr className='hr-style'/> */}
      <div className='bottom-content'>
          <div className='market-info'>
              <img src='https://uploads-ssl.webflow.com/62194ab972bfa3fea9c631a5/62250a8562c88d6b3f0e430a_solanaLogo.svg' className='market-logo'/>
              <img src='https://uploads-ssl.webflow.com/62194ab972bfa3fea9c631a5/62251ed1158009b58947298d_logo.ca418d75.svg' className='market-logo'/>
          </div>
          <div className='trust-text'>
              Part of the Solana Network
          </div>
        </div>
        <div className='footer-base'>
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
                      <i className="fa-brands fa-discord"></i>
                    </Link>
                  </li>
                  <li className='Nav-social'>
                    <Link to='/twitter' className='social-icon Nav-link'>
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
              </div>
            </nav>
          </div>
          <div className='foot'>
            <h4 className='footer-right'>© 2022 THE DON FAMILY . All Rights Reserved.</h4>
            <hr className='hr-style' />
          </div>
      </div>
    </div>
  )
}

export default Footer