import { FiCamera, FiArrowRight } from 'react-icons/fi';
import {Container, Row, Col, Form, Button, Modal, Badge } from 'react-bootstrap';


const TextAreaComponent = ({message, setMessage, isTextareaFocused, handleTextareaFocus, handleImageUpload, handleTextareaBlur, handleSubmit}) => {
    return (
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
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload} // You need to pass handleImageUpload as prop
            style={{ display: 'none'}}
          />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Send Message 💜
        </Button>
      </Form>
    );
  };

  export default TextAreaComponent;

  /*
  old code
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

             hidden input file 
             <input
             id="imageUpload"
             type="file"
             accept="image/*"
             onChange={handleImageUpload}
             style={{ display: 'none'}}

             />
               
              

          </Form.Group>
          <Button variant="primary" type="submit" block>
            Send Message 💜 
          </Button>
        </Form>


  */
  