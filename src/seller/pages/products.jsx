// src/seller/pages/Products.jsx
import React, {useState,} from "react";

import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Package,
  IndianRupee,
  Boxes,
  Star,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Layers3,
} from "lucide-react";

import {useNavigate,} from "react-router-dom";

function products() {
  /* ==========================================
     NAVIGATION
  ========================================== */

  const navigate =
    useNavigate();

  /* ==========================================
     STATES
  ========================================== */

  const [search,
    setSearch] =
    useState("");

  const [products,
    setProducts] =
    useState([
      {
        id: 1,
        name:
          "Modern Luxury Sofa",

        category:
          "Sofa",

        price: 25000,

        stock: 12,

        sold: 120,

        rating: 4.8,

        status: "Active",

        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      },

      {
        id: 2,
        name:
          "Wooden Dining Table",

        category:
          "Table",

        price: 18000,

        stock: 5,

        sold: 85,

        rating: 4.6,

        status:
          "Low Stock",

        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      },

      {
        id: 3,
        name:
          "Premium Office Chair",

        category:
          "Chair",

        price: 9500,

        stock: 0,

        sold: 52,

        rating: 4.5,

        status:
          "Out of Stock",

        image:
          "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
      },

      {
        id: 4,
        name:
          "King Size Bed",

        category:
          "Bed",

        price: 42000,

        stock: 9,

        sold: 40,

        rating: 4.9,

        status: "Active",

        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      },
    ]);

  /* ==========================================
     DELETE PRODUCT
  ========================================== */

  const deleteProduct =
    (id) => {
      setProducts(
        products.filter(
          (product) =>
            product.id !== id
        )
      );
    };

  /* ==========================================
     FILTER PRODUCTS
  ========================================== */

  const filteredProducts =
    products.filter(
      (product) =>
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        product.category
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  /* ==========================================
     TOTALS
  ========================================== */

  const totalProducts =
    products.length;

  const totalStock =
    products.reduce(
      (acc, item) =>
        acc + item.stock,
      0
    );

  const lowStock =
    products.filter(
      (item) =>
        item.status ===
        "Low Stock"
    ).length;

  const outOfStock =
    products.filter(
      (item) =>
        item.status ===
        "Out of Stock"
    ).length;

  /* ==========================================
     STATUS COLORS
  ========================================== */

  const getStatusColor =
    (status) => {
      switch (status) {
        case "Active":
          return "bg-green-100 text-green-700";

        case "Low Stock":
          return "bg-yellow-100 text-yellow-700";

        case "Out of Stock":
          return "bg-red-100 text-red-700";

        default:
          return "bg-gray-100 text-gray-700";
      }
    };

  /* ==========================================
     STATUS ICONS
  ========================================== */

  const getStatusIcon =
    (status) => {
      switch (status) {
        case "Active":
          return (
            <CheckCircle2
              size={18}
            />
          );

        case "Low Stock":
          return (
            <AlertTriangle
              size={18}
            />
          );

        case "Out of Stock":
          return (
            <XCircle
              size={18}
            />
          );

        default:
          return (
            <Package
              size={18}
            />
          );
      }
    };

  return (
    <div className="space-y-8">
      
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
        
        <div>
          <h1 className="text-4xl font-black text-gray-800">
            Products
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Manage furniture products, pricing, and inventory
          </p>
        </div>

        {/* ADD BUTTON */}

        <button
          onClick={() =>
            navigate(
              "/seller/add-product"
            )
          }
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-3xl font-black text-lg shadow-xl hover:scale-105 transition-all flex items-center gap-3"
        >
          <Plus size={24} />
          Add Product
        </button>
      </div>

      {/* ==========================================
          STATS
      ========================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* TOTAL PRODUCTS */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Total Products
              </p>

              <h2 className="text-4xl font-black text-gray-800 mt-2">
                {
                  totalProducts
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Package size={34} />
            </div>
          </div>
        </div>

        {/* STOCK */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Total Stock
              </p>

              <h2 className="text-4xl font-black text-green-600 mt-2">
                {totalStock}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-green-100 text-green-600 flex items-center justify-center">
              <Boxes size={34} />
            </div>
          </div>
        </div>

        {/* LOW STOCK */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Low Stock
              </p>

              <h2 className="text-4xl font-black text-yellow-600 mt-2">
                {lowStock}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <AlertTriangle
                size={34}
              />
            </div>
          </div>
        </div>

        {/* OUT OF STOCK */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Out of Stock
              </p>

              <h2 className="text-4xl font-black text-red-600 mt-2">
                {
                  outOfStock
                }
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-red-100 text-red-600 flex items-center justify-center">
              <XCircle size={34} />
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          PRODUCT TABLE
      ========================================== */}

      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        
        {/* TOP */}

        <div className="p-6 border-b border-gray-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          
          <div>
            <h2 className="text-2xl font-black text-gray-800">
              Product Inventory
            </h2>

            <p className="text-gray-500 mt-1">
              View and manage all furniture items
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* SEARCH */}

            <div className="relative w-full md:w-80">
              
              <Search
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
              />
            </div>

            {/* FILTER */}

            <button className="bg-gray-100 hover:bg-orange-100 transition-all px-6 py-4 rounded-2xl font-bold text-gray-700 flex items-center gap-2">
              
              <Filter
                size={20}
              />

              Filter
            </button>
          </div>
        </div>

        {/* TABLE */}

        <div className="overflow-x-auto">
          
          <table className="w-full">
            
            <thead className="bg-gray-50">
              
              <tr>
                
                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Product
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Category
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Price
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Stock
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Rating
                </th>

                <th className="text-left px-6 py-5 font-black text-gray-700">
                  Status
                </th>

                <th className="text-center px-6 py-5 font-black text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              
              {filteredProducts.map(
                (product) => (
                  <tr
                    key={
                      product.id
                    }
                    className="border-b border-gray-100 hover:bg-orange-50 transition-all"
                  >
                    
                    {/* PRODUCT */}

                    <td className="px-6 py-5">
                      
                      <div className="flex items-center gap-4">
                        
                        <img
                          src={
                            product.image
                          }
                          alt={
                            product.name
                          }
                          className="w-20 h-20 rounded-2xl object-cover"
                        />

                        <div>
                          <h3 className="font-black text-gray-800 text-lg">
                            {
                              product.name
                            }
                          </h3>

                          <p className="text-gray-500">
                            Sold: {
                              product.sold
                            }
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* CATEGORY */}

                    <td className="px-6 py-5">
                      
                      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm">
                        
                        <Layers3
                          size={16}
                        />

                        {
                          product.category
                        }
                      </div>
                    </td>

                    {/* PRICE */}

                    <td className="px-6 py-5">
                      
                      <div className="font-black text-orange-600 text-xl">
                        ₹
                        {product.price.toLocaleString()}
                      </div>
                    </td>

                    {/* STOCK */}

                    <td className="px-6 py-5">
                      
                      <div className="font-black text-gray-800 text-lg">
                        {
                          product.stock
                        }
                      </div>
                    </td>

                    {/* RATING */}

                    <td className="px-6 py-5">
                      
                      <div className="flex items-center gap-2 text-yellow-600 font-black">
                        
                        <Star
                          size={18}
                          className="fill-yellow-500"
                        />

                        {
                          product.rating
                        }
                      </div>
                    </td>

                    {/* STATUS */}

                    <td className="px-6 py-5">
                      
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm ${getStatusColor(
                          product.status
                        )}`}
                      >
                        {getStatusIcon(
                          product.status
                        )}

                        {
                          product.status
                        }
                      </div>
                    </td>

                    {/* ACTIONS */}

                    <td className="px-6 py-5">
                      
                      <div className="flex items-center justify-center gap-3">
                        
                        {/* VIEW */}

                        <button className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center">
                          
                          <Eye
                            size={20}
                          />
                        </button>

                        {/* EDIT */}

                        <button
                          onClick={() =>
                            navigate(
                              `/seller/edit-product/${product.id}`
                            )
                          }
                          className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 hover:bg-green-500 hover:text-white transition-all flex items-center justify-center"
                        >
                          <Edit
                            size={20}
                          />
                        </button>

                        {/* DELETE */}

                        <button
                          onClick={() =>
                            deleteProduct(
                              product.id
                            )
                          }
                          className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
                        >
                          <Trash2
                            size={20}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          {/* EMPTY */}

          {filteredProducts.length ===
            0 && (
            <div className="text-center py-20">
              
              <Package
                size={80}
                className="mx-auto text-gray-300"
              />

              <h2 className="text-3xl font-black text-gray-700 mt-5">
                No Products Found
              </h2>

              <p className="text-gray-500 mt-2">
                Try another search keyword
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ==========================================
          FOOTER CARD
      ========================================== */}

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-2xl">
        
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
          
          <div className="max-w-3xl">
            
            <div className="flex items-center gap-4 mb-4">
              
              <div className="w-16 h-16 rounded-3xl bg-orange-500 flex items-center justify-center">
                <TrendingUp
                  size={34}
                />
              </div>

              <h2 className="text-3xl font-black">
                Grow Your Furniture Business
              </h2>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed">
              Add premium furniture products, manage inventory,
              monitor stock levels, and increase sales with
              powerful seller tools.
            </p>
          </div>

          <button
            onClick={() =>
              navigate(
                "/seller/add-product"
              )
            }
            className="bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 rounded-2xl text-lg font-black hover:scale-105 transition-all shadow-xl"
          >
            Add New Furniture
          </button>
        </div>
      </div>
    </div>
  );
}

export default products;