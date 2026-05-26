// src/context/WishlistContext.jsx

import React, {
  createContext,
  useEffect,
  useState,
} from "react";

export const WishlistContext =
  createContext();

export const WishlistProvider = ({
  children,
}) => {
  const [wishlistItems, setWishlistItems] =
    useState(() => {
      const storedWishlist =
        localStorage.getItem(
          "wishlist"
        );

      return storedWishlist
        ? JSON.parse(
            storedWishlist
          )
        : [];
    });

  /* ======================================
     SAVE TO LOCAL STORAGE
  ====================================== */
  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(
        wishlistItems
      )
    );
  }, [wishlistItems]);

  /* ======================================
     ADD TO WISHLIST
  ====================================== */
  const addToWishlist = (
    product
  ) => {
    const exists =
      wishlistItems.find(
        (item) =>
          item._id === product._id
      );

    if (!exists) {
      setWishlistItems((prev) => [
        ...prev,
        product,
      ]);
    }
  };

  /* ======================================
     REMOVE FROM WISHLIST
  ====================================== */
  const removeFromWishlist = (
    id
  ) => {
    const updatedWishlist =
      wishlistItems.filter(
        (item) => item._id !== id
      );

    setWishlistItems(
      updatedWishlist
    );
  };

  /* ======================================
     CLEAR WISHLIST
  ====================================== */
  const clearWishlist = () => {
    setWishlistItems([]);
  };

  /* ======================================
     CHECK IF PRODUCT EXISTS
  ====================================== */
  const isInWishlist = (
    id
  ) => {
    return wishlistItems.some(
      (item) => item._id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};