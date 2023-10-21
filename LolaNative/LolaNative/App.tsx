import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Modal, TouchableOpacity, StyleSheet } from 'react-native';
// import Config from 'react-native-config';



// import loladelete from './loladelete.png' ;
const loladelete = 'loladelete.png';
// import lola2 from './client/public/lola2.png'; // Adjust the path according to your project structure

// import { FiCamera, FiArrowRight } from 'react-icons/fi'; // Import icons from react-icons library
// import Tesseract from 'tesseract.js';

const pictureList = [loladelete, 'lola.webp', 'lolac.png', 'lola3.png', 'lola4.png', 'lola6v4.png', 'lola5.png'];

const App: React.FC = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [pictureIndex, setPictureIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const randomTimeout = Math.floor(Math.random() * 2500) + 2500;
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  // const [imageFile, setImageFile] = useState<File | null>(null);
  const [ocrText, setOcrText] = useState('');
  const [questionCount, setQuestionCount] = useState(0);
  const [showProPopup, setShowProPopup] = useState(false);

  const MAX_QUESTION_LIMIT_FREE = 5;
  const Work = process.env.REACT_APP_API_URL ;
  // const apiURL = Config.REACT_APP_API_URL;
  const handleTextareaFocus = () => {
    setIsTextareaFocused(true);
  };

  const handleTextareaBlur = () => {
    setIsTextareaFocused(false);
  };

  if (questionCount >= MAX_QUESTION_LIMIT_FREE) {
    setShowProPopup(true);
    return null;
  }

  const handleQuestionSubmit = () => {
    if (questionCount < MAX_QUESTION_LIMIT_FREE) {
      setQuestionCount((prevCount) => prevCount + 1);
    } else {
      setShowProPopup(true);
    }
  };

  const remainingFreeQuestions = MAX_QUESTION_LIMIT_FREE - questionCount;

  // const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     setImageFile(file);
  //     try {
  //       const { data: { text } } = await Tesseract.recognize(file, 'eng');
  //       setMessage(text);
  //     } catch (error) {
  //       console.error('Error extracting text:', error);
  //     }
  //   }
  // };

  const handleSignUpForPro = () => {
    setShowProPopup(false);
  };

  const handleCloseProPopup = () => {
    setShowProPopup(false);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setPictureIndex((prevIndex) => (prevIndex + 1) % pictureList.length);

    setTimeout(async () => {
      try {
        const response = await fetch(Work, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        });
        const data = await response.json();
        if (data.message) {
          setResponse(data.message);
          setQuestionCount((prevCount) => prevCount + 1);
        } else {
          setResponse('Error: No message received');
        }
      } catch (error) {
        console.log('Error:', error);
        setResponse('Error: Request failed');
      } finally {
        setIsLoading(false);
      }
    }, randomTimeout);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ask Lola 😉</Text>
      <Image source={require('./loladelete.png')} style={styles.personImage} />
      <View style={styles.textAreaContainer}>
        <TextInput
          value={message}
          placeholder="Ask your wingwomen anything ;)"
          onChangeText={(text) => setMessage(text)}
          onFocus={handleTextareaFocus}
          onBlur={handleTextareaBlur}
          style={[
            styles.textarea,
            isTextareaFocused ? styles.textareaFocus : undefined,
          ]}
        />

        {/* {isTextareaFocused ? (
          <FiArrowRight style={styles.icon} />
        ) : (
          <TouchableOpacity onPress={handleImageUpload}>
            <FiCamera
              style={[styles.icon, isTextareaFocused ? styles.hidden : undefined]}
            />
          </TouchableOpacity>
        )} */}

        <Button title="Send Message 💜" onPress={handleSubmit} />

        <View style={styles.badgeContainer}>
          {remainingFreeQuestions > 0 ? (
            <Text style={styles.badge}>
              Remaining Free Questions: {remainingFreeQuestions}
            </Text>
          ) : (
            <Text style={styles.badge}>
              Upgrade to Pro for Unlimited Questions
            </Text>
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

      <Image
        source={{ uri: pictureList[pictureIndex] }}
        style={styles.personImage}
      />

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
            }}
          >
            here
          </Text>
        </Text>
      </View>

      <Modal visible={showProPopup} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            Upgrade to Pro to talk more to Lola
          </Text>
          <Text style={styles.modalText}>
            Upgrade now to get unlimited questions and more features!
          </Text>
          <Button title="Close" onPress={handleCloseProPopup} />
          <Button title="Upgrade to Pro" onPress={handleSignUpForPro} />
        </View>
      </Modal>
    </View>
  );
};

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
