import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  ShoppingBag,
} from "lucide-react";

function Footer() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  // ================= BUTTON FUNCTIONS =================

  const handleNewsletter = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert(`Subscribed Successfully ✅\nEmail: ${email}`);

    setEmail("");
  };

  const handleHelpCenter = () => {
    alert(
      "Help Center:\n\nFor help regarding orders, delivery, payments, returns, or account issues contact our support team anytime."
    );
  };

  const handleShipping = () => {
    alert(
      "Shipping Info:\n\nOrders are delivered within 3-7 business days across India."
    );
  };

  const handleReturn = () => {
    alert(
      "Return Policy:\n\nProducts can be returned within 7 days after delivery."
    );
  };

  const handleTerms = () => {
    alert(
      "Terms & Conditions:\n\nUsing Shop_Now means you agree to our policies."
    );
  };

  const handlePrivacy = () => {
    alert(
      "Privacy Policy:\n\nYour personal data is fully secure with us."
    );
  };

  const handleCookies = () => {
    alert(
      "Cookies Policy:\n\nWe use cookies to improve your shopping experience."
    );
  };

  const handleSocial = (platform) => {
    alert(`${platform} page coming soon 🚀`);
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#020617] via-[#0F172A] to-black text-white overflow-hidden">

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[120px]"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10">

        {/* ================= TOP CTA ================= */}
        <div className="border-b border-white/10">

          <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* LEFT */}
            <div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">

                Ready To Start
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                  Shopping Today?
                </span>
              </h2>

              <p className="mt-5 text-gray-400 text-lg max-w-2xl">
                Discover premium collections, luxury products,
                and exclusive deals only on Shop_Now.
              </p>
            </div>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/products")}
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 px-8 py-5 rounded-2xl font-bold flex items-center gap-3 shadow-[0_10px_40px_rgba(6,182,212,0.35)]"
            >
              <ShoppingBag size={22} />

              Explore Products

              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition"
              />
            </button>
          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* ABOUT */}
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-4 mb-6">

              <img
                src="src/assets/Shop_Now Logo.jpg"
                alt="Shop_Now"
                className="w-16 h-16 rounded-full border-2 border-cyan-400 object-cover shadow-lg"
              />

              <div>

                <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                  Shop_Now
                </h2>

                <p className="text-gray-400 text-sm">
                  Premium Online Store
                </p>
              </div>
            </div>

            {/* TEXT */}
            <p className="text-gray-400 leading-relaxed">
              Shop premium products with modern design,
              secure payments, fast delivery, and trusted
              quality for every customer.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-8">

              <button
                onClick={() => handleSocial("Facebook")}
                className="bg-white/10 border border-white/10 p-3 rounded-2xl hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <Facebook size={20} />
              </button>

              <button
                onClick={() => handleSocial("Instagram")}
                className="bg-white/10 border border-white/10 p-3 rounded-2xl hover:bg-pink-500 hover:scale-110 transition-all duration-300"
              >
                <Instagram size={20} />
              </button>

              <button
                onClick={() => handleSocial("Twitter")}
                className="bg-white/10 border border-white/10 p-3 rounded-2xl hover:bg-sky-500 hover:scale-110 transition-all duration-300"
              >
                <Twitter size={20} />
              </button>

              <button
                onClick={() => handleSocial("Youtube")}
                className="bg-white/10 border border-white/10 p-3 rounded-2xl hover:bg-red-500 hover:scale-110 transition-all duration-300"
              >
                <Youtube size={20} />
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-2xl font-bold mb-8 text-white">
              Quick Links
            </h3>

            <ul className="space-y-5">

              {[
                {
                  name: "Home",
                  path: "/",
                },

                {
                  name: "Products",
                  path: "/products",
                },

                {
                  name: "About",
                  path: "/about",
                },

                {
                  name: "Contact",
                  path: "/contact",
                },

                {
                  name: "Wishlist",
                  path: "/liked",
                },
              ].map((item, index) => (
                <li key={index}>

                  <button
                    onClick={() => navigate(item.path)}
                    className="group flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition"
                  >
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition"
                    />

                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CUSTOMER SUPPORT */}
          <div>

            <h3 className="text-2xl font-bold mb-8 text-white">
              Customer Support
            </h3>

            <ul className="space-y-5 text-gray-400">

              <li>
                <button
                  onClick={handleHelpCenter}
                  className="group flex items-center gap-3 hover:text-cyan-400 transition-all duration-300"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition"
                  />

                  Help Center
                </button>
              </li>

              <li>
                <button
                  onClick={handleShipping}
                  className="group flex items-center gap-3 hover:text-cyan-400 transition-all duration-300"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition"
                  />

                  Shipping Info
                </button>
              </li>

              <li>
                <button
                  onClick={handleReturn}
                  className="group flex items-center gap-3 hover:text-cyan-400 transition-all duration-300"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition"
                  />

                  Return Policy
                </button>
              </li>

              <li>
                <button
                  onClick={handleTerms}
                  className="group flex items-center gap-3 hover:text-cyan-400 transition-all duration-300"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition"
                  />

                  Terms & Conditions
                </button>
              </li>

              <li>
                <button
                  onClick={handlePrivacy}
                  className="group flex items-center gap-3 hover:text-cyan-400 transition-all duration-300"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition"
                  />

                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* CONTACT + NEWSLETTER */}
          <div>

            <h3 className="text-2xl font-bold mb-8 text-white">
              Contact Info
            </h3>

            <div className="space-y-6 text-gray-400">

              <button className="flex items-start gap-4 hover:text-cyan-400 transition">

                <div className="bg-cyan-500/20 p-3 rounded-2xl">
                  <MapPin className="text-cyan-400" size={20} />
                </div>

                <p>
                  Dhanbad, Jharkhand,
                  <br />
                  India
                </p>
              </button>

              <button className="flex items-center gap-4 hover:text-green-400 transition">

                <div className="bg-green-500/20 p-3 rounded-2xl">
                  <Phone className="text-green-400" size={20} />
                </div>

                <p>+91 8539811490</p>
              </button>

              <button className="flex items-center gap-4 hover:text-pink-400 transition">

                <div className="bg-pink-500/20 p-3 rounded-2xl">
                  <Mail className="text-pink-400" size={20} />
                </div>

                <p>support@shopnow.com</p>
              </button>
            </div>

            {/* NEWSLETTER */}
            <div className="mt-10">

              <h4 className="text-xl font-semibold mb-4">
                Subscribe Newsletter
              </h4>

              <form
                onSubmit={handleNewsletter}
                className="flex items-center bg-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md"
              >

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                  className="flex-1 bg-transparent px-5 py-4 outline-none text-white placeholder:text-gray-500"
                />

                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-4 hover:opacity-90 transition"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Shop_Now. All Rights Reserved.
            </p>

            <div className="flex gap-8 text-sm text-gray-400">

              <button
                onClick={handlePrivacy}
                className="hover:text-cyan-400 transition"
              >
                Privacy Policy
              </button>

              <button
                onClick={handleTerms}
                className="hover:text-cyan-400 transition"
              >
                Terms
              </button>

              <button
                onClick={handleCookies}
                className="hover:text-cyan-400 transition"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;