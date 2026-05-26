// src/Component/Navbar/Navbar.jsx

import React, { useState, useContext } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  AuthContext,
} from "../../context/AuthContext";

import {
  Menu,
  X,
  Heart,
  ShoppingCart,
  Package,
  Store,
  LogOut,
  User,
  Settings,
  ChevronDown,
  LayoutDashboard,
  BadgeCheck,
} from "lucide-react";

function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [accountOpen, setAccountOpen] =
    useState(false);

  const navigate =
    useNavigate();

  const {
    user,
    logout,
  } = useContext(AuthContext);

  // LOGOUT
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-black via-slate-950 to-blue-950 border-b border-white/10 shadow-2xl backdrop-blur-2xl text-white">

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* =======================================================
            TOP NAVBAR
        ======================================================= */}
        <div className="flex items-center justify-between h-20">

          {/* =======================================================
              LOGO
          ======================================================= */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >

            <div className="relative">

              <img
                src="/src/assets/Shop_Now Logo.jpg"
                alt="ShopNow Logo"
                className="h-12 w-12 rounded-full object-cover border-2 border-yellow-400 shadow-xl group-hover:scale-110 transition duration-300"
              />

              <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl"></div>
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Shop_Now
              </h1>

              <p className="text-[11px] text-gray-400 -mt-1">
                Modern Furniture Store
              </p>
            </div>
          </Link>

          {/* =======================================================
              DESKTOP MENU
          ======================================================= */}
          <div className="hidden lg:flex items-center gap-6 text-[15px] font-medium">

            <Link
              to="/"
              className="hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="hover:text-yellow-400 transition duration-300"
            >
              Products
            </Link>

            <Link
              to="/about"
              className="hover:text-yellow-400 transition duration-300"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-yellow-400 transition duration-300"
            >
              Contact
            </Link>

            <Link
              to="/top-products"
              className="hover:text-yellow-400 transition duration-300"
            >
              ⭐ Top Products
            </Link>

            {/* WISHLIST */}
            <Link
              to="/wishlist"
              className="hover:text-pink-400 transition flex items-center gap-2"
            >
              <Heart size={18} />
              Wishlist
            </Link>

            {/* CART */}
            <Link
              to="/cart"
              className="hover:text-cyan-400 transition flex items-center gap-2"
            >
              <ShoppingCart size={18} />
              Cart
            </Link>

            {/* ORDERS */}
            {user && (
              <Link
                to="/orders"
                className="hover:text-green-400 transition flex items-center gap-2"
              >
                <Package size={18} />
                Orders
              </Link>
            )}

            {/* REGISTER */}
            {!user && (
              <Link
                to="/register"
                className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black px-5 py-2 rounded-2xl font-bold shadow-lg hover:scale-105 transition duration-300"
              >
                Signup
              </Link>
            )}

            {/* SELLER */}
            {!user && (
              <Link
                to="/seller/register"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-2xl font-bold shadow-lg hover:scale-105 transition duration-300"
              >
                Become Seller
              </Link>
            )}

            {/* SELLER DASHBOARD */}
            {user?.role === "seller" && (
              <Link
                to="/seller/dashboard"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-2xl flex items-center gap-2 font-bold shadow-lg hover:scale-105 transition duration-300"
              >
                <Store size={18} />
                Seller
              </Link>
            )}

            {/* ADMIN */}
            {user?.role === "admin" && (
              <Link
                to="/admin"
                className="bg-gradient-to-r from-red-500 to-red-700 px-5 py-2 rounded-2xl font-bold shadow-lg hover:scale-105 transition duration-300"
              >
                Admin
              </Link>
            )}

            {/* =======================================================
                ACCOUNT DROPDOWN
            ======================================================= */}
            {user && (
              <div className="relative">

                {/* ACCOUNT BUTTON */}
                <button
                  onClick={() =>
                    setAccountOpen(!accountOpen)
                  }
                  className="flex items-center gap-3 bg-white/10 border border-white/10 px-4 py-2 rounded-2xl hover:bg-white/20 transition duration-300 backdrop-blur-xl"
                >

                  <img
                    src={
                      localStorage.getItem("profileImage") ||
                      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
                  />

                  <div className="text-left hidden xl:block">
                    <h2 className="text-sm font-bold">
                      {user?.name || "User"}
                    </h2>

                    <p className="text-xs text-gray-300">
                      My Account
                    </p>
                  </div>

                  <ChevronDown size={18} />
                </button>

                {/* =======================================================
                    DROPDOWN MENU
                ======================================================= */}
                {accountOpen && (
                  <div className="absolute right-0 mt-4 w-72 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">

                    {/* PROFILE HEADER */}
                    <div className="p-5 border-b border-white/10 bg-gradient-to-r from-yellow-400/10 to-cyan-400/10">

                      <div className="flex items-center gap-4">

                        <img
                          src={
                            localStorage.getItem("profileImage") ||
                            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          }
                          alt="profile"
                          className="w-16 h-16 rounded-full border-2 border-yellow-400 object-cover"
                        />

                        <div>
                          <h2 className="font-bold text-lg">
                            {user?.name || "User"}
                          </h2>

                          <p className="text-sm text-gray-300">
                            {user?.email}
                          </p>

                          <div className="flex items-center gap-1 mt-1 text-green-400 text-sm">
                            <BadgeCheck size={14} />
                            Verified Account
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* MENU LINKS */}
                    <div className="p-3 flex flex-col gap-2">

                      <Link
                        to="/profile"
                        onClick={() =>
                          setAccountOpen(false)
                        }
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/10 transition"
                      >
                        <User size={18} />
                        My Profile
                      </Link>

                      <Link
                        to="/orders"
                        onClick={() =>
                          setAccountOpen(false)
                        }
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/10 transition"
                      >
                        <Package size={18} />
                        My Orders
                      </Link>

                      <Link
                        to="/wishlist"
                        onClick={() =>
                          setAccountOpen(false)
                        }
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/10 transition"
                      >
                        <Heart size={18} />
                        Wishlist
                      </Link>

                      <Link
                        to="/settings"
                        onClick={() =>
                          setAccountOpen(false)
                        }
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/10 transition"
                      >
                        <Settings size={18} />
                        Settings
                      </Link>

                      <Link
                        to="/profile"
                        onClick={() =>
                          setAccountOpen(false)
                        }
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/10 transition"
                      >
                        <LayoutDashboard size={18} />
                        Dashboard
                      </Link>

                      {/* LOGOUT */}
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-red-500 hover:bg-red-600 transition mt-2"
                      >
                        <LogOut size={18} />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* =======================================================
              MOBILE MENU BUTTON
          ======================================================= */}
          <button
            className="lg:hidden bg-white/10 p-2 rounded-xl"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>

        {/* =======================================================
            MOBILE MENU
        ======================================================= */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen
              ? "max-h-[1000px] pb-6"
              : "max-h-0"
          }`}
        >

          <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 flex flex-col gap-4 shadow-2xl">

            <Link
              to="/"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Products
            </Link>

            <Link
              to="/about"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Contact
            </Link>

            <Link
              to="/top-products"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Top Products
            </Link>

            {/* ACCOUNT BUTTON */}
            {user && (
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10">

                <div className="flex items-center gap-3 mb-4">

                  <img
                    src={
                      localStorage.getItem("profileImage") ||
                      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    alt="profile"
                    className="w-14 h-14 rounded-full border-2 border-yellow-400"
                  />

                  <div>
                    <h2 className="font-bold">
                      {user?.name}
                    </h2>

                    <p className="text-sm text-gray-300">
                      My Account
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">

                  <Link
                    to="/orders"
                    className="flex items-center gap-2 hover:text-green-400"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >
                    <Package size={18} />
                    Orders
                  </Link>

                  <Link
                    to="/wishlist"
                    className="flex items-center gap-2 hover:text-pink-400"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >
                    <Heart size={18} />
                    Wishlist
                  </Link>

                  <Link
                    to="/settings"
                    className="flex items-center gap-2 hover:text-cyan-400"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >
                    <Settings size={18} />
                    Settings
                  </Link>

                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="bg-red-500 py-3 rounded-2xl mt-2 font-bold"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}

            {!user && (
              <Link
                to="/register"
                className="bg-yellow-400 text-black py-3 rounded-2xl text-center font-bold"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                Signup / Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;