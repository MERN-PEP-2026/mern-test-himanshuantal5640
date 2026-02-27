const Student = require("../models/Student");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.register = async (name, email, password) => {
  const existing = await Student.findOne({ email });
  if (existing) throw new Error("Email already exists");

  const hashed = await bcrypt.hash(password, 10);

  return await Student.create({
    name,
    email,
    password: hashed
  });
};

exports.login = async (email, password) => {
  const user = await Student.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  if (!user.isVerified)
    throw new Error("Please verify email first");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  return generateToken(user._id);
};

exports.resetPassword = async (email, newPassword) => {
  const user = await Student.findOne({ email });
  if (!user) throw new Error("User not found");

  const hashed = await bcrypt.hash(newPassword, 10);

  user.password = hashed;
  await user.save();

  return "Password updated successfully";
};