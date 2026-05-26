// src/api/productApi.js

import axios from "axios";

/* ==========================================
   BASE URL
========================================== */

/*
  Change this URL according to your backend
*/

const BASE_URL =
  "http://localhost:5000/api/products";

/* ==========================================
   AXIOS INSTANCE
========================================== */

const productAPI = axios.create({
  baseURL: BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

/* ==========================================
   AUTH TOKEN
========================================== */

productAPI.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem(
        "sellerToken"
      );

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
   API LINKS
========================================== */

/*
==========================================
GET APIs
==========================================

GET ALL PRODUCTS
GET
http://localhost:5000/api/products

GET SINGLE PRODUCT
GET
http://localhost:5000/api/products/:id

SEARCH PRODUCT
GET
http://localhost:5000/api/products/search/:keyword

CATEGORY PRODUCTS
GET
http://localhost:5000/api/products/category/:category

FEATURED PRODUCTS
GET
http://localhost:5000/api/products/featured

TOP SELLING PRODUCTS
GET
http://localhost:5000/api/products/top-selling

LOW STOCK PRODUCTS
GET
http://localhost:5000/api/products/low-stock

PRODUCT REVIEWS
GET
http://localhost:5000/api/products/reviews/:id


==========================================
POST APIs
==========================================

CREATE PRODUCT
POST
http://localhost:5000/api/products/create

UPLOAD PRODUCT IMAGE
POST
http://localhost:5000/api/products/upload-image

ADD PRODUCT REVIEW
POST
http://localhost:5000/api/products/review/:id


==========================================
PUT APIs
==========================================

UPDATE PRODUCT
PUT
http://localhost:5000/api/products/update/:id

UPDATE STOCK
PUT
http://localhost:5000/api/products/stock/:id


==========================================
DELETE APIs
==========================================

DELETE PRODUCT
DELETE
http://localhost:5000/api/products/delete/:id

*/

/* ==========================================
   GET ALL PRODUCTS
========================================== */

export const getAllProducts =
  async () => {
    const response =
      await productAPI.get("/");

    return response.data;
  };

/* ==========================================
   GET SINGLE PRODUCT
========================================== */

export const getSingleProduct =
  async (id) => {
    const response =
      await productAPI.get(
        `/${id}`
      );

    return response.data;
  };

/* ==========================================
   CREATE PRODUCT
========================================== */

export const createProduct =
  async (productData) => {
    const response =
      await productAPI.post(
        "/create",
        productData
      );

    return response.data;
  };

/* ==========================================
   UPDATE PRODUCT
========================================== */

export const updateProduct =
  async (id, updatedData) => {
    const response =
      await productAPI.put(
        `/update/${id}`,
        updatedData
      );

    return response.data;
  };

/* ==========================================
   DELETE PRODUCT
========================================== */

export const deleteProduct =
  async (id) => {
    const response =
      await productAPI.delete(
        `/delete/${id}`
      );

    return response.data;
  };

/* ==========================================
   SEARCH PRODUCTS
========================================== */

export const searchProducts =
  async (keyword) => {
    const response =
      await productAPI.get(
        `/search/${keyword}`
      );

    return response.data;
  };

/* ==========================================
   GET PRODUCTS BY CATEGORY
========================================== */

export const getProductsByCategory =
  async (category) => {
    const response =
      await productAPI.get(
        `/category/${category}`
      );

    return response.data;
  };

/* ==========================================
   FEATURED PRODUCTS
========================================== */

export const getFeaturedProducts =
  async () => {
    const response =
      await productAPI.get(
        "/featured"
      );

    return response.data;
  };

/* ==========================================
   TOP SELLING PRODUCTS
========================================== */

export const getTopSellingProducts =
  async () => {
    const response =
      await productAPI.get(
        "/top-selling"
      );

    return response.data;
  };

/* ==========================================
   LOW STOCK PRODUCTS
========================================== */

export const getLowStockProducts =
  async () => {
    const response =
      await productAPI.get(
        "/low-stock"
      );

    return response.data;
  };

/* ==========================================
   UPDATE STOCK
========================================== */

export const updateProductStock =
  async (id, stockData) => {
    const response =
      await productAPI.put(
        `/stock/${id}`,
        stockData
      );

    return response.data;
  };

/* ==========================================
   UPLOAD IMAGE
========================================== */

export const uploadProductImage =
  async (formData) => {
    const response =
      await productAPI.post(
        "/upload-image",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
  };

/* ==========================================
   ADD REVIEW
========================================== */

export const addProductReview =
  async (id, reviewData) => {
    const response =
      await productAPI.post(
        `/review/${id}`,
        reviewData
      );

    return response.data;
  };

/* ==========================================
   GET REVIEWS
========================================== */

export const getProductReviews =
  async (id) => {
    const response =
      await productAPI.get(
        `/reviews/${id}`
      );

    return response.data;
  };

/* ==========================================
   EXPORT
========================================== */

export default productAPI;