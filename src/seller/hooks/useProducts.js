// src/seller/hooks/useProducts.js

import { useState } from "react";

function useProducts() {
  const [loading, setLoading] =
    useState(false);

  const addNewProduct =
    async (productData) => {
      try {
        setLoading(true);

        // OLD PRODUCTS
        const oldProducts =
          JSON.parse(
            localStorage.getItem(
              "products"
            )
          ) || [];

        // NEW PRODUCT
        const newProduct = {
          id: Date.now(),
          title:
            productData.get("title"),

          description:
            productData.get(
              "description"
            ),

          category:
            productData.get(
              "category"
            ),

          brand:
            productData.get(
              "brand"
            ),

          price:
            productData.get(
              "price"
            ),

          stock:
            productData.get(
              "stock"
            ),

          discount:
            productData.get(
              "discount"
            ),

          featured:
            productData.get(
              "featured"
            ),

          image: URL.createObjectURL(
            productData.get("image")
          ),
        };

        // SAVE
        localStorage.setItem(
          "products",
          JSON.stringify([
            ...oldProducts,
            newProduct,
          ])
        );

        return newProduct;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  return {
    addNewProduct,
    loading,
  };
}

export default useProducts;