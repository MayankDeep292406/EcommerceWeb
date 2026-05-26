// src/pages/LikedProducts.jsx

import React, {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import Footer from "../Footer/Footer";

import {
  Heart,
  Trash2,
  ArrowLeft,
  ShoppingCart,
  Eye,
  Star,
  Sparkles,
  BadgeCheck,
  ShoppingBag,
} from "lucide-react";

function LikedProducts() {
  const [liked, setLiked] =
    useState([]);

  const navigate =
    useNavigate();

  /* =========================================
     LOAD LIKED PRODUCTS
  ========================================= */
  useEffect(() => {
    const storedLikes =
      JSON.parse(
        localStorage.getItem(
          "likedProducts"
        )
      ) || [];

    setLiked(storedLikes);
  }, []);

  /* =========================================
     REMOVE PRODUCT
  ========================================= */
  const removeFromLiked = (
    id
  ) => {
    const updated =
      liked.filter(
        (item) =>
          item.id !== id
      );

    setLiked(updated);

    localStorage.setItem(
      "likedProducts",
      JSON.stringify(updated)
    );
  };

  /* =========================================
     ADD TO CART
  ========================================= */
  const addToCart = (
    product
  ) => {
    const existingCart =
      JSON.parse(
        localStorage.getItem(
          "cart"
        )
      ) || [];

    const existingItem =
      existingCart.find(
        (item) =>
          item.product?._id ===
          product.id
      );

    let updatedCart;

    if (existingItem) {
      updatedCart =
        existingCart.map(
          (item) =>
            item.product?._id ===
            product.id
              ? {
                  ...item,
                  quantity:
                    item.quantity +
                    1,
                }
              : item
        );
    } else {
      updatedCart = [
        ...existingCart,
        {
          product: {
            _id: product.id,
            title:
              product.name,
            image:
              product.image,
            price:
              product.price,
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
      new Event(
        "cartUpdated"
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-100 flex flex-col overflow-hidden">

      {/* =========================================
          TOP HEADER
      ========================================= */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm">

        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                navigate(-1)
              }
              className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition"
            >
              <ArrowLeft
                size={20}
              />
            </button>

            <div>
              <h1 className="text-3xl font-black text-gray-800 flex items-center gap-2">
                <Heart className="text-red-500 fill-red-500" />
                My Wishlist
              </h1>

              <p className="text-gray-500 text-sm">
                Luxury furniture
                collection
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-3 bg-red-100 text-red-600 px-5 py-2 rounded-full font-bold shadow-sm">
            ❤️ {liked.length} Saved
            Products
          </div>
        </div>
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div className="max-w-7xl mx-auto px-5 py-10 flex-grow w-full">

        {liked.length ===
        0 ? (
          /* =========================================
             EMPTY WISHLIST
          ========================================= */
          <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl p-12 text-center border border-white/20">

            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center shadow-inner">
              <Heart
                size={65}
                className="text-red-500"
              />
            </div>

            <h2 className="text-5xl font-black text-gray-800 mt-10">
              Wishlist Empty
            </h2>

            <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto leading-relaxed">
              Save your favorite
              furniture products
              and create your
              dream home shopping
              collection.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center gap-3 mt-10 bg-black text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-2xl"
            >
              <ShoppingBag
                size={22}
              />
              Explore Products
            </Link>
          </div>
        ) : (
          <>
            {/* =========================================
               TITLE AREA
            ========================================= */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">

              <div>
                <h2 className="text-5xl font-black text-gray-800 flex items-center gap-3">
                  <Sparkles className="text-pink-500" />
                  Favorite Products
                </h2>

                <p className="text-gray-500 mt-3 text-lg">
                  Your premium saved
                  furniture items.
                </p>
              </div>

              <Link
                to="/cart"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-black to-gray-800 text-white px-8 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-2xl"
              >
                <ShoppingCart
                  size={22}
                />
                Go To Cart
              </Link>
            </div>

            {/* =========================================
               PRODUCT GRID
            ========================================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {liked.map(
                (product) => (
                  <div
                    key={
                      product.id
                    }
                    className="group relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                  >

                    {/* IMAGE */}
                    <div className="relative overflow-hidden bg-gray-100">

                      <img
                        src={
                          product.image ||
                          "https://via.placeholder.com/400"
                        }
                        alt={
                          product.name ||
                          "Product"
                        }
                        className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                      {/* REMOVE BUTTON */}
                      <button
                        onClick={() =>
                          removeFromLiked(
                            product.id
                          )
                        }
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-all"
                      >
                        <Trash2
                          size={18}
                        />
                      </button>

                      {/* VERIFIED */}
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                        <BadgeCheck
                          size={14}
                        />
                        Premium
                      </div>

                      {/* RATING */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold shadow-md">

                        <Star
                          size={14}
                          className="text-yellow-500 fill-yellow-500"
                        />

                        4.9
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">

                      <h2 className="text-2xl font-black text-gray-800 line-clamp-1">
                        {product.name ||
                          "Luxury Sofa"}
                      </h2>

                      <p className="text-gray-500 mt-3 line-clamp-2 leading-relaxed">
                        {product.description ||
                          "Modern premium furniture for elegant living spaces."}
                      </p>

                      {/* PRICE */}
                      <div className="flex items-center justify-between mt-6">

                        <span className="text-3xl font-black text-green-600">
                          ₹
                          {product.price ??
                            "0"}
                        </span>

                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                          In Stock
                        </span>
                      </div>

                      {/* BUTTONS */}
                      <div className="mt-7 flex gap-3">

                        {/* VIEW */}
                        <button
                          onClick={() =>
                            navigate(
                              `/product/${product.id}`
                            )
                          }
                          className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-all"
                        >
                          <Eye
                            size={18}
                          />
                          View
                        </button>

                        {/* CART */}
                        <button
                          onClick={() =>
                            addToCart(
                              product
                            )
                          }
                          className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg"
                        >
                          <ShoppingCart
                            size={18}
                          />
                          Add
                        </button>
                      </div>
                    </div>

                    {/* HOVER BORDER */}
                    <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-pink-200 transition-all pointer-events-none" />
                  </div>
                )
              )}
            </div>
          </>
        )}
      </div>

      {/* =========================================
          FOOTER
      ========================================= */}
      <Footer />
    </div>
  );
}

export default LikedProducts;