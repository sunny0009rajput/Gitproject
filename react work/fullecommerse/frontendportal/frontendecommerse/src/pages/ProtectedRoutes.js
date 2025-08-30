// src/components/ProtectedRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const location = useLocation();

  // ✅ Check if user is logged in (replace with real auth logic)
  const isAuthenticated = !!localStorage.getItem("customerToken");  

  if (!isAuthenticated) {
    // redirect to login and save where user came from
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
