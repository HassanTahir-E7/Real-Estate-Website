import React, { useEffect, useState } from "react";
import "../Styling/Buy.css";

const Buy = () => {
  const [buyListings, setBuyListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from backend
  useEffect(() => {
    const fetchBuyListings = async () => {
      try {
        const response = await fetch("http://localhost:5000/buy");
        if (!response.ok) throw new Error("Failed to fetch buy listings");
        const data = await response.json();
        setBuyListings(data);
        setFilteredListings(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBuyListings();
  }, []);

  // Filter listings based on search term
  useEffect(() => {
    const filtered = buyListings.filter((listing) =>
      listing.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredListings(filtered);
  }, [searchTerm, buyListings]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div className="buy-container">
      <h1 className="buy-title">Buy Properties</h1>
      <p className="buy-subtitle">Find your dream home from our premium listings.</p>

      {/* Search Bar */}
      <div className="buy-search">
        <input
          type="text"
          placeholder="Search by address..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="buy-grid">
        {filteredListings.length === 0 ? (
          <p>No buy listings available.</p>
        ) : (
          filteredListings.map((listing) => (
            <div
              key={listing.uniqueID}
              className="buy-card"
              onClick={() => setSelectedProperty(listing)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`http://localhost:5000/images${listing.image}`}
                alt={listing.address}
              />
              <h3>{listing.address}</h3>
              <p>
                ${listing.price} • {listing.bedrooms} Beds • {listing.bathrooms} Baths
              </p>
            </div>
          ))
        )}
      </div>

      {/* Modal for property details */}
      {selectedProperty && (
        <div
          className="property-modal-overlay"
          onClick={() => setSelectedProperty(null)}
        >
          <div className="property-modal" onClick={(e) => e.stopPropagation()}>
            <img
              src={`http://localhost:5000/images${selectedProperty.image}`}
              alt={selectedProperty.address}
              className="modal-img"
            />
            <h2>{selectedProperty.address}</h2>
            <p><strong>Price:</strong> ${selectedProperty.price}</p>
            <p>
              <strong>Beds:</strong> {selectedProperty.bedrooms} •{" "}
              <strong>Baths:</strong> {selectedProperty.bathrooms}
            </p>
            <p><strong>Owner:</strong> {selectedProperty.owner}</p>
            <p><strong>Contact:</strong> {selectedProperty.contact}</p>
            <p>{selectedProperty.details}</p>
            <button
              className="close-btn"
              onClick={() => setSelectedProperty(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buy;
