import React from "react";
import { Link } from "react-router-dom";
import {
  Sofa,
  BedDouble,
  LampFloor,
  UtensilsCrossed,
  Home,
  Crown,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

function MegaFreedomSale() {
  const categories = [
    {
      name: "Furniture",
      path: "/allproducts",
      icon: <Home size={18} />,
    },
    {
      name: "Sofas & Seating",
      path: "/sofas",
      icon: <Sofa size={18} />,
    },
    {
      name: "Mattresses",
      path: "/mattresses",
      icon: <BedDouble size={18} />,
    },
    {
      name: "Home Decor",
      path: "/decor",
      icon: <LayoutGrid size={18} />,
    },
    {
      name: "Lamps & Lighting",
      path: "/lighting",
      icon: <LampFloor size={18} />,
    },
    {
      name: "Kitchen & Dining",
      path: "/kitchen",
      icon: <UtensilsCrossed size={18} />,
    },
    {
      name: "Luxury",
      path: "/luxury",
      icon: <Crown size={18} />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-orange-100 py-12 px-4">

      {/* CATEGORY NAVIGATION */}
      <div className="max-w-7xl mx-auto mb-10">

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-2 bg-white shadow-md border border-orange-100 hover:border-orange-400 hover:shadow-xl transition-all duration-300 px-5 py-3 rounded-2xl text-gray-700 hover:text-orange-600 font-semibold"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* MAIN BANNER */}
      <div className="max-w-7xl mx-auto overflow-hidden rounded-[40px] shadow-2xl bg-gradient-to-r from-[#fff1db] via-[#ffe4c4] to-[#f8d7a3]">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="p-8 md:p-14 relative">

            {/* SMALL TAG */}
            <div className="inline-block bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg mb-6 animate-pulse">
              🔥 Biggest Furniture Festival Sale
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
              MEGA
              <span className="text-orange-600">
                {" "}
                FREEDOM{" "}
              </span>
              SALE
            </h1>

            {/* OFFER */}
            <p className="text-2xl text-gray-700 font-semibold mb-2">
              Upto{" "}
              <span className="text-orange-600 font-bold">
                70% OFF
              </span>
            </p>

            <p className="text-lg text-green-700 font-bold mb-6">
              + 20% Cashback & Free Shipping
            </p>

            {/* DISCOUNT TABLE */}
            <div className="bg-white/80 backdrop-blur-md border border-orange-200 rounded-3xl p-6 shadow-lg mb-6">

              <h3 className="text-xl font-bold text-orange-700 mb-4">
                Extra Discount Offers
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between items-center bg-orange-50 rounded-2xl px-4 py-3">
                  <div>
                    <p className="font-semibold text-gray-800">
                      Order Above ₹14,999
                    </p>
                    <p className="text-sm text-gray-500">
                      Instant Discount
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-green-700">
                      ₹2,000 OFF
                    </p>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                      FDM2K
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-orange-50 rounded-2xl px-4 py-3">
                  <div>
                    <p className="font-semibold text-gray-800">
                      Order Above ₹1,50,000
                    </p>
                    <p className="text-sm text-gray-500">
                      Instant Discount
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-green-700">
                      ₹10,000 OFF
                    </p>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                      FDM10K
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                *Terms & Conditions Apply
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <Link
                to="/allproducts"
                className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-bold shadow-lg flex items-center gap-2"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/topproducts"
                className="bg-white hover:bg-orange-50 border border-orange-200 transition-all duration-300 text-orange-700 px-8 py-4 rounded-2xl font-bold shadow-md"
              >
                Explore Deals
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-full">

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Furniture"
              className="w-full h-full object-cover min-h-[600px]"
            />

            {/* FLOATING CARD */}
            <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl px-6 py-4">

              <p className="text-sm text-gray-500">
                Starting From
              </p>

              <h2 className="text-3xl font-extrabold text-orange-600">
                ₹4,999
              </h2>

              <p className="text-gray-700 font-medium">
                Premium Sofa Collection
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* EXTRA FEATURES */}
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {[
          "🚚 Free Shipping",
          "💳 Easy EMI",
          "🛡️ 5 Year Warranty",
          "🎁 Festival Cashback",
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 text-center font-semibold text-gray-700 hover:shadow-2xl transition-all duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MegaFreedomSale;