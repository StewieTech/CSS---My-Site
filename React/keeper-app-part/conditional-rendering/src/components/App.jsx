import React from "react";
// import Login from "./Login"


const currentTime = new Date(2022, 11, 13).getHours();

console.log(currentTime); 



function App() {
  return (
    <div className="container">{
    currentTime < 12 &&  <h1> Why are you still working?</h1> 
    }
    </div>
  );
}

export default App;
