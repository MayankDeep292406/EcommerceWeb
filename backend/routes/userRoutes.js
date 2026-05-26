const express = require("express");
const {
  getAllUsers,
  deleteUser,
  updateUserRole,
} = require("../controllers/userController");

const { protect, authorizeRoles } = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = express.Router();

/* ===============================
   👤 USER ROUTES
================================ */

// ✅ Get logged-in user profile
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "User profile",
    user: req.user,
  });
});

// ✅ Upload profile photo
router.post(
  "/upload-photo",
  protect,
  upload.single("photo"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    res.json({
      message: "Photo uploaded successfully",
      file: req.file,
      url: fileUrl,
    });
  }
);

/* ===============================
   🧑‍💼 ADMIN ROUTES (PROTECTED)
================================ */

// ✅ Admin dashboard
router.get(
  "/admin/dashboard",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin!" });
  }
);

// ✅ Get all users
router.get("/", protect, authorizeRoles("admin"), getAllUsers);

// ✅ Delete user
router.delete("/:id", protect, authorizeRoles("admin"), deleteUser);

// ✅ Update user role
router.put("/:id/role", protect, authorizeRoles("admin"), updateUserRole);

module.exports = router;