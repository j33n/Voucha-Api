const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  firstname: String,
  lastname: String,
  // username: { type: String, required: true, unique: true },
  username: String,
  password: String,
  admin: Boolean,
  vendor: Boolean,
  buyer: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String,
  },
  created_at: Date,
  updated_at: Date,
});

userSchema.methods.makeUserBuyer = function() {
  this.buyer = true;
  return this.buyer;
};

userSchema.methods.makeUserVendor = function() {
  this.vendor = true;
  return this.vendor;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
