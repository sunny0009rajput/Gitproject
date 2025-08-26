const mongoose = require("mongoose");
const { Schema } = mongoose;

const wishlistSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }
  ],
});

const WishlistModel = mongoose.model("Wishlist", wishlistSchema);
module.exports = WishlistModel;
