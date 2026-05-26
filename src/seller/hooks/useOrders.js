// src/hooks/useOrders.js

import {
  useContext,
} from "react";

import {
  OrderContext,
} from "../context/orderContext";

/* ==========================================
   CUSTOM ORDER HOOK
========================================== */

const useOrders = () => {
  const context =
    useContext(OrderContext);

  /* ==========================================
     ERROR HANDLING
  ========================================== */

  if (!context) {
    throw new Error(
      "useOrders must be used inside OrderProvider"
    );
  }

  return context;
};

/* ==========================================
   EXPORT
========================================== */

export default useOrders;