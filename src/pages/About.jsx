// src/pages/About.jsx

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  Users,
  Globe2,
  Clock3,
  Gem,
} from "lucide-react";

import Footer from "../Component/Footer/Footer";

function About() {
  return (
    <div className="bg-[#F5F1EB] text-[#1E1E1E] overflow-hidden min-h-screen">

      {/* HERO SECTION */}
      <section className="relative border-b border-black/10">

        {/* BIG BACKGROUND TEXT */}
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[100px] md:text-[220px] font-black text-black/5 uppercase tracking-[20px] select-none">
          About
        </h1>

        <div className="relative max-w-7xl mx-auto px-6 py-24">

          {/* TOP NAV */}
          <div className="flex justify-between items-center flex-wrap gap-5">

            <Link
              to="/"
              className="flex items-center gap-2 border border-black/10 px-5 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={18} />
              Back Home
            </Link>

            <div className="text-sm uppercase tracking-[4px] text-gray-500">
              Since 2020
            </div>

          </div>

          {/* HERO CONTENT */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">

            {/* LEFT CONTENT */}
            <div>

              <p className="uppercase tracking-[6px] text-sm text-gray-500 mb-5">
                Our Story
              </p>

              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                Furniture
                <span className="block italic font-light">
                  with Purpose
                </span>
              </h2>

              <p className="mt-10 text-lg text-gray-700 leading-relaxed">
                ShopNow was created with one simple vision —
                to design furniture that blends modern beauty
                with everyday comfort.
              </p>

              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                Every product is carefully selected to bring
                warmth, elegance, and timeless aesthetics into
                your living space.
              </p>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e"
                alt="Interior"
                className="rounded-[40px] shadow-2xl h-[650px] w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* TIMELINE SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-28">

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-gray-500 text-sm">
            Journey
          </p>

          <h2 className="text-5xl font-black mt-4">
            Our Growth Story
          </h2>

        </div>

        <div className="mt-20 space-y-14">

          {/* ITEM */}
          <div className="grid md:grid-cols-3 gap-10 items-start">

            <h3 className="text-4xl font-black text-gray-300">
              2020
            </h3>

            <div className="md:col-span-2 border-l-4 border-black pl-8">

              <h4 className="text-2xl font-bold">
                Started Small
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                We began with a small collection of handcrafted
                furniture focused on quality and design.
              </p>

            </div>

          </div>

          {/* ITEM */}
          <div className="grid md:grid-cols-3 gap-10 items-start">

            <h3 className="text-4xl font-black text-gray-300">
              2022
            </h3>

            <div className="md:col-span-2 border-l-4 border-black pl-8">

              <h4 className="text-2xl font-bold">
                Expanded Nationwide
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                ShopNow started delivering premium furniture
                across major cities in India.
              </p>

            </div>

          </div>

          {/* ITEM */}
          <div className="grid md:grid-cols-3 gap-10 items-start">

            <h3 className="text-4xl font-black text-gray-300">
              2026
            </h3>

            <div className="md:col-span-2 border-l-4 border-black pl-8">

              <h4 className="text-2xl font-bold">
                Luxury Lifestyle Brand
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Today, ShopNow is recognized as a modern luxury
                furniture brand trusted by thousands.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* VALUES SECTION */}
      <section className="bg-white py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-gray-500 text-sm">
              Core Values
            </p>

            <h2 className="text-5xl font-black mt-4">
              What Makes Us Different
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            {/* CARD */}
            <div className="border border-black/10 p-10 rounded-[35px] hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 bg-[#FAFAFA]">

              <Award className="w-12 h-12 mb-6" />

              <h3 className="text-2xl font-bold">
                Premium Quality
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Carefully crafted furniture with durable
                materials and elegant finishing.
              </p>

            </div>

            {/* CARD */}
            <div className="border border-black/10 p-10 rounded-[35px] hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 bg-[#FAFAFA]">

              <Users className="w-12 h-12 mb-6" />

              <h3 className="text-2xl font-bold">
                Customer First
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Every decision we make is focused on improving
                customer experience.
              </p>

            </div>

            {/* CARD */}
            <div className="border border-black/10 p-10 rounded-[35px] hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 bg-[#FAFAFA]">

              <Globe2 className="w-12 h-12 mb-6" />

              <h3 className="text-2xl font-bold">
                Nationwide Reach
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Delivering stylish furniture collections
                across India.
              </p>

            </div>

            {/* CARD */}
            <div className="border border-black/10 p-10 rounded-[35px] hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 bg-[#FAFAFA]">

              <Gem className="w-12 h-12 mb-6" />

              <h3 className="text-2xl font-bold">
                Luxury Experience
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Beautiful modern aesthetics designed for
                premium lifestyles.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL SECTION */}
      <section className="py-28">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <Clock3 className="w-16 h-16 mx-auto mb-8" />

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            We Don’t Just Sell Furniture.
            <span className="block italic font-light mt-4">
              We Create Experiences.
            </span>
          </h2>

          <p className="mt-10 text-xl text-gray-600 leading-relaxed">
            From modern interiors to luxurious comfort,
            ShopNow transforms ordinary spaces into
            extraordinary homes.
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default About;