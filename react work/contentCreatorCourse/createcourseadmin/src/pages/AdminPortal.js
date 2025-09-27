import React, { useState } from "react";
import { Routes, Route, Navigate,Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import {
  BarChart3,
  Package,
  ShoppingCart,
  Users as UsersIcon,
  
} from "lucide-react";

const AdminPortal = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", path: "/dashboard", icon: BarChart3 },
   
    { id: "users", label: "Users", path: "/users", icon: UsersIcon },
    {id : "slider", label: "Courses", path: "/courses", icon:Package},
 

    
  ];

  return (
    <Navbar
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      sidebarItems={sidebarItems}
    >
      
      
    </Navbar>
  );
};

export default AdminPortal;
