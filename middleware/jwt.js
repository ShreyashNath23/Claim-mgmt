// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const SECRET_KEY = process.env.JWT_SECRET || "123456789";

// const authenticateJWT = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     return res.status(401).json({ error: "Unauthorized: No Token Provided" });
//   }

//   const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"
//   jwt.verify(token, SECRET_KEY, (err, user) => {
//     if (err) {
//       return res.status(403).json({ error: "Forbidden: Invalid Token" });
//     }
//     req.user = user; // Attach user data to request
//     next();
//   });
// };

// // Function to Generate a JWT Token (For Testing)
// const generateToken = () => {
//   const token = jwt.sign({ user: "admin" }, SECRET_KEY, { expiresIn: "1h" });
//   console.log("Generated JWT Token:", token);
// };

// // Export Middleware and Token Generator
// module.exports = { authenticateJWT, generateToken };
