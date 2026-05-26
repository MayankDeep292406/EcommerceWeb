// src/components/Topbar.jsx

import React, { useState } from "react";
import {
  Search,
  Bell,
  Settings,
  Menu,
  X,
} from "lucide-react";

export default function Topbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full bg-white shadow-md border-b border-gray-100 px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-4">
          
          {/* Mobile Menu */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition"
          >
            {mobileMenu ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

          {/* Title */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Seller Dashboard
            </h1>

            <p className="text-sm text-gray-500">
              Manage your furniture shop
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          
          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-2xl w-80">
            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search products, orders..."
              className="bg-transparent outline-none ml-3 w-full text-sm"
            />
          </div>

          {/* Notification */}
          <button className="relative p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 transition">
            <Bell size={20} className="text-gray-700" />

            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {/* Settings */}
          <button className="p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 transition">
            <Settings size={20} className="text-gray-700" />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-2xl cursor-pointer hover:bg-gray-200 transition">
            <img
              src="https://i.pravatar.cc/100"
              alt="Seller"
              className="w-11 h-11 rounded-full object-cover"
            />

            <div className="hidden sm:block">
              <h3 className="font-semibold text-gray-800">
                Seller Admin
              </h3>

              <p className="text-xs text-gray-500">
                Furniture Store
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="mt-4 md:hidden">
        <div className="flex items-center bg-gray-100 px-4 py-3 rounded-2xl">
          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-3 w-full text-sm"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden mt-4 bg-gray-50 rounded-2xl p-4 space-y-3 border border-gray-200">
          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white transition">
            Dashboard
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white transition">
            Products
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white transition">
            Orders
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white transition">
            Customers
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white transition">
            Analytics
          </button>
        </div>
      )}
    </header>
  );
}