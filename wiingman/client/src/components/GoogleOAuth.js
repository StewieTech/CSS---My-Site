import React from 'react';
import { GoogleOAuthprovider, useGoogleOAuth } from 'react-oauth/google';

function GoogleOAuth() {
    const { isAuthenticated, authenticate, signout } = useGoogleOAuth();

    const handleLogin = () => {
        signout();
    };


return (
    <div> 
    {isAuthenticated ? (
        <button onClick={handleLogout}>Sign Out</button>
) : (
    <button onClick={handleLogin}>Sign In with Google</button>
)}
 </div>
);
}

export default function App() {
    return (
        <GoogleOAuthProvider clientId="HERE!!!!">
        <div className="App">
            <GoogleOAuth />
        </div>
        </GoogleOAuthProvider>
    );
}