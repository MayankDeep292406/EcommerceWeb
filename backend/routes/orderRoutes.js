const express = require("express");
const {
  createOrder,
  getOrderById,
  getUserOrders,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/orderController");

const { protect } = require("../middleware/auth");

const router = express.Router();

// ✅ Create Order (only logged-in user)
router.post("/", protect, createOrder);

// ✅ Get logged-in user's orders
router.get("/my-orders", protect, getUserOrders);

// ✅ Get single order (only owner)
router.get("/:id", protect, getOrderById);

// ✅ Update order (only owner)
router.put("/:id/status", protect, updateOrderStatus);

// ✅ Delete order (only owner)
router.delete("/:id", protect, deleteOrder);

module.exports = router;