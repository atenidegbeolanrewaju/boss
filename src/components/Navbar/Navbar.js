import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {

    const [activeHam, setActiveHam] = useState(false)
  
    const menuItems = (
      <ul> 
        <li className='Nav-social'><Link to='/' className='Nav-link'>Home</Link></li>
        <li className='Nav-social'><Link to='/roadmap' className='Nav-link'>Roadmap</Link></li>
        <li className='Nav-social'><Link to='/Team' className='Nav-link'>Team</Link></li>
        <li className='Nav-social'><Link to='/Tokenomics' className='Nav-link'>Tokenomics</Link></li>
        <li className='Nav-social'><Link to='/whitepaper' className='Nav-link'>Whitepaper</Link></li>
        <li className='Nav-social'><Link to='/' className='Nav-link' target='_blank'>Staking</Link></li>
        <li className='Nav-social'>
          <Link to='/discord' className='social-icon'>
            <img src='./Discord-Logo-Black.svg' alt='discord' />
          </Link>
        </li>
        <li className='Nav-social'>
          <Link to='/twitter' className='social-icon'>
            <img src='./iconmonstr-twitter.svg' alt='twitter' className='Nav-social'/>
          </Link>
        </li>
      </ul>
    );
  
    return (
      <div className=''>
        <nav className='Nav-bar'>
          <div className='Nav-logo'>
            <h2 className='logo'>BBFY</h2>
          </div>
          <div className='Nav-bar-items Nav-menu'>
            {menuItems}
          </div>
          <button className={activeHam ? 'hamburger active-hamburger' : 'hamburger'} 
                  onClick = {() => setActiveHam(!activeHam)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
        {activeHam && <div className='nav-dropdown'>{menuItems}</div>}
      </div>
    )
  }
  
                        
                        
export default Navbar