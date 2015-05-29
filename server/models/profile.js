'use strict';

var mongoose = require('mongoose');
var random = require('mongoose-simple-random');
var Profile;

var profileSchema = mongoose.Schema({
  image: {type: Object, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  location: String,
  relocate: Boolean,
  summary: String,
  experience: Array,
  skills: {type: Array, required: true},
  exposed: Array,
  interests: Array,
  github: {type: String, required: true},
  linkedin: {type: String, required: true},
  twitter: {type: String, required: true},
  createdAt: {type: Date, default: Date.now, required: true}
});

profileSchema.plugin(random);

Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
