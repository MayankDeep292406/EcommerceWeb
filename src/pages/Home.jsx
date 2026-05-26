// src/pages/Home.jsx

import React from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  ShoppingBag,
  ArrowRight,
  Star,
  ShieldCheck,
  Headphones,
  Sofa,
  Sparkles,
  Truck,
} from "lucide-react";

import Footer from "../Component/Footer/Footer";
import ProductData from "../Component/API/Products";

function Home() {

  const navigate =
    useNavigate();

  return (

    <div className="bg-[#060816] text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}

      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BACKGROUND */}

        <div className="absolute inset-0">

          <div className="absolute inset-0 bg-gradient-to-br from-[#07152d] via-[#0b1020] to-black"></div>

          <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-[120px]"></div>

          <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-pink-500/20 rounded-full blur-[120px]"></div>
        </div>

        {/* MAIN */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 px-5 py-2 rounded-full text-cyan-300 mb-8 backdrop-blur-md">

              <Sparkles size={18} />

              Premium Shopping Experience

            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">

              Discover

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500">

                Luxury Living

              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-xl">

              Shop premium furniture, modern decor,
              electronics, fashion, and lifestyle
              products with fast delivery and
              trusted quality.

            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/products"
                className="group bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-[0_10px_40px_rgba(6,182,212,0.4)]"
              >

                <ShoppingBag size={22} />

                Shop Now

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />

              </Link>

              <Link
                to="/register"
                className="border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-2xl font-semibold backdrop-blur-md"
              >

                Create Account

              </Link>
            </div>

            {/* STATS */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md">

                <h2 className="text-3xl font-bold text-cyan-400">

                  10K+

                </h2>

                <p className="text-gray-400 mt-1">

                  Customers

                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md">

                <h2 className="text-3xl font-bold text-pink-400">

                  500+

                </h2>

                <p className="text-gray-400 mt-1">

                  Products

                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md">

                <h2 className="text-3xl font-bold text-yellow-400">

                  24/7

                </h2>

                <p className="text-gray-400 mt-1">

                  Support

                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

           <div className="relative w-full max-w-lg flex items-center justify-center">

           {/* BLUR BACKGROUND */}
             <div className="absolute w-[90%] h-[90%] bg-teal-400 opacity-30 blur-[120px] rounded-full"></div>

           {/* IMAGE */}
             <img
                src="https://images.woodenstreet.de/image/data/bed-with-storage/walken-bed-with-storage/updated/NEW-+HONEY/New+Looks/105.jpg"
                alt="Bed"
                 className="relative z-10 w-full h-[650px] object-contain drop-shadow-2xl"
                 />
              </div>
           </div>
          </div>
           </section>

      {/* ================= FEATURES ================= */}

      <section className="py-28 bg-white text-black">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black">

              Why Choose Shop_Now?

            </h2>

            <p className="mt-5 text-gray-600 text-lg">

              Experience modern shopping with premium quality.

            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* CARD */}

            <div className="group bg-gradient-to-b from-cyan-50 to-white border border-cyan-100 p-10 rounded-[35px] hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

              <div className="bg-cyan-100 w-20 h-20 rounded-3xl flex items-center justify-center mb-8">

                <ShieldCheck className="text-cyan-600 w-10 h-10" />

              </div>

              <h3 className="text-3xl font-bold mb-4">

                Trusted Quality

              </h3>

              <p className="text-gray-600 leading-relaxed">

                Carefully selected premium products.

              </p>
            </div>

            {/* CARD */}

            <div className="group bg-gradient-to-b from-pink-50 to-white border border-pink-100 p-10 rounded-[35px] hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

              <div className="bg-pink-100 w-20 h-20 rounded-3xl flex items-center justify-center mb-8">

                <Sofa className="text-pink-500 w-10 h-10" />

              </div>

              <h3 className="text-3xl font-bold mb-4">

                Modern Design

              </h3>

              <p className="text-gray-600 leading-relaxed">

                Stylish collections for elegant homes.

              </p>
            </div>

            {/* CARD */}

            <div className="group bg-gradient-to-b from-yellow-50 to-white border border-yellow-100 p-10 rounded-[35px] hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

              <div className="bg-yellow-100 w-20 h-20 rounded-3xl flex items-center justify-center mb-8">

                <Headphones className="text-yellow-500 w-10 h-10" />

              </div>

              <h3 className="text-3xl font-bold mb-4">

                24/7 Support

              </h3>

              <p className="text-gray-600 leading-relaxed">

                Dedicated customer support anytime.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SELLER SECTION ================= */}

      <section className="relative py-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-black overflow-hidden">

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-2 rounded-full text-cyan-300 mb-8 backdrop-blur-xl">

                <Sparkles size={18} />

                New Seller Dashboard Available

              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">

                Grow Your

                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">

                  Online Business

                </span>
              </h1>

              <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-xl">

                Join Shop_Now seller marketplace and
                manage products, orders, analytics,
                customers, and revenue in one place.

              </p>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-5 mt-10">

                <Link
                  to="/seller/register"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-[0_10px_40px_rgba(6,182,212,0.4)]"
                >

                  Become Seller

                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition"
                  />

                </Link>

                <Link
                  to="/seller/dashboard"
                  className="border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-2xl font-semibold backdrop-blur-md"
                >

                  Seller Dashboard

                </Link>
              </div>

              {/* STATS */}

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-16">

                <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md">

                  <h2 className="text-3xl font-bold text-cyan-400">

                    25K+

                  </h2>

                  <p className="text-gray-400 mt-1">

                    Orders

                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md">

                  <h2 className="text-3xl font-bold text-pink-400">

                    1K+

                  </h2>

                  <p className="text-gray-400 mt-1">

                    Sellers

                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md">

                  <h2 className="text-3xl font-bold text-yellow-400">

                    99%

                  </h2>

                  <p className="text-gray-400 mt-1">

                    Satisfaction

                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md">

                  <h2 className="text-3xl font-bold text-green-400">

                    24/7

                  </h2>

                  <p className="text-gray-400 mt-1">

                    Support

                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute inset-0 sm:bg-cyan-200/10 blur-2xl rounded-full" />

              <img
                src="https://ik.imagekit.io/efsdltq0e/Logo/seller%202.png?updatedAt=1734937164542"
                alt="Seller Dashboard"
                className="relative z-10 w-full h-[550px] object-cover rounded-[5px] border border-white/4 shadow-1xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRENDING PRODUCTS ================= */}

      <section className="py-24 bg-gradient-to-b from-[#0B1220] to-[#111827] overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* TOP */}

          <div className="flex items-center justify-between flex-wrap gap-5 mb-14">

            <div>

              <span className="bg-purple-600/20 text-purple-400 px-5 py-2 rounded-full text-sm font-semibold border border-purple-500/30">

                Premium Collection

              </span>

              <h2 className="text-4xl sm:text-6xl font-black text-white mt-5 leading-tight">

                Trending Products

              </h2>
            </div>

            <button
              onClick={() =>
                navigate("/products")
              }
              className="group bg-white/10 backdrop-blur-xl border border-white/10 hover:border-purple-500 px-7 py-4 rounded-2xl text-white font-semibold flex items-center gap-3 hover:bg-purple-600 transition-all duration-300"
            >

              View All

            </button>
          </div>

          {/* PRODUCTS */}

          <div className="flex gap-7 overflow-x-auto scrollbar-hide pb-4">

            {ProductData.map(
              (item) => (

                <div
                  key={item.id}
                  onClick={() =>
                    navigate(
                      `/product/${item.id}`
                    )
                  }
                  className="group min-w-[320px] sm:min-w-[360px] bg-white rounded-[32px] overflow-hidden shadow-2xl cursor-pointer hover:-translate-y-3 transition-all duration-500"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[260px] object-cover"
                  />

                  <div className="p-6">

                    <h3 className="text-2xl font-black text-gray-900">

                      {item.name}

                    </h3>

                    <div className="flex items-center gap-2 mt-4">

                      {[1, 2, 3, 4, 5].map(
                        (star) => (

                          <Star
                            key={star}
                            size={18}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-6">

                      <div>

                        <h4 className="text-4xl font-black text-green-600">

                          ₹{item.price}

                        </h4>

                        <p className="text-gray-400 line-through mt-1">

                          ₹{item.oldPrice}

                        </p>
                      </div>

                      <button className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white px-6 py-3 rounded-2xl font-bold">

                        View

                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
  }

export default Home;