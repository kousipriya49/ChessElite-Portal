// RegisterForm.js

import React, { useState } from 'react';
import '../../styles/register.css';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationData = {
      name: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await fetch('http://localhost:8081/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        // Registration successful, you might want to redirect to login or show a success message.
        console.log('Registration successful');
      } else {
        // Handle registration failure, maybe show an error message.
        const errorResponse = await response.json();
        console.error('Registration failed:', errorResponse.message);
      }
    } catch (error) {
      // Log detailed information about the error.
      console.error('Error during registration:', error);
    }
  };

  return (
    <>
      <div className="bodyloginreg"></div>
      <form className="register-form" onSubmit={handleSubmit}>
        <label id="lab" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Register</button>
        <p className="login-link">
          Already registered? <Link to="/signin">Login</Link>
        </p>
      </form>
    </>
  );
};

export default RegisterForm;
