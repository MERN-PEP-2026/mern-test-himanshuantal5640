const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isVerified: { type: Boolean, default: false },
  provider: {
    type: String,
    enum: ["local", "google"],
    default: "local"
  }
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);