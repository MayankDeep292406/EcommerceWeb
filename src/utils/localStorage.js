// src/utils/localStorage.js

/**
 * =========================================
 * LOCAL STORAGE UTILS
 * =========================================
 */

export const saveToLocalStorage = (
  key,
  value
) => {
  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  } catch (error) {
    console.error(error);
  }
};

export const getFromLocalStorage =
  (key) => {
    try {
      const data =
        localStorage.getItem(
          key
        );

      return data
        ? JSON.parse(data)
        : null;
    } catch (error) {
      console.error(error);

      return null;
    }
  };

export const removeFromLocalStorage =
  (key) => {
    try {
      localStorage.removeItem(
        key
      );
    } catch (error) {
      console.error(error);
    }
  };

export const clearLocalStorage =
  () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  };

// ✅ DEFAULT EXPORT
const storageUtils = {
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  clearLocalStorage,
};

export default storageUtils;