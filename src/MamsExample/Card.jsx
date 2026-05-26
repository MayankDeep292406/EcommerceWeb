import React, { useState } from "react";

function Card({ name, price, inStock, brand,description, onAddToCart }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={`border rounded-lg p-4 m-2 shadow-md transition duration-300 cursor-pointer ${
          inStock ? "bg-green-50" : "bg-red-50"
        }`}
        onClick={() => setShowModal(true)}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-1">Brand: {brand}</p>
        <p className="text-sm text-gray-700 mb-1">Price: ₹{price}</p>
        <p className="text-sm text-gray-700 mb-1">Description: {description}</p>
        <p className={`text-sm font-semibold ${inStock ? "text-green-700" : "text-red-600"}`}>
          {inStock ? "✅ In Stock" : "❌ Out of Stock"}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent modal from opening
            onAddToCart && onAddToCart({ name, price, inStock, brand, description});
          }}
          disabled={!inStock}
          className={`mt-4 w-full py-2 rounded-lg text-white font-semibold transition-all duration-300 ${
            inStock
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>

      {/* Modal for product details */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className="text-gray-600 mb-1">Brand: {brand}</p>
            <p className="text-gray-700 mb-1">Price: ₹{price}</p>
            <p className="text-gray-700 mb-4">Description: {description}</p>
            <p className={`mb-4 ${inStock ? "text-green-600" : "text-red-600"}`}>
              {inStock ? "✅ In Stock" : "❌ Out of Stock"}
            </p>

            <button
              onClick={() => {
                onAddToCart && onAddToCart({ name, price, inStock, brand , description });
                setShowModal(false);
              }}
              disabled={!inStock}
              className={`w-full py-2 rounded-lg text-white font-semibold transition ${
                inStock
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
