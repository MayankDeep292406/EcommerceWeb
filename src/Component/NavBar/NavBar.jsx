// Nav.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://s.tmimgcdn.com/scr/1200x750/183700/modern-shopping-business-logo-template_183766-original.jpg"
            alt="logo"
            className="h-8 w-8"
          />
          <span className="text-2xl font-semibold">ShopNow</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/products" className="hover:text-yellow-400 transition">Products</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm">
            Top Products
          </button>
          <button className="bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded text-sm">
            Liked Products ❤️
          </button>
        </div>

        <Link to="/login">
          <button className="bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded text-sm ml-6">
            Login/Register
          </button>
        </Link>
      </div>
    </nav>
  );
}
