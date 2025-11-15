import React from "react";
import "../Styling/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Page Title */}
      <h1 className="about-title">About Prime Estate</h1>
      <p className="about-subtitle">
        We are committed to helping you find your dream property with ease and confidence.
      </p>

      {/* About Section / Cards */}
      <div className="about-section">
        <div className="about-card">
          <h3>Our Team</h3>
          <p>
            A passionate team of real estate experts dedicated to providing
            personalized guidance to every client.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To simplify the property buying, selling, and renting experience
            with transparency and efficiency.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Values</h3>
          <p>
            Integrity, customer satisfaction, and innovation are at the core of
            everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
