const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  user : { type: mongoose.Schema.Types.ObjectId, ref : "User", required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true, min: 1 },
    }
  ],
    orderId: { type: String, required: true },
    
    Order_status: { type: String, default: "Pending" },
    order_date: { type: Date, default: Date.now },
    payment_method: { type: String, required: true },
    total_amount: { type: Number, required: true },
    delivery_date: { type: Date, required: false },
    delivey_charges: { type: Number, required: false },
    hidden_charges: { type: Number, required: false },
    payment_verified: { type: Boolean, default: false },
});
const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;
