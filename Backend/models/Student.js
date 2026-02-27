const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  isVerified: { type: Boolean, default: false },
  provider: {
    type: String,
    enum: ["local", "google"],
    default: "local"
  }
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);