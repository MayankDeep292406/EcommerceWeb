// src/seller/pages/Reviews.jsx

import React, {
  useState,
} from "react";

import {
  Star,
  Search,
  Filter,
  MessageSquare,
  ThumbsUp,
  Trash2,
  Eye,
  User,
  CalendarDays,
  CheckCircle2,
  TrendingUp,
  BadgeCheck,
  Package,
} from "lucide-react";

function Reviews() {
  /* ==========================================
     STATES
  ========================================== */

  const [search,
    setSearch] =
    useState("");

  const [reviews,
    setReviews] =
    useState([
      {
        id: 1,
        customer:
          "Rahul Sharma",

        product:
          "Modern Luxury Sofa",

        rating: 5,

        review:
          "Amazing sofa quality. Very comfortable and premium finishing. Delivery was fast and packaging was excellent.",

        date:
          "15 May 2026",

        verified: true,

        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },

      {
        id: 2,
        customer:
          "Priya Singh",

        product:
          "Wooden Dining Table",

        rating: 4,

        review:
          "Beautiful dining table with strong wood quality. Perfect for my home interior.",

        date:
          "16 May 2026",

        verified: true,

        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },

      {
        id: 3,
        customer:
          "Amit Kumar",

        product:
          "Premium Office Chair",

        rating: 3,

        review:
          "Chair quality is good but delivery took extra time. Overall decent product.",

        date:
          "17 May 2026",

        verified: false,

        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      },

      {
        id: 4,
        customer:
          "Sneha Patel",

        product:
          "King Size Bed",

        rating: 5,

        review:
          "Luxury finishing and premium comfort. Highly recommended furniture store.",

        date:
          "18 May 2026",

        verified: true,

        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      },
    ]);

  /* ==========================================
     DELETE REVIEW
  ========================================== */

  const deleteReview =
    (id) => {
      setReviews(
        reviews.filter(
          (review) =>
            review.id !== id
        )
      );
    };

  /* ==========================================
     FILTER REVIEWS
  ========================================== */

  const filteredReviews =
    reviews.filter(
      (review) =>
        review.customer
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        review.product
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  /* ==========================================
     CALCULATIONS
  ========================================== */

  const totalReviews =
    reviews.length;

  const averageRating =
    (
      reviews.reduce(
        (acc, item) =>
          acc + item.rating,
        0
      ) / reviews.length
    ).toFixed(1);

  const fiveStar =
    reviews.filter(
      (item) =>
        item.rating === 5
    ).length;

  const verifiedReviews =
    reviews.filter(
      (item) =>
        item.verified
    ).length;

  /* ==========================================
     STAR RENDER
  ========================================== */

  const renderStars =
    (count) => {
      return [...Array(5)].map(
        (_, index) => (
          <Star
            key={index}
            size={18}
            className={`${
              index < count
                ? "text-yellow-500 fill-yellow-500"
                : "text-gray-300"
            }`}
          />
        )
      );
    };

  return (
    <div className="space-y-8">
      
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
        
        <div>
          <h1 className="text-4xl font-black text-gray-800">
            Customer Reviews
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Monitor ratings and feedback for your furniture products
          </p>
        </div>

        {/* REVIEW SCORE */}

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-6 text-white shadow-2xl flex items-center gap-5">
          
          <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center">
            <Star
              size={40}
              className="fill-white"
            />
          </div>

          <div>
            <p className="opacity-80">
              Average Rating
            </p>

            <h2 className="text-5xl font-black mt-1">
              {
                averageRating
              }
            </h2>

            <p className="text-sm opacity-80 mt-1">
              Customer satisfaction
            </p>
          </div>
        </div>
      </div>

      {/* ==========================================
          STATS
      ========================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* TOTAL REVIEWS */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Total Reviews
              </p>

              <h2 className="text-4xl font-black text-gray-800 mt-2">
                {
                  totalReviews
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <MessageSquare
                size={34}
              />
            </div>
          </div>
        </div>

        {/* FIVE STAR */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                5 Star Reviews
              </p>

              <h2 className="text-4xl font-black text-yellow-600 mt-2">
                {
                  fiveStar
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <Star
                size={34}
                className="fill-yellow-500"
              />
            </div>
          </div>
        </div>

        {/* VERIFIED */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Verified Buyers
              </p>

              <h2 className="text-4xl font-black text-green-600 mt-2">
                {
                  verifiedReviews
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-green-100 text-green-600 flex items-center justify-center">
              <BadgeCheck
                size={34}
              />
            </div>
          </div>
        </div>

        {/* GROWTH */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Growth
              </p>

              <h2 className="text-4xl font-black text-blue-600 mt-2">
                +18%
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <TrendingUp
                size={34}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          REVIEW SECTION
      ========================================== */}

      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        
        {/* TOP */}

        <div className="p-6 border-b border-gray-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          
          <div>
            <h2 className="text-2xl font-black text-gray-800">
              Customer Feedback
            </h2>

            <p className="text-gray-500 mt-1">
              View customer experiences and product ratings
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* SEARCH */}

            <div className="relative w-full md:w-80">
              
              <Search
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search reviews..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
              />
            </div>

            {/* FILTER */}

            <button className="bg-gray-100 hover:bg-orange-100 transition-all px-6 py-4 rounded-2xl font-bold text-gray-700 flex items-center gap-2">
              
              <Filter
                size={20}
              />

              Filter
            </button>
          </div>
        </div>

        {/* REVIEWS */}

        <div className="p-6 space-y-6">
          
          {filteredReviews.map(
            (review) => (
              <div
                key={
                  review.id
                }
                className="border border-gray-200 rounded-3xl p-6 hover:shadow-xl transition-all"
              >
                
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
                  
                  {/* LEFT */}

                  <div className="flex gap-5">
                    
                    <img
                      src={
                        review.image
                      }
                      alt={
                        review.customer
                      }
                      className="w-20 h-20 rounded-3xl object-cover"
                    />

                    <div>
                      
                      <div className="flex flex-wrap items-center gap-3">
                        
                        <h3 className="text-2xl font-black text-gray-800">
                          {
                            review.customer
                          }
                        </h3>

                        {review.verified && (
                          <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                            
                            <BadgeCheck
                              size={16}
                            />

                            Verified Buyer
                          </div>
                        )}
                      </div>

                      {/* PRODUCT */}

                      <div className="flex items-center gap-2 mt-3 text-orange-600 font-bold">
                        
                        <Package
                          size={18}
                        />

                        {
                          review.product
                        }
                      </div>

                      {/* STARS */}

                      <div className="flex items-center gap-1 mt-4">
                        {renderStars(
                          review.rating
                        )}
                      </div>

                      {/* REVIEW */}

                      <p className="text-gray-600 mt-5 leading-relaxed text-lg">
                        "
                        {
                          review.review
                        }
                        "
                      </p>

                      {/* DATE */}

                      <div className="flex items-center gap-2 mt-5 text-gray-500">
                        
                        <CalendarDays
                          size={18}
                        />

                        {
                          review.date
                        }
                      </div>
                    </div>
                  </div>

                  {/* ACTIONS */}

                  <div className="flex items-center gap-3">
                    
                    {/* VIEW */}

                    <button className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center">
                      
                      <Eye
                        size={20}
                      />
                    </button>

                    {/* LIKE */}

                    <button className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 hover:bg-green-500 hover:text-white transition-all flex items-center justify-center">
                      
                      <ThumbsUp
                        size={20}
                      />
                    </button>

                    {/* DELETE */}

                    <button
                      onClick={() =>
                        deleteReview(
                          review.id
                        )
                      }
                      className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
                    >
                      <Trash2
                        size={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )
          )}

          {/* EMPTY */}

          {filteredReviews.length ===
            0 && (
            <div className="text-center py-20">
              
              <User
                size={80}
                className="mx-auto text-gray-300"
              />

              <h2 className="text-3xl font-black text-gray-700 mt-5">
                No Reviews Found
              </h2>

              <p className="text-gray-500 mt-2">
                Try another search keyword
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ==========================================
          FOOTER CARD
      ========================================== */}

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-2xl">
        
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
          
          <div className="max-w-3xl">
            
            <div className="flex items-center gap-4 mb-4">
              
              <div className="w-16 h-16 rounded-3xl bg-orange-500 flex items-center justify-center">
                <Star
                  size={34}
                  className="fill-white"
                />
              </div>

              <h2 className="text-3xl font-black">
                Build Customer Trust
              </h2>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed">
              Positive reviews increase furniture sales and improve
              customer confidence. Deliver premium quality and
              excellent support to grow your business faster.
            </p>
          </div>

          <button className="bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 rounded-2xl text-lg font-black hover:scale-105 transition-all shadow-xl">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;