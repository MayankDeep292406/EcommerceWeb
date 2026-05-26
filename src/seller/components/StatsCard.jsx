// src/components/StatsCard.jsx

import React from "react";
import {
  IndianRupee,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
} from "lucide-react";

const statsData = [
  {
    id: 1,
    title: "Total Revenue",
    value: "₹2,45,000",
    growth: "+18%",
    icon: IndianRupee,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    title: "Total Orders",
    value: "1,250",
    growth: "+12%",
    icon: ShoppingCart,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    title: "Customers",
    value: "860",
    growth: "+9%",
    icon: Users,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Products",
    value: "320",
    growth: "+5%",
    icon: Package,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function StatsCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {statsData.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            {/* Top */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                  {item.value}
                </h2>
              </div>

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}
              >
                <Icon size={30} />
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <TrendingUp size={18} />

                <span>{item.growth}</span>
              </div>

              <span className="text-sm text-gray-400">
                This Month
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-100 rounded-full mt-4 overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full"
                style={{
                  width:
                    item.id === 1
                      ? "85%"
                      : item.id === 2
                      ? "70%"
                      : item.id === 3
                      ? "60%"
                      : "50%",
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}