import React from 'react';
import rewardY from "../assets/image/rewardY.svg"
import rewardG from "../assets/image/rewardG.svg"
import openSource from "../assets/image/openSource.svg"
import stayAhead from "../assets/image/stayAhead.svg"
import ScrollReveal from '../provider/ScrollReveal';
// import './YourComponent.css'; // Import your CSS file

const YourComponent = () => {
    return (
        <div className="grid-container bg-blue-50 p-[64px] w-full overflow-x-hidden">
            <ScrollReveal direction="left">
                <div className="item item1">
                    <div className=' p-[64px] w-full border rounded-md grid gap-2 border-black'>
                        <div className='w-full'>
                            <h3 className='text-3xl font-bold'>Get involved in Open-source</h3>
                        </div>
                        <div className='w-full h-[250px] bg-[#F1F1F1]'>
                            <img src={openSource} alt="" className='w-full h-full object-contain' />
                        </div>
                        <div className='w-full'>
                            <p className='text-lg'>
                                Techstars for Tech, makes sure every developer gets high recognition and rewarded for building project with us. and many more content to be added
                            </p>
                        </div>
                    </div>
                    <div className=' items-center w-full h-full'>
                        <img src={rewardY} alt="" className='object-cover w-full h-full' />
                    </div>
                </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
                <div className="item item2">
                    <div className=' items-center w-full'>
                        <img src={rewardG} alt="" className='object-cover h-full w-full' />
                    </div>
                    <div className='p-[64px] w-full border rounded-md grid gap-2 border-black me'>
                        <div className='w-full'>
                            <h3 className='text-3xl font-bold'>Stay Ahead of the Tech Curve</h3>
                        </div>
                        <div className='w-full h-[250px] bg-[#F1F1F1]'>
                            <img src={stayAhead} alt="" className='w-full h-full object-contain' />
                        </div>
                        <div className='w-full'>
                            <p className='text-lg'>
                                In the fast-paced world of tech, staying ahead is essential. Techstars delivers the latest industry trends, in-depth analyses, and hands-on tutorials. Don't just keep up; lead the charge
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
};

export default YourComponent;
