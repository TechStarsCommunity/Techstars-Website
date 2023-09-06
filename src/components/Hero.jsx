import React from 'react'
import LeftHero from "../assets/image/LeftHero.svg"
import RightHero from "../assets/image/RightHero.svg"
import heroImg from "../assets/image/hero.svg"
import left1 from "../assets/image/left1.svg"
import left2 from "../assets/image/left2.svg"
import left3 from "../assets/image/left3.svg"
import left4 from "../assets/image/left4.svg"
import left5 from "../assets/image/left5.svg"
import left6 from "../assets/image/left6.svg"
import left7 from "../assets/image/left7.svg"
import left8 from "../assets/image/left8.svg"
import left9 from "../assets/image/left9.svg"
import { motion, useAnimation } from 'framer-motion';
import ScrollReveal from '../provider/ScrollReveal'

const Hero = () => {
    return (
        <div className='w-full h-[500px] relative bg-blue-50 flex items-center justify-center leftAnimation overflow-hidden'>
            {/* <div className=' absolute left-0 h-full max-w-[300px] w-[30%] flex items-center justify-center z-'>
                <img src={LeftHero} alt="" />
            </div> */}
            <div className=' absolute left-0 h-full max-w-[300px] w-[50%] md:flex hidden items-center justify-center z-'>
                <img src={left1} alt="" className='w-[60px] h-[60px] right-[20px] top-[230px] absolute image' />
                <img src={left2} alt="" className='w-[60px] h-[60px] right-[55px] top-[310px] absolute image' />
                <img src={left3} alt="" className='w-[60px] h-[60px] right-[120px] top-[380px] absolute image' />
                <img src={left4} alt="" className='w-[60px] h-[60px] left-0 bottom-[40px] absolute image' />
                <img src={left5} alt="" className='w-[60px] h-[60px] right-[140px] top-[250px] absolute image' />
                <img src={left6} alt="" className='w-[60px] h-[60px] absolute left-0 image' />
                <img src={left7} alt="" className='w-[60px] h-[60px] absolute left-0 top-[50px] image' />
                <img src={left8} alt="" className='w-[60px] h-[60px] left-0 top-[130px] absolute image' />
                <img src={left9} alt="" className='w-[60px] h-[60px] right-[110px] top-[120px] absolute image' />
            </div>
            <div className='max-w-[600px] w-full mx-auto p-2 items-center justify-center z-[2] '>
                <div className='flex flex-col w-full items-center justify-center gap-[15px]'>
                    <ScrollReveal direction="top">
                        <div className='rounded-tl-xl rounded-br-xl rounded-tr-xl border border-black p-[10px] font-bold'>
                            <h1 className='text-2xl md:text-3xl'>
                                A Community for Techies
                            </h1>
                        </div>
                    </ScrollReveal>
                    <div className='flex gap-1 items-center w-full justify-center'>
                        <ScrollReveal direction="left">
                            <div className='w-[50px] h-[50px] rounded-full '>
                                <img src={heroImg} alt="" className='w-full h-full' />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="left">
                            <div className='w-[50px] h-[50px] rounded-full '>
                                <img src={heroImg} alt="" className='w-full h-full' />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="right">
                            <div className='rounded-tl-xl rounded-bl-xl rounded-tr-xl border border-[#333333] p-[10px] font-bold bg-[#333333] text-white'>
                                <h1 className='text-2xl md:text-3xl'>
                                    Who Wants To Grow
                                </h1>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className='px-[20px]'>
                        <ScrollReveal direction="left">
                            <p className='text-lg text-center'>
                                A home for tech entry/expert professionals who wants to network, build, connect, evolve and grow.
                            </p>
                        </ScrollReveal>
                    </div>
                    <ScrollReveal direction="bottom">
                        <button className='rounded-[8px] border border-black px-[45px] py-[10px] font-bold bg-[#333333] text-white'>
                            <h1 className='text-base'>
                                Join The Community
                            </h1>
                        </button>
                    </ScrollReveal>
                </div>
            </div>
            <div className=' absolute right-0 h-full max-w-[300px] w-[50%] md:flex hidden items-center justify-center rotate-180'>
                <img src={left1} alt="" className='w-[60px] h-[60px] right-[20px] top-[230px] absolute image' />
                <img src={left2} alt="" className='w-[60px] h-[60px] right-[55px] top-[310px] absolute image' />
                <img src={left3} alt="" className='w-[60px] h-[60px] right-[120px] top-[380px] absolute image' />
                <img src={left4} alt="" className='w-[60px] h-[60px] left-0 bottom-[40px] absolute image' />
                <img src={left5} alt="" className='w-[60px] h-[60px] right-[140px] top-[250px] absolute image' />
                <img src={left6} alt="" className='w-[60px] h-[60px] absolute left-0 image' />
                <img src={left7} alt="" className='w-[60px] h-[60px] absolute left-0 top-[50px] image' />
                <img src={left8} alt="" className='w-[60px] h-[60px] left-0 top-[130px] absolute image' />
                <img src={left9} alt="" className='w-[60px] h-[60px] right-[110px] top-[120px] absolute image' />
            </div>
            {/* <div className=' absolute right-0 h-full max-w-[300px] w-[30%] flex items-center justify-center'>
                <img src={RightHero} alt="" className='w-full h-ful' />
            </div> */}
        </div>
    )
}

export default Hero