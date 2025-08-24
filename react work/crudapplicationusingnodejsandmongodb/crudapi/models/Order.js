const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  customer_name: { type: String, required: true },
    orderId: { type: String, required: true },
    customer_email: { type: String, required: true },
    customer_phone: { type: String, required: true },
    customer_address : {
        state : { type: String, required: true },
        city : { type: String, required: true },
        street : { type: String, required: true },
        zip : { type: String, required: true },
    },
    product_details: {
        product_name: { type: String, required: true },
        product_price: { type: Number, required: true },
        product_quantity: { type: Number, required: true },
        product_size: { type: String, required: false },
        product_color: { type: String, required: true },
        product_category: { type: String, required: false },
        product_subcategory: { type: String, required: false },

    },
    Order_status: { type: String, default: "Pending" },
    order_date: { type: Date, default: Date.now },
    payment_method: { type: String, required: true },
    total_amount: { type: Number, required: true },
    delivery_date: { type: Date, required: false },
    delivey_charges: { type: Number, required: false },
    hidden_charges: { type: Number, required: false },
    payment_verified: { type: Boolean, default: false },
});
const OrderModel = mongoose.model("orders", orderSchema);
module.exports = OrderModel;
