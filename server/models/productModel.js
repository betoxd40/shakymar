const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  nameProduct: {
    type: String,
    required: [true, 'Name of Product field is required'],
    trim: true,
  },
  price: { type: Number, required: [true, 'Price field is required'] },
  gender: { type: String, required: [true, 'Price field is required'] },
  typeProduct: { type: String, required: [true, 'Price field is required'] },
  description: { type: String, required: [true, 'Price field is required'] },
  imagePath: [String],
  amount: { type: Number, required: [true, 'Price field is required'] },
  registry_date: { type: Date, default: Date.now },
  available: Boolean,
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;
