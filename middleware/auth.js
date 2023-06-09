// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// export const isAuthenticated = async (req, res, next) => {
//   const { token } = req.cookies;

//   if (!token) {
//     return res.status(404).json({
//       success: false,
//       message: "Login First",
//     });
//   }

//   const decoded = jwt.verify(token, process.env.JWT_SECRET);

//   req.user = await User.findById(decoded._id);
//   next();
// };
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    console.log(req.header);
    const token = req.header("Authorization");
    console.log(token);

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
