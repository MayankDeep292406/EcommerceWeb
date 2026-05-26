import React from "react";
import {
  Bell,
  ShoppingBag,
  Truck,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "order",
    title: "New Order Received",
    message: "A customer placed an order for Modern Sofa Set.",
    time: "2 min ago",
    icon: ShoppingBag,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    type: "delivery",
    title: "Order Delivered",
    message: "Dining Table order has been delivered successfully.",
    time: "15 min ago",
    icon: Truck,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    type: "warning",
    title: "Low Stock Alert",
    message: "Wooden Chair stock is running low.",
    time: "1 hour ago",
    icon: AlertCircle,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 4,
    type: "success",
    title: "Payment Successful",
    message: "Payment received for Bedroom Furniture Combo.",
    time: "3 hours ago",
    icon: CheckCircle,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function NotificationCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Bell className="text-indigo-600" />
            Notifications
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Latest updates from your furniture shop.
          </p>
        </div>

        <button className="text-indigo-600 text-sm font-semibold hover:underline">
          Mark all as read
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300 bg-gray-50"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color}`}
              >
                <Icon size={24} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-gray-400 whitespace-nowrap">
                    <Clock size={14} />
                    {item.time}
                  </div>
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  {item.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center">
        <button className="px-5 py-3 bg-indigo-600 text-white rounded-2xl font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md">
          View All Notifications
        </button>
      </div>
    </div>
  );
}
