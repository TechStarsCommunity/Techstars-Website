import React from 'react'
import chat from "../assets/image/chat.svg"
import ScrollReveal from '../provider/ScrollReveal'

const Footer = () => {
    return (
        <div className='w-full  bg-[#222222] overflow-x-hidden '>
            <ScrollReveal direction="top">
                <div className="p-[64px] w-full grid grid-cols-1 md:grid-cols-2 gap-[25px] items-center justify-center   ">
                    <ScrollReveal direction="left" className="max-w-[250px] w-full md:w-[250px] h-[250px]">
                        <div className='w-full  h-[300px] '>
                            <img src={chat} alt="" className='w-full h-full object-contain' />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="right">
                        <div className='w-full text-white grid gap-4'>
                            <h2 className='text-[50px]'>Join the early birds</h2>
                            <p>
                                Techstars celebrates diversity and inclusivity as we commemorate our 1year anniversary. We believe innovation thrives when voices from all backgrounds are heard. Join a welcoming community that values different perspectives and fosters an environment where everyone can succeed.
                            </p>
                            <button className='px-[30px] py-[18px] rounded-md border text-white bg-[#750FF7] border-black w-[303px]'>
                                Join The Community
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
                <hr className='bg-white h-[2px] w-full ' />
                <div className="p-[64px] w-full flex flex-col md:flex-row gap-[25px] items-center justify-center text-white  ">
                    Built By Team SoluTech
                </div>
            </ScrollReveal>
        </div>
    )
}

export default Footer