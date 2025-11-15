import React from 'react';
import '../Styling/Rent.css';
import R1 from '../Images/R1.png';
import R2 from '../Images/R2.png';
import R3 from '../Images/R3.png';
import R4 from '../Images/R4.png';
import R5 from '../Images/R5.png';
import R6 from '../Images/R6.png';

const Rent = () => {
  return (
    <div className="rent-container">
      <h1 className="rent-title">Rent a Property</h1>
      <p className="rent-subtitle">Explore comfortable rentals suited for your lifestyle.</p>

      <div className="rent-grid">
        <div className="rent-card">
          <img src={R1} alt="Cozy Apartment" />
          <h3>Cozy Apartment</h3>
          <p>$1,200/month • 2 Beds • 1 Bath</p>
        </div>
        <div className="rent-card">
          <img src={R2} alt="Downtown Loft" />
          <h3>Downtown Loft</h3>
          <p>$1,800/month • 1 Bed • 1 Bath</p>
        </div>
        <div className="rent-card">
          <img src={R3} alt="Luxury Studio" />
          <h3>Luxury Studio</h3>
          <p>$2,200/month • 1 Bed • 1 Bath</p>
        </div>
        <div className="rent-card">
          <img src={R4} alt="Family Apartment" />
          <h3>Family Apartment</h3>
          <p>$2,000/month • 3 Beds • 2 Baths</p>
        </div>
        <div className="rent-card">
          <img src={R5} alt="Penthouse Suite" />
          <h3>Penthouse Suite</h3>
          <p>$3,500/month • 3 Beds • 3 Baths</p>
        </div>
        <div className="rent-card">
          <img src={R6} alt="Garden Flat" />
          <h3>Garden Flat</h3>
          <p>$2,800/month • 2 Beds • 2 Baths</p>
        </div>
      </div>
    </div>
  );
};

export default Rent;
