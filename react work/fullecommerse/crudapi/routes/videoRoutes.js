const express = require("express");
const VideoModel = require("../models/Video");
const { auth, requireAdmin } = require("../middleware/auth");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const router = express.Router();

// GET all collections (Frontend uses this)
router.get("/video", async (req, res) => {
  try {
    const collections = await VideoModel.find();
    const formattedCollections = collections.map((collection)=>({
        _id: collection._id.toString(),
        name : collection.name,
        image: collection.image?.data
        ? `data:${
            collection.image.contentType
          };base64,${collection.image.data.toString("base64")}`
        : null,
        video: collection.video?.data
        ? `data:${
            collection.video.contentType
          };base64,${collection.video.data.toString("base64")}`
        : null,



    }))
    res.json(formattedCollections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE a new collection (Admin only)
router.post("/video",auth,requireAdmin,upload.fields([
    { name: "image", maxCount: 1 },
    {name : "video", maxCount : 1},
    
  ]), async (req, res) => {
  try {
    const newCollection = new VideoModel({
        name: req.body.name,
        
        image : req.files["image"]
          ? {
              contentType: req.files["image"][0].mimetype,
              data: req.files["image"][0].buffer,
            }
          : null,
          video : req.files["video"]
          ? {
              contentType: req.files["video"][0].mimetype,
              data: req.files["video"][0].buffer,
            }
          : null,

  });
    await newCollection.save();
    const formattedCollections = {
        ...newCollection._doc,
        image: newCollection.image?.data
    ? `data:${newCollection.image.contentType};base64,${newCollection.image.data.toString("base64")}`
    : null,
    video: newCollection.video?.data
    ? `data:${newCollection.video.contentType};base64,${newCollection.video.data.toString("base64")}`
    : null,
    };
    res.status(201).send(formattedCollections)
  } catch (err) {
    res.status(400).send(error);
  }
});


// Update video
router.put("/video/:id",auth,requireAdmin, upload.fields([{ name: "image" }, { name: "video" }]), async (req, res) => {
  try {
    const { name } = req.body;
    const updateData = {};

    // If user sent a new name
    if (name) updateData.name = name;

    // If user uploaded a new image
    if (req.files && req.files.image && req.files.image[0]) {
      updateData.image = req.files.image[0].filename;
    }

    // If user uploaded a new video
    if (req.files && req.files.video && req.files.video[0]) {
      updateData.video = req.files.video[0].filename;
    }

    // Update only provided fields
    const updatedVideo = await VideoModel.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true }
    );

    if (!updatedVideo) {
      return res.status(404).json({ message: "Video not found" });
    }

    res.json(updatedVideo);
  } catch (error) {
    console.error("Update product error:", error);
    res.status(500).json({ message: "Error updating video" });
  }
});


// DELETE collection (Admin only)
router.delete("/video/:id",auth,requireAdmin, async (req, res) => {
  try {
    await VideoModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Collection deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
