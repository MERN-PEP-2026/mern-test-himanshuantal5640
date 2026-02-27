const express = require("express");
const passport = require("passport");
const controller = require("../controllers/googleAuthController");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  controller.googleSuccess
);

module.exports = router;