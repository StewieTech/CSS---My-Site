// RegistrationForm.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import  GoogleOAuth  from '/GoogleOAuth';
import GoogleOAuth from './GoogleOAuth';
import AuthContext from './AuthContext';


const RegistrationForm = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogout = () => {
    navigate('/');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Registration was successful, you can redirect or show a success message
        console.log('Registration successful');
        console.log(name, email);
        navigate('/register-success');
      } else {
        // Handle registration errors
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
     console.log('nice registration form')
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;



