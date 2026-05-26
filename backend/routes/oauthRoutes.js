const express = require("express");
const router = express.Router();
const passport = require("passport");

// 🔵 GOOGLE
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    res.redirect("http://localhost:5173/oauth-success");
  }
);

// 🔵 FACEBOOK
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

// 🔵 TWITTER
router.get(
  "/twitter",
  passport.authenticate("twitter")
);

module.exports = router;