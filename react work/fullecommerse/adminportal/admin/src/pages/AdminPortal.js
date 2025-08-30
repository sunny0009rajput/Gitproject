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
    { id: "products", label: "Products", path: "/products", icon: Package },
    { id: "orders", label: "Orders", path: "/orders", icon: ShoppingCart },
    { id: "users", label: "Users", path: "/users", icon: UsersIcon },
    {id : "slider", label: "Crousal Slider", path: "/crousalSlide", icon:Package},
    {id : "video", label: "Video", path: "/video", icon:Package},
    {id : "poster", label: "Poster", path: "/Poster", icon:Package},

    
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
