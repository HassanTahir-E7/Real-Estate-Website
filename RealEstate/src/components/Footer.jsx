import React from 'react';
import X from '../Images/X.jpg';
import FB from '../Images/FB.webp';
import INSTA from '../Images/Insta.webp';
import GM from '../Images/Gmail.webp';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

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
       <div>
 <div>
  <h4>Follow Us</h4>
  <ul className="social-icons">
    <li><img src={FB} alt="Facebook" /></li>
    <li><img src={X} alt="X / Twitter" /></li>
    <li><img src={INSTA} alt="Instagram" /></li>
    <li><img src={GM} alt="Gmail" /></li>
  </ul>
</div>

</div>

        </div>
      </div>

      <div className="footer-bottom" style={{textAlign:'center'}}>
        <p>© 2025 Prime Estate. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
