import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AppLayout from '../Layout.jsx/AppLayout'
import LandingPage from '../page/LandingPage'
import Blogs from '../page/Blogs'
import Login from '../page/Login'
import SignUp from '../page/SignUp'
import { AnimatePresence } from 'framer-motion'
import Projects from '../page/Projects'
import About from '../page/About'

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/featured" element={<Projects />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes