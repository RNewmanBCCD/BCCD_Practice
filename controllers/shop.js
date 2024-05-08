const Product = require('../models/product');

/**
 * Controller functions for Shopping pages
 */
exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'Products', 
            path: '/products-list',
            hasProducts: products.length > 0
        });
    });
    //res.sendFile(path.join(rootDir, '../', 'views', 'shop.html'));
};
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        console.log(product);
    });
    res.redirect('/');
};
exports.getHomePage = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/',
            hasProducts: products.length > 0
        });
    });
};
exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Cart', 
        path: '/cart'
    });
};
exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout', 
        path: '/checkout'
    });
};
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Orders', 
        path: '/orders'
    });
};