const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const dotenv = require("dotenv");
const Payment = require("../models/Payment.js");
const User = require("../models/Users"); // Adjust the import path as necessary
dotenv.config();
const mongoose = require("mongoose");
const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

console.log("KEY_ID:", process.env.RAZORPAY_KEY_ID);
console.log("KEY_SECRET:", process.env.RAZORPAY_SECRET_KEY);

// create a order api using post method
// backend (Express)
router.post("/create-order", async (req, res) => {
  try {
    let { amount, orderId } = req.body;

    if (!amount || !orderId) 
      return res.status(400).json({ error: "Missing fields" });

    amount = Math.round(Number(amount)); // ensure integer

    const options = { amount, currency: "INR", receipt: orderId };
    console.log("Creating Razorpay order:", options);

    const order = await razorpay.orders.create(options);
    console.log("Razorpay order created:", order);

    res.json({ order, key: process.env.RAZORPAY_KEY_ID });
  } catch (err) {
    console.error("create-order error:", err);
    res.status(500).json({ error: err.message || "Failed to create order" });
  }
});


// verify payment signature
router.post("/verify-payment", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  try {
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({ error: "Invalid signature" });
    }

    // Fetch Razorpay order to get receipt (your custom orderId)
    const razorOrder = await razorpay.orders.fetch(razorpay_order_id);
    const customOrderId = razorOrder.receipt;
    const { customerId, billingInfo, courseId } = req.body;
    const payment = new Payment({
      orderId: customOrderId, // your custom orderId string
      customerId, // ← ADD THIS
      payment_id: razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      amount: razorOrder.amount / 100,
      status: "paid",
      payment_method: "ONLINE",
      billingInfo, // optional, saves name/email/phone
      courseId, // optional, track which course
    });

    await payment.save();

    if (!customerId || !courseId) {
      return res.status(400).json({ error: "Missing customerId or courseId" });
    }
    console.log("customerId:", customerId, "courseId:", courseId);
    // ✅ Add purchased course to user
    // Add purchased course to user
    if (customerId && courseId) {
      await User.findByIdAndUpdate(customerId, {
        $addToSet: { purchasedCourses: courseId },
      });
    }
    // ✅ 2. Update your Order document in DB
    const Order = require("../models/Order"); // adjust path
    await Order.findOneAndUpdate(
      { orderId: customOrderId }, // match your order
      {
        $set: {
          Order_status: "Order Placed", // update status
          payment_verified: true, // mark verified
          payment_method: "ONLINE",
        },
      },
      { new: true }
    );

    return res.json({ message: "Payment verified successfully", payment });
  } catch (err) {
    console.error("verify-payment error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/check-payment", async (req, res) => {
  const { customerId } = req.body;

  if (!customerId) return res.status(400).json({ verified: false });

  try {
    const payment = await Payment.findOne({
      customerId, // check by logged-in customer's ID
      status: "paid",
    });

    if (payment) {
      return res.json({ verified: true });
    } else {
      return res.json({ verified: false });
    }
  } catch (err) {
    console.error("check-payment error:", err);
    return res.status(500).json({ verified: false });
  }
});

module.exports = router;
