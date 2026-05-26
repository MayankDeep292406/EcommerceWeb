// src/seller/pages/AddProduct.jsx

import React, {
  useState,
  useEffect,
} from "react";

import {
  Upload,
  ImagePlus,
  IndianRupee,
  Package,
  Layers3,
  FileText,
  Boxes,
  CheckCircle2,
} from "lucide-react";

import useProducts from "../hooks/useProducts";

function AddProduct() {
  const {
    addNewProduct,
    loading,
  } = useProducts();

  /* ==========================================
     STATES
  ========================================== */

  const [preview, setPreview] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      category: "",
      brand: "",
      price: "",
      stock: "",
      discount: "",
      image: null,
      featured: false,
    });

  /* ==========================================
     CLEANUP IMAGE URL
  ========================================== */

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  /* ==========================================
     HANDLE INPUT CHANGE
  ========================================== */

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  /* ==========================================
     HANDLE IMAGE
  ========================================== */

  const handleImage = (e) => {
    const file =
      e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(
      URL.createObjectURL(file)
    );
  };

  /* ==========================================
     RESET FORM
  ========================================== */

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      brand: "",
      price: "",
      stock: "",
      discount: "",
      image: null,
      featured: false,
    });

    setPreview(null);
  };

  /* ==========================================
     HANDLE SUBMIT
  ========================================== */

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        /* VALIDATION */

        if (!formData.image) {
          alert(
            "Please Upload Product Image"
          );
          return;
        }

        if (
          Number(formData.price) <= 0
        ) {
          alert(
            "Price must be greater than 0"
          );
          return;
        }

        if (
          Number(formData.stock) < 0
        ) {
          alert(
            "Stock cannot be negative"
          );
          return;
        }

        /* FORMDATA */

        const data =
          new FormData();

        data.append(
          "title",
          formData.title
        );

        data.append(
          "description",
          formData.description
        );

        data.append(
          "category",
          formData.category
        );

        data.append(
          "brand",
          formData.brand
        );

        data.append(
          "price",
          formData.price
        );

        data.append(
          "stock",
          formData.stock
        );

        data.append(
          "discount",
          formData.discount
        );

        data.append(
          "featured",
          formData.featured
            ? "true"
            : "false"
        );

        data.append(
          "image",
          formData.image
        );

        /* SAVE PRODUCT */

        await addNewProduct(
          data
        );

        alert(
          "✅ Product Added Successfully"
        );

        resetForm();
      } catch (error) {
        console.log(error);

        alert(
          "❌ Failed To Add Product"
        );
      }
    };

  return (
    <div className="w-full p-4 md:p-6">
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-800">
            Add New Product
          </h1>

          <p className="text-gray-500 mt-2">
            Add furniture products
            to your store
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3">
          <Package size={22} />

          <span className="font-bold">
            Seller Panel
          </span>
        </div>
      </div>

      {/* ==========================================
          FORM
      ========================================== */}

      <form
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-3 gap-8"
      >
        {/* ==========================================
            LEFT SIDE
        ========================================== */}

        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
          <div className="grid md:grid-cols-2 gap-6">
            {/* PRODUCT NAME */}

            <div>
              <label className="text-sm font-bold text-gray-700 block mb-3">
                Product Name
              </label>

              <div className="relative">
                <Package
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  name="title"
                  value={
                    formData.title
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Modern Sofa"
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
                  required
                />
              </div>
            </div>

            {/* CATEGORY */}

            <div>
              <label className="text-sm font-bold text-gray-700 block mb-3">
                Category
              </label>

              <div className="relative">
                <Layers3
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <select
                  name="category"
                  value={
                    formData.category
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
                  required
                >
                  <option value="">
                    Select Category
                  </option>

                  <option value="Sofa">
                    Sofa
                  </option>

                  <option value="Chair">
                    Chair
                  </option>

                  <option value="Table">
                    Table
                  </option>

                  <option value="Bed">
                    Bed
                  </option>

                  <option value="Wardrobe">
                    Wardrobe
                  </option>
                </select>
              </div>
            </div>

            {/* BRAND */}

            <div>
              <label className="text-sm font-bold text-gray-700 block mb-3">
                Brand Name
              </label>

              <div className="relative">
                <Boxes
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  name="brand"
                  value={
                    formData.brand
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="IKEA"
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {/* PRICE */}

            <div>
              <label className="text-sm font-bold text-gray-700 block mb-3">
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
                    formData.price
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="25000"
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
                  required
                />
              </div>
            </div>

            {/* STOCK */}

            <div>
              <label className="text-sm font-bold text-gray-700 block mb-3">
                Product Stock
              </label>

              <div className="relative">
                <Boxes
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="number"
                  name="stock"
                  value={
                    formData.stock
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="50"
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
                  required
                />
              </div>
            </div>

            {/* DISCOUNT */}

            <div>
              <label className="text-sm font-bold text-gray-700 block mb-3">
                Discount %
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
                placeholder="10"
                className="w-full border border-gray-300 rounded-2xl px-4 py-4 outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* DESCRIPTION */}

          <div className="mt-6">
            <label className="text-sm font-bold text-gray-700 block mb-3">
              Product Description
            </label>

            <div className="relative">
              <FileText
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <textarea
                rows="6"
                name="description"
                value={
                  formData.description
                }
                onChange={
                  handleChange
                }
                placeholder="Write product details..."
                className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500 resize-none"
                required
              />
            </div>
          </div>

          {/* FEATURED */}

          <div className="mt-6 flex items-center gap-3">
            <input
              type="checkbox"
              name="featured"
              checked={
                formData.featured
              }
              onChange={
                handleChange
              }
              className="w-5 h-5 accent-orange-500"
            />

            <label className="font-semibold text-gray-700">
              Mark as Featured
              Product
            </label>
          </div>
        </div>

        {/* ==========================================
            RIGHT SIDE
        ========================================== */}

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 h-fit">
          <h2 className="text-2xl font-black text-gray-800 mb-6">
            Product Image
          </h2>

          {/* IMAGE UPLOAD */}

          <label className="border-2 border-dashed border-orange-300 rounded-3xl h-80 flex flex-col items-center justify-center cursor-pointer overflow-hidden relative group">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <ImagePlus
                  size={70}
                  className="text-orange-400"
                />

                <p className="mt-4 text-gray-600 font-semibold">
                  Upload Furniture
                  Image
                </p>

                <span className="text-sm text-gray-400 mt-2">
                  PNG, JPG, WEBP
                </span>
              </>
            )}

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={
                handleImage
              }
            />
          </label>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-gradient-to-r from-orange-500 to-amber-500 hover:scale-[1.02] transition-all duration-300 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-200 flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {loading ? (
              "Adding Product..."
            ) : (
              <>
                <Upload size={22} />

                Add Product
              </>
            )}
          </button>

          {/* SUCCESS BOX */}

          <div className="mt-6 bg-orange-50 border border-orange-200 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="text-orange-500 mt-1"
                size={22}
              />

              <div>
                <h3 className="font-bold text-gray-800">
                  Seller Tips
                </h3>

                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Add high-quality
                  product images and
                  detailed descriptions
                  to increase customer
                  engagement and sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;