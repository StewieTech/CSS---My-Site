import React, { useState } from "react";





//


function App() {

  setInterval(increase, 1000)


  const timeNow = new Date().toLocaleTimeString();
// console.log(time);

// setInterval(sayHi, 1000);

const [time, setTime] = useState(timeNow);

function increase() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  
  }




  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={increase}> Get Time</button>
    </div>
  );
}

export default App;
