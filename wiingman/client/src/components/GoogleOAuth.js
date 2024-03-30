import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';

function GoogleOAuth() { // Renaming for consistency
  const [clientId, setClientId] = useState('');

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
    const data = { clientId: '208082140209-68a5907b43ju7427bhtt0dhibdvf4u97.apps.googleusercontent.com' };
    setClientId(data.clientId);
    console.log('clientId:', data.clientId);
  }, []);
  

  const onSuccess = (res) => {
    console.log("Login Success! Current user: ", res.profileObj);
  };

  const onFailure = (res) => {
    console.error("Login Failed: ", res);
  };

  if (!clientId) {
    return <p>Loading...</p>; // Or any other loading indicator
  }

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
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