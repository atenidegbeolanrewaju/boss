import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const data = [
    {
        id: 1,
        menu: 'Home',
        page: '/'
    },
    {
        id: 2,
        menu: 'Roadmap',
        page: '/Roadmap'
    },
    {
        id: 3,
        menu: 'Story',
        page: '/Story'
    }
]

function Navbar_menu() {

    const [Data, setData] = useState(data)

    return (
        <div className='Nav-bar-items Nav-menu'>
            
            {Data.map((item, i) => (
                <li key={item.id} className='Nav-social'>
                    <NavLink to={item.page} className={(navData) => navData.isActive ? 'Nav-link-active' : 'Nav-link' }>
                        {item.menu} 
                    </NavLink>
                </li>
            ))}
            <li className='Nav-social'>
                <Link to='/' className='Nav-link'>
                    Whitepaper
                </Link>
            </li>
            <li className='Nav-social'>
                <Link to='/' className='Nav-link'>
                    Staking
                </Link>
            </li>
        </div>
    )

}

export default Navbar_menu