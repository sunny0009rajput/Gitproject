import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function PrivateRoute({children}) {

    const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
    const location = useLocation();

    useEffect(()=>{
        if(!isAuthenticated && !isLoading){
            loginWithRedirect({
                appState: { returnTo: location.pathname}
            });

        }
    },[isLoading, isAuthenticated, loginWithRedirect, location.pathname]);

    if(isLoading){
        return <p>Loading ...</p>
    }

  return isAuthenticated ? children : null ;
}

export default PrivateRoute