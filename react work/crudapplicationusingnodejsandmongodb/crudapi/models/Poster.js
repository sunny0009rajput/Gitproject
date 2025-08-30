const mongoose = require("mongoose");
const { Schema } = mongoose;
const PosterSchema = new Schema(
  {
    poster_name: { type: String, required: false },
     poster_category: {type: String, required: false},
    image: { contentType: String, data: Buffer }, // URL to the image
    
  },
  { timestamps: true }
);

const PosterModel = mongoose.model("Poster", PosterSchema);

module.exports = PosterModel;
