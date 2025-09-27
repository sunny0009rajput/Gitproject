const express = require("express");
const ProductModel = require("../models/Product");
const { auth, requireAdmin } = require("../middleware/auth");
const router = express.Router();
const multer = require("multer");
const { customerAuth } = require("../middleware/customerAuth");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  "/products",
  auth,
  requireAdmin,
  upload.fields([
    { name: "mainPhoto", maxCount: 1 },
    { name: "sub1Photo", maxCount: 1 },
    { name: "sub2Photo", maxCount: 1 },
    { name: "sub3Photo", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const products = new ProductModel({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_description: req.body.product_description,
        product_category: req.body.product_category,
        product_subcategory: req.body.product_subcategory,
        product_size: req.body.product_size
          ? Array.isArray(req.body.product_size)
            ? req.body.product_size
            : [req.body.product_size]
          : [],
        product_color: req.body.product_color
          ? Array.isArray(req.body.product_color)
            ? req.body.product_color
            : [req.body.product_color]
          : [],

        mainPhoto: req.files["mainPhoto"]
          ? {
              contentType: req.files["mainPhoto"][0].mimetype,
              data: req.files["mainPhoto"][0].buffer,
            }
          : null,
        sub1Photo: req.files["sub1Photo"]
          ? {
              contentType: req.files["sub1Photo"][0].mimetype,
              data: req.files["sub1Photo"][0].buffer,
            }
          : null,
        sub2Photo: req.files["sub2Photo"]
          ? {
              contentType: req.files["sub2Photo"][0].mimetype,
              data: req.files["sub2Photo"][0].buffer,
            }
          : null,
        sub3Photo: req.files["sub3Photo"]
          ? {
              contentType: req.files["sub3Photo"][0].mimetype,
              data: req.files["sub3Photo"][0].buffer,
            }
          : null,
        product_date: req.body.product_date,
        product_type: req.body.product_type,
        total_stock: req.body.total_stock,
        brand: req.body.brand,
      });
      await products.save();
      const formattedProduct = {
        ...products._doc,
        mainPhoto: products.mainPhoto?.data
          ? `data:${
              products.mainPhoto.contentType
            };base64,${products.mainPhoto.data.toString("base64")}`
          : null,
        sub1Photo: products.sub1Photo?.data
          ? `data:${
              products.sub1Photo.contentType
            };base64,${products.sub1Photo.data.toString("base64")}`
          : null,
        sub2Photo: products.sub2Photo?.data
          ? `data:${
              products.sub2Photo.contentType
            };base64,${products.sub2Photo.data.toString("base64")}`
          : null,
        sub3Photo: products.sub3Photo?.data
          ? `data:${
              products.sub3Photo.contentType
            };base64,${products.sub3Photo.data.toString("base64")}`
          : null,
        product_date: products.product_date,
      };

      res.status(201).send(formattedProduct);
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

router.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.find();
    const formattedProducts = products.map((product) => ({
      _id: product._id.toString(),
      product_name: product.product_name,
      product_price: product.product_price,
      product_description: product.product_description,

      product_category: product.product_category,
      product_subcategory: product.product_subcategory,
      product_size: product.product_size,
      product_color: product.product_color,
      product_date: product.product_date,
      product_type: product.product_type,
      brand: product.brand,
      // ⭐️ Add these fields
      avgRating: product.avgRating || 0,
      totalReviews: product.totalReviews || 0,
      mainPhoto: product.mainPhoto?.data
        ? `data:${
            product.mainPhoto.contentType
          };base64,${product.mainPhoto.data.toString("base64")}`
        : null,
      sub1Photo: product.sub1Photo?.data
        ? `data:${
            product.sub1Photo.contentType
          };base64,${product.sub1Photo.data.toString("base64")}`
        : null,
      sub2Photo: product.sub2Photo?.data
        ? `data:${
            product.sub2Photo.contentType
          };base64,${product.sub2Photo.data.toString("base64")}`
        : null,
      sub3Photo: product.sub3Photo?.data
        ? `data:${
            product.sub3Photo.contentType
          };base64,${product.sub3Photo.data.toString("base64")}`
        : null,
    }));
    res.json(formattedProducts);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get("/products/:id", async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id).populate(
      "reviews.user", // populate customer info
      "customer_name email"
    );

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const updatedProduct = {
      _id: product._id,
      product_name: product.product_name,
      product_price: product.product_price,
      product_description: product.product_description,
      product_category: product.product_category,
      product_size: product.product_size,
      product_color: product.product_color,
      product_date: product.product_date,
      product_type: product.product_type,
      total_stock: product.total_stock,
      brand: product.brand,

      // ⭐ Add these fields
      avgRating: product.avgRating || 0,
      totalReviews: product.totalReviews || 0,
      reviews: product.reviews.map((r) => ({
        id: r._id,
        userId: r.user?._id || null,
        name: r.user?.customer_name || "Anonymous",
        email: r.user?.email || null,
        rating: r.rating,
        comment: r.comment,
        createdAt: r.createdAt,
      })),
      mainPhoto: product.mainPhoto?.data
        ? `data:${
            product.mainPhoto.contentType
          };base64,${product.mainPhoto.data.toString("base64")}`
        : null,
      sub1Photo: product.sub1Photo?.data
        ? `data:${
            product.sub1Photo.contentType
          };base64,${product.sub1Photo.data.toString("base64")}`
        : null,
      sub2Photo: product.sub2Photo?.data
        ? `data:${
            product.sub2Photo.contentType
          };base64,${product.sub2Photo.data.toString("base64")}`
        : null,
      sub3Photo: product.sub3Photo?.data
        ? `data:${
            product.sub3Photo.contentType
          };base64,${product.sub3Photo.data.toString("base64")}`
        : null,
      product_date: product.product_date,
      product_type: product.product_type,
      total_stock: product.total_stock,
      brand: product.brand,
    };

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("GET /products/:id error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put(
  "/products/:id",
  auth,
  requireAdmin,
  upload.fields([
    { name: "mainPhoto", maxCount: 1 },
    { name: "sub1Photo", maxCount: 1 },
    { name: "sub2Photo", maxCount: 1 },
    { name: "sub3Photo", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const updateData = {
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_description: req.body.product_description,
        product_category: req.body.product_category,
        product_subcategory: req.body.product_subcategory,
        product_size: req.body.product_size
          ? Array.isArray(req.body.product_size)
            ? req.body.product_size
            : [req.body.product_size]
          : [],
        product_color: req.body.product_color
          ? Array.isArray(req.body.product_color)
            ? req.body.product_color
            : [req.body.product_color]
          : [],
        product_type: req.body.product_type,
        total_stock: req.body.total_stock,
        brand: req.body.brand,
      };

      if (req.files["mainPhoto"]) {
        updateData.mainPhoto = {
          contentType: req.files["mainPhoto"][0].mimetype,
          data: req.files["mainPhoto"][0].buffer,
        };
      }
      if (req.files["sub1Photo"]) {
        updateData.sub1Photo = {
          contentType: req.files["sub1Photo"][0].mimetype,
          data: req.files["sub1Photo"][0].buffer,
        };
      }
      if (req.files["sub2Photo"]) {
        updateData.sub2Photo = {
          contentType: req.files["sub2Photo"][0].mimetype,
          data: req.files["sub2Photo"][0].buffer,
        };
      }
      if (req.files["sub3Photo"]) {
        updateData.sub3Photo = {
          contentType: req.files["sub3Photo"][0].mimetype,
          data: req.files["sub3Photo"][0].buffer,
        };
      }

      const products = await ProductModel.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true, runValidators: true }
      );

      if (!products) {
        return res.status(404).send("Product not found");
      }

      const formattedProduct = {
        ...products._doc,
        mainPhoto: products.mainPhoto?.data
          ? `data:${
              products.mainPhoto.contentType
            };base64,${products.mainPhoto.data.toString("base64")}`
          : null,
        sub1Photo: products.sub1Photo?.data
          ? `data:${
              products.sub1Photo.contentType
            };base64,${products.sub1Photo.data.toString("base64")}`
          : null,
        sub2Photo: products.sub2Photo?.data
          ? `data:${
              products.sub2Photo.contentType
            };base64,${products.sub2Photo.data.toString("base64")}`
          : null,
        sub3Photo: products.sub3Photo?.data
          ? `data:${
              products.sub3Photo.contentType
            };base64,${products.sub3Photo.data.toString("base64")}`
          : null,
        product_date: products.product_date,
        product_type: products.product_type,
        total_stock: products.total_stock,
        brand: products.brand,
      };

      res.status(200).send(formattedProduct);
    } catch (error) {
      console.error("Update product error:", error);
      res
        .status(error.name === "ValidationError" ? 422 : 500)
        .send(error.message || "Internal Server Error");
    }
  }
);

router.delete("/products/:id", auth, requireAdmin, async (req, res) => {
  try {
    const products = await ProductModel.findByIdAndDelete(req.params.id);
    if (!products) {
      return res.status(404).send();
    }
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// for review

// ⭐ Add Review to a Product
router.post("/products/:id/reviews", customerAuth, async (req, res) => {
  try {
    console.log("req.user:", req.user);
    const { rating, comment } = req.body;

    const product = await ProductModel.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    // check if user already reviewed (optional, depends on your logic)
    const existingReview = product.reviews.find(
      (rev) => rev.user && rev.user.toString() === req.user._id
    );
    if (existingReview) {
      return res
        .status(400)
        .json({ error: "You already reviewed this product" });
    }

    product.reviews.push({
      user: req.user.id,
      rating: Number(rating),
      comment,
    });

    // update total reviews and average rating
    product.totalReviews = product.reviews.length;
    product.avgRating =
      product.reviews.reduce((acc, r) => acc + r.rating, 0) /
      product.reviews.length;

    await product.save();

    // ⭐ Re-fetch with populated user info
    const populatedProduct = await ProductModel.findById(product._id).populate(
      "reviews.user",
      "customer_name email"
    );

    const updatedProduct = {
      _id: populatedProduct._id,
      product_name: populatedProduct.product_name,
      product_price: populatedProduct.product_price,
      product_description: populatedProduct.product_description,
      product_category: populatedProduct.product_category,
      product_size: populatedProduct.product_size,
      product_color: populatedProduct.product_color,
      product_date: populatedProduct.product_date,
      product_type: populatedProduct.product_type,
      total_stock: populatedProduct.total_stock,
      brand: populatedProduct.brand,
      avgRating: populatedProduct.avgRating || 0,
      totalReviews: populatedProduct.totalReviews || 0,
      reviews: populatedProduct.reviews.map((r) => ({
        id: r._id,
        userId: r.user?._id || null,
        name: r.user?.customer_name || "Anonymous",
        email: r.user?.email || null,
        rating: r.rating,
        comment: r.comment,
        createdAt: r.createdAt,
      })),
    };

    res.status(201).json(updatedProduct);
  } catch (error) {
    console.error("Add review error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ⭐ Get all reviews of a product
// router.get("/products/:id/reviews", async (req, res) => {
//   try {
//     const product = await ProductModel.findById(req.params.id).populate(
//       "reviews.user",
//       "name email"
//     );

//     if (!product) {
//       console.log("Product not found for id:", req.params.id);
//       return res.status(404).json({ error: "Product not found" });
//     }
//     console.log("Raw product reviews from DB:", product.reviews);
//     reviews: product.reviews.map((r) => {
//       const user = r.user && r.user._id ? r.user : null;
//       console.log("Mapping review:", r._id, "User:", user);
//       return {
//         id: r._id,
//         userId: user?.id || null,
//         name: user?.name?.trim() ? user.name : "Anonymous",
//         email: user?.email || null,
//         rating: r.rating,
//         comment: r.comment,
//         createdAt: r.createdAt,
//       };
//     }),
//       console.log("Formatted reviews to send:", reviews);

//     res.json(reviews);
//   } catch (error) {
//     console.error("Get reviews error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// ⭐ Get all reviews of a product
router.get("/products/:id/reviews", async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id).populate(
      "reviews.user",
      "customer_name email"
    );

    if (!product) {
      console.log("Product not found for id:", req.params.id);
      return res.status(404).json({ error: "Product not found" });
    }

    console.log("Raw product reviews from DB:", product.reviews);

    const reviews = product.reviews.map((r) => {
      const user = r.user && r.user._id ? r.user : null;
      console.log("Mapping review:", r._id, "User:", user);
      return {
        id: r._id,
        userId: user?._id || null,
        name: user?.cusotmer_name?.trim() ? user.name : "Anonymous",
        email: user?.email || null,
        rating: r.rating,
        comment: r.comment,
        createdAt: r.createdAt,
      };
    });

    console.log("Formatted reviews to send:", reviews);

    res.json(reviews);
  } catch (error) {
    console.error("Get reviews error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// ⭐ Update a review
router.put("/products/:id/reviews/:reviewId", auth, async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const product = await ProductModel.findById(req.params.id);

    if (!product) return res.status(404).json({ error: "Product not found" });

    const review = product.reviews.id(req.params.reviewId);
    if (!review) return res.status(404).json({ error: "Review not found" });

    // only review owner can edit
    if (review.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ error: "Not authorized to update this review" });
    }

    review.rating = rating || review.rating;
    review.comment = comment || review.comment;

    // recalc average rating
    product.avgRating =
      product.reviews.reduce((acc, r) => acc + r.rating, 0) /
      product.reviews.length;

    await product.save();
    res.json(review);
  } catch (error) {
    console.error("Update review error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ⭐ Delete a review
router.delete("/products/:id/reviews/:reviewId", auth, async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    if (!product) return res.status(404).json({ error: "Product not found" });

    const review = product.reviews.id(req.params.reviewId);
    if (!review) return res.status(404).json({ error: "Review not found" });

    // only review owner or admin can delete
    if (
      review.user.toString() !== req.user._id.toString() &&
      !req.user.isAdmin
    ) {
      return res
        .status(403)
        .json({ error: "Not authorized to delete this review" });
    }

    review.deleteOne(); // removes the review

    // recalc
    product.totalReviews = product.reviews.length;
    product.avgRating =
      product.reviews.length > 0
        ? product.reviews.reduce((acc, r) => acc + r.rating, 0) /
          product.reviews.length
        : 0;

    await product.save();
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error("Delete review error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
