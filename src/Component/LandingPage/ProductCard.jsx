// src/pages/Products.jsx

import React, {
  useState,
  useEffect,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  Heart,
  Search,
  ChevronDown,
  Star,
  ShoppingCart,
  User,
  Truck,
  RotateCcw,
  ShieldCheck,
  Menu,
  X,
  Eye,
  ShoppingBag,
  Filter,
  BadgePercent,
} from "lucide-react";

import ProductData from "../Component/API/Products";
import Footer from "../Component/Footer/Footer";

// CATEGORY DATA
import categories from "../data/categories";

function Products() {

  const navigate =
    useNavigate();

  // ================= STATES =================
  const [
    likedProducts,
    setLikedProducts,
  ] = useState([]);

  const [
    searchTerm,
    setSearchTerm,
  ] = useState("");

  const [
    selectedSort,
    setSelectedSort,
  ] = useState("Popularity");

  const [
    openSort,
    setOpenSort,
  ] = useState(false);

  const [
    mobileMenu,
    setMobileMenu,
  ] = useState(false);

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  // ================= SORT OPTIONS =================
  const sortOptions = [
    "Popularity",
    "Newest",
    "Price: Low to High",
    "Price: High to Low",
  ];

  // ================= LOAD LIKES =================
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

  // ================= SAVE LIKES =================
  useEffect(() => {

    localStorage.setItem(
      "likedProducts",
      JSON.stringify(
        likedProducts
      )
    );

  }, [likedProducts]);

  // ================= FILTER PRODUCTS =================
  let filteredProducts =
    ProductData.filter(
      (item) => {

        // SEARCH
        const matchesSearch =
          item.name
            .toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            );

        // CATEGORY
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

  // ================= SORT =================
  if (
    selectedSort ===
    "Price: Low to High"
  ) {

    filteredProducts.sort(
      (a, b) =>
        a.price - b.price
    );
  }

  if (
    selectedSort ===
    "Price: High to Low"
  ) {

    filteredProducts.sort(
      (a, b) =>
        b.price - a.price
    );
  }

  // ================= LIKE =================
  const toggleLike = (
    product,
    e
  ) => {

    e.stopPropagation();

    const exists =
      likedProducts.some(
        (p) =>
          p.id ===
          product.id
      );

    if (exists) {

      setLikedProducts(
        likedProducts.filter(
          (p) =>
            p.id !==
            product.id
        )
      );

    } else {

      setLikedProducts([
        ...likedProducts,
        product,
      ]);
    }
  };

  const isLiked = (id) =>
    likedProducts.some(
      (p) => p.id === id
    );

  return (

    <div className="bg-[#f8f7f5] min-h-screen flex flex-col overflow-hidden">

      {/* ================= TOP BAR ================= */}
      <div className="hidden lg:block bg-gradient-to-r from-[#111827] to-[#1f2937] text-white">

        <div className="max-w-[1700px] mx-auto px-6 py-3 flex items-center justify-between text-sm">

          <div className="flex items-center gap-10">

            <div className="flex items-center gap-2">
              <Truck size={16} />
              Free Delivery
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck size={16} />
              Premium Quality
            </div>

            <div className="flex items-center gap-2">
              <RotateCcw size={16} />
              Easy Returns
            </div>
          </div>

          <div className="flex items-center gap-2 text-yellow-300 font-semibold">

            <BadgePercent size={16} />

            Up to 50% OFF on Premium Furniture
          </div>
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 py-5 flex items-center justify-between gap-5">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* MOBILE MENU */}
            <button
              onClick={() =>
                setMobileMenu(
                  !mobileMenu
                )
              }
              className="lg:hidden w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center"
            >

              {mobileMenu ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

            {/* LOGO */}
            <div
              onClick={() =>
                navigate("/")
              }
              className="flex items-center gap-3 cursor-pointer"
            >

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c48b57] to-[#8b5e34] text-white flex items-center justify-center shadow-lg">

                <ShoppingBag size={28} />
              </div>

              <div>

                <h1 className="text-3xl font-black tracking-tight text-gray-900">

                  Shop_
                  <span className="text-[#c48b57]">
                    Now
                  </span>
                </h1>

                <p className="text-sm text-gray-500">
                  Modern Furniture Store
                </p>
              </div>
            </div>
          </div>

          {/* SEARCH */}
          <div className="hidden lg:flex flex-1 max-w-[650px] items-center bg-[#f4f4f5] rounded-2xl border border-gray-200 overflow-hidden">

            <Search
              size={20}
              className="ml-5 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search luxury sofas, tables, chairs..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
              className="flex-1 bg-transparent px-4 py-4 outline-none"
            />

            <button className="bg-gradient-to-r from-[#c48b57] to-[#8b5e34] hover:opacity-90 text-white px-8 py-4 font-semibold transition">

              Search
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3 sm:gap-5">

            {/* WISHLIST */}
            <button
              onClick={() =>
                navigate("/wishlist")
              }
              className="relative hidden md:flex w-12 h-12 rounded-2xl bg-[#f5f5f5] hover:bg-[#ececec] items-center justify-center transition"
            >

              <Heart size={22} />

              {likedProducts.length >
                0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center">

                  {
                    likedProducts.length
                  }
                </span>
              )}
            </button>

            {/* CART */}
            <button className="relative hidden md:flex w-12 h-12 rounded-2xl bg-[#f5f5f5] hover:bg-[#ececec] items-center justify-center transition">

              <ShoppingCart
                size={22}
              />

              <span className="absolute -top-1 -right-1 bg-[#c48b57] text-white text-xs min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center">

                2
              </span>
            </button>

            {/* USER */}
            <button
              onClick={() =>
                navigate("/account/profile")
              }
              className="flex items-center gap-3"
            >

              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ececec] to-[#d6d6d6] flex items-center justify-center">

                <User size={22} />
              </div>

              <div className="hidden md:block text-left">

                <p className="font-bold text-gray-800">

                  Hi, User
                </p>

                <p className="text-sm text-gray-500">

                  My Account
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className="lg:hidden px-4 pb-4">

          <div className="flex items-center bg-[#f4f4f5] rounded-2xl overflow-hidden border border-gray-200">

            <Search
              size={18}
              className="ml-4 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search furniture..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
              className="flex-1 bg-transparent px-3 py-3 outline-none"
            />
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <div className="max-w-[1700px] mx-auto w-full px-4 sm:px-6 py-6 flex gap-6">

        {/* ================= SIDEBAR ================= */}
        <aside
          className={`fixed lg:sticky top-0 left-0 z-50 lg:z-0 h-screen lg:h-fit w-[300px] bg-white lg:bg-transparent transition-all duration-300 ${
            mobileMenu
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
        >

          <div className="bg-white border-r lg:border border-gray-200 rounded-none lg:rounded-3xl p-6 h-full lg:h-fit shadow-sm">

            <div className="flex items-center justify-between lg:justify-start mb-8">

              <h2 className="text-2xl font-black text-gray-900">

                Categories
              </h2>

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

            {/* CATEGORY LIST */}
            <div className="space-y-3">

              {categories.map(
                (category) => {

                  const Icon =
                    category.icon;

                  return (

                    <button
                      key={
                        category.id
                      }
                      onClick={() =>
                        setSelectedCategory(
                          category.name
                        )
                      }
                      className={`w-full flex items-center justify-between gap-4 px-4 py-4 rounded-2xl transition-all duration-300 ${
                        selectedCategory ===
                        category.name
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                          : "hover:bg-[#f5f5f5] text-gray-700"
                      }`}
                    >

                      <div className="flex items-center gap-4">

                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                            selectedCategory ===
                            category.name
                              ? "bg-white/20"
                              : "bg-[#f7f2eb]"
                          }`}
                        >

                          <Icon
                            size={22}
                          />
                        </div>

                        <div className="text-left">

                          <h3 className="font-bold">
                            {
                              category.name
                            }
                          </h3>

                          <p
                            className={`text-xs ${
                              selectedCategory ===
                              category.name
                                ? "text-white/80"
                                : "text-gray-500"
                            }`}
                          >

                            {
                              category.totalProducts
                            } Products
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </aside>

        {/* ================= CONTENT ================= */}
        <main className="flex-1 min-w-0">

          {/* TOP */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 mb-8">

            <div>

              <h2 className="text-4xl sm:text-5xl font-black text-gray-900">

                Popular Products
              </h2>

              <p className="text-gray-500 mt-3 text-lg">

                {
                  filteredProducts.length
                } Premium Products Available
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap items-center gap-4">

              {/* FILTER */}
              <button className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-4 rounded-2xl font-semibold shadow-sm hover:shadow-lg transition">

                <Filter size={20} />

                Filters
              </button>

              {/* SORT */}
              <div className="relative">

                <button
                  onClick={() =>
                    setOpenSort(
                      !openSort
                    )
                  }
                  className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-4 rounded-2xl font-semibold shadow-sm hover:shadow-lg transition"
                >

                  {selectedSort}

                  <ChevronDown
                    size={18}
                  />
                </button>

                {openSort && (
                  <div className="absolute right-0 top-20 w-72 bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl z-50">

                    {sortOptions.map(
                      (
                        option,
                        index
                      ) => (

                        <button
                          key={index}
                          onClick={() => {

                            setSelectedSort(
                              option
                            );

                            setOpenSort(
                              false
                            );
                          }}
                          className={`w-full text-left px-6 py-5 transition ${
                            selectedSort ===
                            option
                              ? "bg-[#f7f2eb] text-[#8b5e34] font-bold"
                              : "hover:bg-[#f5f5f5]"
                          }`}
                        >

                          {option}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ================= PRODUCTS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6">

            {filteredProducts.map(
              (item) => (

                <div
                  key={item.id}
                  onClick={() =>
                    navigate(
                      `/product/${item.id}`
                    )
                  }
                  className="group bg-white rounded-[32px] overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                >

                  {/* IMAGE */}
                  <div className="relative overflow-hidden bg-[#f7f7f7]">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* ACTIONS */}
                    <div className="absolute top-5 right-5 flex flex-col gap-3">

                      {/* LIKE */}
                      <button
                        onClick={(e) =>
                          toggleLike(
                            item,
                            e
                          )
                        }
                        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition ${
                          isLiked(
                            item.id
                          )
                            ? "bg-red-500 text-white"
                            : "bg-white text-gray-700"
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

                      {/* QUICK VIEW */}
                      <button className="w-12 h-12 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-xl hover:bg-black hover:text-white transition">

                        <Eye size={20} />
                      </button>
                    </div>

                    {/* SALE */}
                    <div className="absolute left-5 top-5 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">

                      SALE
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    {/* CATEGORY */}
                    <p className="text-sm text-[#c48b57] font-bold uppercase tracking-wider">

                      {
                        item.category
                      }
                    </p>

                    {/* NAME */}
                    <h3 className="text-2xl font-black text-gray-900 mt-2 line-clamp-2 leading-tight">

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

                      <span className="text-gray-500 ml-2 text-sm">

                        (128 Reviews)
                      </span>
                    </div>

                    {/* PRICE */}
                    <div className="flex items-center gap-3 mt-5">

                      <span className="text-3xl font-black text-black">

                        ₹{item.price}
                      </span>

                      <span className="line-through text-gray-400 text-lg">

                        ₹{item.oldPrice}
                      </span>
                    </div>

                    {/* BUTTON */}
                    <button
                      onClick={(e) => {

                        e.stopPropagation();

                        navigate(
                          `/product/${item.id}`
                        );
                      }}
                      className="w-full mt-6 bg-gradient-to-r from-[#111827] to-[#374151] hover:from-[#c48b57] hover:to-[#8b5e34] text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg"
                    >

                      View Product
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </main>
      </div>

      {/* OVERLAY */}
      {mobileMenu && (
        <div
          onClick={() =>
            setMobileMenu(
              false
            )
          }
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <Footer />
    </div>
  );
}

export default Products;