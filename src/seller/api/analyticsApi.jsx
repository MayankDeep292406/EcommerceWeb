// src/api/analyticsApi.jsx

import axios from "axios";

/* ==========================================
   BASE API URL
========================================== */

const BASE_URL =
  "http://localhost:5000/api/analytics";

/* ==========================================
   AXIOS INSTANCE
========================================== */

const analyticsAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ==========================================
   REQUEST INTERCEPTOR
   ADD TOKEN AUTOMATICALLY
========================================== */

analyticsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("sellerToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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

analyticsAPI.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response) {
      console.error(
        "API Error:",
        error.response.data.message
      );
    } else {
      console.error("Network Error:", error.message);
    }

    return Promise.reject(error);
  }
);

/* ==========================================
   GET DASHBOARD STATS
========================================== */

export const getDashboardStats = async () => {
  try {
    const response = await analyticsAPI.get("/stats");

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching dashboard stats:",
      error
    );

    throw error;
  }
};

/* ==========================================
   GET SALES ANALYTICS
========================================== */

export const getSalesAnalytics = async () => {
  try {
    const response = await analyticsAPI.get("/sales");

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching sales analytics:",
      error
    );

    throw error;
  }
};

/* ==========================================
   GET ORDERS ANALYTICS
========================================== */

export const getOrdersAnalytics = async () => {
  try {
    const response = await analyticsAPI.get("/orders");

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching orders analytics:",
      error
    );

    throw error;
  }
};

/* ==========================================
   GET PRODUCT ANALYTICS
========================================== */

export const getProductAnalytics = async () => {
  try {
    const response = await analyticsAPI.get(
      "/products"
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching product analytics:",
      error
    );

    throw error;
  }
};

/* ==========================================
   GET CUSTOMER ANALYTICS
========================================== */

export const getCustomerAnalytics = async () => {
  try {
    const response = await analyticsAPI.get(
      "/customers"
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching customer analytics:",
      error
    );

    throw error;
  }
};

/* ==========================================
   GET REVENUE REPORT
========================================== */

export const getRevenueReport = async (
  year = 2026
) => {
  try {
    const response = await analyticsAPI.get(
      `/revenue/${year}`
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching revenue report:",
      error
    );

    throw error;
  }
};

/* ==========================================
   GET TOP PRODUCTS
========================================== */

export const getTopSellingProducts =
  async () => {
    try {
      const response = await analyticsAPI.get(
        "/top-products"
      );

      return response.data;
    } catch (error) {
      console.error(
        "Error fetching top products:",
        error
      );

      throw error;
    }
  };

/* ==========================================
   GET RECENT ORDERS
========================================== */

export const getRecentOrders = async () => {
  try {
    const response = await analyticsAPI.get(
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
   GET MONTHLY SALES REPORT
========================================== */

export const getMonthlySales = async () => {
  try {
    const response = await analyticsAPI.get(
      "/monthly-sales"
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching monthly sales:",
      error
    );

    throw error;
  }
};

/* ==========================================
   GET CATEGORY SALES
========================================== */

export const getCategorySales = async () => {
  try {
    const response = await analyticsAPI.get(
      "/category-sales"
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching category sales:",
      error
    );

    throw error;
  }
};

/* ==========================================
   GET TOTAL PROFIT
========================================== */

export const getProfitAnalytics = async () => {
  try {
    const response = await analyticsAPI.get(
      "/profit"
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching profit analytics:",
      error
    );

    throw error;
  }
};

/* ==========================================
   GET CUSTOMER GROWTH
========================================== */

export const getCustomerGrowth = async () => {
  try {
    const response = await analyticsAPI.get(
      "/customer-growth"
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching customer growth:",
      error
    );

    throw error;
  }
};

/* ==========================================
   EXPORT DEFAULT API INSTANCE
========================================== */

export default analyticsAPI;