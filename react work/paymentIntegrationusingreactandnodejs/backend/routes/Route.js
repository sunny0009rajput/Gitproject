import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";
import Payment from "../models/Payment.js"; // Adjust the import path as necessary
dotenv.config();

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

console.log("KEY_ID:", process.env.RAZORPAY_KEY_ID);
console.log("KEY_SECRET:", process.env.RAZORPAY_SECRET_KEY);

// create a order api using post method
router.post("/create-order", async (req, res) => {
  const { amount } = req.body;
  try {
    const options = {
      amount: Number(amount) * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({ message: "Order created successfully", order });
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
    // Log the error for debugging purposes
    console.error("Error creating order:", error);
  }
});

// verify payment signature
router.post("/verify-payment", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
    const order = await razorpay.orders.fetch(razorpay_order_id);

  try {
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");
    const isAuthenticated = generatedSignature === razorpay_signature;
    if (isAuthenticated) {
      const paymentDetails = new Payment({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        amount: order.amount / 100,
        currency: "INR",
        status: "completed",
      });

      // save payment
      try{
        await paymentDetails.save();
      console.log("Payment details saved successfully:", paymentDetails);
      res
        .status(200)
        .json({ message: "Payment verified successfully", paymentDetails });
      }catch (error) {
        console.error("Error saving payment details:", error);
        res.status(500).json({ error: "Failed to save payment details" });
      }

      
    } else {
      res.status(400).json({ error: "Payment verification failed" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
