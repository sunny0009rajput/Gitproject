import React from 'react'

import Hero from './Hero'
import VideoSection from './VideoSection'
import ShortVideosSection from './ShortsVideoSection'
import LongVideosSection from './LongVideoSection'
import CardSliderSection from './CardSliderSection'
import ReviewSection from './ReviewSection'
import FaqSection from './FaqSection'
import FooterSection from './FooterSection'
import AboutSection from './AboutSection'
import ContactUs from './ContactUs'
import Skills from './Skills'

function HomeSection() {
  return (
    <>
    <section id="home"></section>
    <Hero />
       <VideoSection />
       <ShortVideosSection/>
       <LongVideosSection/>
      <AboutSection/>
      <Skills/>
       <CardSliderSection/>
       <ReviewSection />
       <FaqSection/>
       <ContactUs/>
       <FooterSection/>
       </>
  )
}

export default HomeSection