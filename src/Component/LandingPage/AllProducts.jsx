// src/pages/AllProducts.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Star,
  ArrowLeft,
  Search,
  SlidersHorizontal,
  Eye,
} from "lucide-react";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // ===== FETCH PRODUCTS =====
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/products"
        );

        if (!res.ok)
          throw new Error("Failed to fetch products");

        const data = await res.json();

        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    const storedLikes =
      JSON.parse(localStorage.getItem("likedProducts")) || [];

    setLikedProducts(storedLikes);
  }, []);

  // ===== LIKE =====
  const toggleLike = (id) => {
    const updatedLikes = likedProducts.includes(id)
      ? likedProducts.filter((pid) => pid !== id)
      : [...likedProducts, id];

    setLikedProducts(updatedLikes);

    localStorage.setItem(
      "likedProducts",
      JSON.stringify(updatedLikes)
    );
  };

  // ===== DISCOUNT =====
  const getDiscountPercent = (original, discounted) => {
    if (!discounted || discounted >= original) return null;

    return Math.round(
      ((original - discounted) / original) * 100
    );
  };

  // ===== FILTER =====
  const filteredProducts = products.filter((product) =>
    product.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  // ===== LOADING =====
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-lg font-semibold text-gray-700">
            Loading Products...
          </p>
        </div>
      </div>
    );
  }

  // ===== ERROR =====
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-600">
            ⚠️ Error
          </h2>

          <p className="text-gray-600 mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200">
      {/* ===== HEADER ===== */}
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-700 hover:text-black transition"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:block font-medium">
              Back
            </span>
          </button>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-black text-gray-800">
            All Products
          </h1>

          {/* Count */}
          <div className="hidden md:block text-sm text-gray-500">
            {filteredProducts.length} Products
          </div>
        </div>
      </div>

      {/* ===== SEARCH BAR ===== */}
      <div className="max-w-7xl mx-auto px-5 mt-8">
        <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">
          <div className="flex items-center flex-1 bg-gray-100 rounded-xl px-4 py-3">
            <Search size={20} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none w-full ml-3"
            />
          </div>

          <button className="bg-black text-white p-3 rounded-xl hover:scale-105 transition">
            <SlidersHorizontal size={20} />
          </button>
        </div>
      </div>

      {/* ===== PRODUCTS ===== */}
      <div className="max-w-7xl mx-auto px-5 py-10">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-700">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try searching for another product
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              const discount = getDiscountPercent(
                product.price,
                product.discountPrice
              );

              const isLiked = likedProducts.includes(
                product._id
              );

              return (
                <div
                  key={product._id}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* ===== IMAGE ===== */}
                  <div className="relative overflow-hidden bg-gray-100">
                    {/* Discount */}
                    {discount && (
                      <span className="absolute top-4 left-4 z-20 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {discount}% OFF
                      </span>
                    )}

                    {/* Like */}
                    <button
                      onClick={() =>
                        toggleLike(product._id)
                      }
                      className={`absolute top-4 right-4 z-20 p-2 rounded-full backdrop-blur-lg transition shadow-lg ${
                        isLiked
                          ? "bg-red-500 text-white"
                          : "bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white"
                      }`}
                    >
                      <Heart
                        size={18}
                        fill={isLiked ? "white" : "none"}
                      />
                    </button>

                    {/* Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                      <button className="bg-white p-3 rounded-full hover:scale-110 transition">
                        <Eye size={20} />
                      </button>

                      <button className="bg-black text-white p-3 rounded-full hover:scale-110 transition">
                        <ShoppingCart size={20} />
                      </button>
                    </div>
                  </div>

                  {/* ===== CONTENT ===== */}
                  <div className="p-5">
                    {/* Brand */}
                    <p className="uppercase text-xs tracking-widest text-gray-400 mb-1">
                      {product.brand || "Premium"}
                    </p>

                    {/* Name */}
                    <h2 className="text-xl font-bold text-gray-800 truncate">
                      {product.name}
                    </h2>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-2">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <Star
                        size={16}
                        className="text-gray-300"
                      />

                      <span className="text-sm text-gray-500 ml-2">
                        4.0
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                      {product.description ||
                        "No description available"}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-3 mt-5">
                      <span className="text-2xl font-black text-black">
                        ₹
                        {product.discountPrice ??
                          product.price}
                      </span>

                      {product.discountPrice && (
                        <span className="text-gray-400 line-through">
                          ₹{product.price}
                        </span>
                      )}
                    </div>

                    {/* Stock */}
                    <div className="mt-3">
                      <span
                        className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          product.inStock
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.inStock
                          ? "In Stock"
                          : "Out of Stock"}
                      </span>
                    </div>

                    {/* Add To Cart */}
                    <button
                      disabled={!product.inStock}
                      className="mt-6 w-full bg-black text-white py-3 rounded-2xl font-semibold hover:bg-gray-900 transition disabled:bg-gray-400"
                    >
                      {product.inStock
                        ? "Add To Cart"
                        : "Unavailable"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default AllProducts;