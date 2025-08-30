const express = require("express");
const router = express.Router();
const { customerAuth } = require("../middleware/customerAuth");
const Cart = require("../models/Cart");
const Product = require("../models/Product");


function formatProduct(product, item) {
  let mainPhotoBase64 = null;
  if (product.mainPhoto && product.mainPhoto.data) {
    mainPhotoBase64 = `data:${product.mainPhoto.contentType};base64,${product.mainPhoto.data.toString("base64")}`;
  }

  return {
    _id: item._id,              // cart item id
    size: item.size,
    color: item.color,
    quantity: item.quantity,
    product: {
      _id: product._id,
      product_name: product.product_name,
      product_price: product.product_price,
      product_description: product.product_description,
      mainPhotoBase64,
    }
  };
}

// ✅ Add to Cart
router.post("/cart", customerAuth, async (req, res) => {
  try {
    const { productId, size, color, quantity } = req.body;
    const qty = Number(quantity) || 1;

    const productExists = await Product.findById(productId);
    if (!productExists) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) cart = new Cart({ user: req.user.id, products: [] });

    const existingItem = cart.products.find(
      (item) =>
        item.product.toString() === productId &&
        item.size === size &&
        item.color === color
    );

    if (existingItem) {
      existingItem.quantity += qty;
    } else {
      cart.products.push({ product: productId, size, color, quantity: qty });
    }

    await cart.save();
    await cart.populate("products.product");

    const formattedCart = cart.products.map(item => formatProduct(item.product, item));
    res.json({ products: formattedCart });

  } catch (error) {
    console.error("Add to Cart Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get Cart
router.get("/cart", customerAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate("products.product");
    if (!cart) return res.json({ products: [] });

    const formattedCart = cart.products.map(item => formatProduct(item.product, item));
    res.json({ products: formattedCart });

  } catch (error) {
    console.error("Get Cart Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Remove from Cart
router.delete("/cart/:productId", customerAuth, async (req, res) => {
  try {
    const { productId } = req.params;
    let cart = await Cart.findOne({ user: req.user.id }).populate("products.product");
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = cart.products.filter(item => item.product._id.toString() !== productId);
    await cart.save();
    await cart.populate("products.product");

    const formattedCart = cart.products.map(item => formatProduct(item.product, item));
    res.json({ products: formattedCart });

  } catch (error) {
    console.error("Remove from Cart Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Clear Entire Cart
router.delete("/cart", customerAuth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = []; // clear all products
    await cart.save();

    res.json({ message: "Cart cleared successfully", products: [] });
  } catch (error) {
    console.error("Clear Cart Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = router;
