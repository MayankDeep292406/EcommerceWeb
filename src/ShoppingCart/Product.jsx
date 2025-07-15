// src/ShoppingCart/Products.jsx
import React, { useState } from "react";
import Products from "../api/Products";

const Products = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Cart:", [...cart, product]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">Brand: {item.brand}</p>
              <p className="text-green-700 font-medium">₹{item.price}</p>
              <p
                className={`text-sm ${
                  item.inStock ? "text-green-600" : "text-red-500"
                }`}
              >
                {item.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
            <button
              onClick={() => handleAddToCart(item)}
              disabled={!item.inStock}
              className={`mt-4 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 ${
                item.inStock
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {item.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
