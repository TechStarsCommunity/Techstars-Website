import React from 'react'
import about from "../assets/image/about1.svg"

const About = () => {
    return (
        <div className='w-full h-[450px] relative bg-white my-[40px] flex items-center justify-center leftAnimation overflow-hidden '>
            <img src={about} alt="" className='absolute w-full h-full top-0 left-0 object-cover' />
            <div className='z-[1] text-center max-w-[800px] p-[40px]'>
                <p className='text-xl md:text-[25px] text-white cursor-pointer font-bold leading-[35px]'>
                    We are a passionate collective, dedicated to building and shipping transformative software solutions. Our open-source ethos drives us to harness innovation, fueling our mission to change the world through technology.
                </p>
            </div>
        </div>
    )
}

export default About