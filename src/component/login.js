import React, { useState } from 'react';

import '../style/login.css';
import '../font/google-fonts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Login() {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here using username and password
    console.log('Login submitted:', { username, password });
    
  };

  return (
    <div className='background-layer'>
        <div className='title2'>
            
        </div>
    <div className='Container'>
        
         <div className='title'>
        <h2 className='login-text'>
          <FontAwesomeIcon icon={faHeart} className='heart-icon' />
          <FontAwesomeIcon icon={faHeart} className='heart-icon' />
          <FontAwesomeIcon icon={faHeart} className='heart-icon' />
          <span className='login-label'>Log in</span>
          <FontAwesomeIcon icon={faHeart} className='heart-icon' />
          <FontAwesomeIcon icon={faHeart} className='heart-icon' />
          <FontAwesomeIcon icon={faHeart} className='heart-icon' />
        </h2>
      </div>

      
      <form onSubmit={handleSubmit} className='form-group'>
        <div className='name'>
          <input
            type="text"
            id="username"
            placeholder='Email'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className='password'>
          <input
            type="password"
            id="password"
            placeholder='Password'
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
