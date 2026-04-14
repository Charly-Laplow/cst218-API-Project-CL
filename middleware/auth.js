/*

  This middleware checks for a token and, if valid,
  attaches user identity to the request object.

*/

const jwt = require("jsonwebtoken");

// Authentication check function
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  // Checks for header
  if (!authHeader) {
    return res.status(401).json({ error: "Missing Authorization header" });
  }

  const [type, token] = authHeader.split(" ");

  // Checks for "Bearer" and custom token
  if (type !== "Bearer" || !token) {
    return res
      .status(401)
      .json({ error: "Authorization header format should be: Bearer <token>" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Attaches identity to the request for later routes
    req.userId = payload.userId;
    req.email = payload.email;

    next();
  } 
  
  // Catch for any missing fields
  catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

// Exports the authentication
module.exports = { requireAuth };