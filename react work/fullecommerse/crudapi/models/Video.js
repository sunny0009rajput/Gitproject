const mongoose = require("mongoose");
const { Schema } = mongoose;
const VideoSchema = new Schema(
  {
    name: { type: String, required: false },

    image: { contentType: String, data: Buffer }, // URL to the image
    video: { contentType: String, data: Buffer },
  },
  { timestamps: true }
);

const VideoModel = mongoose.model("Video", VideoSchema);

module.exports = VideoModel;
