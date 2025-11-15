import React, { useState } from "react";
import "../Styling/Sell.css";
import logo from "../Images/Logo.png";

const Sell = () => {
  const [listingType, setListingType] = useState("sell"); // 'sell' or 'rent'
  const [uniqueId, setUniqueId] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [price, setPrice] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [owner, setOwner] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Validate Unique ID (4 words, letters & numbers)
    // const regex = /^[A-Za-z0-9]+(?:\s[A-Za-z0-9]+){3}$/;
    // if (!regex.test(uniqueId)) {
    //   alert("Unique ID must be 4 words containing only letters and numbers.");
    //   return;
    // }

    // Prepare data to send
    const formData = new FormData();
    formData.append("uniqueID", uniqueId);
    formData.append("address", propertyName);
    formData.append("price", price);
    formData.append("bedrooms", beds);
    formData.append("bathrooms", baths);
    formData.append("owner", owner);
    formData.append("contact", contact);
    formData.append("email", email);
    formData.append("details", details);
    if (image) {
      formData.append("image", image.name); // store image name/path for now
    }

    // Determine API endpoint
    const endpoint = listingType === "sell" ? "buy" : "rent";

    try {
      const response = await fetch(`http://localhost:5000/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uniqueID: uniqueId,
          address: propertyName,
          price: price,
          bedrooms: beds,
          bathrooms: baths,
          owner,
          contact,
          email,
          details,
          image: image ? `/images/${image.name}` : "", // just the path
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit listing");
      }

      const data = await response.json();
      console.log("Listing saved:", data);
      alert("Property listed successfully!");

      // Clear form
      setListingType("sell");
      setUniqueId("");
      setPropertyName("");
      setPrice("");
      setBeds("");
      setBaths("");
      setOwner("");
      setContact("");
      setEmail("");
      setDetails("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Error saving listing. Please try again.");
    }
  };

  return (
    <div className="sell-container">
      <h1 className="sell-title">List Your Property</h1>
      <p className="sell-subtitle">
        Choose whether you want to sell or rent, then provide the details.
      </p>

      <form className="sell-form" onSubmit={handleSubmit}>
        <div className="form-logo-wrapper">
          <img src={logo} alt="Company Logo" className="form-logo" />
        </div>

        {/* Listing Type */}
        <div className="form-group listing-type">
          <div className="listing-type-options">
            <label>
              <input
                type="radio"
                name="listingType"
                value="sell"
                checked={listingType === "sell"}
                onChange={(e) => setListingType(e.target.value)}
              />{" "}
              Sell
            </label>
            <label>
              <input
                type="radio"
                name="listingType"
                value="rent"
                checked={listingType === "rent"}
                onChange={(e) => setListingType(e.target.value)}
              />{" "}
              Rent
            </label>
          </div>
        </div>

        {/* Unique ID */}
        <div className="form-group">
          <label>Unique ID (4 words, letters & numbers):</label>
          <input
            type="text"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
            placeholder="e.g., AB12 CD34 EF56 GH78"
            required
          />
        </div>

        {/* Other fields */}
        <div className="form-group">
          <label>Property Address:</label>
          <input
            type="text"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            placeholder="Property Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Price / Rent Amount ($):</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price or Rent"
            required
          />
        </div>

        <div className="form-group">
          <label>No of Bedrooms:</label>
          <input
            type="number"
            value={beds}
            onChange={(e) => setBeds(e.target.value)}
            placeholder="Beds"
            required
          />
        </div>

        <div className="form-group">
          <label>No of Bathrooms:</label>
          <input
            type="number"
            value={baths}
            onChange={(e) => setBaths(e.target.value)}
            placeholder="Baths"
            required
          />
        </div>

        <div className="form-group">
          <label>Owner Name:</label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            placeholder="Owner Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Contact No:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Contact Number"
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div className="form-group">
          <label>Images:</label>
          <input
            type="file"
            accept="image/*"
            className="sell-image-input"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="form-group">
          <label>Additional Details:</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Additional Details"
          />
        </div>

        <button type="submit">Submit Listing</button>
      </form>
    </div>
  );
};

export default Sell;
