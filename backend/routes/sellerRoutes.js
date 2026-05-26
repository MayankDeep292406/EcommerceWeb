// routes/sellerRoutes.js

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Seller = require("../models/Seller");
const upload = require("../middleware/upload");

const router = express.Router();

// ✅ SELLER LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // CHECK SELLER
    const seller = await Seller.findOne({ email });

    if (!seller) {
      return res.status(400).json({
        message: "Seller not found",
      });
    }

    // CHECK PASSWORD
    const isMatch = await bcrypt.compare(
      password,
      seller.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // TOKEN
    const token = jwt.sign(
      {
        id: seller._id,
        role: "seller",
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      seller: {
        id: seller._id,
        name: seller.name,
        email: seller.email,
      },
    });

  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// ✅ SELLER REGISTER
router.post("/register", upload.single("shopLogo"), async (req, res) => {
  try {
    const { fullName, storeName, email, mobile, password, businessType, gstNumber, panNumber, address, city, state, pincode } = req.body;

    const existing = await Seller.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const shopLogo = req.file ? req.file.filename : "";

    const seller = await Seller.create({
      fullName, storeName, email, mobile,
      password: hashedPassword,
      businessType, gstNumber, panNumber,
      address, city, state, pincode, shopLogo,
    });

    res.status(201).json({ message: "Seller registered successfully", seller });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

module.exports = router;