import logo from "./logo.svg";
import "./App.css";
import AdminPortal from "./pages/AdminPortal";
import Dashboard from "./pages/Dashboard";

import Users from "./pages/Users";
import LoginPage from "./pages/LoginPage";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./pages/ProtectedRoute";
import Courses from "./pages/Courses";


function App() {
  // Check if user is logged in (from localStorage)
  const isAuthenticated = !!localStorage.getItem("user");
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ✅ Public route */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          <Route path="/reset-password/:token" element={<ResetPassword/>}/>
          {/* Wrap admin routes inside AdminLayout */}

          {/* ✅ Protect all admin routes */}
          <Route
            path="/"
            element={<ProtectedRoute>
               <AdminPortal/></ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="users" element={<Users />} />
            
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
