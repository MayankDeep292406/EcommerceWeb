// src/components/SellerLoader.jsx

import React from "react";

export default function SellerLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Loader Container */}
      <div className="flex flex-col items-center">
        
        {/* Animated Furniture Box */}
        <div className="relative w-28 h-28">
          
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-indigo-200"></div>

          {/* Spinning Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-600 animate-spin"></div>

          {/* Furniture Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
              
              {/* Sofa Shape */}
              <div className="relative">
                <div className="w-8 h-4 bg-white rounded-md"></div>

                <div className="absolute -top-2 left-0 w-3 h-3 bg-white rounded-sm"></div>

                <div className="absolute -top-2 right-0 w-3 h-3 bg-white rounded-sm"></div>

                <div className="absolute bottom-[-4px] left-1 w-1 h-2 bg-white rounded-full"></div>

                <div className="absolute bottom-[-4px] right-1 w-1 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="mt-8 text-2xl font-bold text-gray-800 tracking-wide">
          Seller Dashboard
        </h2>

        <p className="text-gray-500 mt-2 text-sm animate-pulse">
          Loading furniture shop data...
        </p>

        {/* Animated Dots */}
        <div className="flex items-center gap-2 mt-5">
          <span className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"></span>

          <span
            className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>

          <span
            className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>
      </div>
    </div>
  );
}