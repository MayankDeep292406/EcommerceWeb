// src/TopProducts/TopProducts.jsx
import React from "react";
import TopCard from "./TopCard";
// import Products from "../Product/Product"; // ❌ Remove if unused

function TopProducts({ products }) {
  const topItems = products.filter((product) => product.topProduct);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Top Products</h1>
      <div className="flex flex-wrap gap-4">
        {topItems.map((product) => (
          <TopCard
            key={product.id}
            name={product.name}
            brand={product.brand}
            price={product.price}
            discountPrice={product.discountPrice}
            image={product.image}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default TopProducts;
