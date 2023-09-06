import React from 'react'
import ScrollReveal from '../provider/ScrollReveal'
import nextGen from "../assets/image/nextGen.svg"
import chatApp from "../assets/image/chatApp.svg"
import universe from "../assets/image/universe.svg"
import dashboard from "../assets/image/dashboard.svg"

const Project = () => {
    return (
        <div className='px-[20px]  md:px-[64px] w-full bg-white py-[60px] overflow-x-hidden'>
            <div className='border border-black p-[30px] rounded-l grid gap-[20px]'>
                <ScrollReveal direction="left">
                    <div className='w-full grid gap-[10px] '>
                        <h3 className='text-3xl font-bold'>See What Techstars are Building</h3>
                        <p className='text-lg'>
                            Techstars for Tech, makes sure every developer gets high recognition and rewarded for building project with us. and many more content to be added
                        </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal direction="top">
                    <ScrollReveal direction="right">
                        <div className='project'>
                            <div className='h-[300px] w-full gallery1 relative'>
                                <div className="absolute bottom-0 left-0 p-[30px]   ">
                                    <h3 className='text-2xl font-bold text-white'>Odyssey - Next Gen OS Landing Page</h3>
                                    <p className='text-base text-white'>Techstars for Tech, makes sure every developer gets high recognition and rewarded for building project with us. and many more content to be added</p>
                                </div>
                                <img src={nextGen} alt="" className='w-full h-full object-cover rounded' />
                            </div>
                            <div className='h-[300px] w-full gallery2 relative'>
                                <div className="absolute bottom-0 left-0 p-[30px]  ">
                                    <h3 className='text-2xl font-bold text-white'>Banksin - Banking </h3>
                                    <h3 className='text-2xl font-bold text-white'>Dashboard</h3>
                                </div>
                                <img src={dashboard} alt="" className='w-full h-full object-cover rounded' />
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="left">
                        <div className='project1'>
                            <div className='h-[300px] w-full gallery3 relative'>
                                <div className="absolute bottom-0 left-0 p-[30px]  ">
                                    <h3 className='text-2xl font-bold text-white'>Mengobrol - Chat App </h3>
                                    <h3 className='text-2xl font-bold text-white'>Sign Up</h3>
                                </div>
                                <img src={chatApp} alt="" className='w-full h-full object-cover rounded' />
                            </div>
                            <div className='h-[300px] w-full gallery4 relative'>
                                <div className="absolute bottom-0 left-0 p-[30px]   ">
                                    <h3 className='text-2xl font-bold text-white'>Mengobrol - Chat App</h3>
                                    <h3 className='text-2xl font-bold text-white'>Sign Up</h3>
                                </div>
                                <img src={universe} alt="" className='w-full h-full object-cover rounded' />
                            </div>
                        </div>
                    </ScrollReveal>
                </ScrollReveal>
                <p className='text-lg text-center'>
                    See More
                </p>
            </div>
        </div>
    )
}

export default Project