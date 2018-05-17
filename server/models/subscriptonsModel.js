const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriptionsSchema = new Schema({
  email: { type: String, required: true },
});

const Subscriptions = mongoose.model('subscriptions', SubscriptionsSchema);
module.exports = SubscriptionsSchema;
