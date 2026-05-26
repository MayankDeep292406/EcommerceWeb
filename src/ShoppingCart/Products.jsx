// src/pages/Products.jsx

import React, {
  useState,
  useEffect,
  useMemo,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  Heart,
  Search,
  Star,
  ShoppingCart,
  User,
  Sofa,
  Truck,
  RotateCcw,
  ShieldCheck,
  Menu,
  X,
  ShoppingBag,
  Sparkles,
  SlidersHorizontal,
  Eye,
  ArrowRight,
  Flame,
  Filter,
} from "lucide-react";

import ProductData from "../Component/API/Products";
import Footer from "../Component/Footer/Footer";
import Categories from "../pages/Categories";

function Products() {

  const navigate =
    useNavigate();

  /* =========================================================
      STATES
  ========================================================= */

  const [
    likedProducts,
    setLikedProducts,
  ] = useState([]);

  const [
    searchTerm,
    setSearchTerm,
  ] = useState("");

  const [
    mobileMenu,
    setMobileMenu,
  ] = useState(false);

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  const [
    cartCount,
    setCartCount,
  ] = useState(2);

  /* =========================================================
      LOAD WISHLIST
  ========================================================= */

  useEffect(() => {

    const storedLikes =
      JSON.parse(
        localStorage.getItem(
          "likedProducts"
        )
      ) || [];

    setLikedProducts(
      storedLikes
    );

  }, []);

  /* =========================================================
      SAVE WISHLIST
  ========================================================= */

  useEffect(() => {

    localStorage.setItem(
      "likedProducts",
      JSON.stringify(
        likedProducts
      )
    );

  }, [likedProducts]);

  /* =========================================================
      FILTER PRODUCTS
  ========================================================= */

  const filteredProducts =
    useMemo(() => {

      return ProductData.filter(
        (item) => {

          const matchesSearch =
            item.name
              .toLowerCase()
              .includes(
                searchTerm.toLowerCase()
              );

          const matchesCategory =
            selectedCategory ===
            "All"
              ? true
              : item.category ===
                selectedCategory;

          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );

    }, [
      searchTerm,
      selectedCategory,
    ]);

  /* =========================================================
      TOGGLE LIKE
  ========================================================= */

  const toggleLike = (
    product,
    e
  ) => {

    e.stopPropagation();

    const exists =
      likedProducts.some(
        (p) =>
          p.id === product.id
      );

    if (exists) {

      setLikedProducts(
        likedProducts.filter(
          (p) =>
            p.id !== product.id
        )
      );

    } else {

      setLikedProducts([
        ...likedProducts,
        product,
      ]);
    }
  };

  /* =========================================================
      CHECK LIKED
  ========================================================= */

  const isLiked = (id) =>
    likedProducts.some(
      (p) => p.id === id
    );

  return (

    <div className="bg-[#f5f5f7] min-h-screen overflow-hidden">

      {/* =========================================================
          TOP OFFER BAR
      ========================================================= */}

      <div className="hidden lg:block bg-gradient-to-r from-black via-[#111827] to-[#1e293b] text-white">

        <div className="max-w-[1700px] mx-auto px-6 py-3 flex items-center justify-between">

          <div className="flex items-center gap-10 text-sm">

            <div className="flex items-center gap-2">
              <Truck size={16} />
              Free Shipping
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck size={16} />
              Premium Quality
            </div>

            <div className="flex items-center gap-2">
              <RotateCcw size={16} />
              Easy Return
            </div>
          </div>

          <div className="flex items-center gap-2 text-yellow-400 font-bold">

            <Flame size={16} />

            Big Summer Sale 50% OFF

          </div>
        </div>
      </div>

      {/* =========================================================
          HEADER
      ========================================================= */}

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-gray-200">

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 py-5 flex items-center justify-between gap-5">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                setMobileMenu(
                  !mobileMenu
                )
              }
              className="lg:hidden w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center"
            >

              {mobileMenu ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}

            </button>

            {/* LOGO */}
            <div
              onClick={() =>
                navigate("/")
              }
              className="flex items-center gap-3 cursor-pointer group"
            >

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c48b57] to-[#8b5e34] text-white flex items-center justify-center shadow-xl group-hover:scale-105 transition">

                <Sofa size={30} />

              </div>

              <div>

                <h1 className="text-3xl font-black text-gray-900 tracking-tight">

                  Shop_
                  <span className="text-[#c48b57]">
                    Now
                  </span>

                </h1>

                <p className="text-sm text-gray-500">

                  Luxury Furniture

                </p>
              </div>
            </div>
          </div>

          {/* SEARCH */}
          <div className="hidden lg:flex flex-1 max-w-[650px] bg-[#f4f4f5] border border-gray-200 rounded-2xl overflow-hidden">

            <div className="px-5 flex items-center">

              <Search
                size={20}
                className="text-gray-500"
              />

            </div>

            <input
              type="text"
              placeholder="Search furniture..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
              className="flex-1 bg-transparent outline-none px-2 py-4"
            />

            <button className="bg-gradient-to-r from-[#c48b57] to-[#8b5e34] px-8 text-white font-bold">

              Search

            </button>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* WISHLIST */}
            <button
              onClick={() =>
                navigate("/wishlist")
              }
              className="relative hidden md:flex w-12 h-12 rounded-2xl bg-[#f5f5f5] items-center justify-center hover:bg-[#ececec] transition"
            >

              <Heart size={22} />

              {likedProducts.length >
                0 && (

                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-[20px] h-5 rounded-full flex items-center justify-center">

                  {
                    likedProducts.length
                  }

                </span>
              )}
            </button>

            {/* CART */}
            <button className="relative hidden md:flex w-12 h-12 rounded-2xl bg-[#f5f5f5] items-center justify-center hover:bg-[#ececec] transition">

              <ShoppingCart
                size={22}
              />

              <span className="absolute -top-1 -right-1 bg-[#c48b57] text-white text-xs min-w-[20px] h-5 rounded-full flex items-center justify-center">

                {cartCount}

              </span>
            </button>

            {/* USER */}
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ececec] to-[#d4d4d4] flex items-center justify-center">

                <User size={22} />

              </div>

              <div className="hidden md:block">

                <p className="font-bold text-gray-800">

                  Hi, User

                </p>

                <p className="text-sm text-gray-500">

                  Welcome Back

                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="max-w-[1700px] mx-auto px-4 sm:px-6 py-8">

        <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-[#111827] via-[#1e293b] to-[#0f172a] text-white relative">

          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')] bg-cover bg-center opacity-20"></div>

          <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">

            <div className="max-w-[650px]">

              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm mb-6">

                <Sparkles size={16} />

                New Luxury Collection

              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-tight">

                Modern Furniture
                <br />
                For Modern Living

              </h1>

              <p className="text-gray-300 text-lg mt-6 leading-relaxed">

                Discover premium quality sofas,
                chairs, beds, tables and luxury
                interior furniture designed for
                comfort & elegance.

              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <button className="bg-[#c48b57] hover:bg-[#8b5e34] px-8 py-4 rounded-2xl font-bold transition">

                  Shop Now

                </button>

                <button className="bg-white/10 border border-white/10 hover:bg-white/20 px-8 py-4 rounded-2xl font-bold transition">

                  Explore Collection

                </button>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[30px] p-8 min-w-[300px]">

              <h3 className="text-3xl font-black">

                10K+

              </h3>

              <p className="text-gray-300 mt-1">

                Premium Products

              </p>

              <div className="mt-8 space-y-5">

                <div className="flex items-center justify-between">
                  <span>Luxury Sofa</span>
                  <span>₹25,999</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Wooden Table</span>
                  <span>₹12,499</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Modern Chair</span>
                  <span>₹8,999</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <section className="max-w-[1700px] mx-auto px-4 sm:px-6 py-6 flex gap-6">

        {/* =========================================================
            SIDEBAR
        ========================================================= */}

        <aside
          className={`fixed lg:sticky top-0 left-0 z-50 lg:z-0 h-screen lg:h-fit w-[310px] transition-all duration-300 ${
            mobileMenu
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
        >

          <div className="bg-white border-r lg:border border-gray-200 rounded-none lg:rounded-[30px] h-full lg:h-fit p-6 shadow-sm overflow-y-auto">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-2xl font-black text-gray-900">

                  Categories

                </h2>

                <p className="text-gray-500 text-sm mt-1">

                  Browse by furniture type

                </p>
              </div>

              <button
                onClick={() =>
                  setMobileMenu(
                    false
                  )
                }
                className="lg:hidden"
              >

                <X size={24} />

              </button>
            </div>

            {/* CATEGORY COMPONENT */}
            <Categories
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              setMobileMenu={setMobileMenu}
            />

            {/* FILTER CARD */}
            <div className="mt-8 bg-gradient-to-br from-[#111827] to-[#1e293b] rounded-[30px] p-6 text-white">

              <div className="flex items-center gap-2">

                <SlidersHorizontal
                  size={20}
                />

                <h3 className="font-bold text-xl">

                  Smart Filter

                </h3>
              </div>

              <p className="text-gray-300 text-sm mt-3 leading-relaxed">

                Find your perfect furniture
                with premium categories &
                modern collections.

              </p>

              <button className="mt-6 w-full bg-[#c48b57] hover:bg-[#8b5e34] py-3 rounded-2xl font-bold transition">

                Apply Filters

              </button>
            </div>
          </div>
        </aside>

        {/* =========================================================
            PRODUCTS GRID
        ========================================================= */}

        <main className="flex-1">

          {/* TOP */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

            <div>

              <h2 className="text-4xl font-black text-gray-900">

                Our Products

              </h2>

              <p className="text-gray-500 mt-2">

                Showing {
                  filteredProducts.length
                } premium products

              </p>
            </div>

            <button className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-3 rounded-2xl font-semibold hover:shadow-lg transition">

              <Filter size={18} />

              Sort & Filter

            </button>
          </div>

          {/* PRODUCTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7">

            {filteredProducts.map(
              (item) => (

                <div
                  key={item.id}
                  onClick={() =>
                    navigate(
                      `/product/${item.id}`
                    )
                  }
                  className="group bg-white rounded-[32px] overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >

                  {/* IMAGE */}
                  <div className="relative overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[340px] object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>

                    {/* QUICK ACTIONS */}
                    <div className="absolute top-5 right-5 flex flex-col gap-3">

                      <button
                        onClick={(e) =>
                          toggleLike(
                            item,
                            e
                          )
                        }
                        className={`w-12 h-12 rounded-full backdrop-blur-xl flex items-center justify-center shadow-xl ${
                          isLiked(
                            item.id
                          )
                            ? "bg-red-500 text-white"
                            : "bg-white text-black"
                        }`}
                      >

                        <Heart
                          size={20}
                          fill={
                            isLiked(
                              item.id
                            )
                              ? "white"
                              : "none"
                          }
                        />

                      </button>

                      <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl">

                        <Eye size={20} />

                      </button>
                    </div>

                    {/* DISCOUNT */}
                    <div className="absolute left-5 top-5 bg-[#c48b57] text-white px-4 py-2 rounded-full text-sm font-bold">

                      25% OFF

                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <p className="text-[#c48b57] font-bold uppercase text-sm">

                      {item.category}

                    </p>

                    <h3 className="text-2xl font-black text-gray-900 mt-2">

                      {item.name}

                    </h3>

                    {/* RATING */}
                    <div className="flex items-center gap-1 mt-4">

                      {[1, 2, 3, 4, 5].map(
                        (star) => (

                          <Star
                            key={star}
                            size={18}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}

                      <span className="ml-2 text-gray-500 text-sm">

                        (4.9)

                      </span>
                    </div>

                    {/* PRICE */}
                    <div className="flex items-center gap-3 mt-5">

                      <span className="text-3xl font-black text-gray-900">

                        ₹{item.price}

                      </span>

                      <span className="line-through text-gray-400">

                        ₹{item.oldPrice}

                      </span>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-3 mt-6">

                      <button
                        onClick={(e) => {

                          e.stopPropagation();

                          navigate(
                            `/product/${item.id}`
                          );
                        }}
                        className="flex-1 bg-black hover:bg-[#8b5e34] text-white py-4 rounded-2xl font-bold transition flex items-center justify-center gap-2"
                      >

                        <Eye size={18} />

                        View Product

                      </button>

                      <button className="w-14 rounded-2xl bg-[#f4f4f5] hover:bg-[#ececec] flex items-center justify-center transition">

                        <ShoppingCart
                          size={20}
                        />

                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* EMPTY */}
          {filteredProducts.length ===
            0 && (

            <div className="bg-white border border-gray-200 rounded-[35px] p-20 text-center mt-10">

              <ShoppingBag
                size={70}
                className="mx-auto text-gray-300"
              />

              <h2 className="text-4xl font-black text-gray-900 mt-6">

                No Products Found

              </h2>

              <p className="text-gray-500 mt-4 text-lg">

                Try another category or
                search keyword.

              </p>

              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(
                    "All"
                  );
                }}
                className="mt-8 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#8b5e34] transition"
              >

                Reset Filters

              </button>
            </div>
          )}
        </main>
      </section>

      {/* =========================================================
          MOBILE OVERLAY
      ========================================================= */}

      {mobileMenu && (

        <div
          onClick={() =>
            setMobileMenu(
              false
            )
          }
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      <Footer />
    </div>
  );
}

export default Products;