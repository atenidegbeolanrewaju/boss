import React from 'react'
import Navbar from './Navbar/Navbar'
import '../index.css'
import HomeD from './Home/HomeD'
import FAQ from './Home/FAQ'
import Footer from './Navbar/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HomeD />
        <FAQ />
        <Footer />
    </div>
  )
}

export default Home