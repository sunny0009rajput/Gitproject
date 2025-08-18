import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const AuthProviderWithNavigation = ({children}) =>{
    const navigate = useNavigate();

    const onRedirectCallback = (appState) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    
  console.log("Auth0 Domain:", import.meta.env.VITE_AUTH0_DOMAIN); // ✅ Debug
  console.log("Auth0 Client ID:", import.meta.env.VITE_AUTH0_CLIENT_ID); // ✅ Debug

    return (
        <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}         // must NOT be undefined
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{redirect_uri: window.location.origin}}
        useRefreshTokens={true}
        cacheLocation="localstorage"
        onRedirectCallback={onRedirectCallback}

        >
            {children}


        </Auth0Provider>
    );
}
export default AuthProviderWithNavigation