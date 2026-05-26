// src/seller/pages/Settings.jsx

import React, {
  useState,
} from "react";

import {
  Store,
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Bell,
  Shield,
  Globe,
  CreditCard,
  Camera,
  Save,
  CheckCircle2,
  Smartphone,
  Moon,
  Sun,
  Upload,
} from "lucide-react";

function Settings() {
  /* ==========================================
     STATES
  ========================================== */

  const [darkMode,
    setDarkMode] =
    useState(false);

  const [notifications,
    setNotifications] =
    useState(true);

  const [twoFactor,
    setTwoFactor] =
    useState(false);

  const [formData,
    setFormData] =
    useState({
      storeName:
        "Luxury Furniture Store",

      ownerName:
        "Mayank Deep",

      email:
        "seller@gmail.com",

      phone:
        "+91 9876543210",

      address:
        "Jamshedpur, Jharkhand, India",

      gst:
        "22ABCDE1234F1Z5",

      website:
        "www.furniturestore.com",

      bank:
        "State Bank of India",

      upi:
        "seller@upi",
    });

  /* ==========================================
     HANDLE CHANGE
  ========================================== */

  const handleChange =
    (e) => {
      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      });
    };

  /* ==========================================
     SAVE
  ========================================== */

  const handleSave =
    () => {
      alert(
        "Settings Saved Successfully ✅"
      );
    };

  return (
    <div className="space-y-8">
      
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
        
        <div>
          <h1 className="text-4xl font-black text-gray-800">
            Seller Settings
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Manage store information, security, payments, and preferences
          </p>
        </div>

        {/* SAVE BUTTON */}

        <button
          onClick={
            handleSave
          }
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-3xl font-black text-lg shadow-xl hover:scale-105 transition-all flex items-center gap-3"
        >
          <Save size={24} />
          Save Changes
        </button>
      </div>

      {/* ==========================================
          PROFILE CARD
      ========================================== */}

      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white shadow-2xl">
        
        <div className="flex flex-col xl:flex-row xl:items-center gap-8">
          
          {/* IMAGE */}

          <div className="relative">
            
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Seller"
              className="w-36 h-36 rounded-3xl object-cover border-4 border-white"
            />

            <button className="absolute -bottom-2 -right-2 bg-white text-orange-600 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl">
              
              <Camera
                size={22}
              />
            </button>
          </div>

          {/* INFO */}

          <div className="flex-1">
            
            <h2 className="text-4xl font-black">
              {
                formData.ownerName
              }
            </h2>

            <p className="text-xl opacity-90 mt-2">
              Owner of {
                formData.storeName
              }
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              
              <div className="bg-white/20 px-5 py-3 rounded-2xl font-bold">
                Premium Seller
              </div>

              <div className="bg-green-500 px-5 py-3 rounded-2xl font-bold flex items-center gap-2">
                
                <CheckCircle2
                  size={20}
                />

                Verified Store
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          SETTINGS GRID
      ========================================== */}

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* ==========================================
            STORE INFO
        ========================================== */}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7">
          
          <div className="flex items-center gap-4 mb-8">
            
            <div className="w-16 h-16 rounded-3xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Store size={34} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-800">
                Store Information
              </h2>

              <p className="text-gray-500">
                Update furniture shop details
              </p>
            </div>
          </div>

          <div className="space-y-5">
            
            {/* STORE NAME */}

            <div>
              <label className="font-bold text-gray-700">
                Store Name
              </label>

              <div className="relative mt-2">
                
                <Store
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  name="storeName"
                  value={
                    formData.storeName
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {/* OWNER */}

            <div>
              <label className="font-bold text-gray-700">
                Owner Name
              </label>

              <div className="relative mt-2">
                
                <User
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  name="ownerName"
                  value={
                    formData.ownerName
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {/* EMAIL */}

            <div>
              <label className="font-bold text-gray-700">
                Email Address
              </label>

              <div className="relative mt-2">
                
                <Mail
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                  name="email"
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {/* PHONE */}

            <div>
              <label className="font-bold text-gray-700">
                Phone Number
              </label>

              <div className="relative mt-2">
                
                <Phone
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  name="phone"
                  value={
                    formData.phone
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {/* ADDRESS */}

            <div>
              <label className="font-bold text-gray-700">
                Store Address
              </label>

              <div className="relative mt-2">
                
                <MapPin
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <textarea
                  rows="4"
                  name="address"
                  value={
                    formData.address
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500 resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            BUSINESS INFO
        ========================================== */}

        <div className="space-y-8">
          
          {/* PAYMENT */}

          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7">
            
            <div className="flex items-center gap-4 mb-8">
              
              <div className="w-16 h-16 rounded-3xl bg-green-100 text-green-600 flex items-center justify-center">
                <CreditCard
                  size={34}
                />
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-800">
                  Payment Details
                </h2>

                <p className="text-gray-500">
                  Bank and UPI information
                </p>
              </div>
            </div>

            <div className="space-y-5">
              
              {/* BANK */}

              <div>
                <label className="font-bold text-gray-700">
                  Bank Name
                </label>

                <input
                  type="text"
                  name="bank"
                  value={
                    formData.bank
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full border border-gray-300 rounded-2xl px-4 py-4 mt-2 outline-none focus:border-orange-500"
                />
              </div>

              {/* UPI */}

              <div>
                <label className="font-bold text-gray-700">
                  UPI ID
                </label>

                <div className="relative mt-2">
                  
                  <Smartphone
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    name="upi"
                    value={
                      formData.upi
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* GST */}

              <div>
                <label className="font-bold text-gray-700">
                  GST Number
                </label>

                <input
                  type="text"
                  name="gst"
                  value={
                    formData.gst
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full border border-gray-300 rounded-2xl px-4 py-4 mt-2 outline-none focus:border-orange-500"
                />
              </div>

              {/* WEBSITE */}

              <div>
                <label className="font-bold text-gray-700">
                  Website
                </label>

                <div className="relative mt-2">
                  
                  <Globe
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    name="website"
                    value={
                      formData.website
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECURITY */}

          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7">
            
            <div className="flex items-center gap-4 mb-8">
              
              <div className="w-16 h-16 rounded-3xl bg-red-100 text-red-600 flex items-center justify-center">
                <Shield size={34} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-800">
                  Security & Preferences
                </h2>

                <p className="text-gray-500">
                  Manage account protection
                </p>
              </div>
            </div>

            <div className="space-y-6">
              
              {/* PASSWORD */}

              <button className="w-full flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-5 hover:bg-gray-50 transition-all">
                
                <div className="flex items-center gap-4">
                  
                  <Lock
                    className="text-orange-600"
                    size={24}
                  />

                  <div className="text-left">
                    
                    <h3 className="font-black text-gray-800">
                      Change Password
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Update your account password
                    </p>
                  </div>
                </div>

                <Upload
                  size={20}
                  className="text-gray-400"
                />
              </button>

              {/* NOTIFICATIONS */}

              <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-5">
                
                <div className="flex items-center gap-4">
                  
                  <Bell
                    className="text-blue-600"
                    size={24}
                  />

                  <div>
                    
                    <h3 className="font-black text-gray-800">
                      Notifications
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Receive seller alerts
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    setNotifications(
                      !notifications
                    )
                  }
                  className={`w-16 h-9 rounded-full transition-all ${
                    notifications
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-7 h-7 bg-white rounded-full shadow-md transform transition-all ${
                      notifications
                        ? "translate-x-8"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* 2FA */}

              <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-5">
                
                <div className="flex items-center gap-4">
                  
                  <Shield
                    className="text-green-600"
                    size={24}
                  />

                  <div>
                    
                    <h3 className="font-black text-gray-800">
                      Two Factor Authentication
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Extra account security
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    setTwoFactor(
                      !twoFactor
                    )
                  }
                  className={`w-16 h-9 rounded-full transition-all ${
                    twoFactor
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-7 h-7 bg-white rounded-full shadow-md transform transition-all ${
                      twoFactor
                        ? "translate-x-8"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* DARK MODE */}

              <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-5">
                
                <div className="flex items-center gap-4">
                  
                  {darkMode ? (
                    <Moon
                      className="text-indigo-600"
                      size={24}
                    />
                  ) : (
                    <Sun
                      className="text-yellow-500"
                      size={24}
                    />
                  )}

                  <div>
                    
                    <h3 className="font-black text-gray-800">
                      Dark Mode
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Switch dashboard appearance
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    setDarkMode(
                      !darkMode
                    )
                  }
                  className={`w-16 h-9 rounded-full transition-all ${
                    darkMode
                      ? "bg-indigo-500"
                      : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-7 h-7 bg-white rounded-full shadow-md transform transition-all ${
                      darkMode
                        ? "translate-x-8"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
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
                <Shield size={34} />
              </div>

              <h2 className="text-3xl font-black">
                Secure Seller Dashboard
              </h2>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed">
              Keep your furniture store secure with advanced
              account protection, verified payment settings,
              and smart business management tools.
            </p>
          </div>

          <button
            onClick={
              handleSave
            }
            className="bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 rounded-2xl text-lg font-black hover:scale-105 transition-all shadow-xl"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;