const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

/**
 * Route configuration and logic
 */
router.get('/add-product', adminController.getAddproduct);

router.get('/products', adminController.getAdminProducts);

router.post('/add-product', adminController.postAddProduct);

module.exports = router;