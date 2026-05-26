import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  sellerLogin,
  sellerRegister,
  sellerLogout,
} from "../api/sellerApi";

/* ==========================================
   CONTEXT
========================================== */

export const SellerAuthContext =
  createContext();

/* ==========================================
   CUSTOM HOOK
========================================== */

export const useSellerAuth =
  () => {
    return useContext(
      SellerAuthContext
    );
  };

/* ==========================================
   PROVIDER
========================================== */

export const SellerAuthProvider =
  ({ children }) => {
    /* ==========================================
       STATES
    ========================================== */

    const [seller, setSeller] =
      useState(null);

    const [loading,
      setLoading] =
      useState(false);

    const [error,
      setError] =
      useState(null);

    const [isAuthenticated,
      setIsAuthenticated] =
      useState(false);

    /* ==========================================
       CHECK LOGIN
    ========================================== */

    useEffect(() => {
      const storedSeller =
        localStorage.getItem(
          "ecommerce_seller"
        );

      if (storedSeller) {
        setSeller(
          JSON.parse(
            storedSeller
          )
        );

        setIsAuthenticated(
          true
        );
      }
    }, []);

    /* ==========================================
       REGISTER
    ========================================== */

    const register =
      async (sellerData) => {
        try {
          setLoading(true);

          const response =
            await sellerRegister(
              sellerData
            );

          localStorage.setItem(
            "ecommerce_seller",
            JSON.stringify(
              response.seller
            )
          );

          setSeller(
            response.seller
          );

          setIsAuthenticated(
            true
          );

          return response;
        } catch (err) {
          console.log(err);

          setError(
            err.message
          );
        } finally {
          setLoading(false);
        }
      };

    /* ==========================================
       LOGIN
    ========================================== */

    const login = async (
      loginData
    ) => {
      try {
        setLoading(true);

        const response =
          await sellerLogin(
            loginData
          );

        localStorage.setItem(
          "ecommerce_seller",
          JSON.stringify(
            response.seller
          )
        );

        setSeller(
          response.seller
        );

        setIsAuthenticated(
          true
        );

        return response;
      } catch (err) {
        console.log(err);

        setError(
          err.message
        );
      } finally {
        setLoading(false);
      }
    };

    /* ==========================================
       LOGOUT
    ========================================== */

    const logout =
      async () => {
        try {
          await sellerLogout();

          localStorage.removeItem(
            "ecommerce_seller"
          );

          setSeller(null);

          setIsAuthenticated(
            false
          );
        } catch (err) {
          console.log(err);
        }
      };

    /* ==========================================
       CONTEXT VALUE
    ========================================== */

    const value = {
      seller,

      loading,

      error,

      isAuthenticated,

      register,

      login,

      logout,
    };

    return (
      <SellerAuthContext.Provider
        value={value}
      >
        {children}
      </SellerAuthContext.Provider>
    );
  };

export default SellerAuthContext;