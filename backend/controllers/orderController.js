const Order = require("../models/Order");

// ✅ Create Order
exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      userId: req.user.id, // from JWT
      items: req.body.items,
      totalPrice: req.body.totalPrice,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// ✅ Get All Orders of Logged-in User
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// ✅ Get Single Order (ONLY OWNER)
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ msg: "Order not found" });

    // 🔒 OWNER CHECK
    if (order.userId.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Access denied" });
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// ✅ Update Order Status (ONLY OWNER)
exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ msg: "Order not found" });

    // 🔒 OWNER CHECK
    if (order.userId.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not allowed" });
    }

    order.status = req.body.status || order.status;

    const updated = await order.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// ✅ Delete Order (ONLY OWNER)
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ msg: "Order not found" });

    // 🔒 OWNER CHECK
    if (order.userId.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Cannot delete this order" });
    }

    await order.deleteOne();
    res.json({ msg: "Order deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};