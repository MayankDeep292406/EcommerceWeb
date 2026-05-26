// src/seller/pages/Customers.jsx

import React, {
  useState,
} from "react";

import {
  Search,
  Users,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  IndianRupee,
  Eye,
  Trash2,
  UserPlus,
  Star,
  BadgeCheck,
} from "lucide-react";

function Customers() {
  /* ==========================================
     STATES
  ========================================== */

  const [search,
    setSearch] =
    useState("");

  const [customers,
    setCustomers] =
    useState([
      {
        id: 1,
        name: "Rahul Sharma",
        email:
          "rahul@gmail.com",
        phone:
          "+91 9876543210",
        location:
          "Delhi, India",
        orders: 12,
        spent: 125000,
        status: "Premium",
        image:
          "https://randomuser.me/api/portraits/men/32.jpg",
      },

      {
        id: 2,
        name: "Priya Singh",
        email:
          "priya@gmail.com",
        phone:
          "+91 9876501234",
        location:
          "Mumbai, India",
        orders: 8,
        spent: 85000,
        status: "Active",
        image:
          "https://randomuser.me/api/portraits/women/44.jpg",
      },

      {
        id: 3,
        name: "Amit Kumar",
        email:
          "amit@gmail.com",
        phone:
          "+91 9876511111",
        location:
          "Bangalore, India",
        orders: 5,
        spent: 45000,
        status: "New",
        image:
          "https://randomuser.me/api/portraits/men/45.jpg",
      },

      {
        id: 4,
        name: "Sneha Patel",
        email:
          "sneha@gmail.com",
        phone:
          "+91 9988776655",
        location:
          "Kolkata, India",
        orders: 15,
        spent: 225000,
        status: "Premium",
        image:
          "https://randomuser.me/api/portraits/women/68.jpg",
      },
    ]);

  /* ==========================================
     DELETE CUSTOMER
  ========================================== */

  const deleteCustomer =
    (id) => {
      setCustomers(
        customers.filter(
          (customer) =>
            customer.id !== id
        )
      );
    };

  /* ==========================================
     FILTER CUSTOMERS
  ========================================== */

  const filteredCustomers =
    customers.filter(
      (customer) =>
        customer.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        customer.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <div className="space-y-8">
      
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        
        <div>
          <h1 className="text-4xl font-black text-gray-800">
            Customers
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Manage furniture shop customers
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 rounded-3xl shadow-xl flex items-center gap-4">
          
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
            <Users size={28} />
          </div>

          <div>
            <p className="text-sm opacity-80">
              Total Customers
            </p>

            <h2 className="text-2xl font-black">
              {
                customers.length
              }
            </h2>
          </div>
        </div>
      </div>

      {/* ==========================================
          STATS
      ========================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* TOTAL */}

        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Total Customers
              </p>

              <h2 className="text-4xl font-black text-gray-800 mt-2">
                {
                  customers.length
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Users size={32} />
            </div>
          </div>
        </div>

        {/* PREMIUM */}

        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Premium Users
              </p>

              <h2 className="text-4xl font-black text-gray-800 mt-2">
                {
                  customers.filter(
                    (c) =>
                      c.status ===
                      "Premium"
                  ).length
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <Star size={32} />
            </div>
          </div>
        </div>

        {/* ORDERS */}

        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Total Orders
              </p>

              <h2 className="text-4xl font-black text-gray-800 mt-2">
                {customers.reduce(
                  (
                    total,
                    customer
                  ) =>
                    total +
                    customer.orders,
                  0
                )}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <ShoppingBag
                size={32}
              />
            </div>
          </div>
        </div>

        {/* REVENUE */}

        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Revenue
              </p>

              <h2 className="text-3xl font-black text-gray-800 mt-2">
                ₹
                {customers
                  .reduce(
                    (
                      total,
                      customer
                    ) =>
                      total +
                      customer.spent,
                    0
                  )
                  .toLocaleString()}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-green-100 text-green-600 flex items-center justify-center">
              <IndianRupee
                size={32}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          CUSTOMER TABLE
      ========================================== */}

      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        
        {/* TOP */}

        <div className="p-6 border-b border-gray-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          
          <div>
            <h2 className="text-2xl font-black text-gray-800">
              Customer List
            </h2>

            <p className="text-gray-500 mt-1">
              View all registered customers
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
                placeholder="Search customers..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
              />
            </div>

            {/* BUTTON */}

            <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-lg">
              
              <UserPlus
                size={20}
              />

              Add Customer
            </button>
          </div>
        </div>

        {/* TABLE */}

        <div className="overflow-x-auto">
          
          <table className="w-full">
            
            <thead className="bg-gray-50">
              
              <tr>
                
                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Customer
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Contact
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Location
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Orders
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Spending
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
              
              {filteredCustomers.map(
                (customer) => (
                  <tr
                    key={
                      customer.id
                    }
                    className="border-b border-gray-100 hover:bg-orange-50 transition-all"
                  >
                    
                    {/* CUSTOMER */}

                    <td className="px-6 py-5">
                      
                      <div className="flex items-center gap-4">
                        
                        <img
                          src={
                            customer.image
                          }
                          alt={
                            customer.name
                          }
                          className="w-16 h-16 rounded-2xl object-cover"
                        />

                        <div>
                          <h3 className="font-black text-gray-800 text-lg">
                            {
                              customer.name
                            }
                          </h3>

                          <p className="text-gray-500">
                            {
                              customer.email
                            }
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* CONTACT */}

                    <td className="px-6 py-5">
                      
                      <div className="space-y-2">
                        
                        <div className="flex items-center gap-2 text-gray-700">
                          <Mail
                            size={16}
                          />

                          <span>
                            {
                              customer.email
                            }
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-700">
                          <Phone
                            size={16}
                          />

                          <span>
                            {
                              customer.phone
                            }
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* LOCATION */}

                    <td className="px-6 py-5">
                      
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin
                          size={18}
                        />

                        <span>
                          {
                            customer.location
                          }
                        </span>
                      </div>
                    </td>

                    {/* ORDERS */}

                    <td className="px-6 py-5">
                      
                      <div className="font-black text-lg text-gray-800">
                        {
                          customer.orders
                        }
                      </div>
                    </td>

                    {/* SPENDING */}

                    <td className="px-6 py-5">
                      
                      <div className="font-black text-lg text-orange-600">
                        ₹
                        {customer.spent.toLocaleString()}
                      </div>
                    </td>

                    {/* STATUS */}

                    <td className="px-6 py-5">
                      
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-bold ${
                          customer.status ===
                          "Premium"
                            ? "bg-yellow-100 text-yellow-700"
                            : customer.status ===
                              "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {
                          customer.status
                        }
                      </span>
                    </td>

                    {/* ACTIONS */}

                    <td className="px-6 py-5">
                      
                      <div className="flex items-center justify-center gap-3">
                        
                        <button className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center">
                          
                          <Eye
                            size={20}
                          />
                        </button>

                        <button
                          onClick={() =>
                            deleteCustomer(
                              customer.id
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

          {filteredCustomers.length ===
            0 && (
            <div className="text-center py-20">
              
              <Users
                size={80}
                className="mx-auto text-gray-300"
              />

              <h2 className="text-3xl font-black text-gray-700 mt-5">
                No Customers Found
              </h2>

              <p className="text-gray-500 mt-2">
                Try searching with another keyword
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ==========================================
          PREMIUM CARD
      ========================================== */}

      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white shadow-2xl">
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          <div className="max-w-2xl">
            
            <div className="flex items-center gap-3 mb-4">
              
              <BadgeCheck
                size={32}
              />

              <h2 className="text-3xl font-black">
                Premium Customer Program
              </h2>
            </div>

            <p className="text-lg opacity-90 leading-relaxed">
              Reward your top furniture buyers with
              exclusive discounts, early access to
              collections, and premium support.
            </p>
          </div>

          <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl">
            Launch Program
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customers;