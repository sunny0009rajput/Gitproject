const jwt = require('jsonwebtoken');

function getCookieOptions() {
  const isProd = process.env.NODE_ENV === 'production';
  return {
    httpOnly: true,
    secure: isProd,          // true on HTTPS in prod
    sameSite: isProd ? 'none' : 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
  };
}

const signToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES || '7d' });

const auth = (req, res, next) => {
  const token = req.cookies?.token;

  // Also check for Authorization header
  if (!token && req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, username, role }
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid/Expired token' });
  }
};

const requireAdmin = (req, res, next) => {
    
  if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
  next();
  
};


module.exports = { auth, requireAdmin, signToken, getCookieOptions };
