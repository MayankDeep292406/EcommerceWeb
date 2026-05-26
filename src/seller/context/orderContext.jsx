// src/context/orderContext.jsx

import React, {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  getAllOrders,
  getSingleOrder,
  createOrder,
  updateOrderStatus,
  updatePaymentStatus,
  deleteOrder,
  cancelOrder,
  searchOrders,
  getPendingOrders,
  getDeliveredOrders,
  getProcessingOrders,
  getShippedOrders,
} from "../api/orderApi";

/* ==========================================
   CREATE CONTEXT
========================================== */

const OrderContext =
  createContext();

/* ==========================================
   ORDER PROVIDER
========================================== */

const OrderProvider = ({
  children,
}) => {
  /* ==========================================
     STATES
  ========================================== */

  const [orders, setOrders] =
    useState([]);

  const [singleOrder,
    setSingleOrder] =
    useState(null);

  const [pendingOrders,
    setPendingOrders] =
    useState([]);

  const [processingOrders,
    setProcessingOrders] =
    useState([]);

  const [shippedOrders,
    setShippedOrders] =
    useState([]);

  const [deliveredOrders,
    setDeliveredOrders] =
    useState([]);

  const [loading,
    setLoading] =
    useState(false);

  const [error,
    setError] =
    useState(null);

  const [success,
    setSuccess] =
    useState(null);

  /* ==========================================
     FETCH ALL ORDERS
  ========================================== */

  const fetchOrders =
    async () => {
      try {
        setLoading(true);

        const data =
          await getAllOrders();

        setOrders(data);

        setError(null);
      } catch (err) {
        setError(
          err.message ||
            "Failed to fetch orders"
        );
      } finally {
        setLoading(false);
      }
    };

  /* ==========================================
     FETCH SINGLE ORDER
  ========================================== */

  const fetchSingleOrder =
    async (orderId) => {
      try {
        setLoading(true);

        const data =
          await getSingleOrder(
            orderId
          );

        setSingleOrder(data);

        setError(null);
      } catch (err) {
        setError(
          err.message ||
            "Failed to fetch order"
        );
      } finally {
        setLoading(false);
      }
    };

  /* ==========================================
     CREATE ORDER
  ========================================== */

  const addOrder =
    async (orderData) => {
      try {
        setLoading(true);

        const newOrder =
          await createOrder(
            orderData
          );

        setOrders((prev) => [
          newOrder,
          ...prev,
        ]);

        setSuccess(
          "Order created successfully"
        );

        return newOrder;
      } catch (err) {
        setError(
          err.message ||
            "Failed to create order"
        );

        throw err;
      } finally {
        setLoading(false);
      }
    };

  /* ==========================================
     UPDATE ORDER STATUS
  ========================================== */

  const updateStatus =
    async (
      orderId,
      statusData
    ) => {
      try {
        setLoading(true);

        const updatedOrder =
          await updateOrderStatus(
            orderId,
            statusData
          );

        setOrders((prev) =>
          prev.map((order) =>
            order._id === orderId
              ? updatedOrder
              : order
          )
        );

        setSuccess(
          "Order updated successfully"
        );

        return updatedOrder;
      } catch (err) {
        setError(
          err.message ||
            "Failed to update order"
        );

        throw err;
      } finally {
        setLoading(false);
      }
    };

  /* ==========================================
     UPDATE PAYMENT STATUS
  ========================================== */

  const updatePayment =
    async (
      orderId,
      paymentData
    ) => {
      try {
        setLoading(true);

        const updatedOrder =
          await updatePaymentStatus(
            orderId,
            paymentData
          );

        setOrders((prev) =>
          prev.map((order) =>
            order._id === orderId
              ? updatedOrder
              : order
          )
        );

        setSuccess(
          "Payment updated successfully"
        );

        return updatedOrder;
      } catch (err) {
        setError(
          err.message ||
            "Failed to update payment"
        );

        throw err;
      } finally {
        setLoading(false);
      }
    };

  /* ==========================================
     CANCEL ORDER
  ========================================== */

  const cancelUserOrder =
    async (orderId) => {
      try {
        setLoading(true);

        const canceledOrder =
          await cancelOrder(
            orderId
          );

        setOrders((prev) =>
          prev.map((order) =>
            order._id === orderId
              ? canceledOrder
              : order
          )
        );

        setSuccess(
          "Order canceled successfully"
        );

        return canceledOrder;
      } catch (err) {
        setError(
          err.message ||
            "Failed to cancel order"
        );

        throw err;
      } finally {
        setLoading(false);
      }
    };

  /* ==========================================
     DELETE ORDER
  ========================================== */

  const removeOrder =
    async (orderId) => {
      try {
        setLoading(true);

        await deleteOrder(
          orderId
        );

        setOrders((prev) =>
          prev.filter(
            (order) =>
              order._id !== orderId
          )
        );

        setSuccess(
          "Order deleted successfully"
        );
      } catch (err) {
        setError(
          err.message ||
            "Failed to delete order"
        );

        throw err;
      } finally {
        setLoading(false);
      }
    };

  /* ==========================================
     SEARCH ORDERS
  ========================================== */

  const searchAllOrders =
    async (keyword) => {
      try {
        setLoading(true);

        const data =
          await searchOrders(
            keyword
          );

        setOrders(data);
      } catch (err) {
        setError(
          err.message ||
            "Failed to search orders"
        );
      } finally {
        setLoading(false);
      }
    };

  /* ==========================================
     FETCH PENDING ORDERS
  ========================================== */

  const fetchPendingOrders =
    async () => {
      try {
        setLoading(true);

        const data =
          await getPendingOrders();

        setPendingOrders(data);
      } catch (err) {
        setError(
          err.message ||
            "Failed to fetch pending orders"
        );
      } finally {
        setLoading(false);
      }
    };

  /* ==========================================
     FETCH PROCESSING ORDERS
  ========================================== */

  const fetchProcessingOrders =
    async () => {
      try {
        setLoading(true);

        const data =
          await getProcessingOrders();

        setProcessingOrders(data);
      } catch (err) {
        setError(
          err.message ||
            "Failed to fetch processing orders"
        );
      } finally {
        setLoading(false);
      }
    };

  /* ==========================================
     FETCH SHIPPED ORDERS
  ========================================== */

  const fetchShippedOrders =
    async () => {
      try {
        setLoading(true);

        const data =
          await getShippedOrders();

        setShippedOrders(data);
      } catch (err) {
        setError(
          err.message ||
            "Failed to fetch shipped orders"
        );
      } finally {
        setLoading(false);
      }
    };

  /* ==========================================
     FETCH DELIVERED ORDERS
  ========================================== */

  const fetchDeliveredOrders =
    async () => {
      try {
        setLoading(true);

        const data =
          await getDeliveredOrders();

        setDeliveredOrders(data);
      } catch (err) {
        setError(
          err.message ||
            "Failed to fetch delivered orders"
        );
      } finally {
        setLoading(false);
      }
    };

  /* ==========================================
     CLEAR MESSAGES
  ========================================== */

  const clearMessages = () => {
    setError(null);
    setSuccess(null);
  };

  /* ==========================================
     INITIAL FETCH
  ========================================== */

  useEffect(() => {
    fetchOrders();
  }, []);

  /* ==========================================
     CONTEXT VALUE
  ========================================== */

  const value = {
    orders,
    singleOrder,
    pendingOrders,
    processingOrders,
    shippedOrders,
    deliveredOrders,

    loading,
    error,
    success,

    fetchOrders,
    fetchSingleOrder,
    fetchPendingOrders,
    fetchProcessingOrders,
    fetchShippedOrders,
    fetchDeliveredOrders,

    addOrder,
    updateStatus,
    updatePayment,
    cancelUserOrder,
    removeOrder,
    searchAllOrders,

    clearMessages,
  };

  return (
    <OrderContext.Provider
      value={value}
    >
      {children}
    </OrderContext.Provider>
  );
};

/* ==========================================
   EXPORTS
========================================== */

export { OrderContext, OrderProvider };