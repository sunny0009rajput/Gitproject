const express = require("express");
const CrousalModel = require("../models/Crousal");
const { auth, requireAdmin } = require("../middleware/auth");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const router = express.Router();

// GET all collections (Frontend uses this)
router.get("/slider", async (req, res) => {
  try {
    const collections = await CrousalModel.find();
    const formattedCollections = collections.map((collection)=>({
        _id: collection._id.toString(),
        title: collection.title,
        subtitle: collection.subtitle,
        cta: collection.cta,
        color: collection.color,
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
router.post("/slider",auth,requireAdmin,upload.fields([
    { name: "image", maxCount: 1 },
    
  ]), async (req, res) => {
  try {
    const newCollection = new CrousalModel({
        title: req.body.title,
        subtitle: req.body.subtitle,
        cta : req.body.cta,
        color: req.body.color,
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

// UPDATE collection (Admin only)
router.put("/slider/:id",auth,requireAdmin,upload.fields([
    { name: "image", maxCount: 1 },
    
  ]), async (req, res) => {
  try {
    const updateData = {
        title: req.body.title,
        subtitle: req.body.subtitle,
        cta : req.body.cta,
        color: req.body.color,
        
    }
    if (req.files["image"]) {
        updateData.image = {
          contentType: req.files["image"][0].mimetype,
          data: req.files["image"][0].buffer,
        };
      }
    const collections = await CrousalModel.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if(!collections){
        return res.status(404).send("collection not found");
    }

    const formattedCollections={
        ...collections._doc,
        image: collections.image?.data
    ? `data:${collections.image.contentType};base64,${collections.image.data.toString("base64")}`
    : null,
    }


    res.status(200).send(formattedCollections);
  } catch (error) {
    console.error("Update product error:", error);
      res.status(error.name === "ValidationError" ? 422 : 500).send(error.message || "Internal Server Error");
  }
});

// DELETE collection (Admin only)
router.delete("/slider/:id",auth,requireAdmin, async (req, res) => {
  try {
    await CrousalModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Collection deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
