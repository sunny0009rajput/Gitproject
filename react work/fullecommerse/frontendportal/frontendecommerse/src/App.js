import logo from './logo.svg';
import './App.css';
import NavBarTop from './pages/NavBar';
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import Collections from './pages/Collections';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import ProductViewPage from './pages/ProductViewPage';
import HeroSection from './pages/HeroSection';
import SignupPage from './pages/SignupPage';
import WishlistSection from './pages/WishlistSection';
import { WishlistProvider } from './pages/WishlistContext';
import { CartProvider } from "./pages/CartContext";
import CartSection from './pages/CartSection';
import TrackOrder from './pages/TrackOrder';
import ProductSection from './pages/ProductSection';
import React from 'react';
import ProtectedRoute from './pages/ProtectedRoutes';
import History from './pages/History';

function AppContent() {
  const location = useLocation();

  // ❌ Hide navbar on auth-related routes
  const hideNavbarRoutes = ["/login", "/signup", "/forgotPassword"];
  const isResetPassword = location.pathname.startsWith("/reset-password");

  const shouldHideNavbar =
    hideNavbarRoutes.includes(location.pathname) || isResetPassword;

  return (
    <>
      {!shouldHideNavbar && <NavBarTop />}
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/products/:id" element={<ProductViewPage />} />
        <Route path="*" element={<HeroSection />} />
        <Route path="/wishlist" element={<ProtectedRoute><WishlistSection /></ProtectedRoute>} />
        <Route path="/cartsection" element={<ProtectedRoute><CartSection /></ProtectedRoute>} />
        <Route path="/track-order" element={<ProtectedRoute><TrackOrder /></ProtectedRoute>} />
        <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
        <Route path="/allproducts" element={<ProductSection />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
