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
import FloatingButtons from './FloatingButton'

function Gympage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <Navbar />
    <Dashboard onOpenModal={() => setIsModalOpen(true)}/>
    <StatSection/>
    <ProgramSection/>
    <TrainerSection/>
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

export default Gympage