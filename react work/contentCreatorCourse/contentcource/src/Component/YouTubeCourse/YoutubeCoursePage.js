import React from 'react'
import Navbar from '../Navbar'
import YoutubeHeroSection from './YoutubeHeroSection'
import VideoSection from './VideoSection'
import SuccessSection from './SuccessSection'
import FooterSection from '../FooterSection'
import CourseCurriculumSection from './CourseCarriculumSection'
import ReviewSection from './ReviewSection'
import CoursesbenefitSection from './CoursebenefitSection'
import CreatorshipCertificate from './CreatorshipCertificate'
import FAQSection from './FAQSection'
import LastSection from './LastSection'

function YoutubeCoursePage() {
  return (
    <>
    <YoutubeHeroSection/>
    <VideoSection/>
    <SuccessSection/>
    <CourseCurriculumSection/>
    <ReviewSection/>
    <CoursesbenefitSection/>
    <CreatorshipCertificate/>
    <FAQSection/>
    <LastSection/>
    <FooterSection/>
    </>
  )
}

export default YoutubeCoursePage