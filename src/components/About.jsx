import React from 'react'
import about from "../assets/image/about1.svg"

const About = () => {
    return (
        <div className='w-full h-[350px] relative bg-white py-3 flex items-center justify-center leftAnimation overflow-hidden'>
            <img src={about} alt="" className='absolute w-full h-full top-0 left-0 object-cover' />
            <div className='z-[1] p-2 text-center max-w-[800px]'>
                <p className='text-lg md:text-xl text-white cursor-pointer'>
                    We are a passionate collective, dedicated to building and shipping transformative software solutions. Our open-source ethos drives us to harness innovation, fueling our mission to change the world through technology.
                </p>
            </div>
        </div>
    )
}

export default About