const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../dist'));

app.listen(3001, function() {
  console.log('server on port 3001');
});
