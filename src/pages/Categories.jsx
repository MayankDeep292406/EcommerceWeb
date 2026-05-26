// ===============================================
// src/pages/ProductDetails.jsx
// FULL PREMIUM PRODUCT DETAILS PAGE
// ===============================================

import React, { useState } from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  ArrowLeft,
  Heart,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
  Minus,
  Plus,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BadgeCheck,
  Sofa,
  BedDouble,
  Palette,
  Ruler,
  RotateCcw,
} from "lucide-react";

import products from "../Component/API/Products";
import Footer from "../Component/Footer/Footer";

function ProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const product =
    products.find(
      (item) =>
        item.id === Number(id)
    );

  const [quantity, setQuantity] =
    useState(1);

  const [selectedImage, setSelectedImage] =
    useState(0);

  const [selectedColor, setSelectedColor] =
    useState("Walnut Brown");

  // =====================================
  // PRODUCT SIZE
  // =====================================

  const defaultSize =
    product?.availableSizes?.[0]?.name || "";

  const [selectedSize, setSelectedSize] =
    useState(defaultSize);

  // =====================================
  // PRODUCT NOT FOUND
  // =====================================

  if (!product) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-[#f7f5f2]">

        <div className="text-center">

          <h1 className="text-5xl font-black text-gray-800">

            Product Not Found
          </h1>

          <button
            onClick={() =>
              navigate("/products")
            }
            className="mt-6 bg-black text-white px-8 py-4 rounded-2xl"
          >

            Back To Products
          </button>
        </div>
      </div>
    );
  }

  // =====================================
  // MULTIPLE COLOR IMAGES
  // =====================================

  const productColors = [
    {
      name: "Walnut Brown",
      color: "#8B5E3C",
      images: [
        product.image,
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200",
      ],
    },

    {
      name: "Cream White",
      color: "#F5F1E8",
      images: [
        product.image,
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200",
      ],
    },

    {
      name: "Dark Black",
      color: "#1F1F1F",
      images: [
        product.image,
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
      ],
    },

    {
      name: "Royal Blue",
      color: "#244D8A",
      images: [
        product.image,
        "https://images.unsplash.com/photo-1491924778227-f225b115b7a7?q=80&w=1200",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
      ],
    },
  ];

  const currentColor =
    productColors.find(
      (item) =>
        item.name === selectedColor
    );

  const images =
    currentColor?.images || [product.image];

  // =====================================
  // DEFAULT SIZE DATA
  // =====================================

  const defaultBedSizes = [
    {
      name: "Single",
      dimensions: '36" × 75"',
      suitable: "1 Person",
      price: product.price - 4000,
    },

    {
      name: "Queen",
      dimensions: '60" × 78"',
      suitable: "Couples",
      price: product.price,
    },

    {
      name: "King",
      dimensions: '72" × 78"',
      suitable: "Family Comfort",
      price: product.price + 5000,
    },
  ];

  const defaultSofaSizes = [
    {
      name: "2 Seater",
      dimensions: '63" × 38" × 34"',
      suitable: "Compact Room",
      price: product.price - 5000,
    },

    {
      name: "3 Seater",
      dimensions: '90" × 38" × 34"',
      suitable: "Family Use",
      price: product.price,
    },

    {
      name: "4 Seater",
      dimensions: '117" × 38" × 34"',
      suitable: "Large Family",
      price: product.price + 4000,
    },

    {
      name: "5 Seater",
      dimensions: '144" × 38" × 34"',
      suitable: "Luxury Hall",
      price: product.price + 7000,
    },

    {
      name: "6 Seater",
      dimensions: '171" × 38" × 34"',
      suitable: "Premium Home",
      price: product.price + 10000,
    },

    {
      name: "7 Seater",
      dimensions: '198" × 38" × 34"',
      suitable: "Villa Interior",
      price: product.price + 13000,
    },
  ];

  // =====================================
  // CHECK PRODUCT TYPE
  // =====================================

  const isBed =
    product.name.toLowerCase().includes("bed");

  const isSofa =
    product.name.toLowerCase().includes("sofa");

  const availableSizes =
    product.availableSizes ||
    (isBed
      ? defaultBedSizes
      : isSofa
      ? defaultSofaSizes
      : []);

  // =====================================
  // SELECTED SIZE DATA
  // =====================================

  const selectedProductSize =
    availableSizes.find(
      (item) =>
        item.name === selectedSize
    ) || availableSizes[0];

  // =====================================
  // RELATED PRODUCTS
  // =====================================

  const relatedProducts =
    ProductData.filter(
      (item) =>
        item.id !== product.id
    ).slice(0, 4);

  // =====================================
  // ADD TO CART
  // =====================================

  const addToCart = () => {

    const existingCart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    existingCart.push({
      ...product,

      quantity,

      color:
        selectedColor,

      selectedSize:
        selectedProductSize?.name,

      dimensions:
        selectedProductSize?.dimensions,

      image:
        images[selectedImage],
    });

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    navigate("/cart");
  };

  return (

    <div className="bg-[#f6f4ef] min-h-screen overflow-hidden">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">

        <div className="max-w-[1700px] mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                navigate(-1)
              }
              className="w-12 h-12 rounded-2xl bg-white border border-gray-200 hover:bg-black hover:text-white transition"
            >

              <ArrowLeft className="mx-auto" />
            </button>

            <div>

              <h1 className="text-3xl font-black">

                Shop_
                <span className="text-[#8b5e34]">
                  Now
                </span>
              </h1>

              <p className="text-sm text-gray-500">

                Luxury Furniture Collection
              </p>
            </div>
          </div>

          <button className="w-12 h-12 rounded-2xl bg-white border border-gray-200 hover:bg-red-500 hover:text-white transition flex items-center justify-center">

            <Heart size={20} />
          </button>
        </div>
      </div>

      {/* =====================================
          MAIN SECTION
      ===================================== */}

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 py-10">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14">

          {/* =====================================
              LEFT SIDE IMAGE
          ===================================== */}

          <div>

            {/* MAIN IMAGE */}

            <div className="relative bg-white rounded-[40px] overflow-hidden border border-gray-200 h-[720px] flex items-center justify-center shadow-xl">

              <div className="absolute w-[70%] h-[70%] bg-[#8b5e34]/20 blur-[120px] rounded-full"></div>

              <div className="absolute top-6 left-6 z-20 bg-black text-white px-5 py-3 rounded-full flex items-center gap-2 font-bold">

                <Sparkles size={18} />

                Luxury Premium
              </div>

              <img
                src={
                  images[selectedImage]
                }
                alt={product.name}
                className="relative z-10 w-full h-full object-cover hover:scale-105 transition duration-700"
              />

              {/* PREV */}

              <button
                onClick={() =>
                  setSelectedImage(
                    selectedImage === 0
                      ? images.length - 1
                      : selectedImage - 1
                  )
                }
                className="absolute left-5 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-black hover:text-white transition"
              >

                <ChevronLeft />
              </button>

              {/* NEXT */}

              <button
                onClick={() =>
                  setSelectedImage(
                    selectedImage ===
                      images.length - 1
                      ? 0
                      : selectedImage + 1
                  )
                }
                className="absolute right-5 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-black hover:text-white transition"
              >

                <ChevronRight />
              </button>
            </div>

            {/* THUMBNAILS */}

            <div className="grid grid-cols-3 gap-5 mt-6">

              {images.map(
                (
                  image,
                  index
                ) => (

                  <button
                    key={index}
                    onClick={() =>
                      setSelectedImage(index)
                    }
                    className={`h-[140px] rounded-3xl overflow-hidden border transition ${
                      selectedImage === index
                        ? "border-black scale-105"
                        : "border-gray-200"
                    }`}
                  >

                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                )
              )}
            </div>
          </div>

          {/* =====================================
              RIGHT SIDE CONTENT
          ===================================== */}

          <div>

            {/* CATEGORY */}

            <div className="inline-flex items-center gap-2 bg-[#ede8df] text-[#8b5e34] px-5 py-2 rounded-full font-bold">

              <BadgeCheck size={18} />

              Premium Furniture
            </div>

            {/* TITLE */}

            <h1 className="mt-6 text-5xl xl:text-7xl font-black text-gray-900 leading-tight">

              {product.name}
            </h1>

            {/* RATING */}

            <div className="flex items-center gap-4 mt-6">

              <div className="flex items-center gap-1">

                {[1, 2, 3, 4, 5].map(
                  (star) => (

                    <Star
                      key={star}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  )
                )}
              </div>

              <p className="text-gray-500 font-semibold">

                4.9 Ratings
              </p>
            </div>

            {/* DESCRIPTION */}

            <p className="mt-8 text-lg text-gray-600 leading-9">

              {product.description}
            </p>

            {/* PRICE */}

            <div className="flex flex-wrap items-center gap-5 mt-10">

              <h2 className="text-6xl font-black">

                ₹
                {selectedProductSize?.price ||
                  product.price}
              </h2>

              <span className="text-2xl text-gray-400 line-through font-bold">

                ₹{product.oldPrice}
              </span>

              <div className="bg-green-100 text-green-700 px-5 py-3 rounded-2xl font-black">

                40% OFF
              </div>
            </div>

            {/* =====================================
                COLOR SELECTOR
            ===================================== */}

            <div className="mt-14">

              <div className="flex items-center gap-3 mb-5">

                <Palette size={24} />

                <h2 className="text-3xl font-black">

                  Choose Color
                </h2>
              </div>

              <div className="flex flex-wrap gap-5">

                {productColors.map(
                  (item) => (

                    <button
                      key={item.name}
                      onClick={() => {

                        setSelectedColor(
                          item.name
                        );

                        setSelectedImage(0);
                      }}
                      className={`flex items-center gap-3 px-5 py-4 rounded-2xl border transition ${
                        selectedColor ===
                        item.name
                          ? "border-black bg-black text-white"
                          : "border-gray-200 bg-white"
                      }`}
                    >

                      <div
                        className="w-7 h-7 rounded-full border border-gray-300"
                        style={{
                          background:
                            item.color,
                        }}
                      />

                      <span className="font-bold">

                        {item.name}
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>

            {/* =====================================
                PRODUCT SIZES
            ===================================== */}

            {availableSizes.length > 0 && (

              <div className="mt-14">

                <div className="flex items-center gap-3 mb-5">

                  {isBed ? (
                    <BedDouble size={24} />
                  ) : (
                    <Sofa size={24} />
                  )}

                  <h2 className="text-3xl font-black">

                    Select Size
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                  {availableSizes.map(
                    (size) => (

                      <button
                        key={size.name}
                        onClick={() =>
                          setSelectedSize(
                            size.name
                          )
                        }
                        className={`p-6 rounded-3xl border text-left transition ${
                          selectedSize ===
                          size.name
                            ? "bg-black text-white border-black"
                            : "bg-white border-gray-200"
                        }`}
                      >

                        <h3 className="text-2xl font-black">

                          {size.name}
                        </h3>

                        <p className="mt-3 opacity-80">

                          {
                            size.dimensions
                          }
                        </p>

                        <p className="mt-3 text-sm opacity-70">

                          {size.suitable}
                        </p>

                        <div className="mt-4 text-2xl font-black">

                          ₹{size.price}
                        </div>
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {/* =====================================
                DIMENSIONS
            ===================================== */}

            {selectedProductSize && (

              <div className="mt-14 bg-white rounded-[35px] border border-gray-200 overflow-hidden">

                <div className="p-6 border-b border-gray-100 flex items-center gap-3">

                  <Ruler size={24} />

                  <h2 className="text-3xl font-black">

                    Product Dimensions
                  </h2>
                </div>

                <div className="p-8">

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-[#f6f4ef] p-6 rounded-3xl">

                      <h3 className="text-xl font-black">

                        Selected Size
                      </h3>

                      <p className="mt-3 text-lg text-gray-600">

                        {
                          selectedProductSize.name
                        }
                      </p>
                    </div>

                    <div className="bg-[#f6f4ef] p-6 rounded-3xl">

                      <h3 className="text-xl font-black">

                        Dimensions
                      </h3>

                      <p className="mt-3 text-lg text-gray-600">

                        {
                          selectedProductSize.dimensions
                        }
                      </p>
                    </div>

                    <div className="bg-[#f6f4ef] p-6 rounded-3xl">

                      <h3 className="text-xl font-black">

                        Suitable For
                      </h3>

                      <p className="mt-3 text-lg text-gray-600">

                        {
                          selectedProductSize.suitable
                        }
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-3xl overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* =====================================
                QUANTITY + CART
            ===================================== */}

            <div className="mt-14 flex flex-wrap gap-6 items-center">

              <div>

                <p className="font-bold mb-3">

                  Quantity
                </p>

                <div className="flex items-center bg-white border border-gray-200 rounded-2xl overflow-hidden">

                  <button
                    onClick={() =>
                      quantity > 1 &&
                      setQuantity(
                        quantity - 1
                      )
                    }
                    className="w-14 h-14 flex items-center justify-center hover:bg-gray-100"
                  >

                    <Minus />
                  </button>

                  <span className="w-16 text-center font-black text-xl">

                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity(
                        quantity + 1
                      )
                    }
                    className="w-14 h-14 flex items-center justify-center hover:bg-gray-100"
                  >

                    <Plus />
                  </button>
                </div>
              </div>

              <button
                onClick={addToCart}
                className="flex-1 min-w-[280px] bg-black hover:bg-[#8b5e34] text-white py-5 rounded-2xl text-lg font-black flex items-center justify-center gap-3 transition"
              >

                <ShoppingCart size={24} />

                Add To Cart
              </button>
            </div>

            {/* FEATURES */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14">

              <div className="bg-white p-6 rounded-3xl border border-gray-200">

                <Truck size={30} />

                <h3 className="mt-4 text-xl font-black">

                  Fast Delivery
                </h3>

                <p className="mt-2 text-gray-500">

                  Free delivery all over India.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-200">

                <ShieldCheck size={30} />

                <h3 className="mt-4 text-xl font-black">

                  Warranty
                </h3>

                <p className="mt-2 text-gray-500">

                  5 Years Warranty
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-200">

                <RotateCcw size={30} />

                <h3 className="mt-4 text-xl font-black">

                  Easy Returns
                </h3>

                <p className="mt-2 text-gray-500">

                  7 days easy return policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            RELATED PRODUCTS
        ===================================== */}

        <div className="mt-28">

          <h2 className="text-5xl font-black text-gray-900 mb-12">

            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            {relatedProducts.map(
              (item) => (

                <div
                  key={item.id}
                  onClick={() =>
                    navigate(
                      `/product/${item.id}`
                    )
                  }
                  className="bg-white rounded-[35px] overflow-hidden border border-gray-200 hover:-translate-y-2 hover:shadow-2xl transition cursor-pointer"
                >

                  <div className="h-[320px] overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="p-6">

                    <h3 className="text-2xl font-black line-clamp-1">

                      {item.name}
                    </h3>

                    <div className="flex items-center gap-3 mt-4">

                      <span className="text-3xl font-black">

                        ₹{item.price}
                      </span>

                      <span className="line-through text-gray-400">

                        ₹{item.oldPrice}
                      </span>
                    </div>

                    <button className="w-full mt-6 bg-black hover:bg-[#8b5e34] text-white py-4 rounded-2xl font-bold transition">

                      View Product
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails;