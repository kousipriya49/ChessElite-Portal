import React, { useState } from 'react';
import "../../styles/login.css";
import {Link} from "react-router-dom";
const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
   <>
   <br></br> <br></br> <br></br> <br></br>
      <div className="bodylogin">
        </div>
    <div className="login-container">
      <br></br> <br></br> <br></br> <br></br>
      <h2>Login</h2>
      <br></br> 
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="usernameOrEmail">Username / Email</label>
        <input
          type="text"
          id="usernameOrEmail"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
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
        <br />
        <button>
        <Link to ="/nav">Login</Link>
        </button>
        <br></br> 
        </form>
        <center>
          <pre>
        <p>Don't have an account?  <Link to ="/login">register here</Link></p>
        </pre>
        </center>
        {/* <center>
        <button>
        <Link to ="/login">Register</Link>
        </button>
        </center> */}
    </div>
    </>
  );
};

export default Login;