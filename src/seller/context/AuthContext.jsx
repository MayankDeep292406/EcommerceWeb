// src/context/AuthContext.jsx

import React, {
  createContext,
  useContext,
  useState,
} from "react";

/* ==========================================
   CREATE CONTEXT
========================================== */

export const AuthContext =
  createContext();

/* ==========================================
   CUSTOM HOOK
========================================== */

export const useAuth = () => {
  return useContext(
    AuthContext
  );
};

/* ==========================================
   AUTH PROVIDER
========================================== */

export const AuthProvider =
  ({ children }) => {
    const [user, setUser] =
      useState(null);

    const login = (
      userData
    ) => {
      setUser(userData);
    };

    const logout = () => {
      setUser(null);
    };

    return (
      <AuthContext.Provider
        value={{
          user,
          login,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

/* ==========================================
   DEFAULT EXPORT
========================================== */

export default AuthContext;