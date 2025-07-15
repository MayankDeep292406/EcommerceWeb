// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import TopProducts from "src/Component/LandingPage/TopProducts.jsx";
import products from "../api/Products.js";

function Home () {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 drop-shadow">
            Welcome to <span className="text-teal-600">ShopNow</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            Discover premium products at unbeatable prices. Shop now and experience the smartest way to shop online!
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/products">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-lg transition transform hover:scale-105 focus:outline-none">
                ShoppingCart
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg text-lg transition transform hover:scale-105 focus:outline-none">
                Login / Register
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Image with Blur */}
        <div className="relative w-full max-w-md mt-10">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center blur-sm rounded-xl"
            style={{
              backgroundImage: `url('https://m.media-amazon.com/images/I/71jvQv+QPyL.jpg')`,
              zIndex: 0,
            }}
          ></div>

          {/* Foreground Content */}
          <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-sm space-y-4">
            <img
              src="https://m.media-amazon.com/images/I/71jvQv+QPyL.jpg"
              alt="Shopping Bag"
              className="w-full rounded"
            />
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              "ShopNow" content in the context of online shopping refers to interactive elements within digital content that allow 
                  users to purchase products or services directly from that content, rather than being redirected to a separate website.
              Essentially, it's a way to make it easier for customers to buy things they see online without extra steps.
            </p>
          </div>
        </div>
      </div>

      {/* Top Products Section */}
      <div className="px-6 py-10">
        <TopProducts products={products} />
      </div>
    </div>
  );
};

export default Home;
