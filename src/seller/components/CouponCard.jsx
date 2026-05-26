import React, { useState } from "react";
import {
  TicketPercent,
  Copy,
  CheckCircle,
  Calendar,
} from "lucide-react";

export default function CouponCard({
  title = "Flat ₹500 OFF",
  code = "FURNI500",
  discount = "Save ₹500 on orders above ₹5000",
  expiry = "31 Dec 2026",
  bgColor = "from-blue-500 to-indigo-600",
}) {
  const [copied, setCopied] = useState(false);

  const copyCoupon = () => {
    navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${bgColor} p-[2px] shadow-xl hover:scale-[1.02] transition-all duration-300`}
    >
      <div className="bg-white rounded-3xl p-6 h-full">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-indigo-100 p-2 rounded-xl">
                <TicketPercent className="text-indigo-600 w-5 h-5" />
              </div>

              <h2 className="text-xl font-bold text-gray-800">
                {title}
              </h2>
            </div>

            <p className="text-gray-500 text-sm">{discount}</p>
          </div>

          <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
            ACTIVE
          </div>
        </div>

        {/* Coupon Code */}
        <div className="mt-6 border-2 border-dashed border-gray-300 rounded-2xl p-4 flex items-center justify-between bg-gray-50">
          <div>
            <p className="text-xs text-gray-500 mb-1">Coupon Code</p>
            <h3 className="text-lg font-bold tracking-widest text-gray-800">
              {code}
            </h3>
          </div>

          <button
            onClick={copyCoupon}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
              copied
                ? "bg-green-500 text-white"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            {copied ? (
              <>
                <CheckCircle size={18} />
                Copied
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy
              </>
            )}
          </button>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>Expires on {expiry}</span>
          </div>

          <button className="text-indigo-600 font-semibold hover:underline">
            View Details
          </button>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-purple-100 rounded-full opacity-20"></div>
      </div>
    </div>
  );
}
