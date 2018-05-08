const express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  //res.send({ name: 'Probando' });
  console.log({ name: 'Probando /' });
});

router.get('/product', function(req, res) {
  //res.send({ name: 'Probando' });
  console.log('Probando GET all product');
});

router.get('/product/:id', function(req, res) {
  //res.send({ name: 'Probando' });
  console.log('Probando GET product /product/id');
});

router.post('/product', function(req, res) {
  //res.send({ name: 'Probando' });
  console.log('Probando GET product');
});

router.put('/product/:id', function(req, res) {
  //res.send({ name: 'Probando' });
  console.log('Probando GET product');
});

router.delete('/product/:id', function(req, res) {
  //res.send({ name: 'Probando' });
  console.log('Probando GET product');
});

module.exports = router;
