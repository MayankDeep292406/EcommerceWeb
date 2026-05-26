// routes/admin.js
const express = require("express");
const { protect, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.get("/admin-dashboard", protect, authorizeRoles("admin"), (req, res) => {
  res.json({ msg: "Welcome Admin" });
});

router.get("/seller-dashboard", protect, authorizeRoles("seller"), (req, res) => {
  res.json({ msg: "Welcome Seller" });
});

module.exports = router;
