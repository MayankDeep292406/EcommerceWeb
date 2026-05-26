// src/pages/LikedPage.jsx

import React, { useEffect, useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  Heart,
  ArrowLeft,
  ShoppingCart,
  Trash2,
  Eye,
  Star,
} from "lucide-react";

function LikedPage() {
  const [likedProducts, setLikedProducts] =
    useState([]);

  const navigate = useNavigate();

  // ================= LOAD PRODUCTS =================
  useEffect(() => {
    const stored =
      JSON.parse(
        localStorage.getItem("likedProducts")
      ) || [];

    setLikedProducts(stored);
  }, []);

  // ================= REMOVE PRODUCT =================
  const handleRemove = (id) => {
    const updated = likedProducts.filter(
      (item) => item.id !== id
    );

    setLikedProducts(updated);

    localStorage.setItem(
      "likedProducts",
      JSON.stringify(updated)
    );
  };

  // ================= ADD TO CART =================
  const addToCart = (product) => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = existingCart.find(
      (item) =>
        item.product?._id === product.id
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.product?._id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          product: {
            _id: product.id,
            title: product.name,
            image: product.image,
            price: product.price,
          },
          quantity: 1,
        },
      ];
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50">
      {/* ================= HEADER ================= */}
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <ArrowLeft size={20} />
            </button>

            <h1 className="text-2xl sm:text-3xl font-black text-gray-800 flex items-center gap-2">
              <Heart className="text-red-500 fill-red-500" />
              Wishlist
            </h1>
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
            ❤️ {likedProducts.length} Items
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-5 py-10">
        {likedProducts.length === 0 ? (
          // ================= EMPTY =================
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-pink-100 flex items-center justify-center">
              <Heart
                size={55}
                className="text-red-500"
              />
            </div>

            <h2 className="text-4xl font-black text-gray-800 mt-8">
              No Liked Products Yet
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Save your favorite products and
              they will appear here.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center gap-3 mt-8 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Explore Products →
            </Link>
          </div>
        ) : (
          <>
            {/* ================= TITLE ================= */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
              <div>
                <h2 className="text-4xl font-black text-gray-800">
                  Your Favorite Products
                </h2>

                <p className="text-gray-500 mt-2">
                  Easily manage and shop your
                  wishlist products.
                </p>
              </div>

              {/* Cart Button */}
              <Link
                to="/cart"
                className="flex items-center justify-center gap-2 bg-black text-white px-6 py-4 rounded-2xl font-bold hover:scale-105 transition"
              >
                <ShoppingCart size={20} />
                Go To Cart
              </Link>
            </div>

            {/* ================= GRID ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {likedProducts.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* ================= IMAGE ================= */}
                  <div className="relative overflow-hidden bg-gray-100">
                    <img
                      src={
                        item.image ||
                        "https://via.placeholder.com/300"
                      }
                      alt={
                        item.name ||
                        "Product Image"
                      }
                      className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                    />

                    {/* Remove */}
                    <button
                      onClick={() =>
                        handleRemove(item.id)
                      }
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full shadow hover:bg-red-500 hover:text-white transition"
                    >
                      <Trash2 size={18} />
                    </button>

                    {/* Rating */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold shadow">
                      <Star
                        size={14}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      4.9
                    </div>
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="p-5">
                    <h2 className="text-2xl font-bold text-gray-800 line-clamp-1">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 mt-2 line-clamp-2">
                      {item.description ||
                        "Premium quality furniture product for modern interiors."}
                    </p>

                    {/* Price */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-3xl font-black text-green-600">
                        ₹{item.price}
                      </span>

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        In Stock
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex gap-3">
                      {/* View */}
                      <button
                        onClick={() =>
                          navigate(
                            `/product/${item.id}`
                          )
                        }
                        className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition"
                      >
                        <Eye size={18} />
                        View
                      </button>

                      {/* Cart */}
                      <button
                        onClick={() =>
                          addToCart(item)
                        }
                        className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-2xl font-semibold hover:scale-105 transition"
                      >
                        <ShoppingCart size={18} />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LikedPage;