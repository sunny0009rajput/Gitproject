import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactMe from "./ContactMe";
import MyImage from "./MyImage";
import Home from "./Home";


function Navbar() {
  const navigate = useNavigate();
  const {
    isLoading,
    isAuthenticated,
    error,
    loginWithRedirect,
    logout: auth0Logout,
    user,
  } = useAuth0();

  const login = () => {
    loginWithRedirect({
      appState: { returnTo: "/" },
    });
  };

  const signup = () => {
    loginWithRedirect({
      authorizationParams: { screen_hint: "sign_up" },
      appState: { returnTo: "/" },
    });
  };
  const logout = () => {
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/contactme"
                >
                  Contact Me
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/myimage">
                  My Image
                </Link>
              </li>
            </ul>

            {isLoading ? (
              <span>Loading ...</span>
            ) : isAuthenticated ? (
              <div className="d-flex align-items-center gap-2">
                <span className="me-2"> {user.name || user.email} </span>
                <button className="btn btn-danger btn-sm" onClick={logout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="d-flex gap-2">
                <button className="btn btn-primary btn-sm" onClick={signup}>
                  Signup
                </button>
                <button className="btn btn-success btn-sm" onClick={login}>
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
