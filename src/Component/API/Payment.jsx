// src/pages/Payment.jsx

import React, { useState, useEffect } from "react";

import axios from "axios";

import {
  ShoppingBag,
  MapPin,
  CreditCard,
  Truck,
  ShieldCheck,
  Home,
  Briefcase,
  CheckCircle2,
  Phone,
  Mail,
  User,
  MapPinned,
  BadgeCheck,
} from "lucide-react";

function Payment() {
  const [cart, setCart] = useState([]);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [address, setAddress] =
    useState({
      fullName: "",
      mobile: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      type: "Home",
    });

  // LOAD CART
  useEffect(() => {
    const storedCart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    setCart(storedCart);
  }, []);

  // TOTAL PRICE
  const subtotal = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const shipping =
    subtotal > 999 ? 0 : 99;

  const totalPrice =
    subtotal + shipping;

  // HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // VALIDATION
  const validateForm = () => {
    if (
      !address.fullName ||
      !address.mobile ||
      !address.email ||
      !address.street ||
      !address.city ||
      !address.state ||
      !address.zip
    ) {
      setMessage(
        "❌ Please fill all fields"
      );

      return false;
    }

    if (
      address.mobile.length < 10
    ) {
      setMessage(
        "❌ Invalid mobile number"
      );

      return false;
    }

    return true;
  };

  // PLACE ORDER
  const handlePlaceOrder =
    async () => {
      setMessage("");

      if (cart.length === 0) {
        setMessage(
          "❌ Your cart is empty"
        );

        return;
      }

      if (!validateForm()) return;

      try {
        setLoading(true);

        const orderData = {
          items: cart.map((item) => ({
            productId: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            quantity:
              item.quantity,
          })),

          total: totalPrice,

          shipping,

          address,
        };

        const res =
          await axios.post(
            "http://localhost:5000/api/orders",
            orderData
          );

        if (res.status === 201) {
          setMessage(
            "✅ Order placed successfully!"
          );

          // SAVE ORDER
          const oldOrders =
            JSON.parse(
              localStorage.getItem(
                "orders"
              )
            ) || [];

          localStorage.setItem(
            "orders",
            JSON.stringify([
              ...oldOrders,
              {
                ...orderData,
                orderId:
                  "ORD" +
                  Math.floor(
                    Math.random() *
                      1000000
                  ),
                date: new Date(),
              },
            ])
          );

          // CLEAR CART
          localStorage.removeItem(
            "cart"
          );

          setCart([]);

          // RESET FORM
          setAddress({
            fullName: "",
            mobile: "",
            email: "",
            street: "",
            city: "",
            state: "",
            zip: "",
            type: "Home",
          });
        }
      } catch (err) {
        console.log(err);

        setMessage(
          "❌ Failed to place order"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 py-10 px-4">

      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="xl:col-span-2 space-y-8">

          {/* TOP HEADER */}
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-700 rounded-[30px] p-8 text-white shadow-2xl relative overflow-hidden">

            <div className="absolute top-0 right-0 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">

              <div className="flex items-center gap-5">

                <div className="bg-white/20 backdrop-blur-md p-4 rounded-3xl">
                  <CreditCard size={34} />
                </div>

                <div>
                  <h1 className="text-4xl font-extrabold">
                    Secure Checkout
                  </h1>

                  <p className="text-white/80 mt-2">
                    Fast delivery &
                    protected payment
                  </p>
                </div>
              </div>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">

                <div className="bg-white/10 border border-white/10 rounded-3xl p-5 backdrop-blur-md">

                  <Truck className="mb-3" />

                  <h3 className="font-semibold text-lg">
                    Fast Delivery
                  </h3>

                  <p className="text-sm text-white/70 mt-1">
                    Get products
                    quickly at your
                    doorstep
                  </p>
                </div>

                <div className="bg-white/10 border border-white/10 rounded-3xl p-5 backdrop-blur-md">

                  <ShieldCheck className="mb-3" />

                  <h3 className="font-semibold text-lg">
                    Secure Payment
                  </h3>

                  <p className="text-sm text-white/70 mt-1">
                    100% protected
                    transactions
                  </p>
                </div>

                <div className="bg-white/10 border border-white/10 rounded-3xl p-5 backdrop-blur-md">

                  <BadgeCheck className="mb-3" />

                  <h3 className="font-semibold text-lg">
                    Trusted Store
                  </h3>

                  <p className="text-sm text-white/70 mt-1">
                    Premium shopping
                    experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ADDRESS SECTION */}
          <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* FORM SIDE */}
              <div className="p-8 lg:p-10">

                <div className="flex items-center gap-3 mb-8">

                  <div className="bg-cyan-100 p-3 rounded-2xl">
                    <MapPin className="text-cyan-700" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                      Shipping Address
                    </h2>

                    <p className="text-gray-500 mt-1">
                      Enter your
                      delivery details
                    </p>
                  </div>
                </div>

                <div className="space-y-5">

                  {/* FULL NAME */}
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Full Name
                    </label>

                    <div className="flex items-center border border-gray-200 rounded-2xl overflow-hidden focus-within:border-cyan-500">

                      <div className="px-4 text-gray-400">
                        <User size={20} />
                      </div>

                      <input
                        type="text"
                        name="fullName"
                        value={
                          address.fullName
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="Enter your name"
                        className="w-full p-4 outline-none"
                      />
                    </div>
                  </div>

                  {/* MOBILE */}
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Mobile Number
                    </label>

                    <div className="flex items-center border border-gray-200 rounded-2xl overflow-hidden focus-within:border-cyan-500">

                      <div className="px-4 text-gray-400">
                        <Phone size={20} />
                      </div>

                      <input
                        type="text"
                        name="mobile"
                        value={
                          address.mobile
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="9876543210"
                        className="w-full p-4 outline-none"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Email Address
                    </label>

                    <div className="flex items-center border border-gray-200 rounded-2xl overflow-hidden focus-within:border-cyan-500">

                      <div className="px-4 text-gray-400">
                        <Mail size={20} />
                      </div>

                      <input
                        type="email"
                        name="email"
                        value={
                          address.email
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="example@gmail.com"
                        className="w-full p-4 outline-none"
                      />
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Address
                    </label>

                    <textarea
                      name="street"
                      value={
                        address.street
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="House no, street, area..."
                      rows="4"
                      className="w-full border border-gray-200 focus:border-cyan-500 outline-none p-4 rounded-2xl resize-none"
                    />
                  </div>

                  {/* CITY */}
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={address.city}
                      onChange={
                        handleChange
                      }
                      placeholder="Enter city"
                      className="w-full border border-gray-200 focus:border-cyan-500 outline-none p-4 rounded-2xl"
                    />
                  </div>

                  {/* STATE + ZIP */}
                  <div className="grid grid-cols-2 gap-4">

                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        State
                      </label>

                      <input
                        type="text"
                        name="state"
                        value={
                          address.state
                        }
                        onChange={
                          handleChange
                        }
                        placeholder="State"
                        className="w-full border border-gray-200 focus:border-cyan-500 outline-none p-4 rounded-2xl"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        ZIP Code
                      </label>

                      <input
                        type="text"
                        name="zip"
                        value={address.zip}
                        onChange={
                          handleChange
                        }
                        placeholder="ZIP"
                        className="w-full border border-gray-200 focus:border-cyan-500 outline-none p-4 rounded-2xl"
                      />
                    </div>
                  </div>

                  {/* ADDRESS TYPE */}
                  <div>

                    <label className="text-sm font-semibold text-gray-700 mb-3 block">
                      Address Type
                    </label>

                    <div className="flex gap-4">

                      <button
                        type="button"
                        onClick={() =>
                          setAddress({
                            ...address,
                            type: "Home",
                          })
                        }
                        className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl font-semibold transition-all duration-300 border ${
                          address.type ===
                          "Home"
                            ? "bg-gradient-to-r from-cyan-600 to-blue-700 text-white border-transparent shadow-lg"
                            : "border-gray-200 hover:border-cyan-500"
                        }`}
                      >
                        <Home size={18} />
                        Home
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setAddress({
                            ...address,
                            type: "Work",
                          })
                        }
                        className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl font-semibold transition-all duration-300 border ${
                          address.type ===
                          "Work"
                            ? "bg-gradient-to-r from-cyan-600 to-blue-700 text-white border-transparent shadow-lg"
                            : "border-gray-200 hover:border-cyan-500"
                        }`}
                      >
                        <Briefcase
                          size={18}
                        />
                        Work
                      </button>
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    onClick={
                      handlePlaceOrder
                    }
                    disabled={loading}
                    className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:scale-[1.01] transition-all duration-300 text-white py-4 rounded-2xl font-bold text-lg shadow-xl"
                  >
                    {loading
                      ? "Processing..."
                      : "Submit Address"}
                  </button>

                  {/* MESSAGE */}
                  {message && (
                    <div className="text-center font-semibold pt-3">
                      {message}
                    </div>
                  )}
                </div>
              </div>

              {/* MAP SIDE */}
              <div className="relative bg-gray-100 min-h-[400px]">

                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                  alt="Map"
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* LOCATION CARD */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-lg rounded-3xl p-5 shadow-2xl">

                  <div className="flex items-center gap-3">

                    <div className="bg-red-100 p-3 rounded-2xl">
                      <MapPinned className="text-red-500" />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-800">
                        Delivery Location
                      </h3>

                      <p className="text-sm text-gray-500">
                        Your address
                        will appear here
                      </p>
                    </div>
                  </div>

                  <button className="w-full mt-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition">
                    Adjust Pin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* ORDER SUMMARY */}
          <div className="bg-white rounded-[32px] shadow-2xl p-6 sticky top-6">

            <div className="flex items-center gap-3 mb-6">

              <div className="bg-cyan-100 p-3 rounded-2xl">
                <ShoppingBag className="text-cyan-700" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Order Summary
                </h2>

                <p className="text-gray-500 text-sm">
                  Review your items
                </p>
              </div>
            </div>

            {/* PRODUCTS */}
            <div className="space-y-5 max-h-[420px] overflow-y-auto pr-2">

              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border-b border-gray-100 pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-2xl border"
                    />

                    <div className="flex-1">

                      <h3 className="font-semibold text-gray-800 line-clamp-1">
                        {item.name}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        Quantity :
                        {item.quantity}
                      </p>

                      <p className="font-bold text-cyan-700 mt-2 text-lg">
                        ₹
                        {item.price *
                          item.quantity}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-gray-500">
                  Cart is empty
                </div>
              )}
            </div>

            {/* BILL DETAILS */}
            <div className="mt-6 space-y-4 text-gray-700">

              <div className="flex justify-between">
                <span>
                  Subtotal
                </span>

                <span>
                  ₹{subtotal}
                </span>
              </div>

              <div className="flex justify-between">
                <span>
                  Shipping
                </span>

                <span>
                  {shipping === 0
                    ? "FREE"
                    : `₹${shipping}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span>GST</span>

                <span>₹0</span>
              </div>

              <div className="border-t pt-4 flex justify-between text-2xl font-bold text-gray-900">

                <span>Total</span>

                <span>
                  ₹{totalPrice}
                </span>
              </div>
            </div>

            {/* PAYMENT BUTTON */}
            <button
              onClick={
                handlePlaceOrder
              }
              disabled={loading}
              className="w-full mt-8 bg-gradient-to-r from-cyan-600 to-blue-700 hover:opacity-90 transition text-white py-4 rounded-2xl font-bold text-lg shadow-lg"
            >
              {loading
                ? "Processing..."
                : "Place Order"}
            </button>

            {/* SECURE */}
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">

              <ShieldCheck size={18} />

              100% Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;