import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Home from './home.jsx';
import Dashboard from './dashboard.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import ContactMe from './contactme.jsx';
import MyImage from './myimage.jsx';
import Auth0ProviderWithNavigate from './Auth0ProviderWithNavigate.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    
    <BrowserRouter>
    <Auth0ProviderWithNavigate>
    <Navbar />

     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<PrivateRoute ><Home/></PrivateRoute>} />
    <Route path='/contactme' element={<PrivateRoute ><ContactMe/></PrivateRoute>} />
    <Route path='/myimage' element={<PrivateRoute><MyImage /></PrivateRoute>} />
   
    
    </Routes>
    </Auth0ProviderWithNavigate>
    </BrowserRouter>
    
  </StrictMode>,
)
