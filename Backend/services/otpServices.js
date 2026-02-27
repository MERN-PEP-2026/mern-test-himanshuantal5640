const Otp = require("../models/Otp");
const generateOtp = require("../utils/generateOtp");
const transporter = require("../config/mailer");
const Student = require("../models/Student");

exports.sendOtp = async (email) => {
  const otp = generateOtp();

  await Otp.deleteMany({ email });

  await Otp.create({
    email,
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000
  });

  await transporter.sendMail({
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}`
  });
};

exports.verifyOtp = async (email, otp) => {
  const record = await Otp.findOne({ email, otp });

  if (!record) throw new Error("Invalid OTP");
  if (record.expiresAt < Date.now())
    throw new Error("OTP Expired");

  await Otp.deleteMany({ email });

  await Student.updateOne({ email }, { isVerified: true });

  return "OTP Verified";
};