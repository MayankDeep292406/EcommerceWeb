// src/routes/sellerRoutes.jsx

import React from "react";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import SellerLayout from "../layouts/SellerLayout.jsx";

/* ==========================================
   SELLER PAGES
========================================== */

import SellerDashboard from "../pages/SellerDashboard.jsx";

import Products from "../pages/products.jsx";

import AddProduct from "../pages/AddProduct.jsx";

import EditProduct from "../pages/EditProduct.jsx";

import Inventory from "../pages/Inventory.jsx";

import SellerOrders from "../pages/sellerOrders.jsx";

import OrderDetails from "../pages/OrderDetails.jsx";

import Customers from "../pages/Customers.jsx";

import Reviews from "../pages/Reviews.jsx";

import Coupons from "../pages/Coupons.jsx";

import Analytics from "../pages/Analytics.jsx";

import Payments from "../pages/Payments.jsx";

import Notifications from "../pages/Notifications.jsx";

import Settings from "../pages/Settings.jsx";

/* ==========================================
   SELLER AUTH CONTEXT
========================================== */

import useSellerAuth from "../hooks/useSellerAuth.js";

/* ==========================================
   PROTECTED ROUTE
========================================== */

function SellerProtectedRoute({
  children,
}) {
  const {
    seller,
    loading,
  } = useSellerAuth();

  // LOADING SCREEN

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        
        <div className="text-center">
          
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" />

          <h2 className="text-2xl font-black text-gray-700 mt-6">
            Loading Seller Panel...
          </h2>
        </div>
      </div>
    );
  }

  // IF NOT LOGIN

  if (!seller) {
    return (
      <Navigate
        to="/seller/login"
        replace
      />
    );
  }

  return children;
}

/* ==========================================
   SELLER ROUTES
========================================== */

function sellerRoutes() {
  return (
    <Routes>
      
      {/* ==========================================
          SELLER DASHBOARD ROUTES
      ========================================== */}

      <Route
        path="/"
        element={
          <SellerProtectedRoute>
            
            <SellerLayout />

          </SellerProtectedRoute>
        }
      >
        
        {/* DASHBOARD */}

        <Route
          index
          element={
            <SellerDashboard />
          }
        />

        {/* PRODUCTS */}

        <Route
          path="products"
          element={<Products />}
        />

        <Route
          path="add-product"
          element={
            <AddProduct />
          }
        />

        <Route
          path="edit-product/:id"
          element={
            <EditProduct />
          }
        />

        {/* INVENTORY */}

        <Route
          path="inventory"
          element={
            <Inventory />
          }
        />

        {/* ORDERS */}

        <Route
          path="orders"
          element={
            <SellerOrders />
          }
        />

        <Route
          path="orders/:id"
          element={
            <OrderDetails />
          }
        />

        {/* CUSTOMERS */}

        <Route
          path="customers"
          element={
            <Customers />
          }
        />

        {/* REVIEWS */}

        <Route
          path="reviews"
          element={<Reviews />}
        />

        {/* COUPONS */}

        <Route
          path="coupons"
          element={<Coupons />}
        />

        {/* ANALYTICS */}

        <Route
          path="analytics"
          element={
            <Analytics />
          }
        />

        {/* PAYMENTS */}

        <Route
          path="payments"
          element={<Payments />}
        />

        {/* NOTIFICATIONS */}

        <Route
          path="notifications"
          element={
            <Notifications />
          }
        />

        {/* SETTINGS */}

        <Route
          path="settings"
          element={<Settings />}
        />
      </Route>

      {/* ==========================================
          404 PAGE
      ========================================== */}

      <Route
        path="*"
        element={
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
            
            <h1 className="text-8xl font-black text-orange-500">
              404
            </h1>

            <h2 className="text-4xl font-black text-gray-800 mt-4">
              Page Not Found
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              The seller page you are looking for does not exist.
            </p>

            <a
              href="/seller"
              className="mt-8 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-all"
            >
              Go To Dashboard
            </a>
          </div>
        }
      />
    </Routes>
  );
}

export default sellerRoutes;