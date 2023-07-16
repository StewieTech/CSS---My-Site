// import a react component that inputs a textarea message then performs a fetch request to localhost:3001 gets back a respnse as a data.message and displays that message in a box below 
import logo from './logo.svg';
import React, { useState} from 'react';
import './App.css';
import personImage from './lola2.webp';

// const pictureList = [ 'lola2.jpeg', 'lola.webp', 'lolac.png', 'lola3.png', 'lola4.png', 'lola5.png' ];
 const pictureList = [ 'lola2.webp', 'lola.webp', 'lolac.png', 'lola3.png', 'lola4.png', 'lola5.png']

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [pictureIndex, setPictureIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPictureIndex((prevIndex) => (prevIndex + 1) % pictureList.length);
    fetch(`http://localhost:3003`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message}),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {

        setResponse(data.message);
      } else {
        setResponse('Error: No message received');
      }
  })
  .catch((error) => {
    console.log('Error:', error);
    setResponse('Error: Request failed');
  });
};

var smiley = ';)'

  return (
    <div className="App">
      <h1>Ask Your Wingman Lola A Question {smiley} </h1>
      <header className="App-header">
      <form onSubmit = {handleSubmit}>
      
      <div className="container">
        <textarea
        value = {message}
        placeholder="Ask Lola anything ;)"
        onChange = {(e) => setMessage(e.target.value)}
        ></textarea>
        <button type ="submit">Submit</button>
        </div>
      </form>
      {/* <div>{response}</div> */}
      <div>Hey</div>
      


      <img
          src={pictureList[pictureIndex]}
          alt="Person"
          className="person-image"
        />
        {/* <img src="Lola.webp" alt="Person" className="person-image" /> */}

        

        <img src={logo} className="App-logo" alt="logo" />


        <p>
           <code>
           Welcome to Wiingman :D
           </code> 
        </p>
        <a
          className="App-link"
          href="https://apps.apple.com/app/apple-store/id1663430725"
          target="_blank"
          rel="noopener noreferrer"
        >
          I am copying this app
        </a>
      
       
      </header>



    </div>
  );
}

export default App

// to runnnn app use : npm run dev 
