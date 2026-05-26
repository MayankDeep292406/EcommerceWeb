import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";

 function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");

    const adminEmail =
      "admin@shopnow.com";

    const adminPassword =
      "admin@2025";

    try {
      setLoading(true);

      // DEMO LOGIN
      if (
        email === adminEmail &&
        password === adminPassword
      ) {
        localStorage.setItem(
          "isAdmin",
          "true"
        );

        setMessage(
          "✅ Admin Login Successful"
        );

        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 1000);

      } else {
        setMessage(
          "❌ Invalid Admin Credentials"
        );
      }

    } catch (error) {
      console.log(error);

      setMessage(
        "❌ Something went wrong"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-black px-4">

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full"></div>

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-white/10 hover:bg-white/20 transition border border-white/20 text-white px-5 py-2 rounded-xl flex items-center gap-2 backdrop-blur-md"
      >
        <ArrowLeft size={18} />
        Back Home
      </button>

      {/* LOGIN CARD */}
      <div className="w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 relative z-10">

        {/* ICON */}
        <div className="flex justify-center mb-6">

          <div className="bg-gradient-to-r from-red-500 to-pink-500 p-5 rounded-full shadow-xl">

            <ShieldCheck className="text-white w-10 h-10" />

          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-white">
          Admin Login
        </h2>

        <p className="text-center text-gray-300 mt-2 mb-8">
          Secure access to admin dashboard
        </p>

        {/* FORM */}
        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* EMAIL */}
          <div className="relative">

            <Mail
              className="absolute left-4 top-4 text-gray-400"
              size={18}
            />

            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-4 pl-12 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">

            <Lock
              className="absolute left-4 top-4 text-gray-400"
              size={18}
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Admin Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-4 pl-12 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />

            {/* SHOW PASSWORD */}
            <span
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-4 top-4 text-gray-300 cursor-pointer"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </span>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:opacity-90 transition text-white py-4 rounded-2xl font-semibold text-lg shadow-xl"
          >
            {loading
              ? "Logging in..."
              : "Admin Login"}
          </button>
        </form>

        {/* MESSAGE */}
        {message && (
          <div className="mt-5 text-center text-sm font-medium text-white">
            {message}
          </div>
        )}

        {/* DEMO LOGIN */}
        <div className="mt-8 bg-white/10 border border-white/10 rounded-2xl p-4 text-sm text-gray-200">

          <h3 className="font-semibold text-pink-400 mb-2">
            Demo Admin Login
          </h3>

          <p>
            <span className="font-semibold">
              Email:
            </span>{" "}
            admin@shopnow.com
          </p>

          <p>
            <span className="font-semibold">
              Password:
            </span>{" "}
            admin@2025
          </p>
        </div>

        {/* FOOTER */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          ShopNow Admin Panel © 2026
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;