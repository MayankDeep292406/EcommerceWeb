import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ShoppingBag,
  ArrowLeft,
  Trash2,
  Package,
  User,
  Phone,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";

function ManageOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  // LOAD ORDERS
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (!isAdmin) {
      navigate("/admin");
    }

    const storedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(storedOrders);
  }, [navigate]);

  // DELETE ORDER
  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Delete this order?");
    if (!confirmDelete) return;

    const updated = [...orders];
    updated.splice(index, 1);

    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  // CONTACT SELLER (DEAL SYSTEM)
  const handleContactSeller = (order) => {
    const message = `
Hello Seller 👋

There is a shortage/issue in the product order.

📦 Product: ${order.products?.join(", ")}
👤 Customer: ${order.user}

Please confirm availability or provide a deal/solution.
    `;

    const phone = order.sellerPhone || "9999999999";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white p-6 md:p-10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            Manage Orders
          </h1>

          <p className="text-gray-400 mt-2">
            Admin can review shortage & contact sellers for deals
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/dashboard")}
          className="bg-white/10 hover:bg-white/20 transition px-5 py-3 rounded-2xl border border-white/10 flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Back
        </button>
      </div>

      {/* ORDERS LIST */}
      {orders.length === 0 ? (
        <div className="bg-white/10 border border-white/10 rounded-3xl p-10 text-center">

          <ShoppingBag size={60} className="mx-auto text-gray-400 mb-4" />

          <h2 className="text-2xl font-bold">
            No Orders Found
          </h2>
        </div>
      ) : (
        <div className="grid gap-6">

          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl"
            >

              {/* USER INFO */}
              <div className="mb-4 space-y-2">

                <p className="flex items-center gap-2">
                  <User size={18} className="text-cyan-400" />
                  <span className="font-semibold">User:</span>
                  {order.user}
                </p>

                {/* PRODUCTS */}
                <p className="flex items-center gap-2">
                  <Package size={18} className="text-pink-400" />
                  <span className="font-semibold">Products:</span>
                  {order.products?.map((p, i) => (
                    <span
                      key={i}
                      className="bg-white/10 px-2 py-1 rounded-lg text-sm mx-1"
                    >
                      {p}
                    </span>
                  ))}
                </p>

                {/* STOCK ALERT */}
                {order.shortage && (
                  <div className="flex items-center gap-2 text-yellow-400 bg-yellow-500/10 p-2 rounded-xl w-fit">
                    <AlertTriangle size={18} />
                    Product Shortage Detected
                  </div>
                )}
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-3">

                {/* CONTACT SELLER */}
                <button
                  onClick={() => handleContactSeller(order)}
                  className="bg-green-500 hover:bg-green-600 transition px-5 py-3 rounded-2xl flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  Contact Seller / Deal
                </button>

                {/* CALL */}
                <a
                  href={`tel:${order.sellerPhone || "9999999999"}`}
                  className="bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-2xl flex items-center gap-2"
                >
                  <Phone size={18} />
                  Call Seller
                </a>

                {/* DELETE */}
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-2xl flex items-center gap-2"
                >
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageOrders;