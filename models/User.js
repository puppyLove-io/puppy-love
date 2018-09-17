const mongoose = require('mongoose');
const { Schema } = mongoose;
reqLogin = require('../middleware/requireLogin');

const userSchema = new Schema({
  username: String,
  firstName : String,
  lastName: String,
  location: {
    address: String,
    state: String,
    country: String,
    zipcode: Number,
    lat: String,
    long: String
  },
  googleId : String,
  accessToken : String,
  refreshToken : String,
  phone : String,
  email : String,

  admin : { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
