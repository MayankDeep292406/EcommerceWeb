const express = require("express");
const Product = require("../models/Product");

const router = express.Router();


// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});


// ADD PRODUCT
router.post("/add", async (req, res) => {
  try {
    const product = new Product(req.body);

    await product.save();

    res.json({
      message: "Product Added Successfully",
      product,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;