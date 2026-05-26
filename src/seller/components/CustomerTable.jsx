import React, { useState } from "react";
import {
  Search,
  Eye,
  Trash2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const customerData = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    location: "Delhi",
    orders: 12,
    spent: "₹45,000",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@gmail.com",
    phone: "+91 9876501234",
    location: "Mumbai",
    orders: 8,
    spent: "₹28,000",
    status: "Active",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@gmail.com",
    phone: "+91 9998877766",
    location: "Bangalore",
    orders: 4,
    spent: "₹15,000",
    status: "Blocked",
  },
  {
    id: 4,
    name: "Sneha Verma",
    email: "sneha@gmail.com",
    phone: "+91 9123456789",
    location: "Kolkata",
    orders: 18,
    spent: "₹72,000",
    status: "Active",
  },
];

export default function CustomerTable() {
  const [search, setSearch] = useState("");

  const filteredCustomers = customerData.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Customers
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Manage all customer details and activities.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
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
      <table className="w-full min-w-[900px] border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600 text-sm uppercase">
            <th className="p-4 rounded-l-2xl">Customer</th>
            <th className="p-4">Contact</th>
            <th className="p-4">Location</th>
            <th className="p-4">Orders</th>
            <th className="p-4">Spent</th>
            <th className="p-4">Status</th>
            <th className="p-4 rounded-r-2xl">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredCustomers.length > 0 ? (
            filteredCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                {/* Customer */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                      {customer.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {customer.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Customer ID: #{customer.id}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Contact */}
                <td className="p-4">
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail size={14} />
                      {customer.email}
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={14} />
                      {customer.phone}
                    </div>
                  </div>
                </td>

                {/* Location */}
                <td className="p-4 text-gray-700">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-red-500" />
                    {customer.location}
                  </div>
                </td>

                {/* Orders */}
                <td className="p-4 font-semibold text-blue-600">
                  {customer.orders}
                </td>

                {/* Spent */}
                <td className="p-4 font-semibold text-green-600">
                  {customer.spent}
                </td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {customer.status}
                  </span>
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
                colSpan="7"
                className="text-center py-10 text-gray-500"
              >
                No customers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
