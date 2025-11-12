import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Real<span>Estate</span></h2>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/buy">Buy</Link></li>
        <li><Link to="/rent">Rent</Link></li>
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <button className="navbar-btn">Sign In</button>
    </nav>
  );
};

export default Navbar;
