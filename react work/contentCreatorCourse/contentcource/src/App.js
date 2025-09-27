import React from 'react';
import './App.css';
import HomePage from './Component/HomeSection/HomePaje';
import Navbar from './Component/Navbar';
import YouTubeCoursePage from './Component/YouTubeCourse/YoutubeCoursePage';
import CheckoutPage from './Component/YouTubeCourse/CheckoutPage';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import CustomerLoginPage from './Component/Login/CustomerLoginPage';
import SignupPage from './Component/Login/SignupPage';
import ResetPassword from './Component/Login/ResetPassword';
import ForgotPassword from './Component/Login/ForgotPassword';
import ProtectedRoute from './ProtectedRoute';
import CoursePage from './Component/YouTubeCourse/CoursePage';

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup', '/forgotPassword', '/coursepage'];
  const isResetPassword = location.pathname.startsWith("/reset-password");

  const shouldHideNavbar =
    hideNavbarRoutes.includes(location.pathname) || isResetPassword;

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/youtube" element={<YouTubeCoursePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<CustomerLoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        {/* <Route path='/coursepage' element={<ProtectedRoute><CoursePage /></ProtectedRoute>} /> */}
        <Route path='/coursepage' element={<CoursePage />} />
        
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
