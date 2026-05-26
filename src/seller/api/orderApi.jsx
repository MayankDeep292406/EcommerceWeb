// src/api/orderApi.jsx

import axios from "axios";

/* ==========================================
   BASE API URL
========================================== */

const BASE_URL =
  "http://localhost:5000/api/orders";

/* ==========================================
   AXIOS INSTANCE
========================================== */

const orderAPI = axios.create({
  baseURL: BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },

  timeout: 10000,
});

/* ==========================================
   REQUEST INTERCEPTOR
========================================== */

orderAPI.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("sellerToken");

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

/* ==========================================
   RESPONSE INTERCEPTOR
========================================== */

orderAPI.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response) {
      console.error(
        "API Error:",
        error.response.data.message
      );
    } else if (error.request) {
      console.error(
        "No response from server"
      );
    } else {
      console.error(
        "Axios Error:",
        error.message
      );
    }

    return Promise.reject(error);
  }
);

/* ==========================================
   GET ALL ORDERS
========================================== */

export const getAllOrders = async () => {
  try {
    const response =
      await orderAPI.get("/");

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching all orders:",
      error
    );

    throw error;
  }
};

/* ==========================================
   GET SINGLE ORDER
========================================== */

export const getSingleOrder = async (
  orderId
) => {
  try {
    const response =
      await orderAPI.get(`/${orderId}`);

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching order details:",
      error
    );

    throw error;
  }
};

/* ==========================================
   CREATE NEW ORDER
========================================== */

export const createOrder = async (
  orderData
) => {
  try {
    const response =
      await orderAPI.post(
        "/create",
        orderData
      );

    return response.data;
  } catch (error) {
    console.error(
      "Error creating order:",
      error
    );

    throw error;
  }
};

/* ==========================================
   UPDATE ORDER STATUS
========================================== */

export const updateOrderStatus = async (
  orderId,
  statusData
) => {
  try {
    const response =
      await orderAPI.put(
        `/update-status/${orderId}`,
        statusData
      );

    return response.data;
  } catch (error) {
    console.error(
      "Error updating order status:",
      error
    );

    throw error;
  }
};

/* ==========================================
   UPDATE PAYMENT STATUS
========================================== */

export const updatePaymentStatus = async (
  orderId,
  paymentData
) => {
  try {
    const response =
      await orderAPI.put(
        `/payment-status/${orderId}`,
        paymentData
      );

    return response.data;
  } catch (error) {
    console.error(
      "Error updating payment status:",
      error
    );

    throw error;
  }
};

/* ==========================================
   CANCEL ORDER
========================================== */

export const cancelOrder = async (
  orderId
) => {
  try {
    const response =
      await orderAPI.put(
        `/cancel/${orderId}`
      );

    return response.data;
  } catch (error) {
    console.error(
      "Error canceling order:",
      error
    );

    throw error;
  }
};

/* ==========================================
   DELETE ORDER
========================================== */

export const deleteOrder = async (
  orderId
) => {
  try {
    const response =
      await orderAPI.delete(
        `/delete/${orderId}`
      );

    return response.data;
  } catch (error) {
    console.error(
      "Error deleting order:",
      error
    );

    throw error;
  }
};

/* ==========================================
   GET RECENT ORDERS
========================================== */

export const getRecentOrders =
  async () => {
    try {
      const response =
        await orderAPI.get(
          "/recent-orders"
        );

      return response.data;
    } catch (error) {
      console.error(
        "Error fetching recent orders:",
        error
      );

      throw error;
    }
  };

/* ==========================================
   GET DELIVERED ORDERS
========================================== */

export const getDeliveredOrders =
  async () => {
    try {
      const response =
        await orderAPI.get(
          "/delivered"
        );

      return response.data;
    } catch (error) {
      console.error(
        "Error fetching delivered orders:",
        error
      );

      throw error;
    }
  };

/* ==========================================
   GET PENDING ORDERS
========================================== */

export const getPendingOrders =
  async () => {
    try {
      const response =
        await orderAPI.get(
          "/pending"
        );

      return response.data;
    } catch (error) {
      console.error(
        "Error fetching pending orders:",
        error
      );

      throw error;
    }
  };

/* ==========================================
   GET PROCESSING ORDERS
========================================== */

export const getProcessingOrders =
  async () => {
    try {
      const response =
        await orderAPI.get(
          "/processing"
        );

      return response.data;
    } catch (error) {
      console.error(
        "Error fetching processing orders:",
        error
      );

      throw error;
    }
  };

/* ==========================================
   GET SHIPPED ORDERS
========================================== */

export const getShippedOrders =
  async () => {
    try {
      const response =
        await orderAPI.get(
          "/shipped"
        );

      return response.data;
    } catch (error) {
      console.error(
        "Error fetching shipped orders:",
        error
      );

      throw error;
    }
  };

/* ==========================================
   SEARCH ORDERS
========================================== */

export const searchOrders = async (
  keyword
) => {
  try {
    const response =
      await orderAPI.get(
        `/search/${keyword}`
      );

    return response.data;
  } catch (error) {
    console.error(
      "Error searching orders:",
      error
    );

    throw error;
  }
};

/* ==========================================
   FILTER ORDERS BY DATE
========================================== */

export const filterOrdersByDate = async (
  startDate,
  endDate
) => {
  try {
    const response =
      await orderAPI.get(
        `/filter/date?start=${startDate}&end=${endDate}`
      );

    return response.data;
  } catch (error) {
    console.error(
      "Error filtering orders:",
      error
    );

    throw error;
  }
};

/* ==========================================
   DOWNLOAD ORDER INVOICE
========================================== */

export const downloadInvoice = async (
  orderId
) => {
  try {
    const response =
      await orderAPI.get(
        `/invoice/${orderId}`,
        {
          responseType: "blob",
        }
      );

    return response.data;
  } catch (error) {
    console.error(
      "Error downloading invoice:",
      error
    );

    throw error;
  }
};

/* ==========================================
   GET ORDER ANALYTICS
========================================== */

export const getOrderAnalytics =
  async () => {
    try {
      const response =
        await orderAPI.get(
          "/analytics"
        );

      return response.data;
    } catch (error) {
      console.error(
        "Error fetching analytics:",
        error
      );

      throw error;
    }
  };

/* ==========================================
   EXPORT DEFAULT API INSTANCE
========================================== */

export default orderAPI;