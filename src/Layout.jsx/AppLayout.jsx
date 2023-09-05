import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollReveal from '../provider/ScrollReveal'


const AppLayout = () => {
    return (
        <div className='w-full'>
            <NavBar />
            <Outlet />
            <ScrollReveal>
                <Footer />
            </ScrollReveal>
        </div>
    )
}

export default AppLayout