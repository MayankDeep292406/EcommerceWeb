// src/seller/pages/Analytics.jsx

import React, {
  useEffect,
  useState,
} from "react";

import {
  TrendingUp,
  IndianRupee,
  ShoppingCart,
  Users,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Star,
  Activity,
  BarChart3,
} from "lucide-react";

import AnalyticsChart from "../components/AnalyticsChart";
import StatsCard from "../components/StatsCard";
import ReviewCard from "../components/ReviewCard";
import SellerLoader from "../components/SellerLoader";

function Analytics() {
  /* ==========================================
     STATES
  ========================================== */

  const [loading, setLoading] =
    useState(true);

  const [analytics,
    setAnalytics] =
    useState({
      revenue: 425000,
      orders: 1240,
      customers: 845,
      products: 120,
      views: 15200,
      rating: 4.8,
    });

  /* ==========================================
     CHART DATA
  ========================================== */

  const salesData = [
    {
      month: "Jan",
      sales: 12000,
    },
    {
      month: "Feb",
      sales: 18000,
    },
    {
      month: "Mar",
      sales: 25000,
    },
    {
      month: "Apr",
      sales: 22000,
    },
    {
      month: "May",
      sales: 32000,
    },
    {
      month: "Jun",
      sales: 40000,
    },
    {
      month: "Jul",
      sales: 45000,
    },
  ];

  /* ==========================================
     TOP PRODUCTS
  ========================================== */

  const topProducts = [
    {
      id: 1,
      name: "Modern Luxury Sofa",
      sales: 120,
      revenue: "₹1,80,000",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    },

    {
      id: 2,
      name: "Wooden Dining Table",
      sales: 90,
      revenue: "₹1,20,000",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },

    {
      id: 3,
      name: "Premium Office Chair",
      sales: 75,
      revenue: "₹95,000",
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
    },
  ];

  /* ==========================================
     RECENT REVIEWS
  ========================================== */

  const reviews = [
    {
      id: 1,
      customer: "Rahul Sharma",
      rating: 5,
      comment:
        "Excellent quality furniture and fast delivery.",
    },

    {
      id: 2,
      customer: "Priya Singh",
      rating: 4,
      comment:
        "Very comfortable sofa and premium design.",
    },

    {
      id: 3,
      customer: "Amit Kumar",
      rating: 5,
      comment:
        "Amazing experience. Worth every rupee.",
    },
  ];

  /* ==========================================
     LOADING EFFECT
  ========================================== */

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  /* ==========================================
     LOADER
  ========================================== */

  if (loading) {
    return <SellerLoader />;
  }

  return (
    <div className="space-y-8">
      
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        
        <div>
          <h1 className="text-4xl font-black text-gray-800">
            Analytics Dashboard
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Track your furniture shop performance
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 rounded-3xl shadow-xl flex items-center gap-4">
          
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
            <BarChart3 size={28} />
          </div>

          <div>
            <p className="text-sm opacity-80">
              Total Growth
            </p>

            <h2 className="text-2xl font-black">
              +24.5%
            </h2>
          </div>
        </div>
      </div>

      {/* ==========================================
          STATS CARDS
      ========================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        
        <StatsCard
          title="Total Revenue"
          value={`₹${analytics.revenue.toLocaleString()}`}
          icon={
            <IndianRupee />
          }
          growth="+18%"
          positive={true}
        />

        <StatsCard
          title="Orders"
          value={analytics.orders}
          icon={
            <ShoppingCart />
          }
          growth="+12%"
          positive={true}
        />

        <StatsCard
          title="Customers"
          value={analytics.customers}
          icon={<Users />}
          growth="+9%"
          positive={true}
        />

        <StatsCard
          title="Products"
          value={analytics.products}
          icon={<Package />}
          growth="-2%"
          positive={false}
        />
      </div>

      {/* ==========================================
          CHART + PERFORMANCE
      ========================================== */}

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* CHART */}

        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-200 p-6">
          
          <div className="flex items-center justify-between mb-6">
            
            <div>
              <h2 className="text-2xl font-black text-gray-800">
                Sales Analytics
              </h2>

              <p className="text-gray-500 mt-1">
                Monthly furniture sales overview
              </p>
            </div>

            <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-2xl font-bold">
              <TrendingUp size={18} />
              +22%
            </div>
          </div>

          <AnalyticsChart
            data={salesData}
          />
        </div>

        {/* PERFORMANCE */}

        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6">
          
          <h2 className="text-2xl font-black text-gray-800 mb-6">
            Store Performance
          </h2>

          <div className="space-y-5">
            
            <div className="flex items-center justify-between p-4 rounded-2xl bg-orange-50">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center">
                  <Eye size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Total Views
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Product impressions
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-black text-orange-600">
                {analytics.views}
              </h2>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-yellow-50">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500 text-white flex items-center justify-center">
                  <Star size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Rating
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Customer reviews
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-black text-yellow-600">
                {analytics.rating}
              </h2>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-green-50">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500 text-white flex items-center justify-center">
                  <Activity size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Conversion
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Sales conversion rate
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-black text-green-600">
                68%
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          TOP PRODUCTS
      ========================================== */}

      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6">
        
        <div className="flex items-center justify-between mb-8">
          
          <div>
            <h2 className="text-2xl font-black text-gray-800">
              Top Selling Products
            </h2>

            <p className="text-gray-500 mt-1">
              Best performing furniture items
            </p>
          </div>

          <button className="bg-gray-100 hover:bg-orange-100 transition-all px-5 py-3 rounded-2xl font-bold text-gray-700">
            View All
          </button>
        </div>

        <div className="space-y-5">
          
          {topProducts.map(
            (product, index) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-5 p-5 rounded-3xl border border-gray-200 hover:shadow-lg transition-all"
              >
                
                <div className="flex items-center gap-5">
                  
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center font-black text-xl">
                    {index + 1}
                  </div>

                  <img
                    src={
                      product.image
                    }
                    alt={
                      product.name
                    }
                    className="w-24 h-24 rounded-2xl object-cover"
                  />

                  <div>
                    <h3 className="text-xl font-black text-gray-800">
                      {product.name}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      {product.sales} sales
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      Revenue
                    </p>

                    <h2 className="text-2xl font-black text-orange-600">
                      {
                        product.revenue
                      }
                    </h2>
                  </div>

                  <button className="w-14 h-14 rounded-2xl bg-orange-100 hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center">
                    <ArrowUpRight />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* ==========================================
          REVIEWS SECTION
      ========================================== */}

      <div className="grid lg:grid-cols-3 gap-6">
        
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
          />
        ))}
      </div>

      {/* ==========================================
          SALES SUMMARY
      ========================================== */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-6 text-white shadow-xl">
          
          <div className="flex items-center justify-between">
            <div>
              <p className="opacity-80">
                Profit
              </p>

              <h2 className="text-3xl font-black mt-2">
                ₹2.5L
              </h2>
            </div>

            <ArrowUpRight
              size={32}
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-6 text-white shadow-xl">
          
          <div className="flex items-center justify-between">
            <div>
              <p className="opacity-80">
                Expenses
              </p>

              <h2 className="text-3xl font-black mt-2">
                ₹85K
              </h2>
            </div>

            <ArrowDownRight
              size={32}
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-6 text-white shadow-xl">
          
          <div className="flex items-center justify-between">
            <div>
              <p className="opacity-80">
                Visitors
              </p>

              <h2 className="text-3xl font-black mt-2">
                18K
              </h2>
            </div>

            <Users size={32} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-6 text-white shadow-xl">
          
          <div className="flex items-center justify-between">
            <div>
              <p className="opacity-80">
                Growth
              </p>

              <h2 className="text-3xl font-black mt-2">
                +32%
              </h2>
            </div>

            <TrendingUp
              size={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;