// src/main.jsx

import React, {
  StrictMode,
} from "react";

import {
  createRoot,
} from "react-dom/client";

import App from "./App.jsx";

import "./index.css";

/* ==========================================
   CONTEXT PROVIDERS
========================================== */

import {
  AuthProvider,
} from "./seller/context/AuthContext";

import {
  SellerAuthProvider,
} from "./seller/context/sellerAuthContext";

import {
  OrderProvider,
} from "./seller/context/orderContext";

/* ==========================================
   RENDER APP
========================================== */

createRoot(
  document.getElementById("root")
).render(
  <StrictMode>
    <AuthProvider>
      <SellerAuthProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </SellerAuthProvider>
    </AuthProvider>
  </StrictMode>
);