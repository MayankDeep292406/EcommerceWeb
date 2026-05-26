// src/layouts/SellerLayout.jsx

import React, {
  useState,
} from "react";

import {
  Outlet,
} from "react-router-dom";

import {
  Menu,
  X,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function SellerLayout() {
  const [sidebarOpen,
    setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 overflow-hidden">
      
      {/* ==========================================
          MOBILE SIDEBAR OVERLAY
      ========================================== */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}

      {/* ==========================================
          SIDEBAR
      ========================================== */}

      <div
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen transition-transform duration-300
          ${sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <Sidebar
          closeSidebar={() =>
            setSidebarOpen(false)
          }
        />
      </div>

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <div className="flex-1 flex flex-col w-full">
        
        {/* ==========================================
            MOBILE HEADER
        ========================================== */}

        <div className="lg:hidden flex items-center justify-between px-5 py-4 bg-white shadow-md sticky top-0 z-30">
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white font-black text-lg shadow-lg">
              FS
            </div>

            <div>
              <h1 className="text-lg font-black text-gray-800">
                FurniSeller
              </h1>

              <p className="text-xs text-gray-500">
                Seller Dashboard
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              setSidebarOpen(
                !sidebarOpen
              )
            }
            className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-orange-100 flex items-center justify-center transition-all"
          >
            {sidebarOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>

        {/* ==========================================
            TOPBAR
        ========================================== */}

        <div className="sticky top-0 z-20 hidden lg:block">
          <Topbar />
        </div>

        {/* ==========================================
            PAGE CONTENT
        ========================================== */}

        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
          
          {/* CONTENT WRAPPER */}

          <div className="bg-white rounded-3xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-200 p-5 md:p-7">
            
            <Outlet />

          </div>
        </main>

      </div>
    </div>
  );
}

export default SellerLayout;