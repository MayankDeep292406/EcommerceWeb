import React from "react";

const products = [
  {
    id: 1001,
    name: "Wooden Chair",
    category: "Furniture",
    price: "$120",
    stock: 12,
    status: "Active",
  },
  {
    id: 1002,
    name: "Modern Sofa",
    category: "Living Room",
    price: "$450",
    stock: 5,
    status: "Active",
  },
  {
    id: 1003,
    name: "Office Table",
    category: "Office",
    price: "$300",
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 1004,
    name: "Bed Frame",
    category: "Bedroom",
    price: "$700",
    stock: 8,
    status: "Active",
  },
];

const ManageProducts = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-64 bg-indigo-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">ZIELCOMMERCE</h1>

        <ul className="space-y-4">
          <li className="hover:text-yellow-300 cursor-pointer">
            Dashboard
          </li>
          <li className="hover:text-yellow-300 cursor-pointer">
            Sales
          </li>
          <li className="hover:text-yellow-300 cursor-pointer">
            Orders
          </li>
          <li className="hover:text-yellow-300 cursor-pointer">
            Customers
          </li>
          <li className="hover:text-yellow-300 cursor-pointer">
            Marketing
          </li>
          <li className="hover:text-yellow-300 cursor-pointer">
            Reports
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-700">
            Manage Products
          </h2>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg">
            + Add Product
          </button>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search product..."
            className="w-full md:w-96 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">{product.id}</td>
                  <td className="p-4">{product.name}</td>
                  <td className="p-4">{product.category}</td>
                  <td className="p-4">{product.price}</td>
                  <td className="p-4">{product.stock}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm text-white ${
                        product.status === "Active"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>

                  <td className="p-4 space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                      Edit
                    </button>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Total Revenue</h3>
            <p className="text-3xl font-bold mt-2">$2,024</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Orders</h3>
            <p className="text-3xl font-bold mt-2">80</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Products</h3>
            <p className="text-3xl font-bold mt-2">120</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ManageProducts;