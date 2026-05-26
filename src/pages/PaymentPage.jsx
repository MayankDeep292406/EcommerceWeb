// src/pages/PaymentPage.jsx

import React, {
  useEffect,
  useState,
} from "react";

import {
  CreditCard,
  LocateFixed,
  ShieldCheck,
  Truck,
  Wallet,
  Building2,
  Home,
  CheckCircle2,
  Lock,
  ArrowLeft,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

const PaymentPage = () => {

  const navigate =
    useNavigate();

  // DEMO PRODUCTS
  const products = [
    {
      id: 1,
      name: "Modern Sofa",
      price: 24999,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    },

    {
      id: 2,
      name: "Wooden Chair",
      price: 6999,
      qty: 2,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
  ];

  const [coords, setCoords] =
    useState({
      lat: 22.8046,
      lng: 86.2029,
    });

  const [loading, setLoading] =
    useState(false);

  const [paymentSuccess, setPaymentSuccess] =
    useState(false);

  const [addressType, setAddressType] =
    useState("home");

  const [selectedPayment, setSelectedPayment] =
    useState("card");

  const [formData, setFormData] =
    useState({
      fullName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
      cardName: "",
    });

  const subtotal =
    products.reduce(
      (acc, item) =>
        acc +
        item.price * item.qty,
      0
    );

  const shipping = 99;
  const tax = 120;

  const codFee =
    selectedPayment === "cod"
      ? 9
      : 0;

  const total =
    subtotal +
    shipping +
    tax +
    codFee;

  // LIVE LOCATION
  const getLiveLocation = () => {

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {

        setCoords({
          lat:
            position.coords
              .latitude,

          lng:
            position.coords
              .longitude,
        });

        setLoading(false);
      },

      () => {
        alert(
          "Location permission denied"
        );

        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getLiveLocation();
  }, []);

  // INPUT CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  // PLACE ORDER
  const handlePlaceOrder = () => {

    setTimeout(() => {
      setPaymentSuccess(true);
    }, 1200);
  };

  // SUCCESS SCREEN
  if (paymentSuccess) {

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex items-center justify-center p-5">

        <div className="bg-white shadow-2xl rounded-[40px] p-10 max-w-3xl w-full text-center relative overflow-hidden">

          <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-200 rounded-full blur-3xl opacity-50"></div>

          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-green-300 rounded-full blur-3xl opacity-40"></div>

          {/* SUCCESS ICON */}
          <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">

            <CheckCircle2
              size={70}
              className="text-green-600"
            />
          </div>

          {/* TITLE */}
          <h1 className="text-5xl font-black text-gray-900">
            Payment Successful
          </h1>

          <p className="text-gray-500 text-lg mt-5 leading-8">
            Your order has been placed successfully.
            Thank you for shopping with us.
          </p>

          {/* SUMMARY */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 mt-10 text-left">

            <div className="flex justify-between mb-4">
              <span className="text-gray-500">
                Payment Method
              </span>

              <span className="font-bold uppercase">
                {selectedPayment}
              </span>
            </div>

            <div className="flex justify-between mb-4">
              <span className="text-gray-500">
                Products
              </span>

              <span className="font-bold">
                {products.length}
              </span>
            </div>

            <div className="flex justify-between mb-4">
              <span className="text-gray-500">
                Delivery City
              </span>

              <span className="font-bold">
                {formData.city || "Jamshedpur"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Total Paid
              </span>

              <span className="text-3xl font-black text-green-600">
                ₹{total}
              </span>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="mt-10 space-y-4 max-h-[250px] overflow-y-auto">

            {products.map((item) => (

              <div
                key={item.id}
                className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-2xl object-cover"
                />

                <div className="flex-1 text-left">

                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    Qty: {item.qty}
                  </p>
                </div>

                <div className="font-black text-xl">
                  ₹{item.price}
                </div>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="grid md:grid-cols-2 gap-4 mt-10">

            <button
              className="bg-black text-white py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Track Order
            </button>

            <button
              onClick={() =>
                navigate("/")
              }
              className="border border-black py-4 rounded-2xl font-bold hover:bg-black hover:text-white transition"
            >
              Return Home
            </button>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-center gap-2 mt-8 text-green-600 font-semibold">

            <ShieldCheck size={20} />

            100% Secure Checkout
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-10 px-4">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">

          {/* HEADER */}
          <div className="bg-white rounded-[30px] shadow-xl p-8 border border-gray-100">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    navigate("/")
                  }
                  className="bg-gray-100 hover:bg-black hover:text-white transition p-4 rounded-2xl"
                >
                  <ArrowLeft />
                </button>

                <div className="bg-black text-white p-4 rounded-2xl">
                  <Wallet size={32} />
                </div>

                <div>
                  <h1 className="text-4xl font-bold">
                    Secure Payment
                  </h1>

                  <p className="text-gray-500 mt-1">
                    Complete your order safely
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="bg-white rounded-[30px] shadow-xl p-8">

            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-3xl font-bold">
                  Shipping Address
                </h2>

                <p className="text-gray-500 mt-1">
                  Add your delivery location
                </p>
              </div>

              <button
                onClick={
                  getLiveLocation
                }
                className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-2xl hover:scale-105 transition"
              >
                <LocateFixed size={18} />

                {loading
                  ? "Loading..."
                  : "Live Location"}
              </button>
            </div>

            {/* HOME WORK */}
            <div className="flex gap-4 mb-8">

              <button
                onClick={() =>
                  setAddressType(
                    "home"
                  )
                }
                className={`flex items-center gap-2 px-6 py-4 rounded-2xl border transition w-full justify-center ${
                  addressType ===
                  "home"
                    ? "bg-black text-white border-black"
                    : "bg-white border-gray-300"
                }`}
              >
                <Home size={20} />
                Home
              </button>

              <button
                onClick={() =>
                  setAddressType(
                    "work"
                  )
                }
                className={`flex items-center gap-2 px-6 py-4 rounded-2xl border transition w-full justify-center ${
                  addressType ===
                  "work"
                    ? "bg-black text-white border-black"
                    : "bg-white border-gray-300"
                }`}
              >
                <Building2 size={20} />
                Work
              </button>
            </div>

            {/* FORM */}
            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                name="fullName"
                value={
                  formData.fullName
                }
                onChange={
                  handleChange
                }
                placeholder="Full Name"
                className="md:col-span-2 w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-black"
              />

              <input
                type="text"
                name="phone"
                value={
                  formData.phone
                }
                onChange={
                  handleChange
                }
                placeholder="+91 9876543210"
                className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-black"
              />

              <input
                type="text"
                name="zip"
                value={
                  formData.zip
                }
                onChange={
                  handleChange
                }
                placeholder="831001"
                className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-black"
              />

              <textarea
                rows="3"
                name="address"
                value={
                  formData.address
                }
                onChange={
                  handleChange
                }
                placeholder="Full Address"
                className="md:col-span-2 w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-black"
              />

              <input
                type="text"
                name="city"
                value={
                  formData.city
                }
                onChange={
                  handleChange
                }
                placeholder="Jamshedpur"
                className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-black"
              />

              <input
                type="text"
                name="state"
                value={
                  formData.state
                }
                onChange={
                  handleChange
                }
                placeholder="Jharkhand"
                className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-black"
              />
            </div>

            {/* MAP */}
            <div className="mt-8 rounded-3xl overflow-hidden border border-gray-200">

              <iframe
                title="map"
                width="100%"
                height="320"
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${coords.lat},${coords.lng}&z=15&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* SUMMARY */}
          <div className="bg-black text-white rounded-[30px] shadow-xl p-8 sticky top-5">

            <h2 className="text-3xl font-bold mb-8">
              Order Summary
            </h2>

            <div className="space-y-5">

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
                  ₹{shipping}
                </span>
              </div>

              <div className="flex justify-between">
                <span>
                  Tax
                </span>

                <span>
                  ₹{tax}
                </span>
              </div>

              {selectedPayment ===
                "cod" && (
                <div className="flex justify-between text-yellow-300">
                  <span>
                    COD Fee
                  </span>

                  <span>
                    ₹9
                  </span>
                </div>
              )}

              <div className="border-t border-gray-700 pt-5 flex justify-between text-2xl font-bold">

                <span>
                  Total
                </span>

                <span>
                  ₹{total}
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <button
              onClick={
                handlePlaceOrder
              }
              className="w-full mt-8 bg-white text-black py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
            >
              {selectedPayment ===
              "cod"
                ? "Place COD Order"
                : "Pay Securely"}
            </button>

            {/* SECURITY */}
            <div className="bg-white/10 rounded-2xl p-4 flex items-center gap-3 mt-8">

              <ShieldCheck />

              <p className="text-sm">
                100% Secure Payment
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-4 flex items-center gap-3 mt-4">

              <Lock />

              <p className="text-sm">
                SSL Encrypted Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;