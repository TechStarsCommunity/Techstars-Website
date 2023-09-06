import React from 'react'

const NavBlogCard = ({ color }) => {
    return (
        <div className='w-full grid gap-[15px]'>
            <div className={`w-full min-h-[200px] bg-black flex items-center justify-center p-[10px] `}>
                <h1 className='text-lg text-white text-center'>
                    The future of tech in the Nigerian sector and how to nurture talent
                </h1>
            </div>
            <div className='w-full flex justify-between items-center'>
                <p className='text-xs'>
                    Published 3rd September, 2023
                </p>

                <p className='text-xs'>
                    Announcements
                </p>
            </div>
            <div>
                <p>
                    Due to Government changes and the down glidng of the economy, the future of tech in the Nigerian sector and how to nurture talent is a new blah blah
                </p>
            </div>
        </div>
    )
}

export default NavBlogCard