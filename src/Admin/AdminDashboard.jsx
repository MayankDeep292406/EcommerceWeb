import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  IndianRupee,
  Trash2,
  Pencil,
  Plus,
  LogOut,
  Phone,
  Eye,
} from "lucide-react";

function AdminDashboard() {

  const [products, setProducts] =
    useState([]);

  const [orders, setOrders] =
    useState([]);

  const [users, setUsers] =
    useState([]);

  const navigate = useNavigate();

  // LOAD DATA
  useEffect(() => {

    const isAdmin =
      localStorage.getItem("isAdmin");

    if (!isAdmin) {
      navigate("/admin");
    }

    const storedProducts =
      JSON.parse(
        localStorage.getItem("products")
      ) || [];

    const storedOrders =
      JSON.parse(
        localStorage.getItem("orders")
      ) || [];

    const storedUsers =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    setProducts(storedProducts);

    setOrders(storedOrders);

    setUsers(storedUsers);

  }, [navigate]);

  // DELETE PRODUCT
  const handleDelete = (index) => {

    const confirmDelete =
      window.confirm(
        "Delete this product?"
      );

    if (!confirmDelete) return;

    const updatedProducts = [
      ...products,
    ];

    updatedProducts.splice(index, 1);

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );
  };

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("isAdmin");

    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white flex">

      {/* SIDEBAR */}
      <div className="w-72 bg-slate-900 border-r border-white/10 p-6 hidden lg:block">

        <h1 className="text-3xl font-bold text-red-400 mb-10">
          Admin Panel
        </h1>

        <div className="space-y-4">

          {/* DASHBOARD */}
          <button className="w-full flex items-center gap-3 bg-red-500 text-white px-4 py-3 rounded-2xl">
            <LayoutDashboard size={20} />
            Dashboard
          </button>

          {/* PRODUCTS */}
          <button
            onClick={() =>
              document
                .getElementById(
                  "products-section"
                )
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 transition px-4 py-3 rounded-2xl"
          >
            <Package size={20} />
            Products
          </button>

          {/* ORDERS */}
          <button
            onClick={() =>
              navigate("/admin/orders")
            }
            className="w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 transition px-4 py-3 rounded-2xl"
          >
            <ShoppingBag size={20} />
            Orders
          </button>

          {/* CUSTOMERS */}
          <button
            onClick={() =>
              navigate("/admin/users")
            }
            className="w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 transition px-4 py-3 rounded-2xl"
          >
            <Users size={20} />
            Customers
          </button>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 bg-red-600 hover:bg-red-700 transition px-4 py-3 rounded-2xl mt-10"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">

          <div>
            <h2 className="text-4xl font-bold">
              Welcome Admin 👋
            </h2>

            <p className="text-gray-400 mt-2">
              Manage products, orders,
              customers and reports.
            </p>
          </div>

          {/* ADD PRODUCT */}
          <Link
            to="/admin/add-product"
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 transition px-6 py-3 rounded-2xl flex items-center gap-2 font-semibold shadow-xl"
          >
            <Plus size={20} />
            Add Product
          </Link>
        </div>

        {/* REPORT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          {/* PRODUCTS */}
          <button
            onClick={() =>
              document
                .getElementById(
                  "products-section"
                )
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="bg-white/10 hover:bg-white/20 transition backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl text-left"
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-300">
                  Products
                </p>

                <h3 className="text-4xl font-bold mt-3 text-cyan-400">
                  {products.length}
                </h3>
              </div>

              <Package
                className="text-cyan-400"
                size={35}
              />
            </div>
          </button>

          {/* ORDERS */}
          <button
            onClick={() =>
              navigate("/admin/orders")
            }
            className="bg-white/10 hover:bg-white/20 transition backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl text-left"
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-300">
                  Orders
                </p>

                <h3 className="text-4xl font-bold mt-3 text-green-400">
                  {orders.length}
                </h3>
              </div>

              <ShoppingBag
                className="text-green-400"
                size={35}
              />
            </div>
          </button>

          {/* CUSTOMERS */}
          <button
            onClick={() =>
              navigate("/admin/users")
            }
            className="bg-white/10 hover:bg-white/20 transition backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl text-left"
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-300">
                  Customers
                </p>

                <h3 className="text-4xl font-bold mt-3 text-pink-400">
                  {users.length}
                </h3>
              </div>

              <Users
                className="text-pink-400"
                size={35}
              />
            </div>
          </button>

          {/* REVENUE */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-300">
                  Revenue
                </p>

                <h3 className="text-4xl font-bold mt-3 text-yellow-400">
                  ₹50K
                </h3>
              </div>

              <IndianRupee
                className="text-yellow-400"
                size={35}
              />
            </div>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <div
          id="products-section"
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl mb-10"
        >

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold">
              Manage Products
            </h2>

            <span className="text-gray-400">
              {products.length} Products
            </span>
          </div>

          {products.length === 0 ? (
            <p className="text-gray-400">
              No products available.
            </p>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

              {products.map(
                (product, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/70 border border-white/10 rounded-3xl overflow-hidden"
                  >

                    {/* IMAGE */}
                    <img
                      src={
                        product.image ||
                        "https://via.placeholder.com/400"
                      }
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />

                    {/* CONTENT */}
                    <div className="p-5">

                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <h3 className="text-2xl font-bold text-cyan-400">
                            {product.name}
                          </h3>

                          <p className="text-gray-300 mt-1">
                            Brand:{" "}
                            {product.brand}
                          </p>

                          <p className="text-gray-300">
                            Category:{" "}
                            {product.category}
                          </p>

                          <p className="text-yellow-400 font-bold text-xl mt-2">
                            ₹{product.price}
                          </p>
                        </div>

                        {/* STOCK */}
                        <div>
                          {product.inStock ? (
                            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-semibold">
                              In Stock
                            </span>
                          ) : (
                            <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-xl text-sm font-semibold">
                              Out Of Stock
                            </span>
                          )}
                        </div>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-gray-400 mt-4 line-clamp-3">
                        {
                          product.description
                        }
                      </p>

                      {/* ACTIONS */}
                      <div className="flex flex-wrap gap-3 mt-6">

                        {/* VIEW */}
                        <button
                          className="bg-white/10 hover:bg-white/20 transition px-5 py-3 rounded-xl flex items-center gap-2"
                        >
                          <Eye size={18} />
                          View
                        </button>

                        {/* EDIT */}
                        <Link
                          to={`/admin/edit-product/${index}`}
                          className="bg-cyan-500 hover:bg-cyan-600 transition px-5 py-3 rounded-xl flex items-center gap-2"
                        >
                          <Pencil size={18} />
                          Edit
                        </Link>

                        {/* DELETE */}
                        <button
                          onClick={() =>
                            handleDelete(index)
                          }
                          className="bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-xl flex items-center gap-2"
                        >
                          <Trash2 size={18} />
                          Delete
                        </button>

                        {/* CONTACT SELLER */}
                        <a
                          href={`tel:${product.phone || "9999999999"}`}
                          className="bg-green-500 hover:bg-green-600 transition px-5 py-3 rounded-xl flex items-center gap-2"
                        >
                          <Phone size={18} />
                          Contact Seller
                        </a>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* RECENT ORDERS */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold">
              Recent Orders
            </h2>

            <button
              onClick={() =>
                navigate("/admin/orders")
              }
              className="text-cyan-400 hover:underline"
            >
              View All
            </button>
          </div>

          {orders.length === 0 ? (
            <p className="text-gray-400">
              No orders yet.
            </p>
          ) : (
            <div className="space-y-4">

              {orders
                .slice(0, 3)
                .map((order, i) => (
                  <div
                    key={i}
                    className="bg-slate-900/70 border border-white/10 rounded-2xl p-5"
                  >

                    <p className="mb-2">
                      <span className="font-semibold text-cyan-400">
                        User:
                      </span>{" "}
                      {order.user}
                    </p>

                    <p>
                      <span className="font-semibold text-pink-400">
                        Products:
                      </span>{" "}
                      {order.products?.join(
                        ", "
                      )}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;