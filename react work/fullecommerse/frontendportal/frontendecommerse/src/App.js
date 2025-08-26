import logo from './logo.svg';
import './App.css';
import NavBarTop from './pages/NavBar';

import LoginPage from "./pages/LoginPage";
import Collections from './pages/Collections';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import HomePage from './pages/HomePage';
import Poster from './pages/Poster';
import BestCollection from './pages/BestCollectionSection';
import VideoSection from './pages/VideoSection';
import CategoryBrand from './pages/CategoryBrandPage';
import AllProducts from './pages/AllProducts';
import Footerone from './pages/Footer';
import AboutUsPage from './pages/AboutUs';



function App() {
  return (
    <BrowserRouter>
    <NavBarTop/>
    
    <HomePage/>
    <CategoryBrand/>
    <BestCollection/>
    
    <Poster/>
    <VideoSection/>
    <AllProducts/>
    <Footerone/>
    
    
    
        <Routes>
          {/* ✅ Public route */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          <Route path="/reset-password/:token" element={<ResetPassword/>}/>
          {/* Wrap admin routes inside AdminLayout */}

            
          
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
