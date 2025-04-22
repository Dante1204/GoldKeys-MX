// backend/controllers/products.js
const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      seller: req.body.seller,
      image: req.body.image
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};