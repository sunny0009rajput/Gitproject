const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // e.g., "order"
  seq: { type: Number, default: 0 },
});

module.exports = mongoose.model("Counter", counterSchema);
