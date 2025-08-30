const mongoose = require("mongoose");
const { Schema } = mongoose;
const CrousalSchema = new Schema(
  {
    title: { type: String, required: false },
    subtitle: { type: String, required: false },
    
    cta: { type: String, required: false }, // button text
    color: { type: String, required: false, default: "from-purple-500 to-blue-600" }, // tailwind gradient classes
    image: {contentType: String, data: Buffer}, // URL to the image
  },
  { timestamps: true }
);

const CrousalModel = mongoose.model("Crousal", CrousalSchema);

module.exports =CrousalModel;
