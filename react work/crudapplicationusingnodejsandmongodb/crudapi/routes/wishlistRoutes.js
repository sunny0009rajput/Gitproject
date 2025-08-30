const express = require("express");
const router = express.Router();
const { customerAuth } = require("../middleware/customerAuth");
const Wishlist = require("../models/Wishlist");

// 👉 Add product to wishlist
router.post("/wishlist", customerAuth, async (req, res) => {
  
  
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    
    console.log("UserId from token:", userId);
    console.log("ProductId from request:", productId);

    let wishlist = await Wishlist.findOne({ user: userId });

    if (!wishlist) {
      // create a new wishlist if not exists
      wishlist = new Wishlist({ user: userId, products: [productId] });
    } else {
      // prevent duplicates
      if (!wishlist.products.some((p) => p.toString() === productId)) {
        wishlist.products.push(productId);
      }
    }
    console.log("Saving wishlist:", wishlist);
    await wishlist.save();
    res.status(200).json({ message: "Product added to wishlist", wishlist });
  } catch (error) {
    res.status(500).json({ message: "Error adding to wishlist", error });
  }
});

// 👉 Remove product from wishlist
router.delete("/wishlist", customerAuth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    let wishlist = await Wishlist.findOne({ user: userId });

    if (wishlist) {
      wishlist.products = wishlist.products.filter(
        (id) => id.toString() !== productId
      );
      await wishlist.save();
    }

    res
      .status(200)
      .json({ message: "Product removed from wishlist", wishlist });
  } catch (error) {
    res.status(500).json({ message: "Error removing from wishlist", error });
  }
});

// Get wishlist of logged-in user
// Get wishlist of logged-in user
router.get("/wishlist", customerAuth, async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id }).populate("products");

    if (!wishlist) {
      return res.status(200).json({ products: [] });
    }

    // Convert images to base64 on server
    const formattedProducts = wishlist.products.map((product) => {
      let mainPhotoBase64 = null;
      if (product.mainPhoto && product.mainPhoto.data) {
        mainPhotoBase64 = `data:${product.mainPhoto.contentType};base64,${product.mainPhoto.data.toString("base64")}`;
      }

      return {
        _id: product._id,
        product_name: product.product_name,
        product_price: product.product_price,
        product_description: product.product_description,
        mainPhotoBase64,
      };
    });

    res.status(200).json({ products: formattedProducts });
  } catch (err) {
    console.error("Error fetching wishlist:", err);
    res.status(500).json({ error: "Server error" });
  }
});



module.exports = router;
