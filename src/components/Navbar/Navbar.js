import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Navbar_menu from './Navbar_data';


const Navbar = () => {

    const [activeHam, setActiveHam] = useState(false)
      
  
    const menuItems = (
      <ul> 
        <li className='Nav-social'>
            <Link to='/' className='Nav-link' onClick>
                Home
            </Link>
        </li>
        <li className='Nav-social'>
            <Link to='/Roadmap' className='Nav-link' onClick>
                Roadmap
            </Link>
        </li>
        <li className='Nav-social'>
            <Link to='/Story' className='Nav-link' onClick>
                Team
            </Link>
        </li>
        <li className='Nav-social'>
            <Link to='/' className='Nav-link' onClick>
                Whitepaper
            </Link>
        </li>
        <li className='Nav-social'>
            <Link to='/' className='Nav-link' onClick>
              Staking
            </Link>
        </li>
      </ul>
    );
  
    return (
      
        <div className='Nav-container'>
          <nav className='Nav-bar'>
            <div className='Nav-logo'>
              <h2 className='logo'>BBFY</h2>
            </div>
            <Navbar_menu />
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