// LikedProducts.jsx
import React from 'react';
import LikeCard from './LikeCard'; // ✅ Make sure this file exists and is correct

export default function LikedProducts({ products }) {
  const likedItems = products.filter((product) => product.likedProduct); // ✅ correct filter

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">❤️ Liked Items</h1>
      <div className="flex flex-wrap gap-4">
        {likedItems.map((product) => (
          <LikeCard
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
