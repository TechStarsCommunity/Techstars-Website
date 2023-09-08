import React from 'react'
import smile from "../assets/image/smile.svg"
import vrguy from "../assets/image/vrguy.svg"
import smiling from "../assets/image/smiling.svg"
import { motion } from 'framer-motion';
import ScrollReveal from '../provider/ScrollReveal';

const About = () => {
    return (
        <motion.div className='px-[20px] relative  md:px-[64px] py-[40px] w-full overflow-x-hidden min-h-[100vh] grid gap-[40px]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}>
            <ScrollReveal direction="left">
                <div className='w-100% md:w-[60%] grid gap-[15px] '>
                    <h3 className='text-4xl font-bold'>What to expect from us</h3>
                    <p className='text-[18px]'>
                        We are the vibrant heartbeat of the tech ecosystem, a passionate collective dedicated to building and shipping transformative software solutions. Our open-source ethos drives us to harness innovation, fueling our mission to change the world through technology. As a thriving online community, we're not just here to inspire, educate, and connect; we're also your gateway to exciting job opportunities in the tech industry.
                    </p>
                </div>
            </ScrollReveal>
            <img src={smile} alt="" className='absolute right-[-100px] top-[-100px] md:flex hidden h-[550px] w-[550px] myAnination' />
            <div className='w-full grid gap-[32px] grid-cols-1 md:grid-cols-2 '>
                <ScrollReveal direction="left">
                    <div className=' h-[610px] w-full  bg-[#750FF7] relative px-[40px] py-[20px] text-white flex flex-col gap-[20px] ' >
                        <h3 className='text-3xl font-bold'>What We Do</h3>
                        <p className='text-lg'>Techstars is where innovation flourishes. Join a diverse global community of tech visionaries, mentors, and investors collaborating to drive the next wave of groundbreaking ideas.   Techstars is where innovation flourishes. Join a diverse global community of tech visionaries, mentors, and investors collaborating to drive the next wave of groundbreaking ideas. Techstars is where innovation flourishes.</p>
                        <img src={vrguy} alt="" className='absolute bottom-0 w-full left-0 ' />
                    </div>
                </ScrollReveal>
                <ScrollReveal direction="right">
                    <div className=' h-[610px] w-full  bg-[#FFBA03] relative px-[40px] py-[20px] text-white flex flex-col gap-[20px] ' >
                        <h3 className='text-3xl font-bold'>Our Vision</h3>
                        <p className='text-lg'>Techstars is where innovation flourishes. Join a diverse global community of tech visionaries, mentors, and investors collaborating to drive the next wave of groundbreaking ideas. </p>
                        <img src={smiling} alt="" className='absolute bottom-0 w-full left-0' />
                    </div>
                </ScrollReveal>
            </div>
            <div className='w-full grid gap-[32px] grid-cols-1 md:grid-cols-2 '>
                <ScrollReveal direction="left">
                    <div className='w-full  bg-[#0098F1] relative px-[40px] py-[20px] text-white flex flex-col gap-[20px] ' >
                        <h3 className='text-3xl font-bold'>Who We Serve</h3>
                        <p className='text-lg'>Techstars is where innovation flourishes. Join a diverse global community of tech visionaries, mentors, and investors collaborating to drive the next wave of grouaking ideas.   Techstars is where innova drive the next wave of groundbreaking ideas. </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal direction="right">
                    <div className=' w-full  bg-[#03A146] px-[40px] py-[20px] text-white flex flex-col gap-[20px] h-full ' >
                        <h3 className='text-3xl font-bold'>Going Global</h3>
                        <p className='text-lg'>Techstars is where innovation flourishes. Join a diverse global community of tech visionaries, mentors, and investors collaborating to drive the next wave of groundbreaking ideas. </p>
                    </div>
                </ScrollReveal>
            </div>
        </motion.div>
    )
}

export default About