const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');
const shopController = require('../controllers/shop');

const router = express.Router();

/**
 * Route configuration and logic
 */
router.get('/', shopController.getHomePage); // change to index

router.get('/products-list', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/add-to-cart', shopController.addToCart);

router.get('/checkout', shopController.getCheckout);

router.get('/orders', shopController.getOrders);

module.exports = router;