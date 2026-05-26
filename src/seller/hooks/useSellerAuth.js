// src/hooks/useSellerAuth.js

import {
  useContext,
  useMemo,
} from "react";

import {
  SellerAuthContext,
} from "../context/sellerAuthContext";

/* ==========================================
   CUSTOM SELLER AUTH HOOK
========================================== */

const useSellerAuth = () => {
  const context =
    useContext(
      SellerAuthContext
    );

  /* ==========================================
     ERROR HANDLING
  ========================================== */

  if (!context) {
    throw new Error(
      "useSellerAuth must be used inside SellerAuthProvider"
    );
  }

  /* ==========================================
     DESTRUCTURE CONTEXT
  ========================================== */

  const {
    seller,
    dashboard,
    notifications,

    loading,
    error,
    success,

    isAuthenticated,

    register,
    login,
    logout,

    fetchProfile,
    updateProfile,

    updatePassword,

    forgotSellerPassword,
    resetSellerPassword,

    uploadAvatar,

    fetchDashboard,
    fetchNotifications,
    markAsRead,

    deleteAccount,

    clearMessages,
  } = context;

  /* ==========================================
     COMPUTED VALUES
  ========================================== */

  const sellerName = useMemo(
    () =>
      seller?.name ||
      seller?.fullName ||
      "Seller",
    [seller]
  );

  const sellerEmail = useMemo(
    () =>
      seller?.email || "",
    [seller]
  );

  const sellerAvatar = useMemo(
    () =>
      seller?.avatar ||
      seller?.profileImage ||
      "",
    [seller]
  );

  const unreadNotifications =
    useMemo(() => {
      return notifications?.filter(
        (item) => !item.read
      );
    }, [notifications]);

  const totalUnread =
    unreadNotifications.length;

  /* ==========================================
     HELPERS
  ========================================== */

  const hasRole = (role) => {
    return (
      seller?.role === role
    );
  };

  const isAdminSeller =
    () => {
      return (
        seller?.role ===
        "admin"
      );
    };

  const isNormalSeller =
    () => {
      return (
        seller?.role ===
        "seller"
      );
    };

  const refreshSellerData =
    async () => {
      await fetchProfile();

      await fetchDashboard();

      await fetchNotifications();
    };

  /* ==========================================
     RETURN
  ========================================== */

  return {
    seller,
    sellerName,
    sellerEmail,
    sellerAvatar,

    dashboard,

    notifications,
    unreadNotifications,
    totalUnread,

    loading,
    error,
    success,

    isAuthenticated,

    register,
    login,
    logout,

    fetchProfile,
    updateProfile,

    uploadAvatar,

    updatePassword,

    forgotSellerPassword,
    resetSellerPassword,

    fetchDashboard,

    fetchNotifications,
    markAsRead,

    deleteAccount,

    hasRole,
    isAdminSeller,
    isNormalSeller,

    refreshSellerData,

    clearMessages,
  };
};

export default useSellerAuth;