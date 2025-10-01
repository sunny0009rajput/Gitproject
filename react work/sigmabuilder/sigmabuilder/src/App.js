
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sigmabuilder from './component/home/Sigmabuilder';
import ScrollToTop from './component/ScrollToTop';
import ProjectPage from './component/projects/ProjectPage';
import ServicePage from './component/services/ServicePage';
import AboutPage from './component/about/AboutPage';
import ContactPage from './component/contact/ContactPage';

function App() {
  return (
    <>
    
     <BrowserRouter>
     <ScrollToTop />
     <Routes>
        <Route path="/" element={<Sigmabuilder />} />
        <Route path="*" element={<Sigmabuilder />} />
        <Route path="/home" element={<Sigmabuilder />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        
      </Routes>
    
    </BrowserRouter>
   
    </>
   
    
  );
}

export default App;
