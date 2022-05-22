import React from 'react'
import { Link } from 'react-router-dom'
import './HomeD.css'

const HomeD = () => {
  return (
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
                                Buy
                            </div>
                            <i class="fa-solid fa-angle-right"></i>
                        </Link>
                        <Link to='#' className='buy-btn'>
                            <div className='text'>
                                Buy Now
                            </div>
                            <i class="fa-solid fa-angle-right"></i>
                        </Link>
                    </div>
                </div>
                <div className='community-image'>
                    <img src='https://uploads-ssl.webflow.com/62194ab972bfa3fea9c631a5/622cc3c3e6526a43223850d6_Cynova%20Hero-p-800.png' className='image-class'/>
                </div> 
            </div>
            <div className='bottom-content'>
                <div className='market-info'>
                    <img src='https://uploads-ssl.webflow.com/62194ab972bfa3fea9c631a5/62250a8562c88d6b3f0e430a_solanaLogo.svg' className='market-logo'/>
                    <img src='https://uploads-ssl.webflow.com/62194ab972bfa3fea9c631a5/62251ed1158009b58947298d_logo.ca418d75.svg' className='market-logo'/>
                </div>
                <div className='trust-text'>
                    Part of the Solana Network
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeD