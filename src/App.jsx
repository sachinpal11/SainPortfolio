import React from 'react'
import './App.css'
import Home from './routes/Home'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
function App() {
  return (
    <div className='relative'>
      <Navbar />
      <Outlet />
    </div>
  )
}
export default App
