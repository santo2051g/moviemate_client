import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';   // ✅ import axios
import '../CSS/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // ✅ call backend login API
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password
      });

      console.log("Login success:", res.data);

      // optional: store token if you want to persist login
      localStorage.setItem("token", res.data.jwt);

      alert("Login successful!");
      navigate('/');   
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1>Login to MovieMate</h1>
        <form onSubmit={handleLogin}>
          <div className="data">
            <label htmlFor="email">Email:</label>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email" 
              required
            />

            <label htmlFor="password">Password:</label>
            <input 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password" 
              name="password" 
              required
            />
          </div>

          <button type="submit" className="button">Login</button>
          <div className='nav-con'>
            <span className='nav-p'>dont have an Account Mate?</span>
            <span 
              className='nav-signup' 
              onClick={() => navigate('/signup')}
            >
              SIGN UP
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;