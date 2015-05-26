'use strict';

var mongoose = require('mongoose');
var Profile;

var profileSchema = mongoose.Schema({
  image: {type: Object, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  location: String,
  relocate: Boolean,
  summary: String,
  experience: [Object],
  skills: {type: Array, required: true},
  exposed: Array,
  interests: Array,
  github: String,
  stackoverflow: String,
  linkedin: String,
  twitter: String,
  createdAt: {type: Date, default: Date.now, required: true}
});

Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
