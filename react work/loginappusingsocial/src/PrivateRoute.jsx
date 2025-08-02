
import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect({
        appState: { returnTo: location.pathname }
      });
    }
  }, [isLoading, isAuthenticated, loginWithRedirect, location.pathname]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return isAuthenticated ? children : null;
};


export default PrivateRoute;
