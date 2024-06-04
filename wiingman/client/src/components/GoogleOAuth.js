import React, { useState, useEffect, useContext } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';


function GoogleOAuth() { 
  const [clientId, setClientId] = useState('');
  const {isLoggedIn, setIsLoggedIn, handleLogout} = useContext(AuthContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch('/google-auth')
  //     .then(response => response.json())
  //     .then(data => {
  //       setClientId(data.clientId);
  //       console.log('Google Client ID:', data.clientId);
  //     })
  //     .catch(error => console.error('Error fetching Google client ID:', error));
  // }, []);

  useEffect(() => {
    // Temporarily use a hardcoded value to test the flow
    const data = { clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID };
    setClientId(data.clientId);
    // console.log('clientId:', data.clientId);
  }, []);
  

  // This was some workaround trying another method
  // const onSuccess = (res) => {
  //   console.log("Login Success! Current user: ", res.profileObj);
  // };
  const onSuccess = (res) => {
    console.log("Login Success! Current user: ", res.profileObj);
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  const onFailure = (res) => {
    console.error("Login Failed: ", res);
  };

  // const handleLogout = () => {
  //   googleLogout();
  //   setIsLoggedIn(false);
  //   navigate('/');
  // }

  if (!clientId) {
    return <p>Loading...</p>; // Or any other loading indicator
  }

  return (
    <div id="authButtons">
    {!isLoggedIn ? (

      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    ) : (
      <button className="auth-button" onClick={handleLogout}>Logout</button>
    )}
    </div>
  );
}

export default GoogleOAuth;

/*
old code



import React, {useState, useEffect} from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

function Login() {
  const [clientId, setClientId] = useState('');
  // const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/google-auth')
      .then(response => response.json())
      .then(data => {
        setClientId(data.clientId);
        setClientSecret(data.clientSecret);
        console.log('clientId:', data.clientId);
        console.log('clientSecret:', data.clientSecret);
      })
      .catch(error => console.error(error));
  }, []);
  
  const onSuccess = (res) => {
    console.log("Login Success!! Current user: ", res.profileObj);
  }

  const onFailure = (res) => {
    console.log("Login FAILED BABY!! res: ", res);
  }

  console.log(clientId, clientSecret);


  return (
    <GoogleOAuthProvider
      clientId={clientId}
      clientSecret={clientSecret}
    >
      <div id="signInButton">
        <GoogleLogin
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
        <p>Google Login button rendered successfully!</p>
        <p>{onSuccess}</p>
      </div>
    </GoogleOAuthProvider>
  )
}

export default Login

*/