const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
    try {
        const { name, price, description, stock } = req.body;
        const product = new Product({ name, price, description, stock });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};
