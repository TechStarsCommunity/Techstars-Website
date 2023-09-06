import React from 'react'
import NavBlogCard from './NavBlogCard'

const BeInformed = () => {
    return (
        <div className='w-full px-[20px]  md:px-[64px] my-[20px] grid gap-[30px] '>
            <div className='grid gap-[10px]'>
                <h3 className='text-3xl font-bold'>
                    BeInformed
                </h3>
                <p className='text-lg'>
                    Read the latest happening on our community from our blog
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] text-[#666666] my-[20px]'>
                <NavBlogCard />
                <NavBlogCard />
                <NavBlogCard />
                <NavBlogCard />
            </div>
        </div>
    )
}

export default BeInformed