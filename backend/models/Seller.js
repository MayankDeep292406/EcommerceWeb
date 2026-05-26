const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    storeName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    businessType: { type: String, default: "Individual" },
    gstNumber: { type: String, default: "" },
    panNumber: { type: String, default: "" },
    address: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    pincode: { type: String, default: "" },
    shopLogo: { type: String, default: "" },
    role: { type: String, default: "seller" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Seller", sellerSchema);
