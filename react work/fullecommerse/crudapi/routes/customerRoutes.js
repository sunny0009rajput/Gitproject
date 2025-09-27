const express = require("express");

const { customerAuth, signToken, getCookieOptions } = require("../middleware/customerAuth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/Users"); 
const resetPasswordMailCustomer= require("../resetPasswordMailcustomer");
const crypto = require("crypto");

const router = express.Router();


// 👉 Signup (Register customer)
router.post("/signup", async (req, res) => {
  try {
    const { customer_name, email, password, confirmPassword, customer_phone } = req.body;

    if (!customer_name || !email || !password || !confirmPassword || !customer_phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      customer_name,
      email,
      passwordHash: hashedPassword,
      customer_phone
    });

    await newUser.save();

    res.status(201).json({ message: "Signup successful", customerId: newUser._id });
  } catch (error) {
    res.status(500).json({ message: "Error during signup", error: error.message });
  }
});

// 👉 Login (customer login)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const customer = await User.findOne({ email });
    if (!customer) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, customer.passwordHash);
    if (!isMatch) return res.status(400).json({ message: "User not found or wrong password" });

    // ✅ use shared helper
    const token = signToken({ id: customer._id, email: customer.email, role: "customer" });

    res.cookie("customerToken", token, getCookieOptions());
    res.json({
      message: "Login successful",
      user: { id: customer._id, email: customer.email, role: "customer", customer_name: customer.customer_name },
      token
    });
  } catch (error) {
    res.status(500).json({ message: "Error during login", error: error.message });
  }
});


// 👉 Get customer profile (requires auth)
router.get("/customerme", customerAuth, async (req, res) => {
  try {
    res.set("Cache-Control", "no-store");
    const customer = await User.findById(req.user.id).select("-passwordHash");
    if (!customer) return res.status(404).json({ message: "Customer not found" });

    res.json({ user: customer });
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error: error.message });
  }
});

// POST /auth/logout
router.post('/customerlogout', (req, res) => {
  res.clearCookie('customerToken', { ...getCookieOptions(), maxAge: 0 });
  res.json({ message: 'Logged out' });
});


/**
 * Forgot Password (Customer)
 */
router.post("/forgot-password", async (req, res) => {
  
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  const customer = await User.findOne({ email });
  if (!customer) return res.status(404).json({ message: "User not found" });

  const resetToken = customer.generateResetToken();
  await customer.save({ validateBeforeSave: false });

  const resetUrl = `${process.env.FRONTEND_URL_CUSTOMER}/reset-password/${resetToken}`;

  try {
    await resetPasswordMailCustomer(customer.email, customer.customer_name, resetUrl);

    res.json({ message: "Password reset link sent to email" });
  } catch (err) {
    customer.resetPasswordToken = undefined;
    customer.resetPasswordExpires = undefined;
    await customer.save({ validateBeforeSave: false });
    res.status(500).json({ message: "Email could not be sent" });
  }
});

/**
 * Reset Password (Customer)
 */
router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password, confirmPassword } = req.body;

  if (!password || !confirmPassword) {
    return res.status(400).json({ message: "Please provide new password and confirm it" });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  console.log("Incoming token:", token);
console.log("Hashed token:", hashedToken);
  const customer = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!customer) {
    return res.status(400).json({ message: "Token is invalid or expired" });
  }
  console.log("Customer found:", customer);

 // hash the new password
const salt = await bcrypt.genSalt(10);
customer.passwordHash = await bcrypt.hash(password, salt);

// clear reset fields
customer.resetPasswordToken = undefined;
customer.resetPasswordExpires = undefined;

await customer.save();
 // ✅ Clear old cookie so user is forced to log in again
  res.clearCookie("customerToken", { ...getCookieOptions(), maxAge: 0 });

  res.json({ message: "Password reset successful" });
});

// address rotes
// 👉 Get all addresses
router.get("/addresses", customerAuth, async (req, res) => {
  try {
    const customer = await User.findById(req.user.id).select("address");
    res.json(customer.address);
  } catch (err) {
    res.status(500).json({ message: "Error fetching addresses" });
  }
});

// 👉 Add new address
router.post("/addresses", customerAuth, async (req, res) => {
  try {
    const { street, city, state, postalCode, country } = req.body;
    const customer = await User.findById(req.user.id);

    // First address → set as default
    const isDefault = customer.address.length === 0;

    customer.address.push({ street, city, state, postalCode, country, isDefault });
    await customer.save();

    res.json({ message: "Address added", addresses: customer.address });
  } catch (err) {
    res.status(500).json({ message: "Error adding address" });
  }
});

// 👉 Update address
router.put("/addresses/:id", customerAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { street, city, state, postalCode, country } = req.body;

    const customer = await User.findById(req.user.id);
    const addr = customer.address.id(id);
    if (!addr) return res.status(404).json({ message: "Address not found" });

    addr.street = street;
    addr.city = city;
    addr.state = state;
    addr.postalCode = postalCode;
    addr.country = country;

    await customer.save();
    res.json({ message: "Address updated", addresses: customer.address });
  } catch (err) {
    res.status(500).json({ message: "Error updating address" });
  }
});

// 👉 Delete address
router.delete("/addresses/:id", customerAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await User.findById(req.user.id);

    customer.address = customer.address.filter(a => a._id.toString() !== id);

    // if deleted default → set first as default
    if (!customer.address.some(a => a.isDefault) && customer.address.length > 0) {
      customer.address[0].isDefault = true;
    }

    await customer.save();
    res.json({ message: "Address deleted", addresses: customer.address });
  } catch (err) {
    res.status(500).json({ message: "Error deleting address" });
  }
});

// 👉 Set default address
router.put("/addresses/:id/default", customerAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await User.findById(req.user.id);

    customer.address.forEach(addr => {
      addr.isDefault = addr._id.toString() === id;
    });

    await customer.save();
    res.json({ message: "Default address set", addresses: customer.address });
  } catch (err) {
    res.status(500).json({ message: "Error setting default address" });
  }
});

// GET all users (Admin panel)
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-passwordHash"); // exclude password
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
});


module.exports = router;