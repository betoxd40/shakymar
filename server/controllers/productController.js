var Product = require('../models/productModel');

// Return all products
exports.product_list = (req, res, next) => {
  Product.find({})
    .then(products => {
      res.send(products);
    })
    .catch(next);
};

// Create a new product
exports.product_create = (req, res, next) => {
  Product.create(req.body)
    .then(function(product) {
      res.send({ type: 'POST' });
    })
    .catch(next);
};

// Update product
exports.product_update = (req, res, next) => {
  Product.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function(product) {
      res.send({ type: 'UPDATE' });
    })
    .catch(next);
};

// Delete product
exports.product_delete = (req, res, next) => {
  Product.findByIdAndRemove({ _id: req.params.id })
    .then(function(product) {
      res.send({ type: 'DELETE' });
    })
    .catch(next);
};
