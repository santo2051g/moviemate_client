import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'   // ✅ add axios
import '../CSS/signup.css'

const Signup = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // ✅ send signup data to backend
      const res = await axios.post("https://moviemate-server.onrender.com/api/auth/signup", {
        name,
        email,
        password
      });

      console.log("Signup success:", res.data);
      alert("Signup successful!");
      navigate('/login');   // redirect after success
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-body w-screen">
      <div className="signup w-screen">
        <div className="sign-con  justify-center items-center"> {/* ✅ fixed className */}
          <h1>Become a Moviemate</h1>
          <form onSubmit={handleSignup}>
            <div className="data-signup flex justify-between items-center bg-">
              <label htmlFor='username'>User Name:</label>
              <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                id="username"
                name="username"
                required 
              />

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
            <button type="submit" className="button">Sign up</button>
            <div className='py-5 flex justify-center gap-10 items-center'>
              <span className='text-white font-bold'>Already a MovieMate? </span>
              <span 
                className='text-red-500 cursor-pointer font-cursive' 
                onClick={() => navigate('/login')}
              >
                LOGIN
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup