const express = require('express');
const router = express.Router();
const path = require('path');

// import du controller
const productController = require('../controllers/products')

router.get('/', productController.getProducts);
router.get('/product/:id', productController.getProduct);
router.get('/delete-product/:id', productController.getProduct);

module.exports = router;