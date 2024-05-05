// Library Imports
import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Form, Button, Modal, Badge } from 'react-bootstrap';
import Tesseract from 'tesseract.js'
import { GoogleOAuthProvider } from '@react-oauth/google';
// import 'bootstrap/dist/css/bootstrap.min.css';


// Components
import GoogleOAuth from './components/GoogleOAuth';
import RegistrationForm from './components/RegistrationForm';
import Header from './components/Header';
import QuestionCount from './components/QuestionCount';
import TextAreaComponent from './components/TextAreaComponent';
import NonsenseFooter from './components/NonsenseFooter'; 
import ImageDisplayComponent from './components/ImageDisplayComponent';


// Assets
import './App.css';
import './css/Base.css';
import './css/Typography.css';
import './css/FormsAndButtons.css';
import './css/Animations.css';




// Constants
const MIN_TIMEOUT = 2500;
const MAX_TIMEOUT = 5000;
const MAX_QUESTION_LIMIT_FREE = 10




console.log(process.env.REACT_APP_API_URL)
console.log("Hey")


function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const randomTimeout = Math.floor(Math.random() * MAX_TIMEOUT - MIN_TIMEOUT +1) + MIN_TIMEOUT ;
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [ocrText, setOcrText] = useState('') ;
  const [pictureIndex, setPictureIndex] = useState(0);

  var [questionCount, setQuestionCount] = useState(0);
  const [showProPopup, setShowProPopup] = useState(false);
  
  // const [isTextareaBlur, setIsTextareaBlur] = useState(false);
  
  
const handleTextareaFocus = () => {
  setIsTextareaFocused(true);
};

const handleTextareaBlur = () => {
  setIsTextareaFocused(false);
};


useEffect(() => {
  if (questionCount >= MAX_QUESTION_LIMIT_FREE) {
    setShowProPopup(true);
  } else {
    setShowProPopup(false);
  }
}, [questionCount]); // Depend on questionCount to re-run this effect


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
    setIsLoading(true); 
    
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




<Container fluid>
<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
<div className="glass-container">
    <h1 className="text-center mt-3">Ask Lola 😉</h1>
    </div>

 


    <Row className="justify-content-center">
      <Col xs={12} sm={8} md={6} lg={4}>
      <div className={`textarea-container ${isTextareaFocused ? 'expanded' : ''}`}>


      <TextAreaComponent
        message={message}
        setMessage={setMessage} // This should be a function returned by useState
        isTextareaFocused={isTextareaFocused}
        handleTextareaFocus={handleTextareaFocus}
        handleImageUpload={handleImageUpload}
        handleTextareaBlur={handleTextareaBlur}
        handleSubmit={handleSubmit}
      />
       
             </div>
      </Col>
    </Row>

    <QuestionCount
    questionCount={questionCount}
    maxQuestionLimit={MAX_QUESTION_LIMIT_FREE}
    onUpgradeClick={handleSignUpForPro}
  />

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
       <ImageDisplayComponent
        // pictureList={pictureList}
        // pictureIndex={pictureIndex}
       />
      </Col>
    </Row>




          <NonsenseFooter/>
   


      <div className="App">
        <GoogleOAuth />
      </div>

    <RegistrationForm />



    </GoogleOAuthProvider>
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

