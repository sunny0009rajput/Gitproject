import Image from "next/image"; 
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Weddinggallery from "./Weddinggallary";
import VideoSection from "./VideoSection";
import FilmsSection from "./films/page";
import AboutSection from "./AboutSection";
import ContactSection from "./contact/page";
import FooterSection from "./FooterSection";
import { Contact, Video } from "lucide-react";

export default function Home() {
  return (
    <>
    
    <div className="min-h-screen bg-black/50">
    <Navbar/>
    <HeroSection/>
    <Weddinggallery/>
    <VideoSection/>
    <FilmsSection/>
    <AboutSection/>
    <ContactSection/>
    <FooterSection/>
    </div>
    
    </>
  );
}
