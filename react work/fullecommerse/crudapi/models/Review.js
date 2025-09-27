const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  comment: String,
  createdAt: { type: Date, default: Date.now },
});

const ReviewModel = mongoose.model("Review", reviewSchema);
module.exports = ReviewModel;
