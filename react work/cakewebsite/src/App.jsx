import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './Home'
import About from './About'
import Products from './Products'
import TryNew from './TryNew'
import ContactUs from './ContactUs'
import Cake from './Cake'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Cake />} />
        <Route path="*" element={<Cake />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/tryNew" element={<TryNew/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
