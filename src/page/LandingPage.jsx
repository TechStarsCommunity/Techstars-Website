import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';

const LandingPage = () => {
    return (
        <div className='w-full '>
            <NavBar />
            <Hero />
            <About />
        </div>
    )
}

export default LandingPage