const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res) => {
  // Render static file
  //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
});

router.post('/add-product', (req, res) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
