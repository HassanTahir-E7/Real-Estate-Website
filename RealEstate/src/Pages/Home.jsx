import React, { useState } from 'react';
import '../Styling/Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('buy');

  return (
    <>

      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">
              Find Your Perfect <span className="highlight-text">Space</span>.
            </h1>
            <p className="hero-subtitle">The simplest way to buy, sell, or rent your next home.</p>

            <div className="search-widget-card">
              <div className="tab-switcher">
                {['buy', 'rent', 'sell'].map((tab) => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="search-form-area">
                {activeTab === 'buy' && (
                  <div className="search-input-group">
                    <input type="text" placeholder="Enter City, Neighborhood, or Zip Code" className="main-search-input" />
                    <button className="search-btn">Search Properties</button>
                  </div>
                )}
                {activeTab === 'rent' && (
                  <div className="search-input-group">
                    <input type="text" placeholder="Search Rentals (e.g., Apartments, Houses)" className="main-search-input" />
                    <button className="search-btn">Find Rentals</button>
                  </div>
                )}
                {activeTab === 'sell' && (
                  <div className="search-input-group">
                    <input type="text" placeholder="What is your property address?" className="main-search-input" />
                    <button className="search-btn secondary-btn">Get Free Appraisal</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="highlights-section">
          <h2 className="section-heading">Featured Listings</h2>
          <p className="section-subtext">Hand-picked homes just for you.</p>

          <div className="property-grid">
            <div className="property-card">
              <div className="card-image-placeholder"></div>
              <div className="card-info">
                <h3>Modern Loft Apartment</h3>
                <p className="price">$650,000</p>
                <p className="details">3 Beds | 2 Baths | 1,200 sqft</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to make a move?</h2>
          <button className="cta-btn">Contact an Agent Today</button>
        </section>
      </div>

    </>
  );
};

export default Home;
