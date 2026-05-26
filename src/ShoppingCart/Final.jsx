// src/pages/Final.jsx

import React from "react";

function Final() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-black text-white">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-black">
          Luxury Furniture Store
        </h1>

        <p className="text-gray-300 mt-3 text-lg">
          Modern & Premium Furniture Collection
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* CARD */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500">
            
            <img
              src="https://angiehomes.co/cdn/shop/products/AVA-CHAIR-ANGIE-HOMES-1618911183.jpg?v=1618911185&width=1090"
              alt="Chair"
              className="w-full h-72 object-cover"
            />

            <div className="p-5">
              <p className="text-orange-400 text-sm uppercase">
                Chair
              </p>

              <h2 className="text-2xl font-bold mt-2">
                Wooden Chair
              </h2>

              <p className="text-gray-300 mt-3 text-sm">
                Premium wooden chair with modern luxury design.
              </p>

              <div className="flex items-center gap-3 mt-5">
                <span className="text-3xl font-black">
                  ₹1999
                </span>

                <span className="text-gray-400 line-through">
                  ₹2499
                </span>
              </div>

              <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-bold transition">
                View Product
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Final;