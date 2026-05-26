// src/pages/Orders.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../API/Order";

function Orders() {
  const location = useLocation();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.get("/orders");
        let allOrders = res.data;

        // If newOrder was passed from Payment.jsx, add it on top
        if (location.state?.newOrder) {
          allOrders = [location.state.newOrder, ...allOrders];
        }

        setOrders(allOrders);
      } catch (err) {
        console.error("Failed to fetch orders", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [location.state]);

  const cancelOrder = async (id) => {
    try {
      await API.patch(`/orders/${id}/status`, { status: "CANCELLED" });
      setOrders((prev) =>
        prev.map((o) => (o._id === id ? { ...o, status: "CANCELLED" } : o))
      );
    } catch (err) {
      console.error("Cancel failed", err);
    }
  };

  const deleteOrder = async (id) => {
    try {
      await API.delete(`/orders/${id}`);
      setOrders((prev) => prev.filter((o) => o._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="border p-4 mb-4 rounded-lg shadow-sm bg-white"
          >
            <div className="flex justify-between">
              <span className="font-semibold">Order #{order._id}</span>
              <span
                className={`px-2 py-1 rounded text-sm ${
                  order.status === "PLACED"
                    ? "bg-blue-100 text-blue-700"
                    : order.status === "CANCELLED"
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {order.status}
              </span>
            </div>

            <div className="mt-2 space-y-1">
              {order.items.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between text-sm text-gray-700"
                >
                  <span>{item.product?.title || "Product"}</span>
                  <span>x{item.quantity}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-2 font-bold">
              Total: ₹{order.totalAmount || order.totalPrice}
            </div>

            <div className="mt-3 flex space-x-2">
              {order.status === "PLACED" && (
                <button
                  onClick={() => cancelOrder(order._id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Cancel
                </button>
              )}
              {order.status !== "DELIVERED" && (
                <button
                  onClick={() => deleteOrder(order._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
