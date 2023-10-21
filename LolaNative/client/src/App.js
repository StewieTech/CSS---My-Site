import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { FiCamera, FiArrowRight } from 'react-icons/fi'; // Import icons from react-icons library
import Tesseract from 'tesseract.js';

const pictureList = ['lola2.png', 'lola.webp', 'lolac.png', 'lola3.png', 'lola4.png', 'lola6v4.png', 'lola5.png'];

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [pictureIndex, setPictureIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const randomTimeout = Math.floor(Math.random() * 2500) + 2500;
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [ocrText, setOcrText] = useState('');
  var [questionCount, setQuestionCount] = useState(0);
  const [showProPopup, setShowProProPopup] = useState(false);

  const MAX_QUESTION_LIMIT_FREE = 5;

  const handleTextareaFocus = () => {
    setIsTextareaFocused(true);
  };

  const handleTextareaBlur = () => {
    setIsTextareaFocused(false);
  };

  if (questionCount >= MAX_QUESTION_LIMIT_FREE) {
    setShowProProPopup(true);
    return null;
  }

  const handleQuestionSubmit = () => {
    if (questionCount < MAX_QUESTION_LIMIT_FREE) {
      setQuestionCount((prevCount) => prevCount + 1);
    } else {
      setShowProProPopup(true);
    }
  }

  var remainingFreeQuestions = MAX_QUESTION_LIMIT_FREE - questionCount;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      Tesseract.recognize(file, 'eng')
        .then(({ data: { text } }) => {
          setMessage(text);
        })
        .catch((error) => {
          console.error('Error extracting text:', error);
        });
    }
  }

  const handleSignUpForPro = () => {
    setShowProProPopup(false);
  }

  const handleCloseProPopup = () => {
    setShowProProPopup(false);
  };

  const Work = process.env.REACT_APP_API_URL;

  const handleSubmit = () => {
    setIsLoading(true);
    setPictureIndex((prevIndex) => (prevIndex + 1) % pictureList.length);

    setTimeout(() => {
      fetch(Work, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
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
          setIsLoading(false);
        });
    }, randomTimeout);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ask Lola 😉</Text>

      <View style={styles.textAreaContainer}>
        <TextInput
          value={message}
          placeholder="Ask your wingwomen anything ;)"
          onChangeText={(text) => setMessage(text)}
          onFocus={handleTextareaFocus}
          onBlur={handleTextareaBlur}
          style={[
            styles.textarea,
            isTextareaFocused ? styles.textareaFocus : null
          ]}
        />

        {isTextareaFocused ? (
          <FiArrowRight style={styles.icon} />
        ) : (
          <TouchableOpacity onPress={handleImageUpload}>
            <FiCamera style={[styles.icon, isTextareaFocused ? styles.hidden : null]} />
          </TouchableOpacity>
        )}

        <Button
          title="Send Message 💜"
          onPress={handleSubmit}
        />

        <View style={styles.badgeContainer}>
          {remainingFreeQuestions > 0 ? (
            <Text style={styles.badge}>Remaining Free Questions: {remainingFreeQuestions}</Text>
          ) : (
            <Text style={styles.badge}>Upgrade to Pro for Unlimited Questions</Text>
          )}
        </View>
      </View>

      <View style={styles.responseContainer}>
        <View style={styles.response}>
          {isLoading ? (
            <Text style={styles.flashyDots}> . </Text>
          ) : response ? (
            <View style={styles.animatedResponse}>
              <Text style={styles.responseText}>{response}</Text>
            </View>
          ) : null}
        </View>
      </View>

      <Image source={{ uri: pictureList[pictureIndex] }} style={styles.personImage} />

      {/* <Image source={logo} style={styles.appLogo} /> */}

      <View style={styles.infoContainer}>
        <Text>
          <Text style={styles.infoText}>Hi I'm Lola 💜 Your Personal AI Wingwoman</Text>
        </Text>
        <Text style={styles.infoText}>
          I am copying this app{' '}
          <Text
            style={styles.appLink}
            onPress={() => {
              // Handle link press
            }}>
            here
          </Text>
        </Text>
      </View>

      <Modal visible={showProPopup} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Upgrade to Pro to talk more to Lola</Text>
          <Text style={styles.modalText}>Upgrade now to get unlimited questions and more features!</Text>
          <Button title="Close" onPress={handleCloseProPopup} />
          <Button title="Upgrade to Pro" onPress={handleSignUpForPro} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  textAreaContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  textarea: {
    width: '100%',
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  textareaFocus: {
    borderColor: 'blue',
  },
  icon: {
    fontSize: 24,
    marginTop: 8,
    color: 'gray',
  },
  hidden: {
    display: 'none',
  },
  badgeContainer: {
    alignItems: 'center',
  },
  badge: {
    fontSize: 14,
    color: 'gray',
  },
  responseContainer: {
    width: '100%',
    alignItems: 'center',
  },
  response: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  flashyDots: {
    fontSize: 24,
  },
  animatedResponse: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
  },
  responseText: {
    fontSize: 18,
  },
  personImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  appLogo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
  appLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;


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

