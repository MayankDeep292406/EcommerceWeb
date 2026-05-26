// src/context/CartContext.jsx

import React, {
  createContext,
  useEffect,
  useState,
} from "react";

export const CartContext =
  createContext();

export const CartProvider = ({
  children,
}) => {
  const [cartItems, setCartItems] =
    useState(() => {
      const savedCart =
        localStorage.getItem(
          "cart"
        );

      return savedCart
        ? JSON.parse(savedCart)
        : [];
    });

  /* ======================================
     SAVE CART TO LOCAL STORAGE
  ====================================== */
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  /* ======================================
     ADD TO CART
  ====================================== */
  const addToCart = (
    product
  ) => {
    const existingProduct =
      cartItems.find(
        (item) =>
          item._id === product._id
      );

    if (existingProduct) {
      const updatedCart =
        cartItems.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  /* ======================================
     REMOVE FROM CART
  ====================================== */
  const removeFromCart = (
    id
  ) => {
    const updatedCart =
      cartItems.filter(
        (item) => item._id !== id
      );

    setCartItems(updatedCart);
  };

  /* ======================================
     INCREASE QUANTITY
  ====================================== */
  const increaseQuantity = (
    id
  ) => {
    const updatedCart =
      cartItems.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      );

    setCartItems(updatedCart);
  };

  /* ======================================
     DECREASE QUANTITY
  ====================================== */
  const decreaseQuantity = (
    id
  ) => {
    const updatedCart =
      cartItems
        .map((item) =>
          item._id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        );

    setCartItems(updatedCart);
  };

  /* ======================================
     CLEAR CART
  ====================================== */
  const clearCart = () => {
    setCartItems([]);
  };

  /* ======================================
     TOTAL PRICE
  ====================================== */
  const cartTotal =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );

  /* ======================================
     TOTAL ITEMS
  ====================================== */
  const totalItems =
    cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartTotal,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};