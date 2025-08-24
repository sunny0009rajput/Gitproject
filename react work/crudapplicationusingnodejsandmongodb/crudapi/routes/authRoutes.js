const express = require('express');
const Admin = require('../models/Admin');
const { auth, signToken, getCookieOptions } = require('../middleware/auth');
const resetPasswordConfirmation = require('../resetpasswordmail');
const crypto = require("crypto");

const router = express.Router();

// POST /auth/login
router.post('/adminlogin', async (req, res) => {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) return res.status(400).json({ message: 'Missing fields' });

    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

    const ok = await admin.validatePassword(password);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

    const token = signToken({ id: admin._id, username: admin.username, role: admin.role });
    res.cookie('token', token, getCookieOptions());
    return res.json({ user: { id: admin._id, username: admin.username, role: admin.role } });
  } catch (e) {
    return res.status(500).json({ message: 'Login failed' });
  }
});

// POST /auth/logout
router.post('/adminlogout', (req, res) => {
  res.clearCookie('token', { ...getCookieOptions(), maxAge: 0 });
  res.json({ message: 'Logged out' });
});

// GET /auth/me
router.get('/adminme', auth, async (req, res) => {
  // You can fetch from DB if needed; using token payload is fine for basic info
  res.json({ user: { id: req.user.id, username: req.user.username, role: req.user.role } });
});


// ------------------ Forgot Password ------------------
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(404).json({ message: 'User not found' });

  const resetToken = admin.generateResetToken();
  await admin.save({ validateBeforeSave: false });

  // create reset URL (frontend page)
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  try {
   // send confirmation email
    await resetPasswordConfirmation(admin.email,admin.username,resetUrl);


    res.json({ message: 'Password reset link sent to email' });
  } catch (err) {
    admin.resetPasswordToken = undefined;
    admin.resetPasswordExpires = undefined;
    await admin.save({ validateBeforeSave: false });
    res.status(500).json({ message: 'Email could not be sent' });
  }
});

// ------------------ Reset Password ------------------
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password, confirmPassword } = req.body;

  if (!password || !confirmPassword) return res.status(400).json({ message: 'Please provide new password and confirm it' });
  if (password !== confirmPassword) return res.status(400).json({ message: 'Passwords do not match' });

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const admin = await Admin.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!admin) return res.status(400).json({ message: 'Token is invalid or expired' });

  await admin.setPassword(password);
  admin.resetPasswordToken = undefined;
  admin.resetPasswordExpires = undefined;
  await admin.save();

  // ✅ Clear auth cookie if you were using JWT cookies
  res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "Strict" });

  res.json({ message: 'Password reset successful' });
});

module.exports = router;

