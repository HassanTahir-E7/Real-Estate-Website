import React from 'react';
import '../Styling/Rent.css';

const Rent = () => {
  return (
    <div className="rent-container">
      <h1 className="rent-title">Rent a Property</h1>
      <p className="rent-subtitle">Explore comfortable rentals suited for your lifestyle.</p>

      <div className="rent-grid">
        <div className="rent-card">
          <img src="https://source.unsplash.com/400x250/?apartment,interior" alt="Rental" />
          <h3>Cozy Apartment</h3>
          <p>$1,200/month • 2 Beds • 1 Bath</p>
        </div>
        <div className="rent-card">
          <img src="https://source.unsplash.com/400x250/?loft" alt="Loft" />
          <h3>Downtown Loft</h3>
          <p>$1,800/month • 1 Bed • 1 Bath</p>
        </div>
      </div>
    </div>
  );
};

export default Rent;
