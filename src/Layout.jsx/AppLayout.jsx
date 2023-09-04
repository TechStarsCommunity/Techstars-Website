import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


const AppLayout = () => {
    return (
        <div className='w-full'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AppLayout