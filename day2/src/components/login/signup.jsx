import React, { useState } from 'react';
import "../../styles/register.css";
import {Link} from "react-router-dom"; // Import the CSS file for styling
const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  }

  return (
       <>
      <div className="bodyloginreg">
        </div>
    <form className="register-form" onSubmit={handleSubmit}>
      <label  id="lab" htmlFor="username">Username</label>
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
     
      
      <label htmlFor="role">Role</label>
      <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="">Select a role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <br />
      <br />
      <button type="submit">Register</button>
      <p className="login-link">
      Already registered? <Link to="/signin">Login</Link>
    </p>
      </form>
     </>
      
  );
}

export default RegisterForm;