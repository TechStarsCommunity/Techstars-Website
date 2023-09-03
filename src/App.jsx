import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import LandingPage from "./page/LandingPage.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element="">
          <Route index element={<LandingPage />} />
          <Route path="/login" element={"Login"} />
          <Route path="/signup" element={"SignUp"} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
