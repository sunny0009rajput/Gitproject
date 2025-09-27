const express = require("express");
const PosterModel = require("../models/Poster");
const { auth, requireAdmin } = require("../middleware/auth");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const router = express.Router();

// GET all collections (Frontend uses this)
router.get("/poster", async (req, res) => {
  try {
    const collections = await PosterModel.find();
    const formattedCollections = collections.map((collection)=>({
        _id: collection._id.toString(),
        poster_name : collection.poster_name,
        poster_category : collection.poster_category,
        image: collection.image?.data
        ? `data:${
            collection.image.contentType
          };base64,${collection.image.data.toString("base64")}`
        : null,
        



    }))
    res.json(formattedCollections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE a new collection (Admin only)
router.post("/poster",auth,requireAdmin,upload.fields([
    { name: "image", maxCount: 1 },
    
    
  ]), async (req, res) => {
  try {
    const newCollection = new PosterModel({
        poster_name: req.body.poster_name,
        poster_category: req.body.poster_category,
        image : req.files["image"]
          ? {
              contentType: req.files["image"][0].mimetype,
              data: req.files["image"][0].buffer,
            }
          : null,
          

  });
    await newCollection.save();
    const formattedCollections = {
        ...newCollection._doc,
        image: newCollection.image?.data
    ? `data:${newCollection.image.contentType};base64,${newCollection.image.data.toString("base64")}`
    : null,
    
    };
    res.status(201).send(formattedCollections)
  } catch (err) {
    res.status(400).send(error);
  }
});


// Update poster
// Update poster
router.put(
  "/poster/:id",
  auth,
  requireAdmin,
  upload.fields([{ name: "image" }]),
  async (req, res) => {
    try {
      const { poster_name, poster_category } = req.body;
      const updateData = {};

      if (poster_name) updateData.poster_name = poster_name;
      if (poster_category) updateData.poster_category = poster_category;

      // ✅ Properly handle new image
      if (req.files && req.files.image && req.files.image[0]) {
        updateData.image = {
          contentType: req.files.image[0].mimetype,
          data: req.files.image[0].buffer,
        };
      }

      // Update only provided fields
      const updatedPoster = await PosterModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateData },
        { new: true }
      );

      if (!updatedPoster) {
        return res.status(404).json({ message: "Poster not found" });
      }

      // ✅ Return formatted response with base64 string (like GET)
      const formattedPoster = {
        ...updatedPoster._doc,
        image: updatedPoster.image?.data
          ? `data:${updatedPoster.image.contentType};base64,${updatedPoster.image.data.toString("base64")}`
          : null,
      };

      res.json(formattedPoster);
    } catch (error) {
      console.error("Update poster error:", error);
      res.status(500).json({ message: "Error updating poster" });
    }
  }
);



// DELETE collection (Admin only)
router.delete("/poster/:id",auth,requireAdmin, async (req, res) => {
  try {
    await PosterModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Collection deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
