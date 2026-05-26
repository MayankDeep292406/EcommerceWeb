// src/pages/Contact.jsx

import React, { useState } from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import Footer from "../Component/Footer/Footer";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  MessageCircle,
  ArrowLeft,
  Sparkles,
  Headphones,
  ShieldCheck,
} from "lucide-react";

function Contact() {

  const location = useLocation();

  const query =
    new URLSearchParams(location.search);

  const activeSection =
    query.get("section");

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // ================= HANDLE SUBMIT =================

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      "Message Sent Successfully ✅"
    );

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* BACKGROUND EFFECTS */}

        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[150px]"></div>

        <div className="absolute bottom-[-200px] right-[-100px] w-[450px] h-[450px] bg-pink-500/20 rounded-full blur-[150px]"></div>

        {/* BIG TEXT */}

        <h1 className="absolute top-20 left-1/2 -translate-x-1/2 text-[110px] md:text-[220px] font-black text-white/5 uppercase tracking-[15px] select-none">
          Contact
        </h1>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

          {/* TOP NAV */}

          <div className="flex justify-between items-center flex-wrap gap-5">

            <Link
              to="/"
              className="flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <ArrowLeft size={18} />

              Back Home
            </Link>

            <div className="uppercase text-sm tracking-[4px] text-gray-400">
              24/7 Support
            </div>

          </div>

          {/* HERO CONTENT */}

          <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">

            {/* LEFT */}

            <div>

              <p className="uppercase tracking-[6px] text-sm text-cyan-400 mb-5">
                Get In Touch
              </p>

              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                We’re Here
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                  To Help You
                </span>
              </h2>

              <p className="mt-10 text-lg text-gray-400 leading-relaxed">
                Have questions about orders,
                shipping, returns, or products?
                Our ShopNow support team is
                available anytime for you.
              </p>

              {/* STATS */}

              <div className="grid grid-cols-3 gap-5 mt-12">

                <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center backdrop-blur-xl">

                  <h3 className="text-3xl font-black text-cyan-400">
                    24/7
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    Support
                  </p>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center backdrop-blur-xl">

                  <h3 className="text-3xl font-black text-pink-400">
                    10K+
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    Customers
                  </p>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center backdrop-blur-xl">

                  <h3 className="text-3xl font-black text-yellow-400">
                    Fast
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    Response
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                alt="Contact"
                className="rounded-[40px] shadow-2xl h-[650px] w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= MAIN SECTION ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* ================= LEFT INFO ================= */}

          <div>

            <h2 className="text-4xl font-black mb-6">
              Contact Information
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Reach out to us through any
              of the following channels.
            </p>

            <div className="space-y-6">

              {/* EMAIL */}

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-7 hover:bg-white/10 transition-all duration-300">

                <div className="flex items-start gap-5">

                  <div className="bg-cyan-500/20 p-4 rounded-2xl">
                    <Mail className="text-cyan-400 w-7 h-7" />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      Email Address
                    </h3>

                    <p className="text-gray-400 mt-2">
                      support@shopnow.com
                    </p>

                  </div>

                </div>

              </div>

              {/* PHONE */}

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-7 hover:bg-white/10 transition-all duration-300">

                <div className="flex items-start gap-5">

                  <div className="bg-green-500/20 p-4 rounded-2xl">
                    <Phone className="text-green-400 w-7 h-7" />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      Phone Number
                    </h3>

                    <p className="text-gray-400 mt-2">
                      +91 8539811490
                    </p>

                  </div>

                </div>

              </div>

              {/* LOCATION */}

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-7 hover:bg-white/10 transition-all duration-300">

                <div className="flex items-start gap-5">

                  <div className="bg-pink-500/20 p-4 rounded-2xl">
                    <MapPin className="text-pink-400 w-7 h-7" />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      Office Location
                    </h3>

                    <p className="text-gray-400 mt-2">
                      Dhanbad, Jharkhand, India
                    </p>

                  </div>

                </div>

              </div>

              {/* SUPPORT */}

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-7 hover:bg-white/10 transition-all duration-300">

                <div className="flex items-start gap-5">

                  <div className="bg-yellow-500/20 p-4 rounded-2xl">
                    <Clock3 className="text-yellow-400 w-7 h-7" />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      Working Hours
                    </h3>

                    <p className="text-gray-400 mt-2">
                      Monday - Sunday / 24 Hours
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ================= FORM ================= */}

          <div className="bg-white/5 border border-white/10 rounded-[45px] p-10 backdrop-blur-2xl shadow-2xl">

            <div className="flex items-center gap-4 mb-10">

              <div className="bg-cyan-500/20 p-4 rounded-2xl">
                <MessageCircle className="text-cyan-400 w-7 h-7" />
              </div>

              <div>

                <h2 className="text-4xl font-black">
                  Send Message
                </h2>

                <p className="text-gray-400 mt-2">
                  We’ll get back to you shortly.
                </p>

              </div>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* NAME */}

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                />

              </div>

              {/* EMAIL */}

              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

              {/* PHONE */}

              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

              {/* MESSAGE */}

              <textarea
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
              ></textarea>

              {/* BUTTON */}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(6,182,212,0.35)]"
              >

                <Send size={22} />

                Send Message

              </button>

            </form>

          </div>

        </div>

      </section>

      {/* ================= EXTRA FEATURES ================= */}

      <section className="pb-24">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 text-center hover:-translate-y-2 transition-all duration-300">

            <Headphones className="w-14 h-14 mx-auto text-cyan-400 mb-5" />

            <h3 className="text-2xl font-bold">
              Dedicated Support
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Our support team is always
              available to help you anytime.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 text-center hover:-translate-y-2 transition-all duration-300">

            <ShieldCheck className="w-14 h-14 mx-auto text-green-400 mb-5" />

            <h3 className="text-2xl font-bold">
              Secure Assistance
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Your information is protected
              and securely handled.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 text-center hover:-translate-y-2 transition-all duration-300">

            <Sparkles className="w-14 h-14 mx-auto text-pink-400 mb-5" />

            <h3 className="text-2xl font-bold">
              Premium Experience
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Fast replies and smooth support
              for all your shopping needs.
            </p>

          </div>

        </div>

      </section>

      {/* ================= MAP SECTION ================= */}

      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29179.77237039507!2d86.430385!3d23.795653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9f1e7f47ab%3A0x83d8f5f4a66d8b3b!2sDhanbad%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            className="w-full h-[500px] border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default Contact;