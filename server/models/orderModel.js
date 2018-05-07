const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');
const Product = require('./productModel');

const OrderSchema = new Schema({
  user: User,
  cart: [Product],
  paymendId: { type: String, required: true },
});

const Order = mongoose.model('order', Order);
module.exports = Order;
