const User = require("../models/User");

// ✅ Get All Users (Admin)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// ✅ Delete User (Admin)
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    await user.deleteOne();
    res.json({ msg: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// ✅ Update User Role (Admin)
exports.updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    const allowed = ["user", "seller", "admin"];

    if (!allowed.includes(role)) {
      return res.status(400).json({ msg: "Invalid role" });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select("-password");

    if (!user) return res.status(404).json({ msg: "User not found" });

    res.json({ msg: "Role updated", user });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
