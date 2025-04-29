// middleware/auth.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token)
    return res.status(401).json({ message: 'Access denied. Token missing' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({ message: 'Invalid token' });

    req.user = user; // Attach decoded payload to request
    next();
  });
}

module.exports = authenticateToken;
