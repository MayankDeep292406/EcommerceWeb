// src/pages/Wishlist.jsx

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  Heart,
  ShoppingCart,
  Trash2,
} from "lucide-react";

import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
    clearWishlist,
  } = useContext(WishlistContext);

  const { addToCart } =
    useContext(CartContext);

  const handleAddToCart = (
    product
  ) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <Heart className="text-red-500" />
              My Wishlist
            </h1>

            <p className="text-gray-500 mt-1">
              Your favorite furniture
              products
            </p>
          </div>

          {wishlistItems.length > 0 && (
            <button
              onClick={clearWishlist}
              className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
            >
              Clear Wishlist
            </button>
          )}
        </div>

        {/* Empty Wishlist */}
        {wishlistItems.length ===
        0 ? (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">
            <Heart
              size={70}
              className="mx-auto text-gray-300 mb-4"
            />

            <h2 className="text-2xl font-semibold text-gray-700">
              Wishlist is Empty
            </h2>

            <p className="text-gray-500 mt-2">
              Save your favorite
              furniture items here.
            </p>

            <Link
              to="/shop"
              className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map(
              (product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <img
                      src={
                        product.image
                      }
                      alt={
                        product.name
                      }
                      className="w-full h-64 object-cover"
                    />

                    <button
                      onClick={() =>
                        removeFromWishlist(
                          product._id
                        )
                      }
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-100"
                    >
                      <Trash2
                        size={18}
                        className="text-red-500"
                      />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                      {product.name}
                    </h2>

                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                      {
                        product.description
                      }
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-2xl font-bold text-black">
                        ₹
                        {
                          product.price
                        }
                      </span>

                      <button
                        onClick={() =>
                          handleAddToCart(
                            product
                          )
                        }
                        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                      >
                        <ShoppingCart size={18} />
                        Cart
                      </button>
                    </div>

                    {/* View Details */}
                    <Link
                      to={`/product/${product._id}`}
                      className="block mt-4 text-center border border-black text-black py-2 rounded-lg hover:bg-black hover:text-white transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;