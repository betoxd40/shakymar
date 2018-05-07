const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

var routes = require('./routes/routes');

//conecting MONGODB
mongoose
  .connect('mongodb://localhost/shakymar')
  .then(() => console.log('connection succesful'))
  .catch(err => console.error(err));

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//Routes request
app.use('/api', routes);

app.use(express.static(__dirname + '/../dist'));

app.listen(3001, function() {
  console.log('server on port 3001');
});
