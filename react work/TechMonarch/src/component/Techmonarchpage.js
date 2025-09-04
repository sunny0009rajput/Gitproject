import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import StatSection from './StatSection'
import ProgramSection from './ProgramSection'
import TrainerSection from './TrainerSection'
import TestimonalSection from './TestimonalSection'
import ContactSection from './ContactSection'
import Footerpage from './Footer'
import ContactModal from './ContactDialogueBox'
import { useState } from 'react'
import FloatingButtons from './FloatingButton';
import ImageSwiper from './ImageSwiper';
import TiltCard from './TiltCard';

function Techmonarchpage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <Navbar />
    <ImageSwiper/>
    {/* <Dashboard onOpenModal={() => setIsModalOpen(true)}/> */}
    <StatSection/>
    <TiltCard/>
    {/* <ProgramSection/>
    <TrainerSection/> */}
    <TestimonalSection/>
    <ContactSection/>
    <Footerpage/>
    <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <FloatingButtons />
    </>
  )
}

export default Techmonarchpage