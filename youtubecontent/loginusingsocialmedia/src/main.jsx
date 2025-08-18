import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthProviderWithNavigation from './AuthProvideWithNavigation'
import PrivateRoute from './PrivateRoute'
import ContactMe from './ContactMe'
import MyImage from './MyImage'
import Home from './Home'
import Navbar from './Navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProviderWithNavigation>
    <Navbar/>

    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/contactme"  element={<PrivateRoute><ContactMe/></PrivateRoute>}/>
      <Route path="/myimage"  element={<PrivateRoute><MyImage/></PrivateRoute>}/>
     
    </Routes>

    </AuthProviderWithNavigation>
   
    </BrowserRouter>
  </StrictMode>,
)
