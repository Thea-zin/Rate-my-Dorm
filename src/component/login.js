import React, { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here using username and password
    if (username === 'bansothea@gmail.com' && password === 'sothea') {
      // Authentication successful, redirect to the next page
      navigate('/home');
    } 
    if (username === 'testuser@gmail.com' && password === 'test') {
       navigate('/home');
    } 
    else {
      // Authentication failed, display an alert
      alert('Invalid email or password');
    }
  };

  return (
    <div className="background-layer">
      <div className="Container">
        <div className="title">
          <h2 className="login-text">
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          
            <span className="login-label">Log in</span>
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="form-group">
          <div className="name">
            <input
              type="text"
              id="username"
              placeholder="Email"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="password">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
