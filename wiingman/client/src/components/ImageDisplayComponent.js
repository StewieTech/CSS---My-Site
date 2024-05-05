import React, { useState, useEffect } from 'react';
import '../css/ImageDisplayComponent.css';

const ImageDisplayComponent = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/api/images/headerMain')
      .then(response => response.json())
      .then(headerMainImages => {
        const imagePaths = headerMainImages.map(image => `http://localhost:3001/${image}`);
        // type: file.endsWith('.mp4') ? 'video' : 'image',
        setImages(imagePaths);
        console.log(imagePaths);
      })
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  // Automatically move to the next image
  useEffect(() => {
    const transitionInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // The total duration should include time for both fading out the current image and fading in the next image.

    return () => clearInterval(transitionInterval);
  }, [images.length]);

  // Calculate the current image to display
  const currentImage = images[currentIndex];

  return (
    <div className="image-container">
      {currentImage && (
        <img src={currentImage} alt="Displayed content" className="image-fadeInOut" />
      )}
      {/* {currentImage?.type === 'video' && (
        <video className="media-animation" autoPlay loop muted>
          <source src={currentImage} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )} */}
    </div>
  );
};

export default ImageDisplayComponent;
