import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Reward from '../components/Reward';
import RewardV from '../components/RewardV';
import Project from '../components/Project';

const LandingPage = () => {
    return (
        <div className='w-full '>
            <NavBar />
            <Hero />
            <About />
            <Reward />
            {/* <RewardV /> */}
            <Project />
        </div>
    )
}

export default LandingPage