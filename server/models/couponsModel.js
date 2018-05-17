const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// CouponName: String required
// Discount: number required

const CouponSchema = new Schema({
  couponName: { type: String, required: true },
  discount: { type: Number, required: true },
});

const Coupon = mongoose.model('coupon', CouponSchema);
module.exports = Coupon;
