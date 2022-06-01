import React from 'react'
import { Link } from 'react-router-dom'
import './HomeD.css'

const HomeD = () => {
  return (
    <section> 
        <div id='header'></div>

        <div className='Home-container'>
            <div className='Home-header'>
                <div className='Home-header-wrapper'>
                    <div className='community'>
                        <div className='community-info'>
                            <h1 className='project-header'>Community Focused NFT Project</h1>
                            <p className='project-para'>A Web3 Incubator and Metaverse brand on the Solana Blockchain</p>
                        </div>
                        <div className='buy-div'>
                            <Link to='#' className='buy-btn'>
                                <div className='text'>
                                    Buy Now now
                                </div>
                                <i className="fa-solid fa-angle-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default HomeD