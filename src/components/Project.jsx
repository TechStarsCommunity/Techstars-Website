import React from 'react'
import ScrollReveal from '../provider/ScrollReveal'

const Project = () => {
    return (
        <div className=' p-[20px] w-full bg-white py-[60px] overflow-x-hidden'>
            <div className='borderp-[20px] rounded-l grid gap-[20px]'>
                <ScrollReveal direction="left">
                    <h3 className='text-3xl font-bold'>See What Techstars are Building</h3>
                    <p>
                        Techstars for Tech, makes sure every developer gets high recognition and rewarded for building project with us. and many more content to be added
                    </p>
                </ScrollReveal>
                <ScrollReveal direction="right">
                    <div className='project'>
                        <div className='h-[300px] w-full Projectinfo  bg-black'>

                        </div>
                        <div className='Projectinfo bg-black'></div>
                        <div className='Projectinfo bg-black'></div>
                        <div className='Projectinfo bg-black'></div>
                        <div className='Projectinfo bg-black'></div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    )
}

export default Project