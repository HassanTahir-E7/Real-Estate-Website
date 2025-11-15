import React, { useState } from 'react';
import '../Styling/Rent.css';
import R1 from '../Images/R1.png';
import R2 from '../Images/R2.png';
import R3 from '../Images/R3.png';
import R4 from '../Images/R4.png';
import R5 from '../Images/R5.png';
import R6 from '../Images/R6.png';

const Rent = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const properties = [
    { img: R1, name: "Cozy Apartment", price: "$1,200/month", beds: 2, baths: 1, owner: "Alice", contact: "123-456-7890", details: "Furnished apartment close to city center." },
    { img: R2, name: "Downtown Loft", price: "$1,800/month", beds: 1, baths: 1, owner: "Bob", contact: "234-567-8901", details: "Modern loft with balcony." },
    { img: R3, name: "Luxury Studio", price: "$2,200/month", beds: 1, baths: 1, owner: "Charlie", contact: "345-678-9012", details: "Spacious studio with amenities." },
    { img: R4, name: "Family Apartment", price: "$2,000/month", beds: 3, baths: 2, owner: "Diana", contact: "456-789-0123", details: "Ideal for families, near schools." },
    { img: R5, name: "Penthouse Suite", price: "$3,500/month", beds: 3, baths: 3, owner: "Ethan", contact: "567-890-1234", details: "Luxury penthouse with rooftop view." },
    { img: R6, name: "Garden Flat", price: "$2,800/month", beds: 2, baths: 2, owner: "Fiona", contact: "678-901-2345", details: "Flat with private garden." },
  ];

  // Filter properties based on search term
  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="rent-container">
      <h1 className="rent-title">Rent a Property</h1>
      <p className="rent-subtitle">Explore comfortable rentals suited for your lifestyle.</p>

      {/* Search Bar */}
      <div className="rent-search">
        <input
          type="text"
          placeholder="Search properties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="rent-grid">
        {filteredProperties.length === 0 ? (
          <p>No properties found.</p>
        ) : (
          filteredProperties.map((property, index) => (
            <div
              key={index}
              className="rent-card"
              onClick={() => setSelectedProperty(property)}
            >
              <img src={property.img} alt={property.name} />
              <h3>{property.name}</h3>
              <p>{property.price} • {property.beds} Beds • {property.baths} Bath{property.baths > 1 ? 's' : ''}</p>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedProperty && (
        <div className="property-modal-overlay" onClick={() => setSelectedProperty(null)}>
          <div className="property-modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProperty.name}</h2>
            <img src={selectedProperty.img} alt={selectedProperty.name} />
            <p><strong>Price:</strong> {selectedProperty.price}</p>
            <p><strong>Beds:</strong> {selectedProperty.beds} | <strong>Baths:</strong> {selectedProperty.baths}</p>
            <p><strong>Owner:</strong> {selectedProperty.owner}</p>
            <p><strong>Contact:</strong> {selectedProperty.contact}</p>
            <p><strong>Details:</strong> {selectedProperty.details}</p>
            <button className="close-modal-btn" onClick={() => setSelectedProperty(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rent;
