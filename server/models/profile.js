'use strict';

var mongoose = require('mongoose');
var Profile;

var profileSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, require: true},
  locations: Array,
  skills: {type: Array, required: true},
  exposed: Array,
  interests: Array,
  education: Array,
  image: {type: String, required: true},
  github: String,
  stackoverflow: String,
  linkedin: String,
  twitter: String,
  createdAt: {type: Date, default: Date.now, required: true}
});

Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
