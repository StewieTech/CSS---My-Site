// import a react component that inputs a textarea message then performs a fetch request to localhost:3001 gets back a respnse as a data.message and displays that message in a box below 
import logo from './logo.svg';
import React, { useState} from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import {Row, Col, Form, Button } from 'react-bootstrap';

console.log(process.env.REACT_APP_API_URL)
console.log("Hey")

// const pictureList = [ 'lola2.jpeg', 'lola.webp', 'lolac.png', 'lola3.png', 'lola4.png', 'lola5.png' ];
 const pictureList = [ 'lola2.png', 'lola.webp', 'lolac.png', 'lola3.png', 'lola4.png',  'lola6v4.png', 'lola5.png']

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [pictureIndex, setPictureIndex] = useState(0);

  const Work = process.env.REACT_APP_API_URL ;

  const handleSubmit = (e) => {
    e.preventDefault();
    setPictureIndex((prevIndex) => (prevIndex + 1) % pictureList.length);
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
  });
};

// var smiley = ';)'

return (


<Container fluid>
    <h1 className="text-center mt-3">Ask Your Wingwoman Lola A Question 😉</h1>
    <Row className="justify-content-center">
      <Col xs={12} sm={8} md={6} lg={4}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTextarea">
            <Form.Control
              as="textarea"
              value={message}
              placeholder="Ask Lola anything ;)"
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" block>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
    <Row className="justify-content-center mt-3">
      <Col xs={12} sm={8} md={6} lg={4}>
        <div><h2>{response}</h2></div>
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
          <code>Welcome to Lola: Your Personal AI Wingwoman :D</code>
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