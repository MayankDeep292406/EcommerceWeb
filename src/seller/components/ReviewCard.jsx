// src/components/ReviewCard.jsx
import React from "react";
import {
  Star,
  MessageCircle,
  ThumbsUp,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    product: "Modern Sofa Set",
    rating: 5,
    review:
      "Excellent quality sofa with premium finishing. Very comfortable and stylish.",
    date: "12 May 2026",
    likes: 24,
  },
  {
    id: 2,
    name: "Priya Singh",
    product: "Dining Table",
    rating: 4,
    review:
      "Beautiful dining table. Packaging and delivery were very good.",
    date: "14 May 2026",
    likes: 18,
  },
  {
    id: 3,
    name: "Amit Kumar",
    product: "Wooden Chair",
    rating: 3,
    review:
      "Chair quality is decent but delivery was slightly delayed.",
    date: "15 May 2026",
    likes: 9,
  },
];

export default function ReviewCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {reviews.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
                {item.name.charAt(0)}
              </div>

              {/* User Info */}
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-500">
                  Purchased: {item.product}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
              <Star
                size={16}
                className="text-yellow-500 fill-yellow-500"
              />

              <span className="text-sm font-semibold text-yellow-700">
                {item.rating}.0
              </span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 mt-4">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={18}
                className={`${
                  index < item.rating
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Review */}
          <p className="text-gray-600 mt-4 leading-relaxed">
            {item.review}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-5 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MessageCircle size={16} />
                Review
              </div>

              <div className="flex items-center gap-1">
                <ThumbsUp size={16} />
                {item.likes}
              </div>
            </div>

            <span className="text-sm text-gray-400">
              {item.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}