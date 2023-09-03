import React from 'react'
import rewardY from "../assets/image/rewardY.svg"

const Reward = () => {
    return (
        <div className='w-full grid bg-blue-50 grid-cols-2 gap-3 p-[20px] py-[45px] reward'>
            <div className=' p-[20px] data1 w-full border rounded-md grid gap-2 border-black'>
                <div className='w-full'>
                    <h3 className='text-3xl font-bold'>Get Rewarded For Building Stuff</h3>
                </div>
                <div className='w-full h-[250px] bg-[#F1F1F1]'>
                    {/* <img src={LeftHero} alt="" className='w-full h-full object-contain' /> */}
                </div>
                <div className='w-full'>
                    <p>Techstars for Tech, makes sure every developer gets high recognition and rewarded for building project with us. and many more content to be added</p>
                </div>
            </div>
            <div className='p-3 illustration1'>
                <img src={rewardY} alt="" className='object-contain' />
            </div>
            <div className=' p-[20px] data2 w-full border rounded-md grid gap-2 border-black'>
                <div className='w-full'>
                    <h3 className='text-3xl font-bold'>Get Rewarded For Building Stuff</h3>
                </div>
                <div className='w-full h-[250px] bg-[#F1F1F1]'>
                    {/* <img src={LeftHero} alt="" className='w-full h-full object-contain' /> */}
                </div>
                <div className='w-full'>
                    <p>Techstars for Tech, makes sure every developer gets high recognition and rewarded for building project with us. and many more content to be added</p>
                </div>
            </div>
            <div className=' p-3 illustration2'>
                <img src={rewardY} alt="" className='object-contain' />
            </div>
        </div>
    )
}

export default Reward