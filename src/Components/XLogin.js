import React, { useState } from 'react';

function XLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === '' || password === '') {
      setMessage('Both fields are mandatory');
    } else if (username === 'user' && password === 'password') {
      setMessage(`Welcome, ${username}!`);
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div style={{ textAlign: 'left', paddingLeft: '0.70%' }}>
      <h1> Login Page</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ textAlign: 'left', paddingLeft: '0.20%' }}>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default XLogin;