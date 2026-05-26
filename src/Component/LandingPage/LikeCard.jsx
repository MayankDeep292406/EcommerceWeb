import React from "react";

function LikeCard({
  id,
  name,
  brand,
  price,
  discountPrice,
  image,
  onRemove,
}) {
  return (
    <div className="border p-4 rounded-xl shadow bg-white w-64 hover:shadow-lg transition relative">

      {/* ❌ Remove Button */}
      <button
        onClick={() => onRemove(id)}
        className="absolute top-2 right-2 text-red-500 text-lg"
        title="Remove"
      >
        ❌
      </button>

      {/* 🖼 Image */}
      <img
        src={image || "https://via.placeholder.com/200"}
        alt={name}
        className="w-full h-40 object-cover rounded"
      />

      {/* 📦 Info */}
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-sm text-gray-500">{brand}</p>

      {/* 💰 Price */}
      <div className="mt-2">
        <span className="text-green-600 font-bold">
          ₹{discountPrice || price}
        </span>

        {discountPrice && (
          <span className="line-through text-gray-400 ml-2 text-sm">
            ₹{price}
          </span>
        )}
      </div>

      {/* 🛒 Button */}
      <button className="mt-3 w-full bg-blue-600 text-white py-1 rounded">
        Add to Cart
      </button>
    </div>
  );
}

export default LikeCard;