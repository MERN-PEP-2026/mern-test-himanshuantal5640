const express = require("express");
const cors = require("cors");
const passport = require("./config/passport");
const { errorHandler } = require("./middleware/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const otpRoutes = require("./routes/otpRoutes");
const googleAuthRoutes = require("./routes/googleAuthRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(cors({
   origin: "http://localhost:5173", 
   credentials: true 
}));
app.use(express.json());
app.use(passport.initialize());

app.use("/api/auth", authRoutes);
app.use("/api/otp",otpRoutes);
app.use("/api/auth",googleAuthRoutes);
app.use("/api/courses", courseRoutes);

app.use(errorHandler);

module.exports = app;