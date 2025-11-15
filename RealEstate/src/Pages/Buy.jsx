import React from 'react';
import '../Styling/Buy.css';
import S1 from '../Images/S1.png';
import S2 from '../Images/S2.png';
import S3 from '../Images/S3.png';
import S4 from '../Images/S4.png';
import S5 from '../Images/S5.png';
import S6 from '../Images/S6.png';

const Buy = () => {
  return (
    <div className="buy-container">
      <h1 className="buy-title">Buy Properties</h1>
      <p className="buy-subtitle">Find your dream home from our premium listings.</p>

      <div className="buy-grid">
        <div className="buy-card">
          <img src={S1} alt="Elegant Villa" />
          <h3>Elegant Villa</h3>
          <p>$850,000 • 4 Beds • 3 Baths</p>
        </div>
        <div className="buy-card">
          <img src={S2} alt="Modern Apartment" />
          <h3>Modern Apartment</h3>
          <p>$420,000 • 2 Beds • 2 Baths</p>
        </div>
        <div className="buy-card">
          <img src={S3} alt="Luxury Flat" />
          <h3>Luxury Flat</h3>
          <p>$650,000 • 3 Beds • 2 Baths</p>
        </div>
        <div className="buy-card">
          <img src={S4} alt="Family Home" />
          <h3>Family Home</h3>
          <p>$480,000 • 3 Beds • 2 Baths</p>
        </div>
        <div className="buy-card">
          <img src={S5} alt="Penthouse Suite" />
          <h3>Penthouse Suite</h3>
          <p>$1,200,000 • 5 Beds • 4 Baths</p>
        </div>
        <div className="buy-card">
          <img src={S6} alt="Countryside Villa" />
          <h3>Countryside Villa</h3>
          <p>$720,000 • 4 Beds • 3 Baths</p>
        </div>
      </div>
    </div>
  );
};

export default Buy;
