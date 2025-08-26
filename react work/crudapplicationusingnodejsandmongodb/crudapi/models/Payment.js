const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  payment_id: { type: String },
  razorpay_order_id: { type: String },
  razorpay_signature: { type: String },
  status: { type: String, enum: ["Pending", "Success", "Failed"], default: "Pending" },
  amount: { type: Number, required: true },
  payment_method: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const PaymentModel = mongoose.model("Payment", paymentSchema);
module.exports = PaymentModel;
