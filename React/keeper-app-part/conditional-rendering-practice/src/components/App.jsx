import React from "react";
import Form from "./Form";

var userIsRegistered = true;
// userIsRegistered === true && 


function App() {
  return (
    <div className="container">
             <Form  
             isResgistered = {userIsRegistered}
             type = "text"
             placeholder = "Password"

             />

            

            

            

             {/* <Form

              type = "text"
              placeholder = "Username"
            />

            <Form 
              type = "password"
              placeholder = "Password"
            />

            <Form 
            type = "password"
            placeholder = " Confirm Password"
            /> */}

    </div>
  );
}

export default App;
