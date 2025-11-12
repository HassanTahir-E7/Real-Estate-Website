import React from 'react';
import '../Styling/Buy.css';

const Buy = () => {
  return (
    <div className="buy-container">
      <h1 className="buy-title">Buy Properties</h1>
      <p className="buy-subtitle">Find your dream home from our premium listings.</p>

      <div className="buy-grid">
        <div className="buy-card">
          <img src="https://source.unsplash.com/400x250/?house,luxury" alt="Luxury Home" />
          <h3>Elegant Villa</h3>
          <p>$850,000 • 4 Beds • 3 Baths</p>
        </div>
        <div className="buy-card">
          <img src="https://source.unsplash.com/400x250/?apartment" alt="Apartment" />
          <h3>Modern Apartment</h3>
          <p>$420,000 • 2 Beds • 2 Baths</p>
        </div>
      </div>
    </div>
  );
};

export default Buy;
