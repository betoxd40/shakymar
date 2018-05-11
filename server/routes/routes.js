const express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');
const Product = require('../models/productModel');

//page home
router.get('/', productController.product_list);

//page product
router.get('/product', productController.product_list);

router.post('/product', productController.product_create);

router.put('/product/:id', productController.product_update);

router.delete('/product/:id', productController.product_delete);

module.exports = router;
