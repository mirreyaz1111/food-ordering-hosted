const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");

exports.authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      errorMessage: "No token. Authentication denied",
    });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    console.log(decoded);
    req.user = decoded.user;

    next();
  } catch (err) {
    console.log("jwt error: ", err);
    res.status(401).json({
      errorMessage: "Invalid token",
    });
  }
};
