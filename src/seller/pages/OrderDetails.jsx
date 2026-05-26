// src/seller/pages/OrderDetails.jsx

import React, {
  useState,
} from "react";

import {
  ArrowLeft,
  Package,
  User,
  Phone,
  Mail,
  MapPin,
  Truck,
  CreditCard,
  CalendarDays,
  BadgeCheck,
  Clock3,
  CircleDollarSign,
  Download,
  Printer,
  CheckCircle2,
  IndianRupee,
  Star,
} from "lucide-react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

function OrderDetails() {
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

  const [order] =
    useState({
      id:
        id || "ORD1024",

      customer:
        "Rahul Sharma",

      email:
        "rahul@gmail.com",

      phone:
        "+91 9876543210",

      address:
        "221B Green Avenue, Delhi, India",

      date:
        "15 May 2026",

      payment:
        "UPI Payment",

      paymentStatus:
        "Paid",

      orderStatus:
        "Delivered",

      tracking:
        "TRK99887766",

      subtotal: 25000,

      shipping: 0,

      tax: 1500,

      total: 26500,

      products: [
        {
          id: 1,
          name:
            "Modern Luxury Sofa",

          price: 25000,

          qty: 1,

          image:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
        },
      ],
    });

  /* ==========================================
     TIMELINE
  ========================================== */

  const timeline = [
    {
      title:
        "Order Placed",
      time:
        "15 May 2026 - 10:30 AM",
      completed: true,
    },

    {
      title:
        "Payment Confirmed",
      time:
        "15 May 2026 - 10:35 AM",
      completed: true,
    },

    {
      title:
        "Product Packed",
      time:
        "15 May 2026 - 04:20 PM",
      completed: true,
    },

    {
      title:
        "Shipped",
      time:
        "16 May 2026 - 09:00 AM",
      completed: true,
    },

    {
      title:
        "Delivered",
      time:
        "18 May 2026 - 02:15 PM",
      completed: true,
    },
  ];

  return (
    <div className="space-y-8">
      
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
        
        {/* LEFT */}

        <div className="flex items-center gap-4">
          
          <button
            onClick={() =>
              navigate(
                "/seller/orders"
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
              Order Details
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              Complete information about customer order
            </p>
          </div>
        </div>

        {/* RIGHT */}

        <div className="flex flex-wrap items-center gap-4">
          
          <button className="bg-white border border-gray-200 px-6 py-4 rounded-2xl font-bold text-gray-700 hover:bg-gray-100 transition-all flex items-center gap-3 shadow-sm">
            
            <Printer
              size={20}
            />

            Print
          </button>

          <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl flex items-center gap-3">
            
            <Download
              size={20}
            />

            Download Invoice
          </button>
        </div>
      </div>

      {/* ==========================================
          ORDER STATUS CARD
      ========================================== */}

      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white shadow-2xl">
        
        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* ORDER ID */}

          <div>
            <p className="opacity-80">
              Order ID
            </p>

            <h2 className="text-3xl font-black mt-2">
              #{order.id}
            </h2>
          </div>

          {/* STATUS */}

          <div>
            <p className="opacity-80">
              Order Status
            </p>

            <div className="mt-3 inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full font-bold">
              
              <BadgeCheck
                size={20}
              />

              {
                order.orderStatus
              }
            </div>
          </div>

          {/* PAYMENT */}

          <div>
            <p className="opacity-80">
              Payment Status
            </p>

            <div className="mt-3 inline-flex items-center gap-2 bg-green-500 px-5 py-2 rounded-full font-bold">
              
              <CheckCircle2
                size={20}
              />

              {
                order.paymentStatus
              }
            </div>
          </div>

          {/* DATE */}

          <div>
            <p className="opacity-80">
              Order Date
            </p>

            <div className="mt-3 flex items-center gap-2 font-bold">
              
              <CalendarDays
                size={20}
              />

              {order.date}
            </div>
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

        <div className="lg:col-span-2 space-y-8">
          
          {/* CUSTOMER */}

          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7">
            
            <div className="flex items-center gap-4 mb-7">
              
              <div className="w-16 h-16 rounded-3xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <User size={34} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-800">
                  Customer Information
                </h2>

                <p className="text-gray-500">
                  Buyer details and shipping info
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              
              {/* NAME */}

              <div className="bg-gray-50 rounded-3xl p-5">
                
                <p className="text-gray-500 text-sm">
                  Full Name
                </p>

                <h3 className="text-xl font-black text-gray-800 mt-2">
                  {
                    order.customer
                  }
                </h3>
              </div>

              {/* PHONE */}

              <div className="bg-gray-50 rounded-3xl p-5">
                
                <p className="text-gray-500 text-sm">
                  Phone Number
                </p>

                <div className="flex items-center gap-2 mt-2 text-gray-800 font-black">
                  
                  <Phone
                    size={20}
                  />

                  {
                    order.phone
                  }
                </div>
              </div>

              {/* EMAIL */}

              <div className="bg-gray-50 rounded-3xl p-5">
                
                <p className="text-gray-500 text-sm">
                  Email Address
                </p>

                <div className="flex items-center gap-2 mt-2 text-gray-800 font-black">
                  
                  <Mail
                    size={20}
                  />

                  {
                    order.email
                  }
                </div>
              </div>

              {/* ADDRESS */}

              <div className="bg-gray-50 rounded-3xl p-5">
                
                <p className="text-gray-500 text-sm">
                  Delivery Address
                </p>

                <div className="flex items-start gap-2 mt-2 text-gray-800 font-black">
                  
                  <MapPin
                    size={20}
                    className="mt-1"
                  />

                  <span>
                    {
                      order.address
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCTS */}

          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7">
            
            <div className="flex items-center gap-4 mb-7">
              
              <div className="w-16 h-16 rounded-3xl bg-green-100 text-green-600 flex items-center justify-center">
                <Package size={34} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-800">
                  Ordered Products
                </h2>

                <p className="text-gray-500">
                  Products purchased by customer
                </p>
              </div>
            </div>

            <div className="space-y-5">
              
              {order.products.map(
                (product) => (
                  <div
                    key={
                      product.id
                    }
                    className="flex flex-col md:flex-row md:items-center justify-between gap-5 border border-gray-200 rounded-3xl p-5 hover:shadow-lg transition-all"
                  >
                    
                    {/* LEFT */}

                    <div className="flex items-center gap-5">
                      
                      <img
                        src={
                          product.image
                        }
                        alt={
                          product.name
                        }
                        className="w-28 h-28 rounded-3xl object-cover"
                      />

                      <div>
                        <h3 className="text-2xl font-black text-gray-800">
                          {
                            product.name
                          }
                        </h3>

                        <div className="flex items-center gap-2 mt-3 text-gray-500">
                          
                          <Star
                            size={18}
                            className="text-yellow-500 fill-yellow-500"
                          />

                          Premium Furniture
                        </div>
                      </div>
                    </div>

                    {/* RIGHT */}

                    <div className="text-right">
                      
                      <p className="text-gray-500">
                        Quantity
                      </p>

                      <h3 className="text-2xl font-black text-gray-800">
                        {
                          product.qty
                        }
                      </h3>

                      <div className="mt-4 flex items-center justify-end gap-1 text-orange-600 font-black text-2xl">
                        
                        <IndianRupee
                          size={24}
                        />

                        {product.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* TIMELINE */}

          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7">
            
            <div className="flex items-center gap-4 mb-8">
              
              <div className="w-16 h-16 rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Clock3 size={34} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-800">
                  Order Timeline
                </h2>

                <p className="text-gray-500">
                  Order progress tracking
                </p>
              </div>
            </div>

            <div className="space-y-6">
              
              {timeline.map(
                (
                  item,
                  index
                ) => (
                  <div
                    key={index}
                    className="flex items-start gap-5"
                  >
                    
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        item.completed
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      <CheckCircle2
                        size={22}
                      />
                    </div>

                    <div>
                      
                      <h3 className="font-black text-lg text-gray-800">
                        {
                          item.title
                        }
                      </h3>

                      <p className="text-gray-500 mt-1">
                        {
                          item.time
                        }
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* ==========================================
            RIGHT SIDE
        ========================================== */}

        <div className="space-y-8">
          
          {/* PAYMENT */}

          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7">
            
            <div className="flex items-center gap-4 mb-7">
              
              <div className="w-16 h-16 rounded-3xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <CreditCard
                  size={34}
                />
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-800">
                  Payment
                </h2>

                <p className="text-gray-500">
                  Billing details
                </p>
              </div>
            </div>

            <div className="space-y-5">
              
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                
                <span className="text-gray-500">
                  Payment Method
                </span>

                <span className="font-black text-gray-800">
                  {
                    order.payment
                  }
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                
                <span className="text-gray-500">
                  Tracking ID
                </span>

                <span className="font-black text-gray-800">
                  {
                    order.tracking
                  }
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                
                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-black text-gray-800">
                  ₹
                  {order.subtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                
                <span className="text-gray-500">
                  Shipping
                </span>

                <span className="font-black text-green-600">
                  Free
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                
                <span className="text-gray-500">
                  Tax
                </span>

                <span className="font-black text-gray-800">
                  ₹
                  {order.tax.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between pt-3">
                
                <span className="text-xl font-black text-gray-800">
                  Total
                </span>

                <div className="flex items-center gap-1 text-3xl font-black text-orange-600">
                  
                  <CircleDollarSign
                    size={30}
                  />

                  ₹
                  {order.total.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* SHIPPING */}

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-7 text-white shadow-2xl">
            
            <div className="flex items-center gap-4 mb-7">
              
              <div className="w-16 h-16 rounded-3xl bg-orange-500 flex items-center justify-center">
                <Truck size={34} />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Shipping Status
                </h2>

                <p className="text-slate-300">
                  Delivery information
                </p>
              </div>
            </div>

            <div className="space-y-5">
              
              <div className="bg-white/10 rounded-2xl p-5">
                
                <p className="text-slate-300 text-sm">
                  Courier Partner
                </p>

                <h3 className="text-xl font-black mt-2">
                  BlueDart Express
                </h3>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                
                <p className="text-slate-300 text-sm">
                  Estimated Delivery
                </p>

                <h3 className="text-xl font-black mt-2">
                  Delivered Successfully
                </h3>
              </div>

              <div className="bg-green-500 rounded-2xl p-5 flex items-center gap-3">
                
                <CheckCircle2
                  size={28}
                />

                <div>
                  <h3 className="font-black text-lg">
                    Product Delivered
                  </h3>

                  <p className="text-sm opacity-90">
                    Customer received the order
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SUPPORT */}

          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-7 text-white shadow-2xl">
            
            <h2 className="text-3xl font-black">
              Need Help?
            </h2>

            <p className="mt-3 text-white/90 leading-relaxed">
              Contact customer support for order updates,
              refunds, or delivery assistance.
            </p>

            <button className="mt-6 bg-white text-orange-600 px-6 py-4 rounded-2xl font-black hover:scale-105 transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;