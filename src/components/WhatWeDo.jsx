import React from 'react'
import expect from "../assets/image/expect.svg"
import YourComponent from './YourComponent'
import Reward from './Reward'

const WhatWeDo = () => {
    return (
        <div className='w-full grid gap-[64px] px-[20px]  md:px-[64px] items-center justify-center '>
            <div className='flex items-center justify-center pt-[25px] gap-[10px] flex-wrap'>
                <h3 className='text-3xl font-bold text-center'>What to expect from us</h3>
                <div className='w-[100px] h-[50px]'>
                    <img src={expect} alt="" className='w-full h-full' />
                </div>
            </div>
            <div className='w-full'>
                <YourComponent />
                <Reward />
            </div>
        </div>
    )
}

export default WhatWeDo