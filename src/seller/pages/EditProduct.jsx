// src/seller/pages/EditProduct.jsx

import React, {
  useEffect,
  useState,
} from "react";

import {
  Save,
  Upload,
  IndianRupee,
  Package,
  Layers3,
  ImagePlus,
  ArrowLeft,
  Star,
  Truck,
  ShieldCheck,
} from "lucide-react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

function EditProduct() {
  /* ==========================================
     NAVIGATION
  ========================================== */

  const navigate =
    useNavigate();

  const { id } =
    useParams();

  /* ==========================================
     STATES
  ========================================== */

  const [loading,
    setLoading] =
    useState(false);

  const [preview,
    setPreview] =
    useState(
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
    );

  const [product,
    setProduct] =
    useState({
      name:
        "Modern Luxury Sofa",

      category:
        "Sofa",

      price: 25000,

      oldPrice: 32000,

      stock: 12,

      brand:
        "Furniture Hub",

      description:
        "Premium luxury sofa with modern comfort and elegant design for living rooms.",

      material:
        "Wood & Leather",

      dimensions:
        "200 x 90 x 110 cm",

      shipping:
        "Free Shipping",

      warranty:
        "2 Years Warranty",

      featured: true,
    });

  /* ==========================================
     LOAD PRODUCT
  ========================================== */

  useEffect(() => {
    // API CALL HERE
    console.log(
      "Editing Product ID:",
      id
    );
  }, [id]);

  /* ==========================================
     HANDLE CHANGE
  ========================================== */

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setProduct({
      ...product,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  /* ==========================================
     IMAGE UPLOAD
  ========================================== */

  const handleImage =
    (e) => {
      const file =
        e.target.files[0];

      if (file) {
        setPreview(
          URL.createObjectURL(
            file
          )
        );
      }
    };

  /* ==========================================
     SUBMIT
  ========================================== */

  const handleSubmit =
    (e) => {
      e.preventDefault();

      setLoading(true);

      setTimeout(() => {
        setLoading(false);

        alert(
          "Product Updated Successfully!"
        );

        navigate(
          "/seller/products"
        );
      }, 1500);
    };

  return (
    <div className="space-y-8">
      
      {/* ==========================================
          TOP HEADER
      ========================================== */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        
        <div className="flex items-center gap-4">
          
          <button
            onClick={() =>
              navigate(
                "/seller/products"
              )
            }
            className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"
          >
            <ArrowLeft
              size={24}
            />
          </button>

          <div>
            <h1 className="text-4xl font-black text-gray-800">
              Edit Product
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              Update furniture product details
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 rounded-3xl shadow-xl flex items-center gap-4">
          
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
            <Package size={28} />
          </div>

          <div>
            <p className="text-sm opacity-80">
              Product ID
            </p>

            <h2 className="text-2xl font-black">
              #{id}
            </h2>
          </div>
        </div>
      </div>

      {/* ==========================================
          MAIN GRID
      ========================================== */}

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* ==========================================
            LEFT SIDE
        ========================================== */}

        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
          
          <form
            onSubmit={
              handleSubmit
            }
            className="space-y-8"
          >
            
            {/* PRODUCT INFO */}

            <div>
              
              <h2 className="text-2xl font-black text-gray-800 mb-6">
                Product Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                
                {/* NAME */}

                <div className="md:col-span-2">
                  
                  <label className="block text-sm font-black text-gray-700 mb-3">
                    Product Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={
                      product.name
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
                  />
                </div>

                {/* CATEGORY */}

                <div>
                  
                  <label className="block text-sm font-black text-gray-700 mb-3">
                    Category
                  </label>

                  <select
                    name="category"
                    value={
                      product.category
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
                  >
                    <option>
                      Sofa
                    </option>

                    <option>
                      Chair
                    </option>

                    <option>
                      Table
                    </option>

                    <option>
                      Bed
                    </option>

                    <option>
                      Wardrobe
                    </option>
                  </select>
                </div>

                {/* BRAND */}

                <div>
                  
                  <label className="block text-sm font-black text-gray-700 mb-3">
                    Brand
                  </label>

                  <input
                    type="text"
                    name="brand"
                    value={
                      product.brand
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
                  />
                </div>

                {/* PRICE */}

                <div>
                  
                  <label className="block text-sm font-black text-gray-700 mb-3">
                    Price
                  </label>

                  <div className="relative">
                    
                    <IndianRupee
                      className="absolute left-4 top-4 text-gray-400"
                      size={20}
                    />

                    <input
                      type="number"
                      name="price"
                      value={
                        product.price
                      }
                      onChange={
                        handleChange
                      }
                      className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* OLD PRICE */}

                <div>
                  
                  <label className="block text-sm font-black text-gray-700 mb-3">
                    Old Price
                  </label>

                  <div className="relative">
                    
                    <IndianRupee
                      className="absolute left-4 top-4 text-gray-400"
                      size={20}
                    />

                    <input
                      type="number"
                      name="oldPrice"
                      value={
                        product.oldPrice
                      }
                      onChange={
                        handleChange
                      }
                      className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* STOCK */}

                <div>
                  
                  <label className="block text-sm font-black text-gray-700 mb-3">
                    Stock Quantity
                  </label>

                  <input
                    type="number"
                    name="stock"
                    value={
                      product.stock
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
                  />
                </div>

                {/* MATERIAL */}

                <div>
                  
                  <label className="block text-sm font-black text-gray-700 mb-3">
                    Material
                  </label>

                  <input
                    type="text"
                    name="material"
                    value={
                      product.material
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
                  />
                </div>

                {/* DIMENSIONS */}

                <div className="md:col-span-2">
                  
                  <label className="block text-sm font-black text-gray-700 mb-3">
                    Dimensions
                  </label>

                  <input
                    type="text"
                    name="dimensions"
                    value={
                      product.dimensions
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
                  />
                </div>

                {/* DESCRIPTION */}

                <div className="md:col-span-2">
                  
                  <label className="block text-sm font-black text-gray-700 mb-3">
                    Description
                  </label>

                  <textarea
                    rows="6"
                    name="description"
                    value={
                      product.description
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* EXTRA OPTIONS */}

            <div>
              
              <h2 className="text-2xl font-black text-gray-800 mb-6">
                Extra Features
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                
                {/* SHIPPING */}

                <div className="border border-gray-200 rounded-3xl p-5 flex items-center gap-4">
                  
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Truck
                      size={30}
                    />
                  </div>

                  <div className="flex-1">
                    
                    <h3 className="font-black text-gray-800">
                      Shipping
                    </h3>

                    <input
                      type="text"
                      name="shipping"
                      value={
                        product.shipping
                      }
                      onChange={
                        handleChange
                      }
                      className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* WARRANTY */}

                <div className="border border-gray-200 rounded-3xl p-5 flex items-center gap-4">
                  
                  <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                    <ShieldCheck
                      size={30}
                    />
                  </div>

                  <div className="flex-1">
                    
                    <h3 className="font-black text-gray-800">
                      Warranty
                    </h3>

                    <input
                      type="text"
                      name="warranty"
                      value={
                        product.warranty
                      }
                      onChange={
                        handleChange
                      }
                      className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* FEATURED */}

            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-3xl p-6">
              
              <div className="flex items-center gap-4">
                
                <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center">
                  <Star size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-black text-gray-800">
                    Featured Product
                  </h3>

                  <p className="text-gray-500">
                    Show this product on homepage
                  </p>
                </div>
              </div>

              <input
                type="checkbox"
                name="featured"
                checked={
                  product.featured
                }
                onChange={
                  handleChange
                }
                className="w-7 h-7 accent-orange-500"
              />
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-5 rounded-3xl font-black text-xl hover:scale-[1.01] transition-all shadow-xl shadow-orange-200 flex items-center justify-center gap-3"
            >
              {loading ? (
                "Updating..."
              ) : (
                <>
                  <Save size={24} />
                  Update Product
                </>
              )}
            </button>
          </form>
        </div>

        {/* ==========================================
            RIGHT SIDE
        ========================================== */}

        <div className="space-y-6">
          
          {/* IMAGE */}

          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
            
            <div className="flex items-center gap-3 mb-5">
              
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <ImagePlus
                  size={28}
                />
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-800">
                  Product Image
                </h2>

                <p className="text-gray-500 text-sm">
                  Upload product photo
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl">
              
              <img
                src={preview}
                alt="Preview"
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>

            <label className="mt-5 w-full bg-orange-100 hover:bg-orange-500 hover:text-white transition-all text-orange-600 py-4 rounded-2xl font-black flex items-center justify-center gap-3 cursor-pointer">
              
              <Upload size={22} />

              Upload New Image

              <input
                type="file"
                hidden
                accept="image/*"
                onChange={
                  handleImage
                }
              />
            </label>
          </div>

          {/* PRODUCT SUMMARY */}

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-xl">
            
            <div className="flex items-center gap-4 mb-5">
              
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center">
                <Layers3 size={32} />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Product Summary
                </h2>

                <p className="text-slate-300 text-sm">
                  Live product details
                </p>
              </div>
            </div>

            <div className="space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                
                <span className="text-slate-400">
                  Name
                </span>

                <span className="font-bold">
                  {
                    product.name
                  }
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                
                <span className="text-slate-400">
                  Category
                </span>

                <span className="font-bold">
                  {
                    product.category
                  }
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                
                <span className="text-slate-400">
                  Price
                </span>

                <span className="font-bold text-orange-400">
                  ₹
                  {
                    product.price
                  }
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                
                <span className="text-slate-400">
                  Stock
                </span>

                <span className="font-bold">
                  {
                    product.stock
                  }
                </span>
              </div>

              <div className="flex items-center justify-between">
                
                <span className="text-slate-400">
                  Featured
                </span>

                <span className="font-bold text-green-400">
                  {product.featured
                    ? "Yes"
                    : "No"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;