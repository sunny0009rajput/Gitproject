import React from 'react'
import NavBarTop from './NavBar';
import HomePage from './HomePage';
import CategoryBrand from './CategoryBrandPage';
import BestCollection from './BestCollectionSection';
import Poster from './Poster';
import VideoSection from './VideoSection';
import AllProducts from './AllProducts';
import Footer from './Footer';
import { useState } from 'react';

function HeroSection() {

  


  return (
    <>
    
    <HomePage/>
    <CategoryBrand/>
    <BestCollection/>
    <Poster/>
    <VideoSection/>
    <AllProducts/>
    <Footer/>

    
    </>
  )
}

export default HeroSection