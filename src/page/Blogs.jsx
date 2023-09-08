import React from 'react'
import { motion } from 'framer-motion'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
    return (
        <motion.div className='w-full px-[20px]  md:px-[64px] '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
            <div className='w-full flex justify-between items-center py-[30px] '>
                <button className='rounded-tl-xl rounded-br-xl rounded-tr-xl border border-black p-[10px] font-bold'>
                    <h1 className='text-1xl md:text-2xl'>
                        Our Blog
                    </h1>
                </button>
                <div className='flex gap-[25px] font-semibold '>
                    <button className='rounded-xl border border-[#808080] px-[30px] py-[10px] font-bold bg-[#808080] text-white'>
                        <h1 className='text-base'>
                            All
                        </h1>
                    </button>
                    <button className='rounded-xl border border-[#808080] px-[30px] py-[10px] font-bold text-black'>
                        <h1 className='text-base'>
                            New
                        </h1>
                    </button>
                </div>
            </div>
            <div className='w-full grid gap-[30px] mb-[20px]'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </motion.div>
    )
}

export default Blogs