const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product"},
      size: String,
      color: String,
      quantity: { type: Number, default: 1 },
    }
  ],
  
});

const CartModel = mongoose.model("Cart", cartSchema);
module.exports = CartModel;
