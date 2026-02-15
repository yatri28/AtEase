import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 🔥 IMPORTANT: Make sure your token stores { id: user._id }
    req.user = { id: decoded.id };

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default verifyToken;
