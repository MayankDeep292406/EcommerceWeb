// src/components/TopProduct.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Heart,
  ShoppingCart,
  Star,
  Eye,
  ArrowLeft,
  Flame,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

import productData from "../API/Products";
import Footer from "../Footer/Footer";

function TopProduct() {
  const [likedProducts, setLikedProducts] = useState([]);

  const navigate = useNavigate();

  // =========================
  // LOAD LIKED PRODUCTS
  // =========================
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("likedProducts")) || [];

    setLikedProducts(stored);
  }, []);

  // =========================
  // CHECK LIKED
  // =========================
  const isLiked = (productId) =>
    likedProducts.some((item) => item.id === productId);

  // =========================
  // TOGGLE LIKE
  // =========================
  const toggleLike = (product) => {
    const updated = isLiked(product.id)
      ? likedProducts.filter((item) => item.id !== product.id)
      : [...likedProducts, product];

    setLikedProducts(updated);

    localStorage.setItem(
      "likedProducts",
      JSON.stringify(updated)
    );
  };

  // =========================
  // FILTER TOP PRODUCTS
  // =========================
  const topProducts = productData.filter(
    (product) => product.topProduct
  );

  // =========================
  // DISCOUNT %
  // =========================
  const getDiscountPercent = (original, discount) => {
    if (!original || !discount || discount >= original)
      return null;

    return Math.round(
      ((original - discount) / original) * 100
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-gray-200 flex flex-col overflow-hidden">
      
      {/* ================= HEADER ================= */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          
          {/* BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={20} />

            <span className="hidden sm:block font-semibold">
              Back
            </span>
          </button>

          {/* TITLE */}
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <Flame className="text-orange-500" />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-800">
                Trending Products
              </h1>

              <p className="text-sm text-gray-500 hidden sm:block">
                Best Selling Collection
              </p>
            </div>
          </div>

          {/* PRODUCT COUNT */}
          <div className="hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full">
            <Sparkles size={16} />
            <span className="text-sm font-medium">
              {topProducts.length} Products
            </span>
          </div>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <div className="relative max-w-7xl mx-auto w-full px-5 pt-10">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-black via-gray-900 to-gray-800 p-10 md:p-14 shadow-2xl">
          
          {/* Glow Effects */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full backdrop-blur-lg mb-5">
              <Sparkles size={18} />
              <span className="text-sm font-medium">
                Premium Collection 2026
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-3xl">
              Upgrade Your Lifestyle With
              <span className="text-orange-400">
                {" "}Modern Products
              </span>
            </h1>

            <p className="text-gray-300 mt-5 max-w-2xl text-lg leading-relaxed">
              Discover premium quality trending products with
              modern design, unbeatable price, and fast delivery.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-2xl text-white font-bold shadow-lg">
                Shop Now
              </button>

              <button className="bg-white/10 hover:bg-white/20 border border-white/20 transition px-6 py-3 rounded-2xl text-white font-semibold backdrop-blur-lg">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PRODUCTS ================= */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-5 py-14">
        
        {/* SECTION TITLE */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black text-gray-800">
              Top Trending Items
            </h2>

            <p className="text-gray-500 mt-1">
              Most popular products this week
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
            <BadgeCheck className="text-green-500" size={18} />
            Verified Premium Products
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {topProducts.map((product) => {
            const discountPercent = getDiscountPercent(
              product.price,
              product.discountPrice
            );

            return (
              <div
                key={product.id}
                onClick={() =>
                  navigate(`/ViewProduct/${product.id}`)
                }
                className="group relative bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
              >
                
                {/* TOP BADGE */}
                <div className="absolute top-4 left-4 z-20">
                  {discountPercent ? (
                    <div className="bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      {discountPercent}% OFF
                    </div>
                  ) : (
                    <div className="bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      NEW
                    </div>
                  )}
                </div>

                {/* LIKE BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(product);
                  }}
                  className={`absolute top-4 right-4 z-20 p-3 rounded-full shadow-lg transition-all duration-300 ${
                    isLiked(product.id)
                      ? "bg-red-500 text-white scale-110"
                      : "bg-white text-gray-700 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  <Heart
                    size={18}
                    fill={
                      isLiked(product.id)
                        ? "white"
                        : "none"
                    }
                  />
                </button>

                {/* IMAGE SECTION */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  
                  {/* IMAGE */}
                  <img
                    src={
                      product.image ||
                      "https://via.placeholder.com/300"
                    }
                    alt={product.name}
                    className="w-full h-72 object-contain p-6 group-hover:scale-110 transition duration-700"
                  />

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">
                    
                    {/* VIEW */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(
                          `/ViewProduct/${product.id}`
                        );
                      }}
                      className="bg-white p-4 rounded-full hover:scale-110 transition"
                    >
                      <Eye size={22} />
                    </button>

                    {/* CART */}
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="bg-orange-500 text-white p-4 rounded-full hover:scale-110 transition"
                    >
                      <ShoppingCart size={22} />
                    </button>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  
                  {/* BRAND */}
                  <div className="flex items-center justify-between">
                    <p className="uppercase text-xs tracking-[4px] text-orange-500 font-bold">
                      {product.brand || "Premium"}
                    </p>

                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star
                        size={15}
                        className="fill-yellow-400"
                      />
                      <span className="text-sm font-semibold text-gray-700">
                        4.8
                      </span>
                    </div>
                  </div>

                  {/* PRODUCT NAME */}
                  <h2 className="text-xl font-black text-gray-800 mt-3 line-clamp-1">
                    {product.name}
                  </h2>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-500 mt-3 line-clamp-2 leading-relaxed">
                    {product.description ||
                      "Premium quality trending product with modern style and high durability."}
                  </p>

                  {/* PRICE */}
                  <div className="flex items-end gap-3 mt-6">
                    <span className="text-3xl font-black text-black">
                      ₹
                      {product.discountPrice ??
                        product.price}
                    </span>

                    {product.discountPrice && (
                      <span className="text-gray-400 line-through text-lg mb-1">
                        ₹{product.price}
                      </span>
                    )}
                  </div>

                  {/* STOCK */}
                  <div className="mt-4">
                    <span
                      className={`text-xs font-bold px-4 py-2 rounded-full ${
                        product.inStock
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.inStock
                        ? "● In Stock"
                        : "● Out of Stock"}
                    </span>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-3 mt-6">

                    {/* CART */}
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-2xl transition-all duration-300 hover:scale-105"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>

                {/* BOTTOM GLOW */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}

export default TopProduct;