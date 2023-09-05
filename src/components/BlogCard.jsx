import React from 'react'

const BlogCard = () => {
    return (
        <div className='w-full p-[30px] grid gap-[10px]'>
            <div className='w-full p-[10px] border border-b-black gap-[20px] grid md:grid-cols-2 grid-cols-1  '>
                <div className='gap-[10px] grid md:grid-cols-2 grid-cols-1   ' >
                    <div>
                        <p>3rd September, 2023</p>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>The future of tech in the Nigerian sector and how to nurture talent</h1>
                        <p>News</p>
                    </div>
                </div>
                <div>
                    <p className='text-lg'>Due to Government changes and the down glidng of the economy, the future of tech in the Nigerian sector and how to nurture talent is a new blah blah</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard