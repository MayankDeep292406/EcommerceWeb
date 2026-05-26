// src/pages/OrderSummary.jsx

import React, {
  useMemo,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  ArrowLeft,
  Search,
  SlidersHorizontal,
  Star,
  Pencil,
  IndianRupee,
  CreditCard,
  Truck,
  PackageCheck,
  Clock3,
  Download,
  ShoppingBag,
  CheckCircle2,
  Heart,
  Eye,
} from "lucide-react";

import Footer from "../Component/Footer/Footer";
import products from "../Component/API/Products";

const OrderSummary = () => {

  const navigate =
    useNavigate();

  const [search, setSearch] =
    useState("");

  const [activeFilter, setActiveFilter] =
    useState("All");

  // ORDERS
  const orders = [
    {
      id: 1,

      title:
        "Modern Wooden Chair",

      date:
        "Delivered on May 10",

      rating: 5,

      price: 14999,

      payment:
        "Paid via UPI",

      status:
        "Delivered",

      color:
        "from-green-500 to-emerald-500",

      orderId:
        "#ORD10245",
    },

    {
      id: 2,

      title:
        "Luxury Sofa Set",

      date:
        "Shipped on May 21",

      rating: 4,

      price: 55999,

      payment:
        "Credit Card",

      status:
        "Shipped",

      color:
        "from-orange-500 to-yellow-500",

      orderId:
        "#ORD10246",
    },

    {
      id: 3,

      title:
        "Minimal Study Table",

      date:
        "Processing Order",

      rating: 4,

      price: 18999,

      payment:
        "Cash on Delivery",

      status:
        "Processing",

      color:
        "from-purple-600 to-indigo-600",

      orderId:
        "#ORD10247",
    },

    {
      id: 4,

      title:
        "Premium Bedroom Lamp",

      date:
        "Delivered on Apr 12",

      rating: 5,

      price: 4999,

      payment:
        "Paytm UPI",

      status:
        "Delivered",

      color:
        "from-pink-500 to-rose-500",

      orderId:
        "#ORD10248",
    },
  ];

  // FILTERS
  const filters = [
    "All",
    "Delivered",
    "Shipped",
    "Processing",
  ];

  // FILTERED ORDERS
  const filteredOrders =
    useMemo(() => {

      return orders.filter(
        (order) => {

          const matchSearch =
            order.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchFilter =
            activeFilter ===
              "All" ||
            order.status ===
              activeFilter;

          return (
            matchSearch &&
            matchFilter
          );
        }
      );
    }, [
      search,
      activeFilter,
    ]);

  // TOTAL
  const totalSpent =
    orders.reduce(
      (acc, item) =>
        acc + item.price,
      0
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200">

      {/* HEADER */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                navigate("/products")
              }
              className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center hover:scale-105 transition"
            >
              <ArrowLeft size={24} />
            </button>

            <div>

              <h1 className="text-3xl sm:text-5xl font-black text-gray-900">
                My Orders
              </h1>

              <p className="text-gray-500 mt-1">
                Track, manage and review your purchases
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              navigate("/products")
            }
            className="hidden md:flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >

            <ShoppingBag size={22} />

            Continue Shopping
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto px-4 pt-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {/* TOTAL ORDERS */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500">
                  Total Orders
                </p>

                <h2 className="text-4xl font-black mt-2">
                  {orders.length}
                </h2>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center">

                <PackageCheck size={30} />
              </div>
            </div>
          </div>

          {/* DELIVERED */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500">
                  Delivered
                </p>

                <h2 className="text-4xl font-black mt-2">
                  2
                </h2>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-green-500 text-white flex items-center justify-center">

                <CheckCircle2 size={30} />
              </div>
            </div>
          </div>

          {/* PENDING */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500">
                  Pending
                </p>

                <h2 className="text-4xl font-black mt-2">
                  2
                </h2>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center">

                <Clock3 size={30} />
              </div>
            </div>
          </div>

          {/* TOTAL SPENT */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500">
                  Total Spent
                </p>

                <h2 className="text-4xl font-black mt-2">
                  ₹
                  {totalSpent.toLocaleString()}
                </h2>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-purple-600 text-white flex items-center justify-center">

                <IndianRupee size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="bg-white rounded-[32px] p-5 shadow-lg">

          <div className="flex flex-col lg:flex-row gap-5">

            {/* SEARCH INPUT */}
            <div className="flex-1 border border-gray-200 rounded-2xl px-5 py-4 flex items-center gap-3">

              <Search
                size={22}
                className="text-gray-500"
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                placeholder="Search your orders..."
                className="w-full outline-none text-lg"
              />
            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap gap-3">

              {filters.map(
                (item) => (

                  <button
                    key={item}
                    onClick={() =>
                      setActiveFilter(
                        item
                      )
                    }
                    className={`px-6 py-4 rounded-2xl font-bold transition ${
                      activeFilter ===
                      item
                        ? "bg-black text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}

              <button className="px-6 py-4 rounded-2xl bg-gray-100 hover:bg-gray-200 transition">

                <SlidersHorizontal />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ORDERS */}
      <div className="max-w-7xl mx-auto px-4 pb-14 space-y-8">

        {filteredOrders.map(
          (order) => (

            <div
              key={order.id}
              className="group bg-white rounded-[36px] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-500"
            >

              <div className="p-6 sm:p-8">

                <div className="flex flex-col justify-between">

                  {/* TOP */}
                  <div>

                    {/* STATUS */}
                    <div className="flex items-center justify-between flex-wrap gap-4">

                      <div
                        className={`bg-gradient-to-r ${order.color} text-white px-5 py-3 rounded-full font-bold shadow-lg`}
                      >
                        {order.status}
                      </div>

                      <div className="flex items-center gap-3">

                        <button className="w-12 h-12 rounded-2xl bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center">

                          <Eye size={20} />
                        </button>

                        <button className="w-12 h-12 rounded-2xl bg-gray-100 hover:bg-red-100 hover:text-red-500 transition flex items-center justify-center">

                          <Heart size={20} />
                        </button>
                      </div>
                    </div>

                    {/* TITLE */}
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mt-6">
                      {order.title}
                    </h2>

                    {/* TAGS */}
                    <div className="flex flex-wrap items-center gap-3 mt-4">

                      <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
                        {order.orderId}
                      </div>

                      <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                        Furniture
                      </div>

                      <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                        Premium Quality
                      </div>
                    </div>

                    {/* DATE */}
                    <p className="text-gray-500 text-lg mt-5">
                      {order.date}
                    </p>

                    {/* INFO BOXES */}
                    <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">

                      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-5">

                        <p className="text-gray-500 text-sm">
                          Order ID
                        </p>

                        <h3 className="font-black text-lg mt-2">
                          {order.orderId}
                        </h3>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-5">

                        <p className="text-gray-500 text-sm">
                          Payment
                        </p>

                        <h3 className="font-black text-lg mt-2">
                          {order.payment}
                        </h3>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-5">

                        <p className="text-gray-500 text-sm">
                          Delivery
                        </p>

                        <h3 className="font-black text-lg mt-2">
                          Fast Shipping
                        </h3>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-5">

                        <p className="text-gray-500 text-sm">
                          Total
                        </p>

                        <h3 className="font-black text-lg mt-2">
                          ₹
                          {order.price.toLocaleString()}
                        </h3>
                      </div>
                    </div>

                    {/* PRICE */}
                    <div className="flex items-center gap-2 mt-8">

                      <IndianRupee
                        size={30}
                      />

                      <span className="text-4xl font-black">
                        {order.price.toLocaleString()}
                      </span>
                    </div>

                    {/* BENEFITS */}
                    <div className="flex flex-wrap gap-4 mt-6">

                      <div className="bg-green-50 border border-green-200 text-green-700 px-5 py-3 rounded-2xl font-semibold">
                        Free Delivery
                      </div>

                      <div className="bg-purple-50 border border-purple-200 text-purple-700 px-5 py-3 rounded-2xl font-semibold">
                        7 Days Return
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-5 py-3 rounded-2xl font-semibold">
                        Warranty Included
                      </div>
                    </div>

                    {/* PAYMENT BOX */}
                    <div className="mt-8 bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6">

                      <div className="flex flex-col lg:flex-row justify-between gap-6">

                        <div>

                          <div className="flex items-center gap-3 mb-5">

                            <div className="w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center">

                              <CreditCard size={24} />
                            </div>

                            <div>

                              <p className="text-gray-500 text-sm">
                                Payment Method
                              </p>

                              <h3 className="font-black text-lg">
                                {order.payment}
                              </h3>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">

                            <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center">

                              <Truck size={24} />
                            </div>

                            <div>

                              <p className="text-gray-500 text-sm">
                                Shipping
                              </p>

                              <h3 className="font-black text-lg">
                                Fast Delivery
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* RATING */}
                        <div>

                          <h3 className="text-2xl font-black text-gray-900">
                            Your Rating
                          </h3>

                          <div className="flex items-center gap-2 mt-4">

                            {[...Array(
                              order.rating
                            )].map(
                              (
                                _,
                                index
                              ) => (

                                <Star
                                  key={
                                    index
                                  }
                                  size={
                                    28
                                  }
                                  fill="orange"
                                  className="text-orange-400"
                                />
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      {/* BUTTONS */}
                      <div className="flex flex-wrap gap-4 mt-8">

                        <button className="bg-black hover:scale-105 transition text-white rounded-2xl px-7 py-4 flex items-center justify-center gap-3 font-bold text-lg">

                          <Pencil
                            size={22}
                          />

                          Write Review
                        </button>

                        <button className="bg-gray-200 hover:bg-gray-300 transition rounded-2xl px-7 py-4 flex items-center justify-center gap-3 font-bold text-lg">

                          <Download
                            size={22}
                          />

                          Invoice
                        </button>

                        <button className="bg-orange-500 hover:bg-orange-600 transition text-white rounded-2xl px-7 py-4 flex items-center justify-center gap-3 font-bold text-lg">

                          <Truck
                            size={22}
                          />

                          Track Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}

        {/* EMPTY STATE */}
        {filteredOrders.length ===
          0 && (

          <div className="bg-white rounded-[40px] p-16 text-center shadow-xl">

            <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center mx-auto">

              <ShoppingBag
                size={50}
                className="text-gray-400"
              />
            </div>

            <h2 className="text-4xl font-black mt-8 text-gray-900">
              No Orders Found
            </h2>

            <p className="text-gray-500 text-lg mt-3">
              Try searching with another product name.
            </p>

            <button
              onClick={() =>
                setSearch("")
              }
              className="mt-8 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;