import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/Home.css";

// Placeholder image
const placeholderImg =
  "https://via.placeholder.com/400x250?text=Property+Image";

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("buy");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [allLocations, setAllLocations] = useState([]);

  // Featured listings (still using placeholder images)
  const listings = [
    {
      id: 1,
      type: "buy",
      title: "Luxury Villa",
      price: 950000,
      beds: 4,
      baths: 3,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      type: "rent",
      title: "Modern Apartment",
      price: 1500,
      beds: 2,
      baths: 1,
      img: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      type: "buy",
      title: "Family Home",
      price: 450000,
      beds: 3,
      baths: 2,
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      type: "rent",
      title: "Studio Flat",
      price: 900,
      beds: 1,
      baths: 1,
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Fetch locations dynamically from database
  useEffect(() => {
    // Example: replace with your actual API
    fetch(`/api/locations?type=${activeTab}`)
      .then((res) => res.json())
      .then((data) => setAllLocations(data))
      .catch((err) => console.error("Error fetching locations:", err));
  }, [activeTab]);

  // Input change handler with dynamic filtering
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length > 0) {
      const filtered = allLocations.filter((loc) =>
        loc.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations([]);
    }
  };

  // Handle selection and redirect
  const handleSelectLocation = (loc) => {
    setSearchQuery(loc.name || loc);
    setFilteredLocations([]);
    navigate(`/${activeTab}?city=${encodeURIComponent(loc.name || loc)}`);
  };

  // Handle service card click
  const handleServiceClick = (type) => {
    navigate(`/${type}`);
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            Find Your Perfect <span className="highlight-text">Space</span>.
          </h1>
          <p className="hero-subtitle">
            The simplest way to buy, sell, or rent your next home.
          </p>

          {/* SEARCH BOX */}
          <div className="search-widget-card">
            <div className="tab-switcher">
              {["buy", "rent", "sell"].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="search-input-group" style={{ position: "relative" }}>
              <input
                type="text"
                placeholder={
                  activeTab === "buy"
                    ? "Search homes to buy..."
                    : activeTab === "rent"
                    ? "Search rental properties..."
                    : "Enter your home address..."
                }
                value={searchQuery}
                onChange={handleInputChange}
                className="main-search-input"
              />

              <button
                className={`search-btn ${
                  activeTab === "sell" ? "secondary-btn" : ""
                }`}
                onClick={() => handleSelectLocation({ name: searchQuery })}
              >
                {activeTab === "sell" ? "Get Appraisal" : "Search"}
              </button>

              {/* Autocomplete Dropdown */}
              {filteredLocations.length > 0 && (
                <ul className="autocomplete-dropdown">
                  {filteredLocations.map((loc, index) => (
                    <li
                      key={index}
                      className="autocomplete-item"
                      onClick={() => handleSelectLocation(loc)}
                    >
                      {loc.name || loc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED LISTINGS */}
      <section className="highlights-section">
        <h2 className="section-heading">Featured Listings</h2>
        <p className="section-subtext">Top properties picked just for you.</p>

        <div className="scroll-container">
          {listings.map((item) => (
            <div key={item.id} className="featured-card">
              <img src={item.img} alt={item.title} className="featured-img" />
              <div className="featured-info">
                <h3>{item.title}</h3>
                <p className="price">
                  {item.type === "buy"
                    ? "$" + item.price.toLocaleString()
                    : "$" + item.price + "/mo"}
                </p>
                <p className="details">
                  {item.beds} Beds • {item.baths} Baths
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <h2 className="section-heading">Our Services</h2>
        <p className="section-subtext">Everything you need in one place.</p>

        <div className="services-grid">
          <div
            className="service-card"
            onClick={() => handleServiceClick("buy")}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-house fa-3x service-icon"></i>
            <h3>Buy a Home</h3>
            <p>Find properties matched to your lifestyle.</p>
          </div>

          <div
            className="service-card"
            onClick={() => handleServiceClick("rent")}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-key fa-3x service-icon"></i>
            <h3>Rent a Home</h3>
            <p>Discover verified rental listings easily.</p>
          </div>

          <div
            className="service-card"
            onClick={() => handleServiceClick("sell")}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-coins fa-3x service-icon"></i>
            <h3>Sell Your Property</h3>
            <p>Get free appraisals & reach real buyers.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
