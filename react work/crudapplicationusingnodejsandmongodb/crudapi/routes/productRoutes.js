const express = require("express");
const ProductModel = require("../models/Product");
const { auth, requireAdmin } = require("../middleware/auth");
const router = express.Router();
const multer = require("multer");

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
    ? `data:${products.mainPhoto.contentType};base64,${products.mainPhoto.data.toString("base64")}`
    : null,
  sub1Photo: products.sub1Photo?.data
    ? `data:${products.sub1Photo.contentType};base64,${products.sub1Photo.data.toString("base64")}`
    : null,
  sub2Photo: products.sub2Photo?.data
    ? `data:${products.sub2Photo.contentType};base64,${products.sub2Photo.data.toString("base64")}`
    : null,
  sub3Photo: products.sub3Photo?.data
    ? `data:${products.sub3Photo.contentType};base64,${products.sub3Photo.data.toString("base64")}`
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
      brand : product.brand,

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
    const product = await ProductModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const updatedProduct = {
      ...product._doc,
      mainPhoto: product.mainPhoto?.data
        ? `data:${product.mainPhoto.contentType};base64,${product.mainPhoto.data.toString("base64")}`
        : null,
      sub1Photo: product.sub1Photo?.data
        ? `data:${product.sub1Photo.contentType};base64,${product.sub1Photo.data.toString("base64")}`
        : null,
      sub2Photo: product.sub2Photo?.data
        ? `data:${product.sub2Photo.contentType};base64,${product.sub2Photo.data.toString("base64")}`
        : null,
      sub3Photo: product.sub3Photo?.data
        ? `data:${product.sub3Photo.contentType};base64,${product.sub3Photo.data.toString("base64")}`
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
    ? `data:${products.mainPhoto.contentType};base64,${products.mainPhoto.data.toString("base64")}`
    : null,
  sub1Photo: products.sub1Photo?.data
    ? `data:${products.sub1Photo.contentType};base64,${products.sub1Photo.data.toString("base64")}`
    : null,
  sub2Photo: products.sub2Photo?.data
    ? `data:${products.sub2Photo.contentType};base64,${products.sub2Photo.data.toString("base64")}`
    : null,
  sub3Photo: products.sub3Photo?.data
    ? `data:${products.sub3Photo.contentType};base64,${products.sub3Photo.data.toString("base64")}`
    : null,
  product_date: products.product_date,
  product_type: products.product_type,
        total_stock: products.total_stock,
        brand: products.brand,
};


      res.status(200).send(formattedProduct);
    } catch (error) {
      console.error("Update product error:", error);
      res.status(error.name === "ValidationError" ? 422 : 500).send(error.message || "Internal Server Error");
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

module.exports = router;
