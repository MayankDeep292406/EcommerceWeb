import React from "react";

function TopCard({ name, brand, price, discountPrice, image, inStock }) {
  const handleAddToCart = () => {
    alert(`Added ${name} to cart!`);
    // Replace with real cart logic if needed
  };

  const discountPercent =
    price > discountPrice
      ? Math.round(((price - discountPrice) / price) * 100)
      : 0;

  return (
    <div className="border p-4 rounded shadow w-64 flex flex-col justify-between">
      <div>
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded"
        />
        <h2 className="text-lg font-semibold mt-2">{name}</h2>
        <p className="text-sm text-gray-500">{brand}</p>
        <p className="text-red-600 font-bold">₹{discountPrice}</p>
        <p className="line-through text-gray-400 text-sm">₹{price}</p>

        {discountPercent > 0 && (
          <p className="text-green-600 text-sm">{discountPercent}% OFF</p>
        )}
      </div>

      <button
        onClick={handleAddToCart}
        disabled={!inStock}
        className={`mt-3 px-4 py-2 rounded font-semibold w-full transition-all duration-300 ${
          inStock
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-400 text-white cursor-not-allowed"
        }`}
      >
        {inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
}

export default TopCard;
