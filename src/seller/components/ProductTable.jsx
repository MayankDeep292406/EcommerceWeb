// src/components/ProductTable.jsx

import React, { useState } from "react";
import {
  Search,
  Pencil,
  Trash2,
  Eye,
  Package,
} from "lucide-react";

const productData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    name: "Modern Sofa",
    category: "Sofa",
    price: "₹25,000",
    stock: 12,
    status: "In Stock",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
    name: "Dining Table",
    category: "Table",
    price: "₹18,500",
    stock: 5,
    status: "Low Stock",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
    name: "Wooden Chair",
    category: "Chair",
    price: "₹4,500",
    stock: 20,
    status: "In Stock",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    name: "Luxury Bed",
    category: "Bed",
    price: "₹32,000",
    stock: 0,
    status: "Out of Stock",
  },
];

export default function ProductTable() {
  const [search, setSearch] = useState("");

  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-600";
      case "Low Stock":
        return "bg-yellow-100 text-yellow-600";
      case "Out of Stock":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Product Management
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Manage all furniture products and inventory.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-80">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full min-w-[950px] border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
            <th className="p-4 text-left rounded-l-2xl">
              Product
            </th>

            <th className="p-4 text-left">
              Category
            </th>

            <th className="p-4 text-left">
              Price
            </th>

            <th className="p-4 text-left">
              Stock
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left rounded-r-2xl">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                {/* Product */}
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-2xl"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {product.name}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Package size={14} />
                        Product ID: #{product.id}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="p-4 text-gray-700">
                  {product.category}
                </td>

                {/* Price */}
                <td className="p-4 font-bold text-green-600">
                  {product.price}
                </td>

                {/* Stock */}
                <td className="p-4 font-semibold text-blue-600">
                  {product.stock}
                </td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                      product.status
                    )}`}
                  >
                    {product.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
                      <Eye size={18} />
                    </button>

                    <button className="p-2 rounded-xl bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition">
                      <Pencil size={18} />
                    </button>

                    <button className="p-2 rounded-xl bg-red-100 text-red-600 hover:bg-red-200 transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center py-10 text-gray-500"
              >
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}