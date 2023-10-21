import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';



function Login() {

const onSuccess=(res) => {
  console.log("Login Success!! Current user: ", res.profile0bj);
}

const onFailure=(res) => {
    console.log("Login FAILED BABY!! res: ",res);
}
  

    return (
        <GoogleOAuthProvider>

      <div id="signInButton">
        <GoogleLogin

            clientId= {process.env.GOOGLE_CLIENT_ID} 
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            clientSecret = {process.env.GOOGLE_CLIENT_SECRET} 
            isSignedIn={true}
        />;
        </div>
        </GoogleOAuthProvider>
            
         
    )
}



export default Login