const express = require("express");
const { addProduct, getProducts } = require("../controllers/productController");
const router = express.Router();

router.post("/", addProduct);  // Add a new product
router.get("/", getProducts);  // Get all products

module.exports = router;
