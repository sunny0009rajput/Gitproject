import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import StatSection from './StatSection'
import ProgramSection from './ProgramSection'
import TrainerSection from './TrainerSection'
import TestimonalSection from './TestimonalSection'
import ContactSection from './ContactSection'
import Footerpage from './Footer'

function gympage() {
  return (
    <>
    <Navbar />
    <Dashboard/>
    <StatSection/>
    <ProgramSection/>
    <TrainerSection/>
    <TestimonalSection/>
    <ContactSection/>
    <Footerpage/>
    </>
  )
}

export default gympage