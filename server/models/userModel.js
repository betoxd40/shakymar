const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'LastName field is required'],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email field is required'],
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'UserName field is required'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password field is required'],
  },
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
