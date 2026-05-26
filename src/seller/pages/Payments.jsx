// src/seller/pages/Payments.jsx

import React, {
  useState,
} from "react";

import {
  Wallet,
  IndianRupee,
  CreditCard,
  Landmark,
  Smartphone,
  CheckCircle2,
  Clock3,
  XCircle,
  Search,
  Filter,
  Download,
  Eye,
  CalendarDays,
  BadgeCheck,
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  Receipt,
} from "lucide-react";

function Payments() {
  /* ==========================================
     STATES
  ========================================== */

  const [search,
    setSearch] =
    useState("");

  const [payments] =
    useState([
      {
        id: "PAY1001",
        customer:
          "Rahul Sharma",

        amount: 25000,

        method: "UPI",

        status:
          "Completed",

        type: "Credit",

        date:
          "15 May 2026",

        order:
          "ORD1001",
      },

      {
        id: "PAY1002",
        customer:
          "Priya Singh",

        amount: 18000,

        method:
          "Credit Card",

        status:
          "Pending",

        type: "Credit",

        date:
          "16 May 2026",

        order:
          "ORD1002",
      },

      {
        id: "PAY1003",
        customer:
          "Amit Kumar",

        amount: 9500,

        method:
          "Cash On Delivery",

        status:
          "Completed",

        type: "Credit",

        date:
          "17 May 2026",

        order:
          "ORD1003",
      },

      {
        id: "PAY1004",
        customer:
          "Sneha Patel",

        amount: 42000,

        method:
          "Net Banking",

        status:
          "Failed",

        type: "Debit",

        date:
          "18 May 2026",

        order:
          "ORD1004",
      },
    ]);

  /* ==========================================
     FILTER PAYMENTS
  ========================================== */

  const filteredPayments =
    payments.filter(
      (payment) =>
        payment.customer
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        payment.id
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        payment.order
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  /* ==========================================
     TOTALS
  ========================================== */

  const totalRevenue =
    payments
      .filter(
        (item) =>
          item.status ===
          "Completed"
      )
      .reduce(
        (acc, item) =>
          acc + item.amount,
        0
      );

  const pendingAmount =
    payments
      .filter(
        (item) =>
          item.status ===
          "Pending"
      )
      .reduce(
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
        case "Completed":
          return "bg-green-100 text-green-700";

        case "Pending":
          return "bg-yellow-100 text-yellow-700";

        case "Failed":
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
        case "Completed":
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

        case "Failed":
          return (
            <XCircle
              size={18}
            />
          );

        default:
          return (
            <Wallet
              size={18}
            />
          );
      }
    };

  /* ==========================================
     PAYMENT METHOD ICON
  ========================================== */

  const getPaymentIcon =
    (method) => {
      switch (method) {
        case "UPI":
          return (
            <Smartphone
              size={20}
            />
          );

        case "Credit Card":
          return (
            <CreditCard
              size={20}
            />
          );

        case "Net Banking":
          return (
            <Landmark
              size={20}
            />
          );

        default:
          return (
            <Wallet
              size={20}
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
            Payments
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Manage furniture store transactions and payment records
          </p>
        </div>

        {/* REVENUE CARD */}

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-6 text-white shadow-2xl flex items-center gap-5">
          
          <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center">
            <IndianRupee
              size={40}
            />
          </div>

          <div>
            <p className="opacity-80">
              Total Revenue
            </p>

            <h2 className="text-4xl font-black mt-1">
              ₹
              {totalRevenue.toLocaleString()}
            </h2>

            <p className="text-sm opacity-80 mt-1">
              Successful payments
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
                Transactions
              </p>

              <h2 className="text-4xl font-black text-gray-800 mt-2">
                {
                  payments.length
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Wallet size={34} />
            </div>
          </div>
        </div>

        {/* COMPLETED */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Completed
              </p>

              <h2 className="text-4xl font-black text-green-600 mt-2">
                {
                  payments.filter(
                    (item) =>
                      item.status ===
                      "Completed"
                  ).length
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-green-100 text-green-600 flex items-center justify-center">
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
                ₹
                {pendingAmount.toLocaleString()}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <Clock3
                size={34}
              />
            </div>
          </div>
        </div>

        {/* GROWTH */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Growth
              </p>

              <h2 className="text-4xl font-black text-blue-600 mt-2">
                +24%
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <TrendingUp
                size={34}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          PAYMENT TABLE
      ========================================== */}

      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        
        {/* TOP */}

        <div className="p-6 border-b border-gray-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          
          <div>
            <h2 className="text-2xl font-black text-gray-800">
              Payment Transactions
            </h2>

            <p className="text-gray-500 mt-1">
              View all customer payment records
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
                placeholder="Search payments..."
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
                  Payment ID
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Customer
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Method
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Date
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
              
              {filteredPayments.map(
                (payment) => (
                  <tr
                    key={
                      payment.id
                    }
                    className="border-b border-gray-100 hover:bg-orange-50 transition-all"
                  >
                    
                    {/* PAYMENT ID */}

                    <td className="px-6 py-5">
                      
                      <div>
                        <h3 className="font-black text-gray-800 text-lg">
                          {
                            payment.id
                          }
                        </h3>

                        <p className="text-gray-500">
                          Order: #
                          {
                            payment.order
                          }
                        </p>
                      </div>
                    </td>

                    {/* CUSTOMER */}

                    <td className="px-6 py-5">
                      
                      <div>
                        <h3 className="font-black text-gray-800">
                          {
                            payment.customer
                          }
                        </h3>

                        <p className="text-gray-500 text-sm">
                          Furniture Buyer
                        </p>
                      </div>
                    </td>

                    {/* METHOD */}

                    <td className="px-6 py-5">
                      
                      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm">
                        
                        {getPaymentIcon(
                          payment.method
                        )}

                        {
                          payment.method
                        }
                      </div>
                    </td>

                    {/* DATE */}

                    <td className="px-6 py-5">
                      
                      <div className="flex items-center gap-2 text-gray-700 font-semibold">
                        
                        <CalendarDays
                          size={18}
                        />

                        {
                          payment.date
                        }
                      </div>
                    </td>

                    {/* AMOUNT */}

                    <td className="px-6 py-5">
                      
                      <div className="flex items-center gap-2">
                        
                        {payment.type ===
                        "Credit" ? (
                          <ArrowDownLeft
                            size={20}
                            className="text-green-600"
                          />
                        ) : (
                          <ArrowUpRight
                            size={20}
                            className="text-red-600"
                          />
                        )}

                        <span className="font-black text-xl text-orange-600">
                          ₹
                          {payment.amount.toLocaleString()}
                        </span>
                      </div>
                    </td>

                    {/* STATUS */}

                    <td className="px-6 py-5">
                      
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm ${getStatusColor(
                          payment.status
                        )}`}
                      >
                        {getStatusIcon(
                          payment.status
                        )}

                        {
                          payment.status
                        }
                      </div>
                    </td>

                    {/* ACTIONS */}

                    <td className="px-6 py-5">
                      
                      <div className="flex items-center justify-center gap-3">
                        
                        {/* VIEW */}

                        <button className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center">
                          
                          <Eye
                            size={20}
                          />
                        </button>

                        {/* DOWNLOAD */}

                        <button className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 hover:bg-green-500 hover:text-white transition-all flex items-center justify-center">
                          
                          <Download
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

          {filteredPayments.length ===
            0 && (
            <div className="text-center py-20">
              
              <Receipt
                size={80}
                className="mx-auto text-gray-300"
              />

              <h2 className="text-3xl font-black text-gray-700 mt-5">
                No Payments Found
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
                <Wallet size={34} />
              </div>

              <h2 className="text-3xl font-black">
                Secure Payment Management
              </h2>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed">
              Monitor transactions, verify successful payments,
              track pending amounts, and manage invoices for
              your furniture business with ease.
            </p>
          </div>

          <button className="bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 rounded-2xl text-lg font-black hover:scale-105 transition-all shadow-xl">
            Export Reports
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payments;