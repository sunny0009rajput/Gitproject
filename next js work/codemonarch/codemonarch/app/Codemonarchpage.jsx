import React from 'react'
import Navbar from './Navbar'
import BookSwiper from './BookSwiper'
import StatSection from './StatSection'
import TiltCard from './TiltCard'
import PricingPage from './PricingPage'
import TestimonalSection from './TestimonalSection'
import ContactSection from './ContactSection'
import Footerpage from './Footerpage'
import FloatingButtons from './FloatingButtons'
import Project from './Projects'
import Ecommerse from './Ecommerse'

function Codemonarchpage() {
  return (
    <>
    <Navbar />
    <BookSwiper/>
   
    <StatSection/>
    {/* <Ecommerse/>
     */}
    <Project/>
    <TiltCard/>
   
    <PricingPage/>
    <TestimonalSection/>
    <ContactSection/>
    <Footerpage/>
   
      <FloatingButtons />
    </>
  )
}

export default Codemonarchpage