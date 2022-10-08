import React from 'react';
import Input from "./Input";

var isLoggedIn = true;

const currentTime = new Date(2019, 11, 18).getHours();



function Login() {
    // isLoggedIn ? <h1>Hello</h1> : <Input />
    currentTime > 12 ?  <h1> Why are you still working?</h1> : <h2>Hello</h2>
    //     type = "text"
    //     placeholder ="Username"
    //  />
    //  <Input 
    // type = "password"
    // placeholder = "Password"
    //         <button type="submit">Login</button>
  

    }      
  

  export default Login;