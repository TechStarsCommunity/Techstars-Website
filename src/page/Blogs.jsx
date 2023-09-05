import React from 'react'
import { motion } from 'framer-motion'

const Blogs = () => {
    return (
        <motion.div className='w-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            Blogs
        </motion.div>
    )
}

export default Blogs