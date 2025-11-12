import React from 'react';
import '../Styling/Sell.css';

const Sell = () => {
  return (
    <div className="sell-container">
      <h1 className="sell-title">Sell Your Property</h1>
      <p className="sell-subtitle">List your home and connect with potential buyers instantly.</p>

      <form className="sell-form">
        <input type="text" placeholder="Property Address" required />
        <input type="number" placeholder="Estimated Price ($)" required />
        <input type="text" placeholder="Contact Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Additional Details"></textarea>
        <button type="submit">Submit Listing</button>
      </form>
    </div>
  );
};

export default Sell;
