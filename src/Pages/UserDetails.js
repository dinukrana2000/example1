import React, { useState } from 'react';

const UserDetails = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions here with the collected data
    console.log('Username:', username);
    console.log('Email:', email);
    // Clear input fields after submitting data
    setUsername('');
    setEmail('');
  };

  return (
    <div>
      <h2>Enter Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>

      <div>
        <h2>User Details</h2>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default UserDetails;
