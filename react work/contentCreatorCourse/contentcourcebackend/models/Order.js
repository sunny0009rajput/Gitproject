const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  orderId: { type: String, required: true, unique: true },
  courseId: { type: String, required: true },
  userEmail: { type: String, required: true },
  Order_status: { type: String, default: "Pending" },
  payment_verified: { type: Boolean, default: false },
  payment_method: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;
