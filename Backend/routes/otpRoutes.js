const express = require("express");
const otpService = require("../services/otpService");

const router = express.Router();

router.post("/send", async (req, res, next) => {
  try {
    await otpService.sendOtp(req.body.email);
    res.json({ message: "OTP Sent" });
  } catch (err) {
    next(err);
  }
});

router.post("/verify", async (req, res, next) => {
  try {
    await otpService.verifyOtp(req.body.email, req.body.otp);
    res.json({ message: "OTP Verified" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;