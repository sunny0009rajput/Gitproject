import React from 'react'
import Navbar from './Navbar'

import StatSection from './StatSection'

import TestimonalSection from './TestimonalSection'
import ContactSection from './ContactSection'
import Footerpage from './Footer'


import FloatingButtons from './FloatingButton';
import BookSwiper from './BookSwiper';
import TiltCard from './TiltCard';
import PricingPage from './PricingPage'

function Codemonarchpage() {
 
  return (
    <>
    <Navbar />
    <BookSwiper/>
   
    <StatSection/>
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