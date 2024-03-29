// Library Imports
import React, {useState} from 'react';
import { FiCamera, FiArrowRight } from 'react-icons/fi';
import {Container, Row, Col, Form, Button, Modal, Badge } from 'react-bootstrap';
import Tesseract from 'tesseract.js'

// Components
import GoogleOAuth from './components/GoogleOAuth';
import RegistrationForm from './components/RegistrationForm';
import Header from './components/Header';
import QuestionCount from './components/QuestionCount';

// Assets
import './App.css';
const pictureList = [ 'lola2.png', 'lola.webp', 'lolac.png', 'lola3.png', 'lola4.png',  'lola6v4.png', 'lola5.png']

// Constants
const MIN_TIMEOUT = 2500;
const MAX_TIMEOUT = 5000;



console.log(process.env.REACT_APP_API_URL)
console.log("Hey")

// const pictureList = [ 'lola2.jpeg', 'lola.webp', 'lolac.png', 'lola3.png', 'lola4.png', 'lola5.png' ];

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [pictureIndex, setPictureIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const randomTimeout = Math.floor(Math.random() * MAX_TIMEOUT - MIN_TIMEOUT +1) + MIN_TIMEOUT ;
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [ocrText, setOcrText] = useState('') ;
  var [questionCount, setQuestionCount] = useState(0);
  const [showProPopup, setShowProPopup] = useState(false);
  

  // const [isTextareaBlur, setIsTextareaBlur] = useState(false);
  
  const MAX_QUESTION_LIMIT_FREE = 5
  const handleTextareaFocus = () => {
    setIsTextareaFocused(true);
  };
  
  const handleTextareaBlur = () => {
    setIsTextareaFocused(false);
  };
  
  if (questionCount >= MAX_QUESTION_LIMIT_FREE) {
    setShowProPopup(true) ;
    return;
  }


  const handleQuestionSubmit = () => {
    if (questionCount < MAX_QUESTION_LIMIT_FREE) {
      setQuestionCount((prevCount) => prevCount + 1);
    } else {
      setShowProPopup(true);
    }
  }

  
  var remainingFreeQuestions = MAX_QUESTION_LIMIT_FREE - questionCount ;


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      Tesseract.recognize(file, 'eng')
      .then(({ data: {text} }) => {
        // const processedText = processTextConversation(text);
        // setMessage(processedText);
 
        setMessage(text);
      })
      .catch((error) => {
        console.error('Error extracting text:',error);
      })
    }
  }

  const handleSignUpForPro = () => {
    setShowProPopup(false);
  }

  const handleCloseProPopup = () => {
    setShowProPopup(false);
  };

// 
  const Work = process.env.REACT_APP_API_URL ;
  // const Work = `http://localhost:3001` ; // test

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
          setQuestionCount((prevCount) => prevCount + 1); 
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

  // <QuestionCount />


<Container fluid>
<div className="glass-container">
    <h1 className="text-center mt-3">Ask Lola 😉</h1>
    </div>

    {/* I am not sure if I should delete below */}

    {/* <div className = {` ${isTextareaFocused ? 'expanded' : ''}`}>
    
    {isTextareaFocused ? (
            <FiArrowRight className="icon arrow-icon" />
             ) : (
              <FiCamera className="icon camera-icon"/>
              
             )}
       
      <div className={` ${isTextareaFocused ? 'hide' : ''}`}> </div>
    </div> */}
   
    {/* <input type="file" accept="image/*" onChange={handleImageUpload} /> */}


    {/* Text Area */}

    <Row className="justify-content-center">
      <Col xs={12} sm={8} md={6} lg={4}>
      <div className={`textarea-container ${isTextareaFocused ? 'expanded' : ''}`}>


 

       
       
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

            {isTextareaFocused ? (
              <FiArrowRight className="icon arrow-icon" />
             ) : (
              <label htmlFor="imageUpload">
                <FiCamera className={`camera-icon ${isTextareaFocused ? 'hidden' : ''}`} />
              </label>
             )}

             {/* hidden input file */}
             <input
             id="imageUpload"
             type="file"
             accept="image/*"
             onChange={handleImageUpload}
             style={{ display: 'none'}}

             />
               
               {/* Pro Badge */}
               <div className="text-center">
                  {remainingFreeQuestions > 0 ? (
                    <Badge variant="secondary">Remaining Free Questions: {remainingFreeQuestions}</Badge>
                  ) : (
                    <Badge variant="danger">Upgrade to Pro for Unlimited Questions</Badge>
                  )}
                </div>

          {/* <input type="file" accept="image/*" onChange={handleImageUpload} /> */}
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
    <Modal show = {showProPopup} onHide={handleCloseProPopup}>
        <Modal.Header closeButton>
          <Modal.Title>Upgrade to Pro to talk more to Lola</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Upgrade now to get unlimited questions and more features!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseProPopup}>
            Close
          </Button>
          <Button variant = "primary" onClick={handleSignUpForPro}>
            Upgrade to Pro
          </Button>
          {/* Login to Google   in this line !!! */}
        </Modal.Footer>
    </Modal>

        <GoogleOAuth/>
        <RegistrationForm />
  </Container>

);
}


export default App

// to runnnn app use : npm run dev 
// aws s3 sync build/ s3://lola-s3
// REACT_APP_API_URL=https://lola-back.onrender.com/
// REACT_APP_API_URL=http://3.80.220.82:3001/

// What do I need before deploying the app

// A way for users to login
// login users ask 5 questions
// then pop up for them to pay comes up
// pop up copies rizz (share for free, pay for more)

// I can remove the OCR and upload it when it fully works
// Just need to commit all of it out

// Eventuall
// Fix OCR
// update prompt based on time talking with Lola

// character limit
// if textbox is blank

