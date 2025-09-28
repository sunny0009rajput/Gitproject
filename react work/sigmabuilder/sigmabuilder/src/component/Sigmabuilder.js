import React from 'react'
import Navbar from './Navbar'
import ContactSection from './ContactSection'
import Footerpage from './Footer'
import FloatingButtons from './FloatingButton';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import OurProjects from './OurProjects';
import OurServices from './OurServices';


function Sigmabuilder() {
 
  return (
    <>
    <Navbar />
    <HeroSection/>
    <OurProjects/>
    <OurServices/>
    <AboutUs/>
   
   
    
   
   
   
    
    <ContactSection/>
    <Footerpage/>
   
    <FloatingButtons />
    </>
  )
}

export default Sigmabuilder