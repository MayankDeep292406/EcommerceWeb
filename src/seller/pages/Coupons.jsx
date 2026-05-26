// src/seller/pages/Coupons.jsx

import React, {
  useState,
} from "react";

import {
  TicketPercent,
  Plus,
  Copy,
  Trash2,
  CalendarDays,
  Percent,
  IndianRupee,
  CheckCircle2,
  Search,
  Sparkles,
} from "lucide-react";

function Coupons() {
  /* ==========================================
     STATES
  ========================================== */

  const [search,
    setSearch] =
    useState("");

  const [coupons,
    setCoupons] =
    useState([
      {
        id: 1,
        code: "FURNI10",
        discount: 10,
        type: "Percentage",
        expiry: "2026-12-31",
        status: "Active",
        usage: 120,
      },

      {
        id: 2,
        code: "SOFA500",
        discount: 500,
        type: "Flat",
        expiry: "2026-10-20",
        status: "Active",
        usage: 80,
      },

      {
        id: 3,
        code: "MEGA20",
        discount: 20,
        type: "Percentage",
        expiry: "2026-09-15",
        status: "Expired",
        usage: 220,
      },
    ]);

  const [formData,
    setFormData] =
    useState({
      code: "",
      discount: "",
      type: "Percentage",
      expiry: "",
    });

  /* ==========================================
     HANDLE CHANGE
  ========================================== */

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  /* ==========================================
     CREATE COUPON
  ========================================== */

  const createCoupon =
    (e) => {
      e.preventDefault();

      const newCoupon = {
        id: Date.now(),

        code:
          formData.code,

        discount:
          formData.discount,

        type:
          formData.type,

        expiry:
          formData.expiry,

        status: "Active",

        usage: 0,
      };

      setCoupons([
        newCoupon,
        ...coupons,
      ]);

      setFormData({
        code: "",
        discount: "",
        type: "Percentage",
        expiry: "",
      });
    };

  /* ==========================================
     DELETE COUPON
  ========================================== */

  const deleteCoupon =
    (id) => {
      setCoupons(
        coupons.filter(
          (coupon) =>
            coupon.id !== id
        )
      );
    };

  /* ==========================================
     COPY CODE
  ========================================== */

  const copyCoupon =
    (code) => {
      navigator.clipboard.writeText(
        code
      );

      alert(
        "Coupon copied!"
      );
    };

  /* ==========================================
     FILTERED COUPONS
  ========================================== */

  const filteredCoupons =
    coupons.filter((coupon) =>
      coupon.code
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="space-y-8">
      
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        
        <div>
          <h1 className="text-4xl font-black text-gray-800">
            Coupons & Offers
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Create and manage furniture shop discounts
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 rounded-3xl shadow-xl flex items-center gap-4">
          
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
            <TicketPercent size={28} />
          </div>

          <div>
            <p className="text-sm opacity-80">
              Total Coupons
            </p>

            <h2 className="text-2xl font-black">
              {coupons.length}
            </h2>
          </div>
        </div>
      </div>

      {/* ==========================================
          CREATE COUPON
      ========================================== */}

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* FORM */}

        <div className="lg:col-span-1 bg-white rounded-3xl shadow-sm border border-gray-200 p-6">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
              <Plus size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-800">
                Create Coupon
              </h2>

              <p className="text-gray-500 text-sm">
                Add new discount offers
              </p>
            </div>
          </div>

          <form
            onSubmit={createCoupon}
            className="space-y-5"
          >
            
            {/* COUPON CODE */}

            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">
                Coupon Code
              </label>

              <input
                type="text"
                name="code"
                value={
                  formData.code
                }
                onChange={
                  handleChange
                }
                placeholder="FURNI20"
                className="w-full border border-gray-300 rounded-2xl px-4 py-4 outline-none focus:border-orange-500"
                required
              />
            </div>

            {/* DISCOUNT */}

            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">
                Discount
              </label>

              <input
                type="number"
                name="discount"
                value={
                  formData.discount
                }
                onChange={
                  handleChange
                }
                placeholder="20"
                className="w-full border border-gray-300 rounded-2xl px-4 py-4 outline-none focus:border-orange-500"
                required
              />
            </div>

            {/* TYPE */}

            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">
                Discount Type
              </label>

              <select
                name="type"
                value={
                  formData.type
                }
                onChange={
                  handleChange
                }
                className="w-full border border-gray-300 rounded-2xl px-4 py-4 outline-none focus:border-orange-500"
              >
                <option value="Percentage">
                  Percentage %
                </option>

                <option value="Flat">
                  Flat ₹
                </option>
              </select>
            </div>

            {/* EXPIRY */}

            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">
                Expiry Date
              </label>

              <input
                type="date"
                name="expiry"
                value={
                  formData.expiry
                }
                onChange={
                  handleChange
                }
                className="w-full border border-gray-300 rounded-2xl px-4 py-4 outline-none focus:border-orange-500"
                required
              />
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all shadow-xl shadow-orange-200"
            >
              Create Coupon
            </button>
          </form>

          {/* TIP */}

          <div className="mt-6 bg-orange-50 border border-orange-200 rounded-2xl p-5">
            
            <div className="flex items-start gap-3">
              <Sparkles
                className="text-orange-500 mt-1"
                size={22}
              />

              <div>
                <h3 className="font-bold text-gray-800">
                  Seller Tip
                </h3>

                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Limited-time offers help increase
                  furniture sales and customer engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COUPON LIST */}

        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-200 p-6">
          
          {/* SEARCH */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
            
            <div>
              <h2 className="text-2xl font-black text-gray-800">
                Available Coupons
              </h2>

              <p className="text-gray-500 mt-1">
                Manage active and expired coupons
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search coupon..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* COUPON CARDS */}

          <div className="space-y-5">
            
            {filteredCoupons.map(
              (coupon) => (
                <div
                  key={coupon.id}
                  className="border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all"
                >
                  
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    
                    {/* LEFT */}

                    <div className="flex items-center gap-5">
                      
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-lg">
                        <TicketPercent
                          size={36}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          
                          <h2 className="text-2xl font-black text-gray-800">
                            {coupon.code}
                          </h2>

                          <span
                            className={`px-4 py-1 rounded-full text-sm font-bold ${
                              coupon.status ===
                              "Active"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {
                              coupon.status
                            }
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-5 mt-3 text-gray-600">
                          
                          <div className="flex items-center gap-2">
                            {coupon.type ===
                            "Percentage" ? (
                              <Percent
                                size={18}
                              />
                            ) : (
                              <IndianRupee
                                size={18}
                              />
                            )}

                            <span className="font-semibold">
                              {
                                coupon.discount
                              }
                              {coupon.type ===
                              "Percentage"
                                ? "%"
                                : " OFF"}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <CalendarDays
                              size={18}
                            />

                            <span>
                              {
                                coupon.expiry
                              }
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <CheckCircle2
                              size={18}
                            />

                            <span>
                              {
                                coupon.usage
                              }{" "}
                              Used
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ACTIONS */}

                    <div className="flex items-center gap-4">
                      
                      <button
                        onClick={() =>
                          copyCoupon(
                            coupon.code
                          )
                        }
                        className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center"
                      >
                        <Copy
                          size={22}
                        />
                      </button>

                      <button
                        onClick={() =>
                          deleteCoupon(
                            coupon.id
                          )
                        }
                        className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
                      >
                        <Trash2
                          size={22}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}

            {/* EMPTY */}

            {filteredCoupons.length ===
              0 && (
              <div className="text-center py-16">
                
                <TicketPercent
                  size={70}
                  className="mx-auto text-gray-300"
                />

                <h2 className="text-2xl font-black text-gray-700 mt-5">
                  No Coupons Found
                </h2>

                <p className="text-gray-500 mt-2">
                  Create a new coupon offer
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupons;