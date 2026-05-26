// src/pages/Signup.jsx

import {
  useState,
  useEffect,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  Eye,
  EyeOff,
  ArrowLeft,
  User,
  Store,
  Mail,
  Lock,
  ShieldCheck,
  Sparkles,
  ShoppingBag,
  Star,
  HeartHandshake,
} from "lucide-react";

function Signup() {

  const navigate =
    useNavigate();

  // ======================
  // STATES
  // ======================
  const [loginType,
    setLoginType] =
    useState("user");

  const [showPassword,
    setShowPassword] =
    useState(false);

  const [loading,
    setLoading] =
    useState(false);

  const [message,
    setMessage] =
    useState("");

  const [form,
    setForm] =
    useState({
      email: "",
      password: "",
      remember: false,
    });

  // ======================
  // AUTO LOGIN
  // ======================
  useEffect(() => {

    const token =
      localStorage.getItem(
        "token"
      ) ||
      sessionStorage.getItem(
        "token"
      );

    if (token) {

      navigate("/products");
    }

  }, [navigate]);

  // ======================
  // HANDLE CHANGE
  // ======================
  const handleChange = (
    e
  ) => {

    const {
      name,
      value,
      checked,
      type,
    } = e.target;

    setForm((prev) => ({
      ...prev,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  // ======================
  // LOGIN
  // ======================
  const handleLogin =
    async (e) => {

      e.preventDefault();

      setMessage("");

      if (
        form.password.length <
        6
      ) {

        setMessage(
          "❌ Password must be at least 6 characters"
        );

        return;
      }

      try {

        setLoading(true);

        const BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
        const api =
          loginType ===
            "seller"
            ? `${BASE}/api/seller/login`
            : `${BASE}/api/auth/login`;

        const res =
          await fetch(api, {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              email:
                form.email.trim(),

              password:
                form.password,
            }),
          });

        const data =
          await res.json();

        if (!res.ok) {

          setMessage(
            "❌ " +
            data.message
          );

          setLoading(false);

          return;
        }

        const storage =
          form.remember
            ? localStorage
            : sessionStorage;

        storage.setItem(
          "token",
          data.token
        );

        storage.setItem(
          "auth",
          JSON.stringify({
            token:
              data.token,

            user:
              data.user,

            role:
              loginType,
          })
        );

        setMessage(
          `✅ ${
            loginType ===
              "seller"
              ? "Seller"
              : "User"
          } Login Successful`
        );

        setTimeout(() => {

          if (
            loginType ===
            "seller"
          ) {

            navigate(
              "/seller-dashboard"
            );

          } else {

            navigate(
              "/products"
            );
          }

        }, 1200);

      } catch (error) {

        console.log(error);

        setMessage(
          "❌ Server Error"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-pink-100 overflow-hidden relative px-4 py-10">

      {/* BG EFFECT */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 blur-[120px] opacity-20 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 blur-[120px] opacity-20 rounded-full"></div>

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-6xl bg-white/70 backdrop-blur-2xl rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)] grid lg:grid-cols-2">

        {/* LEFT */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white p-14 relative overflow-hidden">

          {/* SHAPE */}
          <div className="absolute top-10 right-10 opacity-10">
            <Sparkles size={160} />
          </div>

          {/* LOGO */}
          <div className="flex items-center gap-3 mb-8">

            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-lg">
              <ShoppingBag size={34} />
            </div>

            <h1 className="text-4xl font-extrabold tracking-wide">
              ShopNow
            </h1>

          </div>

          {/* TEXT */}
          <h2 className="text-5xl font-black leading-tight">
            Welcome
            <br />
            Back 👋
          </h2>

          <p className="mt-6 text-lg text-indigo-100 leading-8 max-w-md">

            Login to continue shopping,
            manage your orders,
            seller dashboard,
            analytics and much more.

          </p>

          {/* FEATURES */}
          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-4">

              <div className="bg-white/20 p-3 rounded-xl">
                <ShieldCheck />
              </div>

              <span className="text-lg">
                Secure Authentication
              </span>

            </div>

            <div className="flex items-center gap-4">

              <div className="bg-white/20 p-3 rounded-xl">
                <Store />
              </div>

              <span className="text-lg">
                Seller Dashboard Access
              </span>

            </div>

            <div className="flex items-center gap-4">

              <div className="bg-white/20 p-3 rounded-xl">
                <HeartHandshake />
              </div>

              <span className="text-lg">
                Trusted Shopping Experience
              </span>

            </div>

            <div className="flex items-center gap-4">

              <div className="bg-white/20 p-3 rounded-xl">
                <Star />
              </div>

              <span className="text-lg">
                Premium UI Experience
              </span>

            </div>

          </div>

          {/* IMAGE */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="login"
            className="w-80 mt-14 mx-auto animate-bounce"
          />

        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-14 flex flex-col justify-center">

          {/* BACK */}
          <button
            onClick={() =>
              navigate("/")
            }
            className="mb-6 w-fit hover:scale-110 transition"
          >

            <ArrowLeft size={28} />

          </button>

          {/* TITLE */}
          <h2 className="text-4xl font-black text-gray-800">
            Login Account
          </h2>

          <p className="text-gray-500 mt-3 text-lg">
            Continue your shopping journey
          </p>

          {/* TOGGLE */}
          <div className="flex bg-gray-100 p-1 rounded-2xl mt-8 mb-8 shadow-inner">

            {/* USER */}
            <button
              onClick={() =>
                setLoginType(
                  "user"
                )
              }
              className={`flex-1 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2

              ${
                loginType ===
                  "user"
                  ? "bg-blue-600 text-white shadow-lg scale-[1.02]"
                  : "text-gray-700"
              }`}
            >

              <User size={18} />

              User Login

            </button>

            {/* SELLER */}
            <button
              onClick={() =>
                setLoginType(
                  "seller"
                )
              }
              className={`flex-1 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2

              ${
                loginType ===
                  "seller"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-[1.02]"
                  : "text-gray-700"
              }`}
            >

              <Store size={18} />

              Seller Login

            </button>

          </div>

          {/* FORM */}
          <form
            onSubmit={
              handleLogin
            }
            className="space-y-5"
          >

            {/* EMAIL */}
            <div className="flex items-center bg-white border border-gray-300 rounded-2xl px-4 py-4 shadow-sm focus-within:ring-2 focus-within:ring-indigo-400">

              <Mail className="text-gray-400" />

              <input
                type="email"
                name="email"
                value={
                  form.email
                }
                onChange={
                  handleChange
                }
                placeholder="Email Address"
                className="w-full ml-3 outline-none bg-transparent"
                required
              />

            </div>

            {/* PASSWORD */}
            <div className="flex items-center bg-white border border-gray-300 rounded-2xl px-4 py-4 shadow-sm focus-within:ring-2 focus-within:ring-indigo-400">

              <Lock className="text-gray-400" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={
                  form.password
                }
                onChange={
                  handleChange
                }
                placeholder="Password"
                className="w-full ml-3 outline-none bg-transparent"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="text-gray-500"
              >

                {
                  showPassword
                    ? <EyeOff />
                    : <Eye />
                }

              </button>

            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">

                <input
                  type="checkbox"
                  name="remember"
                  checked={
                    form.remember
                  }
                  onChange={
                    handleChange
                  }
                />

                Remember Me

              </label>

              <Link
                to="/reset-password"
                className="text-purple-600 font-semibold hover:underline"
              >

                Reset Password?

              </Link>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={
                loading
              }
              className={`w-full py-4 rounded-2xl text-white font-bold text-lg shadow-xl transition-all duration-300 hover:scale-[1.02]

              ${
                loginType ===
                  "seller"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600"
              }`}
            >

              {
                loading
                  ? "Please wait..."
                  : loginType ===
                    "seller"
                    ? "Seller Login"
                    : "User Login"
              }

            </button>

          </form>

          {/* MESSAGE */}
          {
            message && (

              <div className={`mt-5 text-center font-semibold

              ${
                message.includes(
                  "❌"
                )
                  ? "text-red-500"
                  : "text-green-600"
              }`}
              >
                {message}
              </div>
            )
          }

          {/* SOCIAL LOGIN */}
          {
            loginType ===
            "user" && (

              <div className="mt-8">

                <div className="flex items-center gap-3 mb-5">

                  <div className="flex-1 h-[1px] bg-gray-300"></div>

                  <p className="text-sm text-gray-400 font-semibold">
                    OR CONTINUE WITH
                  </p>

                  <div className="flex-1 h-[1px] bg-gray-300"></div>

                </div>

                <div className="grid grid-cols-3 gap-4">

                  {/* GOOGLE */}
                  <button
                    onClick={() =>
                      window.location.href =
                      `${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"}/api/auth/google`
                    }
                    className="border rounded-2xl py-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
                  >

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                      alt="google"
                      className="w-5"
                    />

                    Google

                  </button>

                  {/* FACEBOOK */}
                  <button
                    onClick={() =>
                      window.location.href =
                      `${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"}/api/auth/facebook`
                    }
                    className="border rounded-2xl py-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
                  >

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                      alt="facebook"
                      className="w-5"
                    />

                    Facebook

                  </button>

                  {/* TWITTER */}
                  <button
                    onClick={() =>
                      window.location.href =
                      `${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"}/api/auth/twitter`
                    }
                    className="border rounded-2xl py-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
                  >

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                      alt="twitter"
                      className="w-5"
                    />

                    Twitter

                  </button>

                </div>

              </div>
            )
          }

          {/* REGISTER */}
          <div className="mt-10 text-center">

            <p className="text-gray-600 text-lg">
              Don’t have an account?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-5">

              {/* USER REGISTER */}
              <Link
                to="/register"
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 shadow-md hover:scale-105

                ${
                  loginType ===
                    "user"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >

                Create User Account

              </Link>

              {/* SELLER REGISTER */}
              <Link
                to="/seller/register"
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 shadow-md hover:scale-105

                ${
                  loginType ===
                    "seller"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >

                Create Seller Account

              </Link>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;