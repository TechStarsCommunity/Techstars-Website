import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Reward from '../components/Reward';
import Project from '../components/Project';
import YourComponent from '../components/YourComponent';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import ScrollReveal from '../provider/ScrollReveal';
import WhatWeDo from '../components/WhatWeDo';
import BeInformed from '../components/BeInformed';

const LandingPage = () => {
    return (
        <motion.div
            className='w-full '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}

        >
            <Hero />
            <About />
            <WhatWeDo />
            <Project />
            <BeInformed />
        </motion.div>
    )
}

export default LandingPage