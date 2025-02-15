import React from 'react'
import './App.css'
import Home from './routes/Home'
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
      <Navbar />
      <section>
        <Home />
      </section>
    </div>
  )
}
export default App
