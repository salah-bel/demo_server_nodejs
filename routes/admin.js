const express = require('express');
const router = express.Router();
const path = require('path');

//import controllers
const productController = require('./../controllers/products')

router.get('/add-product', productController.getAddProduct);
router.post('/add-product', productController.postAddProduct);
router

exports.routes = router;
// exports.products = products;