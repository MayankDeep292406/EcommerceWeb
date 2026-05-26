// src/seller/pages/Notification.jsx

import React, {
  useState,
} from "react";

import {
  Bell,
  ShoppingCart,
  AlertTriangle,
  Package,
  Star,
  Truck,
  CheckCircle2,
  Trash2,
  Eye,
  Search,
  Filter,
  Clock3,
  BadgeCheck,
  XCircle,
  MessageCircle,
} from "lucide-react";

function Notifications() {
  /* ==========================================
     STATES
  ========================================== */

  const [search,
    setSearch] =
    useState("");

  const [notifications,
    setNotifications] =
    useState([
      {
        id: 1,
        title:
          "New Order Received",
        message:
          "Rahul Sharma placed an order for Luxury Sofa worth ₹25,000.",
        type: "order",
        time: "2 mins ago",
        read: false,
      },

      {
        id: 2,
        title:
          "Low Stock Alert",
        message:
          "Wooden Dining Table stock is below 5 units.",
        type: "stock",
        time: "15 mins ago",
        read: false,
      },

      {
        id: 3,
        title:
          "Product Delivered",
        message:
          "Office Chair order #ORD1024 has been delivered successfully.",
        type: "delivery",
        time: "1 hour ago",
        read: true,
      },

      {
        id: 4,
        title:
          "New Customer Review",
        message:
          "Priya Singh gave a 5-star review for Premium Sofa.",
        type: "review",
        time: "3 hours ago",
        read: false,
      },

      {
        id: 5,
        title:
          "Payment Received",
        message:
          "Payment of ₹42,000 received for King Size Bed.",
        type: "payment",
        time: "5 hours ago",
        read: true,
      },

      {
        id: 6,
        title:
          "Customer Message",
        message:
          "Amit Kumar sent a message regarding shipping details.",
        type: "message",
        time: "Yesterday",
        read: false,
      },
    ]);

  /* ==========================================
     DELETE NOTIFICATION
  ========================================== */

  const deleteNotification =
    (id) => {
      setNotifications(
        notifications.filter(
          (item) =>
            item.id !== id
        )
      );
    };

  /* ==========================================
     MARK AS READ
  ========================================== */

  const markAsRead =
    (id) => {
      setNotifications(
        notifications.map(
          (item) =>
            item.id === id
              ? {
                  ...item,
                  read: true,
                }
              : item
        )
      );
    };

  /* ==========================================
     FILTER NOTIFICATIONS
  ========================================== */

  const filteredNotifications =
    notifications.filter(
      (item) =>
        item.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.message
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  /* ==========================================
     ICONS
  ========================================== */

  const getIcon = (
    type
  ) => {
    switch (type) {
      case "order":
        return (
          <ShoppingCart
            size={28}
          />
        );

      case "stock":
        return (
          <AlertTriangle
            size={28}
          />
        );

      case "delivery":
        return (
          <Truck size={28} />
        );

      case "review":
        return (
          <Star size={28} />
        );

      case "payment":
        return (
          <CheckCircle2
            size={28}
          />
        );

      case "message":
        return (
          <MessageCircle
            size={28}
          />
        );

      default:
        return (
          <Bell size={28} />
        );
    }
  };

  /* ==========================================
     COLORS
  ========================================== */

  const getColor = (
    type
  ) => {
    switch (type) {
      case "order":
        return "bg-orange-100 text-orange-600";

      case "stock":
        return "bg-red-100 text-red-600";

      case "delivery":
        return "bg-blue-100 text-blue-600";

      case "review":
        return "bg-yellow-100 text-yellow-600";

      case "payment":
        return "bg-green-100 text-green-600";

      case "message":
        return "bg-purple-100 text-purple-600";

      default:
        return "bg-gray-100 text-gray-600";
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
            Notifications
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Stay updated with store alerts and customer activities
          </p>
        </div>

        {/* STATUS CARD */}

        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-6 text-white shadow-2xl flex items-center gap-5">
          
          <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center">
            <Bell size={40} />
          </div>

          <div>
            <p className="opacity-80">
              Unread Notifications
            </p>

            <h2 className="text-4xl font-black mt-1">
              {
                notifications.filter(
                  (item) =>
                    !item.read
                ).length
              }
            </h2>

            <p className="text-sm opacity-80 mt-1">
              Need your attention
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
                Total Alerts
              </p>

              <h2 className="text-4xl font-black text-gray-800 mt-2">
                {
                  notifications.length
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Bell size={34} />
            </div>
          </div>
        </div>

        {/* UNREAD */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Unread
              </p>

              <h2 className="text-4xl font-black text-red-600 mt-2">
                {
                  notifications.filter(
                    (item) =>
                      !item.read
                  ).length
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-red-100 text-red-600 flex items-center justify-center">
              <AlertTriangle
                size={34}
              />
            </div>
          </div>
        </div>

        {/* ORDERS */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Orders
              </p>

              <h2 className="text-4xl font-black text-green-600 mt-2">
                {
                  notifications.filter(
                    (item) =>
                      item.type ===
                      "order"
                  ).length
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-green-100 text-green-600 flex items-center justify-center">
              <ShoppingCart
                size={34}
              />
            </div>
          </div>
        </div>

        {/* REVIEWS */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Reviews
              </p>

              <h2 className="text-4xl font-black text-yellow-600 mt-2">
                {
                  notifications.filter(
                    (item) =>
                      item.type ===
                      "review"
                  ).length
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <Star size={34} />
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          NOTIFICATION LIST
      ========================================== */}

      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        
        {/* TOP */}

        <div className="p-6 border-b border-gray-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          
          <div>
            <h2 className="text-2xl font-black text-gray-800">
              All Notifications
            </h2>

            <p className="text-gray-500 mt-1">
              Recent updates and alerts
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
                placeholder="Search notifications..."
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

        {/* LIST */}

        <div className="divide-y divide-gray-100">
          
          {filteredNotifications.map(
            (
              notification
            ) => (
              <div
                key={
                  notification.id
                }
                className={`p-6 hover:bg-orange-50 transition-all ${
                  !notification.read
                    ? "bg-orange-50/40"
                    : ""
                }`}
              >
                
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5">
                  
                  {/* LEFT */}

                  <div className="flex items-start gap-5">
                    
                    <div
                      className={`w-16 h-16 rounded-3xl flex items-center justify-center ${getColor(
                        notification.type
                      )}`}
                    >
                      {getIcon(
                        notification.type
                      )}
                    </div>

                    <div className="flex-1">
                      
                      <div className="flex items-center gap-3 flex-wrap">
                        
                        <h3 className="text-xl font-black text-gray-800">
                          {
                            notification.title
                          }
                        </h3>

                        {!notification.read && (
                          <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">
                            New
                          </span>
                        )}
                      </div>

                      <p className="text-gray-600 mt-2 leading-relaxed">
                        {
                          notification.message
                        }
                      </p>

                      <div className="flex items-center gap-2 mt-4 text-gray-400 text-sm">
                        
                        <Clock3
                          size={16}
                        />

                        {
                          notification.time
                        }
                      </div>
                    </div>
                  </div>

                  {/* ACTIONS */}

                  <div className="flex items-center gap-3">
                    
                    {/* VIEW */}

                    <button className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center">
                      
                      <Eye
                        size={20}
                      />
                    </button>

                    {/* READ */}

                    {!notification.read && (
                      <button
                        onClick={() =>
                          markAsRead(
                            notification.id
                          )
                        }
                        className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 hover:bg-green-500 hover:text-white transition-all flex items-center justify-center"
                      >
                        <BadgeCheck
                          size={20}
                        />
                      </button>
                    )}

                    {/* DELETE */}

                    <button
                      onClick={() =>
                        deleteNotification(
                          notification.id
                        )
                      }
                      className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
                    >
                      <Trash2
                        size={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )
          )}

          {/* EMPTY */}

          {filteredNotifications.length ===
            0 && (
            <div className="text-center py-20">
              
              <XCircle
                size={80}
                className="mx-auto text-gray-300"
              />

              <h2 className="text-3xl font-black text-gray-700 mt-5">
                No Notifications Found
              </h2>

              <p className="text-gray-500 mt-2">
                Try another search keyword
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ==========================================
          BOTTOM CARD
      ========================================== */}

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-2xl">
        
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
          
          <div className="max-w-3xl">
            
            <div className="flex items-center gap-4 mb-4">
              
              <div className="w-16 h-16 rounded-3xl bg-orange-500 flex items-center justify-center">
                <Package size={34} />
              </div>

              <h2 className="text-3xl font-black">
                Stay Connected With Your Store
              </h2>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed">
              Get instant updates for new orders, low stock alerts,
              deliveries, reviews, and customer messages to manage
              your furniture business smoothly.
            </p>
          </div>

          <button className="bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 rounded-2xl text-lg font-black hover:scale-105 transition-all shadow-xl">
            Manage Alerts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notifications;