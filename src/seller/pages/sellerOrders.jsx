// src/seller/pages/SellerOrders.jsx

import React, {
  useState,
} from "react";

import {
  ShoppingCart,
  Search,
  Filter,
  Eye,
  Trash2,
  Package,
  Truck,
  CheckCircle2,
  Clock3,
  XCircle,
  IndianRupee,
  CalendarDays,
  User,
  BadgeCheck,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

function sellerOrders() {
  /* ==========================================
     NAVIGATION
  ========================================== */

  const navigate =
    useNavigate();

  /* ==========================================
     STATES
  ========================================== */

  const [search,
    setSearch] =
    useState("");

  const [orders,
    setOrders] =
    useState([
      {
        id: "ORD1001",
        customer:
          "Rahul Sharma",

        product:
          "Modern Luxury Sofa",

        amount: 25000,

        payment:
          "UPI",

        status:
          "Delivered",

        date:
          "15 May 2026",

        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      },

      {
        id: "ORD1002",
        customer:
          "Priya Singh",

        product:
          "Wooden Dining Table",

        amount: 18000,

        payment:
          "Card",

        status:
          "Pending",

        date:
          "16 May 2026",

        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      },

      {
        id: "ORD1003",
        customer:
          "Amit Kumar",

        product:
          "Premium Office Chair",

        amount: 9500,

        payment:
          "Cash On Delivery",

        status:
          "Shipped",

        date:
          "17 May 2026",

        image:
          "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
      },

      {
        id: "ORD1004",
        customer:
          "Sneha Patel",

        product:
          "King Size Bed",

        amount: 42000,

        payment:
          "Net Banking",

        status:
          "Cancelled",

        date:
          "18 May 2026",

        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      },
    ]);

  /* ==========================================
     DELETE ORDER
  ========================================== */

  const deleteOrder =
    (id) => {
      setOrders(
        orders.filter(
          (order) =>
            order.id !== id
        )
      );
    };

  /* ==========================================
     FILTER ORDERS
  ========================================== */

  const filteredOrders =
    orders.filter(
      (order) =>
        order.customer
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        order.id
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        order.product
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  /* ==========================================
     TOTALS
  ========================================== */

  const totalRevenue =
    orders.reduce(
      (acc, item) =>
        acc + item.amount,
      0
    );

  /* ==========================================
     STATUS COLORS
  ========================================== */

  const getStatusColor =
    (status) => {
      switch (status) {
        case "Delivered":
          return "bg-green-100 text-green-700";

        case "Pending":
          return "bg-yellow-100 text-yellow-700";

        case "Shipped":
          return "bg-blue-100 text-blue-700";

        case "Cancelled":
          return "bg-red-100 text-red-700";

        default:
          return "bg-gray-100 text-gray-700";
      }
    };

  /* ==========================================
     STATUS ICONS
  ========================================== */

  const getStatusIcon =
    (status) => {
      switch (status) {
        case "Delivered":
          return (
            <CheckCircle2
              size={18}
            />
          );

        case "Pending":
          return (
            <Clock3
              size={18}
            />
          );

        case "Shipped":
          return (
            <Truck size={18} />
          );

        case "Cancelled":
          return (
            <XCircle
              size={18}
            />
          );

        default:
          return (
            <Package
              size={18}
            />
          );
      }
    };

  return (
    <div className="space-y-8">
      
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
        
        <div>
          <h1 className="text-4xl font-black text-gray-800">
            Seller Orders
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Manage customer orders and delivery updates
          </p>
        </div>

        {/* STATUS CARD */}

        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-6 text-white shadow-2xl flex items-center gap-5">
          
          <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center">
            <ShoppingCart
              size={40}
            />
          </div>

          <div>
            <p className="opacity-80">
              Total Orders
            </p>

            <h2 className="text-4xl font-black mt-1">
              {
                orders.length
              }
            </h2>

            <p className="text-sm opacity-80 mt-1">
              Furniture orders received
            </p>
          </div>
        </div>
      </div>

      {/* ==========================================
          STATS
      ========================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* TOTAL */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Total Orders
              </p>

              <h2 className="text-4xl font-black text-gray-800 mt-2">
                {
                  orders.length
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <ShoppingCart
                size={34}
              />
            </div>
          </div>
        </div>

        {/* REVENUE */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Revenue
              </p>

              <h2 className="text-3xl font-black text-green-600 mt-2">
                ₹
                {totalRevenue.toLocaleString()}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-green-100 text-green-600 flex items-center justify-center">
              <IndianRupee
                size={34}
              />
            </div>
          </div>
        </div>

        {/* DELIVERED */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Delivered
              </p>

              <h2 className="text-4xl font-black text-blue-600 mt-2">
                {
                  orders.filter(
                    (item) =>
                      item.status ===
                      "Delivered"
                  ).length
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <CheckCircle2
                size={34}
              />
            </div>
          </div>
        </div>

        {/* PENDING */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Pending
              </p>

              <h2 className="text-4xl font-black text-yellow-600 mt-2">
                {
                  orders.filter(
                    (item) =>
                      item.status ===
                      "Pending"
                  ).length
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <Clock3
                size={34}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          TABLE
      ========================================== */}

      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        
        {/* TOP */}

        <div className="p-6 border-b border-gray-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          
          <div>
            <h2 className="text-2xl font-black text-gray-800">
              Order List
            </h2>

            <p className="text-gray-500 mt-1">
              View and manage furniture orders
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* SEARCH */}

            <div className="relative w-full md:w-80">
              
              <Search
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search orders..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
              />
            </div>

            {/* FILTER */}

            <button className="bg-gray-100 hover:bg-orange-100 transition-all px-6 py-4 rounded-2xl font-bold text-gray-700 flex items-center gap-2">
              
              <Filter
                size={20}
              />

              Filter
            </button>
          </div>
        </div>

        {/* TABLE */}

        <div className="overflow-x-auto">
          
          <table className="w-full">
            
            <thead className="bg-gray-50">
              
              <tr>
                
                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Product
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Customer
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Date
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Payment
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Amount
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Status
                </th>

                <th className="text-center px-6 py-5 font-black text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              
              {filteredOrders.map(
                (order) => (
                  <tr
                    key={
                      order.id
                    }
                    className="border-b border-gray-100 hover:bg-orange-50 transition-all"
                  >
                    
                    {/* PRODUCT */}

                    <td className="px-6 py-5">
                      
                      <div className="flex items-center gap-4">
                        
                        <img
                          src={
                            order.image
                          }
                          alt={
                            order.product
                          }
                          className="w-20 h-20 rounded-2xl object-cover"
                        />

                        <div>
                          <h3 className="font-black text-gray-800 text-lg">
                            {
                              order.product
                            }
                          </h3>

                          <p className="text-gray-500">
                            Order ID: #
                            {
                              order.id
                            }
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* CUSTOMER */}

                    <td className="px-6 py-5">
                      
                      <div className="flex items-center gap-3">
                        
                        <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                          
                          <User
                            size={22}
                          />
                        </div>

                        <div>
                          <h3 className="font-black text-gray-800">
                            {
                              order.customer
                            }
                          </h3>

                          <p className="text-gray-500 text-sm">
                            Verified Buyer
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* DATE */}

                    <td className="px-6 py-5">
                      
                      <div className="flex items-center gap-2 text-gray-700 font-semibold">
                        
                        <CalendarDays
                          size={18}
                        />

                        {
                          order.date
                        }
                      </div>
                    </td>

                    {/* PAYMENT */}

                    <td className="px-6 py-5">
                      
                      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm">
                        
                        <BadgeCheck
                          size={16}
                        />

                        {
                          order.payment
                        }
                      </div>
                    </td>

                    {/* AMOUNT */}

                    <td className="px-6 py-5">
                      
                      <div className="font-black text-orange-600 text-xl">
                        ₹
                        {order.amount.toLocaleString()}
                      </div>
                    </td>

                    {/* STATUS */}

                    <td className="px-6 py-5">
                      
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {getStatusIcon(
                          order.status
                        )}

                        {
                          order.status
                        }
                      </div>
                    </td>

                    {/* ACTIONS */}

                    <td className="px-6 py-5">
                      
                      <div className="flex items-center justify-center gap-3">
                        
                        {/* VIEW */}

                        <button
                          onClick={() =>
                            navigate(
                              `/seller/order-details/${order.id}`
                            )
                          }
                          className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center"
                        >
                          <Eye
                            size={20}
                          />
                        </button>

                        {/* DELETE */}

                        <button
                          onClick={() =>
                            deleteOrder(
                              order.id
                            )
                          }
                          className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
                        >
                          <Trash2
                            size={20}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          {/* EMPTY */}

          {filteredOrders.length ===
            0 && (
            <div className="text-center py-20">
              
              <Package
                size={80}
                className="mx-auto text-gray-300"
              />

              <h2 className="text-3xl font-black text-gray-700 mt-5">
                No Orders Found
              </h2>

              <p className="text-gray-500 mt-2">
                Try another search keyword
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ==========================================
          FOOTER CARD
      ========================================== */}

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-2xl">
        
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
          
          <div className="max-w-3xl">
            
            <div className="flex items-center gap-4 mb-4">
              
              <div className="w-16 h-16 rounded-3xl bg-orange-500 flex items-center justify-center">
                <Truck size={34} />
              </div>

              <h2 className="text-3xl font-black">
                Fast & Secure Order Management
              </h2>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed">
              Track deliveries, manage payments, update shipping
              statuses, and provide premium customer experience
              for your furniture buyers.
            </p>
          </div>

          <button className="bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 rounded-2xl text-lg font-black hover:scale-105 transition-all shadow-xl">
            Manage Deliveries
          </button>
        </div>
      </div>
    </div>
  );
}

export default sellerOrders;