import { useState } from 'react'
import './index.css'
// import LandingPage from "./page/LandingPage.jsx"
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
// import AppLayout from './Layout.jsx/AppLayout'
// import Login from './page/Login'
// import SignUp from './page/SignUp'
// import Blogs from './page/Blogs'
import { AuthProvider } from './provider/AuthProvider'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AnimatedRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
