  // src/context/ProductContext.jsx

  import React, {
    createContext,
    useEffect,
    useState,
  } from "react";

  import {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    getProductsByCategory,
    getFeaturedProducts,
    getTopSellingProducts,
    getLowStockProducts,
    updateProductStock,
    addProductReview,
    getProductReviews,
  } from "../api/productApi";

  /* ==========================================
    CREATE CONTEXT
  ========================================== */

  const ProductContext =
    createContext();

  /* ==========================================
    PRODUCT PROVIDER
  ========================================== */

  const ProductProvider = ({
    children,
  }) => {
    /* ==========================================
      STATES
    ========================================== */

    const [products, setProducts] =
      useState([]);

    const [singleProduct,
      setSingleProduct] =
      useState(null);

    const [featuredProducts,
      setFeaturedProducts] =
      useState([]);

    const [topProducts,
      setTopProducts] =
      useState([]);

    const [lowStockProducts,
      setLowStockProducts] =
      useState([]);

    const [categoryProducts,
      setCategoryProducts] =
      useState([]);

    const [reviews, setReviews] =
      useState([]);

    const [loading, setLoading] =
      useState(false);

    const [error, setError] =
      useState(null);

    const [success, setSuccess] =
      useState(null);

    /* ==========================================
      FETCH ALL PRODUCTS
    ========================================== */

    const fetchProducts =
      async () => {
        try {
          setLoading(true);

          const data =
            await getAllProducts();

          setProducts(data);

          setError(null);
        } catch (err) {
          setError(
            err.message ||
              "Failed to fetch products"
          );
        } finally {
          setLoading(false);
        }
      };

    /* ==========================================
      FETCH SINGLE PRODUCT
    ========================================== */

    const fetchSingleProduct =
      async (productId) => {
        try {
          setLoading(true);

          const data =
            await getSingleProduct(
              productId
            );

          setSingleProduct(data);

          setError(null);
        } catch (err) {
          setError(
            err.message ||
              "Failed to fetch product"
          );
        } finally {
          setLoading(false);
        }
      };

    /* ==========================================
      CREATE PRODUCT
    ========================================== */

    const addNewProduct =
      async (productData) => {
        try {
          setLoading(true);

          const newProduct =
            await createProduct(
              productData
            );

          setProducts((prev) => [
            newProduct,
            ...prev,
          ]);

          setSuccess(
            "Product created successfully"
          );

          return newProduct;
        } catch (err) {
          setError(
            err.message ||
              "Failed to create product"
          );

          throw err;
        } finally {
          setLoading(false);
        }
      };

    /* ==========================================
      UPDATE PRODUCT
    ========================================== */

    const editProduct =
      async (
        productId,
        updatedData
      ) => {
        try {
          setLoading(true);

          const updatedProduct =
            await updateProduct(
              productId,
              updatedData
            );

          setProducts((prev) =>
            prev.map((product) =>
              product._id ===
              productId
                ? updatedProduct
                : product
            )
          );

          setSuccess(
            "Product updated successfully"
          );

          return updatedProduct;
        } catch (err) {
          setError(
            err.message ||
              "Failed to update product"
          );

          throw err;
        } finally {
          setLoading(false);
        }
      };

    /* ==========================================
      DELETE PRODUCT
    ========================================== */

    const removeProduct =
      async (productId) => {
        try {
          setLoading(true);

          await deleteProduct(
            productId
          );

          setProducts((prev) =>
            prev.filter(
              (product) =>
                product._id !==
                productId
            )
          );

          setSuccess(
            "Product deleted successfully"
          );
        } catch (err) {
          setError(
            err.message ||
              "Failed to delete product"
          );

          throw err;
        } finally {
          setLoading(false);
        }
      };

    /* ==========================================
      SEARCH PRODUCTS
    ========================================== */

    const searchAllProducts =
      async (keyword) => {
        try {
          setLoading(true);

          const data =
            await searchProducts(
              keyword
            );

          setProducts(data);
        } catch (err) {
          setError(
            err.message ||
              "Failed to search products"
          );
        } finally {
          setLoading(false);
        }
      };

    /* ==========================================
      CATEGORY PRODUCTS
    ========================================== */

    const fetchCategoryProducts =
      async (category) => {
        try {
          setLoading(true);

          const data =
            await getProductsByCategory(
              category
            );

          setCategoryProducts(data);
        } catch (err) {
          setError(
            err.message ||
              "Failed to fetch category products"
          );
        } finally {
          setLoading(false);
        }
      };

    /* ==========================================
      FEATURED PRODUCTS
    ========================================== */

    const fetchFeaturedProducts =
      async () => {
        try {
          setLoading(true);

          const data =
            await getFeaturedProducts();

          setFeaturedProducts(data);
        } catch (err) {
          setError(
            err.message ||
              "Failed to fetch featured products"
          );
        } finally {
          setLoading(false);
        }
      };

    /* ==========================================
      TOP PRODUCTS
    ========================================== */

    const fetchTopProducts =
      async () => {
        try {
          setLoading(true);

          const data =
            await getTopSellingProducts();

          setTopProducts(data);
        } catch (err) {
          setError(
            err.message ||
              "Failed to fetch top products"
          );
        } finally {
          setLoading(false);
        }
      };

    /* ==========================================
      LOW STOCK PRODUCTS
    ========================================== */

    const fetchLowStockProducts =
      async () => {
        try {
          setLoading(true);

          const data =
            await getLowStockProducts();

          setLowStockProducts(data);
        } catch (err) {
          setError(
            err.message ||
              "Failed to fetch low stock products"
          );
        } finally {
          setLoading(false);
        }
      };

    /* ==========================================
      UPDATE STOCK
    ========================================== */

    const updateStock =
      async (
        productId,
        stockData
      ) => {
        try {
          setLoading(true);

          const updatedProduct =
            await updateProductStock(
              productId,
              stockData
            );

          setProducts((prev) =>
            prev.map((product) =>
              product._id ===
              productId
                ? updatedProduct
                : product
            )
          );

          setSuccess(
            "Stock updated successfully"
          );

          return updatedProduct;
        } catch (err) {
          setError(
            err.message ||
              "Failed to update stock"
          );

          throw err;
        } finally {
          setLoading(false);
        }
      };

    /* ==========================================
      ADD REVIEW
    ========================================== */

    const addReview =
      async (
        productId,
        reviewData
      ) => {
        try {
          setLoading(true);

          const review =
            await addProductReview(
              productId,
              reviewData
            );

          setReviews((prev) => [
            review,
            ...prev,
          ]);

          setSuccess(
            "Review added successfully"
          );

          return review;
        } catch (err) {
          setError(
            err.message ||
              "Failed to add review"
          );

          throw err;
        } finally {
          setLoading(false);
        }
      };

    /* ==========================================
      FETCH REVIEWS
    ========================================== */

    const fetchReviews =
      async (productId) => {
        try {
          setLoading(true);

          const data =
            await getProductReviews(
              productId
            );

          setReviews(data);
        } catch (err) {
          setError(
            err.message ||
              "Failed to fetch reviews"
          );
        } finally {
          setLoading(false);
        }
      };

    /* ==========================================
      CLEAR ALERTS
    ========================================== */

    const clearMessages = () => {
      setError(null);
      setSuccess(null);
    };

    /* ==========================================
      INITIAL LOAD
    ========================================== */

    useEffect(() => {
      fetchProducts();
      fetchFeaturedProducts();
      fetchTopProducts();
      fetchLowStockProducts();
    }, []);

    /* ==========================================
      CONTEXT VALUE
    ========================================== */

    const value = {
      products,
      singleProduct,
      featuredProducts,
      topProducts,
      lowStockProducts,
      categoryProducts,
      reviews,

      loading,
      error,
      success,

      fetchProducts,
      fetchSingleProduct,
      fetchCategoryProducts,
      fetchFeaturedProducts,
      fetchTopProducts,
      fetchLowStockProducts,
      fetchReviews,

      addNewProduct,
      editProduct,
      removeProduct,
      searchAllProducts,
      updateStock,
      addReview,

      clearMessages,
    };

    return (
      <ProductContext.Provider
        value={value}
      >
        {children}
      </ProductContext.Provider>
    );
  };

  /* ==========================================
    EXPORTS
  ========================================== */

  export {
    ProductContext,
    ProductProvider,
  };