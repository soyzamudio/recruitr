'use strict';

var mongoose = require('mongoose');
var Autocomplete;

var autocompleteSchema = mongoose.Schema({
  name: {type: String, default: 'auto'},
  skills: Array,
  locations: Array
});

Autocomplete = mongoose.model('Autocomplete', autocompleteSchema);
module.exports = Autocomplete;
