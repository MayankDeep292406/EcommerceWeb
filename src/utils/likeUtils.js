// src/utils/likeUtils.js

/**
 * =========================================
 * LIKE / WISHLIST UTILS
 * =========================================
 * Features:
 * - Get liked products
 * - Save liked products
 * - Add to wishlist
 * - Remove from wishlist
 * - Toggle like
 * - Check liked
 * - Clear wishlist
 * - Get total likes
 * =========================================
 */

const STORAGE_KEY =
  "likedProducts";

// ================= GET LIKED PRODUCTS =================
export const getLikedProducts =
  () => {
    try {
      const products =
        localStorage.getItem(
          STORAGE_KEY
        );

      return products
        ? JSON.parse(
            products
          )
        : [];
    } catch (error) {
      console.error(
        "Error loading liked products:",
        error
      );

      return [];
    }
  };

// ================= SAVE LIKED PRODUCTS =================
export const saveLikedProducts =
  (products) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(products)
      );
    } catch (error) {
      console.error(
        "Error saving liked products:",
        error
      );
    }
  };

// ================= CHECK IF PRODUCT IS LIKED =================
export const isProductLiked =
  (productId) => {
    const likedProducts =
      getLikedProducts();

    return likedProducts.some(
      (item) =>
        item.id === productId
    );
  };

// ================= ADD PRODUCT TO LIKES =================
export const addToLikes = (
  product
) => {
  try {
    const likedProducts =
      getLikedProducts();

    const exists =
      likedProducts.some(
        (item) =>
          item.id ===
          product.id
      );

    if (!exists) {
      const updatedLikes =
        [
          ...likedProducts,
          product,
        ];

      saveLikedProducts(
        updatedLikes
      );

      return updatedLikes;
    }

    return likedProducts;
  } catch (error) {
    console.error(
      "Error adding product to likes:",
      error
    );
  }
};

// ================= REMOVE PRODUCT FROM LIKES =================
export const removeFromLikes =
  (productId) => {
    try {
      const likedProducts =
        getLikedProducts();

      const updatedLikes =
        likedProducts.filter(
          (item) =>
            item.id !==
            productId
        );

      saveLikedProducts(
        updatedLikes
      );

      return updatedLikes;
    } catch (error) {
      console.error(
        "Error removing liked product:",
        error
      );
    }
  };

// ================= TOGGLE LIKE =================
export const toggleLike =
  (product) => {
    try {
      const likedProducts =
        getLikedProducts();

      const exists =
        likedProducts.some(
          (item) =>
            item.id ===
            product.id
        );

      let updatedLikes =
        [];

      if (exists) {
        updatedLikes =
          likedProducts.filter(
            (item) =>
              item.id !==
              product.id
          );
      } else {
        updatedLikes = [
          ...likedProducts,
          product,
        ];
      }

      saveLikedProducts(
        updatedLikes
      );

      return updatedLikes;
    } catch (error) {
      console.error(
        "Error toggling like:",
        error
      );
    }
  };

// ================= CLEAR ALL LIKES =================
export const clearLikes =
  () => {
    try {
      localStorage.removeItem(
        STORAGE_KEY
      );
    } catch (error) {
      console.error(
        "Error clearing likes:",
        error
      );
    }
  };

// ================= GET TOTAL LIKES =================
export const getLikedCount =
  () => {
    const likedProducts =
      getLikedProducts();

    return likedProducts.length;
  };

// ================= DEFAULT EXPORT =================
const likeUtils = {
  getLikedProducts,
  saveLikedProducts,
  isProductLiked,
  addToLikes,
  removeFromLikes,
  toggleLike,
  clearLikes,
  getLikedCount,
};

export default likeUtils;