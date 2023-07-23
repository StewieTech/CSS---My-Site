// import a react component that inputs a textarea message then performs a fetch request to localhost:3001 gets back a respnse as a data.message and displays that message in a box below 
import logo from './logo.svg';
import React, { useState} from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import {Row, Col, Form, Button } from 'react-bootstrap';
import { FiCamera } from 'react-icons/fi';// Import icons from react-icons library
import { FiArrowRight } from 'react-icons/fi';

console.log(process.env.REACT_APP_API_URL)
console.log("Hey")

// const pictureList = [ 'lola2.jpeg', 'lola.webp', 'lolac.png', 'lola3.png', 'lola4.png', 'lola5.png' ];
 const pictureList = [ 'lola2.png', 'lola.webp', 'lolac.png', 'lola3.png', 'lola4.png',  'lola6v4.png', 'lola5.png']

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [pictureIndex, setPictureIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const randomTimeout = Math.floor(Math.random() * 2500) + 2500 ;
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  // const [isTextareaBlur, setIsTextareaBlur] = useState(false);

  const handleTextareaFocus = () => {
    setIsTextareaFocused(true);
  };

  const handleTextareaBlur = () => {
    setIsTextareaFocused(false);
  };

  const Work = process.env.REACT_APP_API_URL ;
  // const Work = `http://localhost:3003` ; // test

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when the form is submitted
    setPictureIndex((prevIndex) => (prevIndex + 1) % pictureList.length);
    
    setTimeout(() => {

      fetch(Work, {
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
      })
      .finally(() => {
        setIsLoading(false); // Set loading back to false when the fetch is complete
      });
      
    }, randomTimeout);
};

// var smiley = ';)'

return (


<Container fluid>
<div className="glass-container">
    <h1 className="text-center mt-3">Ask Lola 😉</h1>
    </div>

    <div className = {` ${isTextareaFocused ? 'expanded' : ''}`}>
      <div className={` ${isTextareaFocused ? 'hide' : ''}`}>
      {/* <img src={logo} alt="logo" /> */}
      </div>
    </div>
   



    {/* Text Area */}

    <Row className="justify-content-center">
      <Col xs={12} sm={8} md={6} lg={4}>
      <div className={`textarea-container ${isTextareaFocused ? 'expanded' : ''}`}>
             {/* <img src={logo} alt="logo" className=".upload-button" /> */}
             {isTextareaFocused ? (
              <FiArrowRight className="icon arrow-icon" />
             ) : (
              <FiCamera className="icon camera-icon"/>
             )}
       
       
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTextarea">
            <Form.Control
              as="textarea" 
              value={message}
              placeholder="Ask your wingwomen anything ;)"
              onChange={(e) => setMessage(e.target.value)}
              onFocus={handleTextareaFocus}
              onBlur={handleTextareaBlur}
              className={`textarea ${isTextareaFocused ? 'focus' : ''}`}
            />
          </Form.Group>
          <Button variant="primary" type="submit" block>
            Send Message 💜 
          </Button>
        </Form>
      </div>
      </Col>
    </Row>

     {/* Lola's Response */}
    <Row className="justify-content-center mt-3">
      <Col xs={12} sm={8} md={6} lg={4}>
      {isLoading ? (
        <h2 className="flashyDots"> . </h2> //Show flashy dots while loading
      ) : response && (
        <div className = "animatedResponse">
        <h2>{response}</h2> {/* Show the animated response when not loading */}
        </div>
      )}
      </Col>
    </Row>


    <Row className="justify-content-center mt-3">
      <Col xs={12} sm={8} md={6} lg={4}>
        <img src={pictureList[pictureIndex]} alt="Person" className="person-image img-fluid" />
      </Col>
    </Row>

    <Row className="justify-content-center mt-3">
      <Col xs={12} sm={8} md={6} lg={4}>
        <img src={logo} className="App-logo" alt="logo" />
      </Col>
    </Row>


    <Row className="justify-content-center mt-3">
      <Col xs={12} sm={8} md={6} lg={4}  className="text-center">
        <p>
          <code>Hi I'm Lola 💜 Your Personal AI Wingwoman</code>
        </p>
        <p className="text-center">
          <a
            className="App-link"
            href="https://apps.apple.com/app/apple-store/id1663430725"
            target="_blank"
            rel="noopener noreferrer"
          >
            I am copying this app
          </a>
        </p>
      </Col>
    </Row>
  </Container>

);
}


export default App

// to runnnn app use : npm run dev 
// aws s3 sync build/ s3://lola-s3
// REACT_APP_API_URL=https://lola-back.onrender.com/
// REACT_APP_API_URL=http://3.80.220.82:3001/