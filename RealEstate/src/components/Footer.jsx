import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer-top">
        <h2>Find Your Dream Home</h2>
        <p>Browse thousands of listings, all in one place.</p>
        <button className="footer-cta-btn">Get Started</button>
      </div> */}

      <div className="footer-links">
        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><i className="fab fa-facebook"></i></li>
            <li><i className="fab fa-twitter"></i></li>
            <li><i className="fab fa-instagram"></i></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 RealEstate. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
