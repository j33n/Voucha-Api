const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var offerSchema = new Schema({
  name: String,
  description: String,
  offer: String,
  start_date: String,
  end_date: String,
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
