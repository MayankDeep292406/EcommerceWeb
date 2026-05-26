// src/pages/Cart.jsx

import React, {
  useState,
  useEffect,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  ShoppingCart,
  Trash2,
  ArrowLeft,
  CreditCard,
  Plus,
  Minus,
  ShieldCheck,
  PackageCheck,
  Star,
  Heart,
  Truck,
  RotateCcw,
  BadgeCheck,
} from "lucide-react";

import Footer from "../Component/Footer/Footer";

function Cart() {
  const [cart, setCart] =
    useState([]);

  const [
    recommendedProducts,
    setRecommendedProducts,
  ] = useState([]);

  const navigate =
    useNavigate();

  // ================= LOAD CART =================
  useEffect(() => {
    const stored =
      JSON.parse(
        localStorage.getItem(
          "cart"
        )
      ) || [];

    setCart(stored);

    // RECOMMENDED PRODUCTS
    setRecommendedProducts([
      {
        id: "1",
        name: "Modern Wooden Chair",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjEJsPdZo3ZETyXA0zoJjnNMQUZRwOWXLTw&s",
        price: 5999,
        rating: 4.5,
      },

      {
        id: "2",
        name: "Luxury Sofa Set",
        image:
          "https://suhaus.in/blog/wp-content/uploads/2025/09/Luxury-modern-sofa-set-design-768x418.jpg",
        price: 24999,
        rating: 4.8,
      },

      {
        id: "3",
        name: "Minimal Study Table",
        image:
          "https://cdn.trendhunterstatic.com/thumbs/476/the-office-table.jpeg",
        price: 8999,
        rating: 4.4,
      },
    ]);
  }, []);

  // ================= UPDATE CART =================
  const updateCart = (
    updated
  ) => {
    setCart(updated);

    localStorage.setItem(
      "cart",
      JSON.stringify(updated)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  // ================= INCREMENT =================
  const incrementQuantity = (
    id
  ) => {
    const updated =
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity +
                1,
            }
          : item
      );

    updateCart(updated);
  };

  // ================= DECREMENT =================
  const decrementQuantity = (
    id
  ) => {
    const updated =
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                Math.max(
                  1,
                  item.quantity -
                    1
                ),
            }
          : item
      );

    updateCart(updated);
  };

  // ================= REMOVE =================
  const removeFromCart = (
    id
  ) => {
    const updated =
      cart.filter(
        (item) =>
          item.id !== id
      );

    updateCart(updated);
  };

  // ================= CLEAR CART =================
  const clearCart = () => {
    updateCart([]);
  };

  // ================= PRICE =================
  const subtotal =
    cart.reduce(
      (sum, item) =>
        sum +
        (item.price || 0) *
          item.quantity,
      0
    );

  const shippingCharge =
    subtotal > 5000
      ? 0
      : 199;

  const platformFee = 49;

  const deliveryCharge = 99;

  const totalPrice =
    subtotal +
    shippingCharge +
    platformFee +
    deliveryCharge;

  // ================= FORMAT =================
  const formatCurrency = (
    num
  ) =>
    new Intl.NumberFormat(
      "en-IN",
      {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }
    ).format(num);

  // ================= PAYMENT =================
  const goToPayment = () => {
    navigate("/payment", {
      state: {
        cart,
        totalPrice,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] via-white to-[#eef2f7]">

      {/* ================= HEADER ================= */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">

        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                navigate(-1)
              }
              className="p-3 rounded-full hover:bg-gray-200 transition"
            >
              <ArrowLeft
                size={22}
              />
            </button>

            <h1 className="text-2xl sm:text-4xl font-black text-gray-800 flex items-center gap-3">

              <ShoppingCart />

              Shopping Cart
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-2 text-gray-600 font-semibold">

            <PackageCheck
              size={18}
            />

            {cart.length} Items
          </div>
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="max-w-7xl mx-auto px-5 py-10">

        {cart.length ===
        0 ? (

          <div className="bg-white rounded-[40px] shadow-xl p-14 text-center">

            <div className="w-36 h-36 mx-auto rounded-full bg-gray-100 flex items-center justify-center">

              <ShoppingCart
                size={60}
                className="text-gray-400"
              />
            </div>

            <h2 className="text-5xl font-black text-gray-800 mt-8">

              Your Cart Is Empty
            </h2>

            <p className="text-gray-500 mt-4 text-lg">

              Add premium furniture
              products to start
              shopping.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center gap-3 mt-8 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Continue Shopping →
            </Link>
          </div>

        ) : (

          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* ================= CART ITEMS ================= */}
              <div className="lg:col-span-2 space-y-6">

                {cart.map(
                  (item) => (

                    <div
                      key={
                        item.id
                      }
                      className="bg-white rounded-[35px] shadow-lg p-5 hover:shadow-2xl transition"
                    >

                      <div className="flex flex-col lg:flex-row gap-6">

                        {/* IMAGE */}
                        <div className="relative w-full lg:w-60 h-60 bg-gray-100 rounded-[30px] overflow-hidden">

                          <img
                            src={
                              item.image
                            }
                            alt={
                              item.name
                            }
                            className="w-full h-full object-cover hover:scale-105 transition duration-300"
                          />

                          <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">

                            <Heart
                              size={
                                18
                              }
                              className="text-red-500"
                            />
                          </button>
                        </div>

                        {/* DETAILS */}
                        <div className="flex-1">

                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">

                            <div>

                              <h2 className="text-3xl font-black text-gray-800">

                                {
                                  item.name
                                }
                              </h2>

                              <p className="text-gray-500 mt-3 leading-relaxed">

                                {item.description ||
                                  "Premium quality furniture designed with modern aesthetics and durable materials for long-lasting comfort."}
                              </p>

                              {/* RATINGS */}
                              <div className="flex items-center gap-2 mt-4">

                                <div className="flex items-center text-yellow-500">

                                  {[1,
                                    2,
                                    3,
                                    4,
                                    5,
                                  ].map(
                                    (
                                      star
                                    ) => (

                                      <Star
                                        key={
                                          star
                                        }
                                        size={
                                          18
                                        }
                                        fill="currentColor"
                                      />
                                    )
                                  )}
                                </div>

                                <span className="font-semibold text-gray-700">
                                  4.5
                                </span>

                                <span className="text-gray-400">
                                  (245
                                  Reviews)
                                </span>
                              </div>

                              {/* FEATURES */}
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">

                                <div className="bg-gray-100 rounded-2xl p-3 flex items-center gap-2">

                                  <Truck
                                    className="text-green-600"
                                    size={
                                      18
                                    }
                                  />

                                  <span className="text-sm font-medium">
                                    Free
                                    Delivery
                                  </span>
                                </div>

                                <div className="bg-gray-100 rounded-2xl p-3 flex items-center gap-2">

                                  <RotateCcw
                                    className="text-blue-600"
                                    size={
                                      18
                                    }
                                  />

                                  <span className="text-sm font-medium">
                                    7
                                    Days
                                    Return
                                  </span>
                                </div>

                                <div className="bg-gray-100 rounded-2xl p-3 flex items-center gap-2">

                                  <BadgeCheck
                                    className="text-purple-600"
                                    size={
                                      18
                                    }
                                  />

                                  <span className="text-sm font-medium">
                                    Warranty
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* PRICE */}
                            <div className="text-right">

                              <h2 className="text-4xl font-black text-green-600">

                                {formatCurrency(
                                  item.price *
                                    item.quantity
                                )}
                              </h2>

                              <p className="text-gray-500 mt-2">

                                {formatCurrency(
                                  item.price
                                )}{" "}
                                each
                              </p>
                            </div>
                          </div>

                          {/* BOTTOM */}
                          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-5">

                            {/* QUANTITY */}
                            <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-2xl w-fit">

                              <button
                                onClick={() =>
                                  decrementQuantity(
                                    item.id
                                  )
                                }
                                className="bg-white p-2 rounded-full shadow hover:scale-105 transition"
                              >

                                <Minus
                                  size={
                                    16
                                  }
                                />
                              </button>

                              <span className="font-black text-lg">
                                {
                                  item.quantity
                                }
                              </span>

                              <button
                                onClick={() =>
                                  incrementQuantity(
                                    item.id
                                  )
                                }
                                className="bg-white p-2 rounded-full shadow hover:scale-105 transition"
                              >

                                <Plus
                                  size={
                                    16
                                  }
                                />
                              </button>
                            </div>

                            {/* REMOVE */}
                            <button
                              onClick={() =>
                                removeFromCart(
                                  item.id
                                )
                              }
                              className="flex items-center gap-2 text-red-500 hover:text-red-700 font-semibold transition"
                            >

                              <Trash2
                                size={
                                  18
                                }
                              />

                              Remove
                              Item
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* ================= SUMMARY ================= */}
              <div className="bg-white rounded-[35px] shadow-xl p-8 h-fit sticky top-28">

                <h2 className="text-3xl font-black text-gray-800 mb-8">

                  Order Summary
                </h2>

                <div className="space-y-5">

                  <div className="flex justify-between text-gray-600">

                    <span>
                      Subtotal
                    </span>

                    <span>
                      {formatCurrency(
                        subtotal
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600">

                    <span>
                      Shipping
                    </span>

                    <span className="font-semibold text-green-600">

                      {shippingCharge ===
                      0
                        ? "FREE"
                        : formatCurrency(
                            shippingCharge
                          )}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600">

                    <span>
                      Platform Fee
                    </span>

                    <span>
                      {formatCurrency(
                        platformFee
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600">

                    <span>
                      Delivery
                    </span>

                    <span>
                      {formatCurrency(
                        deliveryCharge
                      )}
                    </span>
                  </div>

                  <div className="border-t pt-5 flex justify-between text-3xl font-black">

                    <span>
                      Total
                    </span>

                    <span className="text-green-600">

                      {formatCurrency(
                        totalPrice
                      )}
                    </span>
                  </div>
                </div>

                {/* SECURITY */}
                <div className="mt-6 bg-gray-100 rounded-2xl p-4 flex items-center gap-3">

                  <ShieldCheck className="text-green-600" />

                  <p className="text-sm text-gray-600">

                    Secure checkout with encrypted
                    payment system
                  </p>
                </div>

                {/* BUTTONS */}
                <div className="mt-8 space-y-4">

                  <button
                    onClick={
                      goToPayment
                    }
                    className="w-full flex items-center justify-center gap-3 bg-black text-white py-4 rounded-2xl font-bold hover:scale-105 transition"
                  >

                    <CreditCard
                      size={20}
                    />

                    Proceed To Payment
                  </button>

                  <button
                    onClick={
                      clearCart
                    }
                    className="w-full bg-red-100 text-red-600 py-4 rounded-2xl font-bold hover:bg-red-200 transition"
                  >
                    Clear Cart
                  </button>
                </div>

                <Link
                  to="/products"
                  className="block text-center mt-6 text-blue-600 hover:underline"
                >
                  ← Continue
                  Shopping
                </Link>
              </div>
            </div>

            {/* ================= RECOMMENDED ================= */}
            <div className="mt-20">

              <div className="flex items-center justify-between mb-10">

                <h2 className="text-4xl font-black text-gray-800">

                  You May Also
                  Like
                </h2>

                <Link
                  to="/products"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View All
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {recommendedProducts.map(
                  (
                    product
                  ) => (

                    <div
                      key={
                        product.id
                      }
                      className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition"
                    >

                      <div className="h-72 overflow-hidden">

                        <img
                          src={
                            product.image
                          }
                          alt={
                            product.name
                          }
                          className="w-full h-full object-cover hover:scale-105 transition duration-300"
                        />
                      </div>

                      <div className="p-6">

                        <h3 className="text-2xl font-bold text-gray-800">

                          {
                            product.name
                          }
                        </h3>

                        <div className="flex items-center gap-2 mt-3">

                          <Star
                            size={16}
                            fill="currentColor"
                            className="text-yellow-500"
                          />

                          <span className="font-semibold">
                            {
                              product.rating
                            }
                          </span>
                        </div>

                        <div className="mt-5 flex items-center justify-between">

                          <span className="text-3xl font-black text-green-600">

                            {formatCurrency(
                              product.price
                            )}
                          </span>

                          <button className="bg-black text-white px-6 py-3 rounded-2xl hover:scale-105 transition">

                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <footer/>
    </div>
  );
}

export default Cart;