const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.json());
var routes = require('./routes/routes');

//conecting MONGODB
mongoose
  .connect('mongodb://localhost/shakymar')
  .then(() => console.log('connection succesful'))
  .catch(err => console.error(err));

mongoose.Promise = global.Promise;

//Routes request
app.use('/api', routes);

//static documents
app.use(express.static(__dirname + '/../dist'));

//listen server http://localhost:3001/
app.listen(3001, function() {
  console.log('server on port 3001');
});
