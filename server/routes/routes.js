const express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  //res.send({ name: 'Probando' });
  console.log({ name: 'Probando' });
});

module.exports = router;
