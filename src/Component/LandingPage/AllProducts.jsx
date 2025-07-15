// AllProducts.jsx
import React from "react";
import TopCard from "./TopCard"; // or use LikeCard if you prefer

export default function AllProducts({ products }) {
  if (!products || !Array.isArray(products)) {
    return <p className="text-red-600">No products available.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🛒 All Products</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product) => (
          <TopCard
            key={product.id}
            name={product.name}
            brand={product.brand}
            price={product.price}
            discountPrice={product.discountPrice}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
