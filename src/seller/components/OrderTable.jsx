// src/components/OrderTable.jsx

import React, { useState } from "react";
import {
  Search,
  Eye,
  Trash2,
  Truck,
  PackageCheck,
  Clock3,
} from "lucide-react";

const orderData = [
  {
    id: "#ORD1001",
    customer: "Rahul Sharma",
    product: "Modern Sofa Set",
    amount: "₹25,000",
    payment: "Paid",
    status: "Delivered",
    date: "12 May 2026",
  },
  {
    id: "#ORD1002",
    customer: "Priya Singh",
    product: "Dining Table",
    amount: "₹15,500",
    payment: "Pending",
    status: "Processing",
    date: "13 May 2026",
  },
  {
    id: "#ORD1003",
    customer: "Amit Kumar",
    product: "Wooden Chair",
    amount: "₹4,200",
    payment: "Paid",
    status: "Shipped",
    date: "14 May 2026",
  },
  {
    id: "#ORD1004",
    customer: "Sneha Verma",
    product: "Bedroom Wardrobe",
    amount: "₹32,000",
    payment: "Paid",
    status: "Delivered",
    date: "15 May 2026",
  },
];

export default function OrderTable() {
  const [search, setSearch] = useState("");

  const filteredOrders = orderData.filter((order) =>
    order.customer.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-600";
      case "Processing":
        return "bg-yellow-100 text-yellow-600";
      case "Shipped":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <PackageCheck size={16} />;
      case "Processing":
        return <Clock3 size={16} />;
      case "Shipped":
        return <Truck size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Orders Management
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Manage customer orders and track deliveries.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-80">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full min-w-[950px] border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
            <th className="p-4 text-left rounded-l-2xl">Order ID</th>
            <th className="p-4 text-left">Customer</th>
            <th className="p-4 text-left">Product</th>
            <th className="p-4 text-left">Amount</th>
            <th className="p-4 text-left">Payment</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left rounded-r-2xl">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                {/* Order ID */}
                <td className="p-4 font-semibold text-indigo-600">
                  {order.id}
                </td>

                {/* Customer */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
                      {order.customer.charAt(0)}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {order.customer}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Premium Customer
                      </p>
                    </div>
                  </div>
                </td>

                {/* Product */}
                <td className="p-4 text-gray-700">
                  {order.product}
                </td>

                {/* Amount */}
                <td className="p-4 font-bold text-green-600">
                  {order.amount}
                </td>

                {/* Payment */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.payment === "Paid"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.payment}
                  </span>
                </td>

                {/* Status */}
                <td className="p-4">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    {getStatusIcon(order.status)}
                    {order.status}
                  </div>
                </td>

                {/* Date */}
                <td className="p-4 text-gray-600">
                  {order.date}
                </td>

                {/* Actions */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
                      <Eye size={18} />
                    </button>

                    <button className="p-2 rounded-xl bg-red-100 text-red-600 hover:bg-red-200 transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="8"
                className="text-center py-10 text-gray-500"
              >
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}