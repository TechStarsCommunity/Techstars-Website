import React from 'react'
import Project from '../components/Project'
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <motion.div className='w-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
            <Project value={false} />
        </motion.div>
    )
}

export default Projects