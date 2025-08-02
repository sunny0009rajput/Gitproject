import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link,NavLink } from 'react-router-dom';
import dashboard from './dashboard';
import home from './home';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ContactMe from './contactme';
import MyImage from './myimage';

function navbar() {
  const navigate = useNavigate();

    const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect, // Starts the login flow
    logout: auth0Logout, // Starts the logout flow
    user, // User profile
  } = useAuth0();



  const login = () =>
    loginWithRedirect({
      appState:{returnTo: "/"},
    });

    const signup = () =>
    loginWithRedirect({
      authorizationParams: { screen_hint: "signup" },
      appState: { returnTo: "/" },
    });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

 
// useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/");
//     }
//   }, [isAuthenticated, navigate]);
 



  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/myimage">My image</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contactme">Contact Me</Link>
        </li>
        
      </ul>
      
        
        {isLoading ? (
  <span>Loading...</span>
) : isAuthenticated ? (
  <div className="d-flex align-items-center gap-2">
    <span className="me-2">👤 {user.name || user.email}</span>
    <button className="btn btn-danger btn-sm" onClick={logout}>Logout</button>
  </div>
) : (
  <div className="d-flex gap-2">
    <button className="btn btn-primary btn-sm" onClick={signup}>Signup</button>
    <button className="btn btn-success btn-sm" onClick={login}>Login</button>
  </div>
)}
      
    </div>
  </div>
       </nav>
            
    </>
  )
}

export default navbar