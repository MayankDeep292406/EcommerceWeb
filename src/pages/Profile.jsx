// src/pages/Profile.jsx

import React, {
  useState,
  useContext,
} from "react";

import {
  AuthContext,
} from "../context/AuthContext";

import {
  User,
  MapPin,
  CreditCard,
  Globe,
  Shield,
  Star,
  MessageCircle,
  FileText,
  LogOut,
  Camera,
  Package,
} from "lucide-react";

function Profile() {
  const { user, logout } =
    useContext(AuthContext);

  const [profileImage, setProfileImage] =
    useState(
      localStorage.getItem(
        "profileImage"
      ) ||
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    );

  // IMAGE CHANGE
  const handleImageChange = (
    e
  ) => {
    const file =
      e.target.files[0];

    if (file) {
      const reader =
        new FileReader();

      reader.onloadend = () => {
        setProfileImage(
          reader.result
        );

        localStorage.setItem(
          "profileImage",
          reader.result
        );
      };

      reader.readAsDataURL(
        file
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* TOP PROFILE CARD */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-black h-44 relative">

            {/* PROFILE IMAGE */}
            <div className="absolute left-10 bottom-[-55px]">

              <div className="relative">

                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-xl"
                />

                <label className="absolute bottom-2 right-2 bg-yellow-400 p-2 rounded-full cursor-pointer hover:scale-110 transition">
                  <Camera size={18} />

                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={
                      handleImageChange
                    }
                  />
                </label>
              </div>
            </div>
          </div>

          {/* USER DETAILS */}
          <div className="pt-20 px-8 pb-10">

            <h1 className="text-4xl font-black text-gray-800">
              {user?.name ||
                "ShopNow User"}
            </h1>

            <p className="text-gray-500 mt-2">
              User ID :
              {" "}
              {user?._id ||
                "USR102938"}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">

              <div className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
                👤 Customer
              </div>

              <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
                ✅ Verified Account
              </div>

            </div>
          </div>
        </div>

        {/* OPTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {/* ADDRESS */}
          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition">
            <MapPin className="text-red-500 mb-4" size={34} />

            <h2 className="text-2xl font-bold">
              Saved Address
            </h2>

            <p className="text-gray-500 mt-2">
              Manage your delivery addresses.
            </p>
          </div>

          {/* ORDERS */}
          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition">
            <Package className="text-green-500 mb-4" size={34} />

            <h2 className="text-2xl font-bold">
              Orders
            </h2>

            <p className="text-gray-500 mt-2">
              View your order history and tracking.
            </p>
          </div>

          {/* CARDS */}
          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition">
            <CreditCard className="text-blue-500 mb-4" size={34} />

            <h2 className="text-2xl font-bold">
              Saved Cards
            </h2>

            <p className="text-gray-500 mt-2">
              Manage Debit/Credit cards.
            </p>
          </div>

          {/* LANGUAGE */}
          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition">
            <Globe className="text-purple-500 mb-4" size={34} />

            <h2 className="text-2xl font-bold">
              Select Language
            </h2>

            <p className="text-gray-500 mt-2">
              Choose your preferred language.
            </p>
          </div>

          {/* PRIVACY */}
          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition">
            <Shield className="text-cyan-500 mb-4" size={34} />

            <h2 className="text-2xl font-bold">
              Privacy Center
            </h2>

            <p className="text-gray-500 mt-2">
              Security, privacy and account settings.
            </p>
          </div>

          {/* REVIEWS */}
          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition">
            <Star className="text-yellow-500 mb-4" size={34} />

            <h2 className="text-2xl font-bold">
              Reviews
            </h2>

            <p className="text-gray-500 mt-2">
              Manage ratings and product reviews.
            </p>
          </div>

          {/* QUESTIONS */}
          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition">
            <MessageCircle className="text-pink-500 mb-4" size={34} />

            <h2 className="text-2xl font-bold">
              Questions & Answers
            </h2>

            <p className="text-gray-500 mt-2">
              View product questions and answers.
            </p>
          </div>

          {/* TERMS */}
          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition">
            <FileText className="text-orange-500 mb-4" size={34} />

            <h2 className="text-2xl font-bold">
              Terms & Policies
            </h2>

            <p className="text-gray-500 mt-2">
              Policies, licenses and FAQs.
            </p>
          </div>

          {/* LOGOUT */}
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white rounded-3xl shadow-lg p-6 text-left transition"
          >
            <LogOut
              className="mb-4"
              size={34}
            />

            <h2 className="text-2xl font-bold">
              Logout
            </h2>

            <p className="mt-2 text-red-100">
              Securely logout from your account.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;