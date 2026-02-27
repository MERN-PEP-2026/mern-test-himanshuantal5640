const Student = require("../models/Student");
const generateToken = require("../utils/generateToken");

exports.handleGoogleLogin = async (profile) => {
  const email = profile.emails[0].value;

  let user = await Student.findOne({ email });

  if (!user) {
    user = await Student.create({
      name: profile.displayName,
      email,
      provider: "google",
      isVerified: true
    });
  }

  return generateToken(user._id);
};