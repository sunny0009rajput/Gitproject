const express = require('express');
const  Razorpay=  require('razorpay');
const crypto= require('crypto');
const dotenv= require('dotenv');
const Payment= require('../models/Payment.js'); // Adjust the import path as necessary
dotenv.config();

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
    const { amount, orderId } = req.body;
    if (!amount || !orderId) return res.status(400).json({ error: "Missing fields" });

    const options = {
      amount: amount * 100,   // in paise
      currency: "INR",
      receipt: orderId,       // attach your custom orderId here
    };

    const order = await razorpay.orders.create(options);

    res.json({
      order,
      key: process.env.RAZORPAY_KEY_ID, // send public key to frontend
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to create order" });
  }
});


// verify payment signature
router.post("/verify-payment", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

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

    const payment = new Payment({
      orderId: customOrderId,  // your custom orderId string
      payment_id: razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      amount: razorOrder.amount / 100,
      status: "paid",
      payment_method: "ONLINE",
    });

    await payment.save();

    // ✅ 2. Update your Order document in DB
    const Order = require("../models/Order"); // adjust path
    await Order.findOneAndUpdate(
      { orderId: customOrderId }, // match your order
      {
        $set: {
          Order_status: "Order Placed", // update status
          payment_verified: true,       // mark verified
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


module.exports = router;