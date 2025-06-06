const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

router.get('/', productController.getProducts);
router.post('/', productController.addProduct);

module.exports = router;