import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Navbar'


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Hero from './sections/Hero'
import { Car, Home, Video } from 'lucide-react'
import VideoSection from './sections/VideoSection'
import ShortVideosSection from './sections/ShortsVideoSection'
import LongVideosSection from './sections/LongVideoSection'

import CardSliderSection from './sections/CardSliderSection'
import ReviewSection from './sections/ReviewSection'
import FaqSection from './sections/FaqSection'
import FooterSection from './sections/FooterSection'
import AboutSection from './sections/AboutSection'
import HomeSection from './sections/HomeSection'
import ContactUs from './sections/ContactUs'


function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    // <HomeSection />
    // </>
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        
        <Route path="/" element={<HomeSection />} />
        <Route path="*" element={<HomeSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<CardSliderSection />} />
        <Route path="/portfolio" element={<ReviewSection />} />
        <Route path="/testimonials" element={<FaqSection />} />
        <Route path="/contact" element={<ContactUs />} />
        
      </Routes>
    </BrowserRouter>
   
   
      
       
  
  )
}

export default App
