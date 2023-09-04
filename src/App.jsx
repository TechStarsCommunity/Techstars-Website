import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import LandingPage from "./page/LandingPage.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './Layout.jsx/AppLayout'
import Login from './page/Login'
import SignUp from './page/SignUp'
import Blogs from './page/Blogs'
import { AuthProvider } from './provider/AuthProvider'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/blogs" element={<Blogs />} />
          </Route>
          <Route path="/" element={""}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
