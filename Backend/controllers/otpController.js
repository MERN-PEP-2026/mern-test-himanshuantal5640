const otpService = require("../services/otpServices");

exports.sendOtp = async (req, res, next) => {
  try {
    await otpService.sendOtp(req.body.email);
    res.json({ message: "OTP Sent" });
  } catch (err) {
    next(err);
  }
};

exports.verifyOtp = async (req, res, next) => {
  try {
    const message = await otpService.verifyOtp(
      req.body.email,
      req.body.otp
    );
    res.json({ message });
  } catch (err) {
    next(err);
  }
};