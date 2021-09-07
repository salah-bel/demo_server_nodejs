//CONTROLLER
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};
// ENVOIE DE FORMULAIRE
exports.postAddProduct = (req, res, next) => {
    const body = req.body;
    console.log('IMAGE:: ', req.file.path)
    const product = new Product(body.title, body.price, req.file.path, body.desc);
    product.save();
    res.redirect('/');
};

// GET ONE PRODUCT
exports.getProduct = (req, res, next) => {
    const id = req.params.id;
    console.log('PARAMS//: ', id)
    Product.findById(id, (product => {
        res.render('product-detail', { product })
    }));
}

// GET ALL PRODUCT

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', {
            products: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};