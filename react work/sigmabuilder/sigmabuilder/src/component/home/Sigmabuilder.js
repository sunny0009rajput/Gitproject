import React from 'react'
import Navbar from '../Navbar'
import ContactSection from '../contact/ContactSection'
import Footerpage from '../Footer'
import FloatingButtons from '../FloatingButton';
import HeroSection from './HeroSection';
import AboutUs from '../about/AboutUs';

import OurServices from '../services/OurServices';
import HeroProject from './HeroProject';
import HeroAboutUs from './HeroAboutUs';
import HeroService from './HeroService';
import HeroResidential from './HeroResidential';
import HeroConstruction from './HeroConstruction';
import HeroRenovation from './HeroRenovation';
import Herocommercial from './HeroCommercial';
import HeroInterior from './HeroInterior';


function Sigmabuilder() {
 
  return (
    <>
    <Navbar />
    <HeroSection/>
    <HeroProject/>
    <HeroResidential/>
    <HeroConstruction/>
    <HeroRenovation/>
    <Herocommercial/>
    <HeroInterior/>
    <HeroService/>
    <HeroAboutUs/>
   
   
    
   
   
   
    
    <ContactSection/>
    <Footerpage/>
   
    <FloatingButtons />
    </>
  )
}

export default Sigmabuilder