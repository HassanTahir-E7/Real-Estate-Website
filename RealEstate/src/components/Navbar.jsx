import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Images/Logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // 🔹 Clear any login/session data
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');

    // 🔹 Redirect to login page
    navigate('/login');
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" className="logo-img" />
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/buy" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Buy
          </NavLink>
        </li>
        <li>
          <NavLink to="/rent" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Rent
          </NavLink>
        </li>
        <li>
          <NavLink to="/sell" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Listing
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Sign Out Button */}
      <button className="navbar-btn signout-btn" onClick={handleSignOut}>
        Sign Out
      </button>
    </nav>
  );
};

export default Navbar;
