// const jwt = require("jsonwebtoken");

// exports.protect = (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token)
//       return res.status(401).json({ message: "Unauthorized" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;

//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Invalid or Expired Token" });
//   }
// };

const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not authorized" });
    }
    
    const token = authHeader.split(" ")[1];
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = decoded.id;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid" });
  }
};

exports.errorHandler = (err, req, res, next) => {
  res.status(400).json({
    success: false,
    message: err.message
  });
};