import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Styling/SignUp.css';
import logo from '../Images/Logo.png';
import bg from '../Images/Bg.jpg';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setMessage('');

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (!name || !email || !password) {
      setMessage('Please fill in all fields.');
      setIsSuccess(false);
      return;
    }

    const alreadyExists = existingUsers.some((user) => user.email === email);
    if (alreadyExists) {
      setMessage('A user with this email already exists. Please login instead.');
      setIsSuccess(false);
      return;
    }

    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    setMessage('✅ Account created successfully! Redirecting to login...');
    setIsSuccess(true);

    setName('');
    setEmail('');
    setPassword('');

    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup} className="signup-form">
        <div className="form-header">
          <img src={logo} alt="Logo" className="signup-logo" />
          <h2 className="signup-heading">User Signup</h2>
        </div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="signup-btn">Register</button>

        {message && (
          <p className={`signup-message ${isSuccess ? 'success' : 'error'}`}>
            {message}
          </p>
        )}

        <p className="already-registered">
          Already have an account? <Link to="/login" className="login-link">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
