// Card.jsx
import React from "react";

function Card({ name, price, inStock, brand }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      margin: "10px",
      borderRadius: "8px",
      backgroundColor: inStock ? "#e8ffe8" : "#ffe8e8"
    }}>
      <h2>{name}</h2>
      <p>Brand: {brand}</p>
      <p>Price: ₹{price}</p>
      <p>Status: {inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
    </div>
  );
}

export default Card;
