import React from 'react'
import rewardB from "../assets/image/rewardB.svg"
import rewardP from "../assets/image/rewardP.svg"
import innovation from "../assets/image/innovation.svg"
import startup from "../assets/image/startup.svg"
import ScrollReveal from '../provider/ScrollReveal'

const Reward = () => {
    return (
        <div className="grid-container w-full overflow-x-hidden">
            <ScrollReveal direction="left">
                <div className="item item1">
                    <div className=' p-[20px] w-full border rounded-b-[30px] rounded-tr-[30px] grid gap-[20px] border-black'>
                        <div className='w-full'>
                            <h3 className='text-3xl font-bold'>Unlocking Innovation Together</h3>
                        </div>
                        <div className='w-full h-[250px] bg-[#F1F1F1]'>
                            <img src={innovation} alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full'>
                            <p className='text-lg'>
                                Techstars is where innovation flourishes. Join a diverse global community of tech visionaries, mentors, and investors collaborating to drive the next wave of groundbreaking ideas.
                            </p>
                        </div>
                    </div>
                    <div className=' items-center w-full h-full'>
                        <img src={rewardB} alt="" className='object-cover w-full h-full' />
                    </div>
                </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
                <div className="item item2">
                    <div className=' items-center w-full'>
                        <img src={rewardP} alt="" className='object-cover h-full w-full' />
                    </div>
                    <div className='rounded-bl-[30px] rounded-t-[30px] p-[20px] w-full border grid gap-[20px] border-black me'>
                        <div className='w-full'>
                            <h3 className='text-3xl font-bold'>Accelerate Your Startup</h3>
                        </div>
                        <div className='w-full h-[250px] bg-[#F1F1F1]'>
                            <img src={startup} alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full'>
                            <p className='text-lg'>
                                Techstars is your launchpad for startups. Access mentorship, funding opportunities, and resources that can supercharge your company's growth. Whether you're at the idea stage or scaling up.
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    )
}

export default Reward