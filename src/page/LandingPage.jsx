import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Reward from '../components/Reward';
import Project from '../components/Project';
import YourComponent from '../components/YourComponent';

const LandingPage = () => {
    return (
        <div className='w-full '>
            <NavBar />
            <Hero />
            <About />
            <YourComponent />
            <Reward />
            <Project />
        </div>
    )
}

export default LandingPage