import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both fields are filled
    if (!username || !password) {
      setMessage('');
      setShowMessage(false);
      return;
    }

    // Check credentials
    if (username === 'user' && password === 'password') {
      setMessage(`Welcome, ${username}!`);
      setIsValid(true);
      setShowMessage(true);
    } else {
      setMessage('Invalid username or password');
      setIsValid(false);
      setShowMessage(true);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setShowMessage(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowMessage(false);
  };

  return (
    <div className="container">
      <h1>XLogin</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          disabled={!username || !password}
        >
          Submit
        </button>
      </form>

      {showMessage && (
        <div className={`message ${isValid ? 'success' : 'error'}`}>
          {message}
        </div>
      )}
    </div>
  );
}

export default App;
