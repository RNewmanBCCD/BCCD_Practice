const Product = require('../models/product');

/**
 * Controller functions for Admin pages
 */
exports.getAddproduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product'
    });
};
exports.postAddProduct = (req, res, next) => {
    var product = new Product(req.body.title, req.body.imageUrl, req.body.price, req.body.description);
    product.save();
    res.redirect('/');
};
exports.getAdminProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products, 
            pageTitle: 'Products', 
            path: '/admin/products',
            hasProducts: products.length > 0
        });
    });
};