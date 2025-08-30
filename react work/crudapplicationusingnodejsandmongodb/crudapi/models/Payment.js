const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new Schema({
  orderId: { type: String, required: true },
  payment_id: { type: String },
  razorpay_order_id: { type: String },
  razorpay_signature: { type: String },
  status: { type: String,  enum: ["created", "paid", "failed", "completed"],  default: "created" },
  amount: { type: Number, required: true },
  payment_method: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const PaymentModel = mongoose.model("Payment", paymentSchema);
module.exports = PaymentModel;
