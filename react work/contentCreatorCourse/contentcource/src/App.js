import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
import { Toaster } from "react-hot-toast";
import Mybatch from './Component/Mybatch';

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup', '/forgotPassword', '/coursepage'];
  const isResetPassword = location.pathname.startsWith("/reset-password");
  const [customer, setCustomer] = useState(null);
  const [paymentVerified, setPaymentVerified] = useState(false);
  const fetchCustomer = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/customer/customerme`, {
        withCredentials: true,
      });
      const user = res.data.user;
      setCustomer(user);

      if (user && user.customer_name && user.customer_phone) {
        const paymentRes = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/check-payment`,
          { customerId: user._id },
          { withCredentials: true }
        );
        setPaymentVerified(paymentRes.data.verified);
      } else {
        setPaymentVerified(false);
      }
    } catch {
      setCustomer(null);
      setPaymentVerified(false);
    }
  };

  useEffect(() => {
    fetchCustomer();
  }, []);

  const shouldHideNavbar =
    hideNavbarRoutes.includes(location.pathname) || isResetPassword;

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/youtube" element={<YouTubeCoursePage />} />
        <Route path="/checkout/:courseTitle" element={<ProtectedRoute requirePayment={false}><CheckoutPage /></ProtectedRoute>} />
        <Route path="/login" element={<CustomerLoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path='/course/:courseTitle' element={<ProtectedRoute requirePayment={true}><CoursePage /></ProtectedRoute>} />
        <Route path='/mybatch' element={<ProtectedRoute><Mybatch  customer={customer} paymentVerified={paymentVerified}/></ProtectedRoute>} />
        {/* <Route path='/coursepage' element={<CoursePage />} /> */}
        
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
