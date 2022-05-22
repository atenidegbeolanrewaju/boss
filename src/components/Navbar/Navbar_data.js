import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const data = [
    {
        menu: 'Home',
        page: '/'
    },
    {
        menu: 'Roadmap',
        page: '/Roadmap'
    },
    {
        menu: 'Team',
        page: '/Team'
    },
    {
        menu: 'Tokenomics',
        page: '/Tokenomics'
    },
    {
        menu: 'Whitepaper',
        page: '/Whitepaper'
    }
]

function Navbar_menu() {

    const [Data, setData] = useState(data)

    const [selected, setSelected] = useState(null)

    const click = (i) => {
        if (selected ==+ i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className='Nav-bar-items Nav-menu'>
            {Data.map((item, i) => (
                <li className='Nav-social'>
                <Link to={item.page} className={selected === i ? 'Nav-link-active' : 'Nav-link' } onClick={() => click(i)}>
                    {item.menu}
                </Link>
            </li>
            ))}
        </div>
    )

}

export default Navbar_menu