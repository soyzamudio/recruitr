'use strict';

var Autocomplete = require('../../models/autocomplete');

module.exports = {
  handler: function(request, reply) {
    Autocomplete.findOne({name: 'auto'}, function(err, auto) {
      if (err) { reply({}); }
      else { reply({auto:auto}); }
    });
  }
}
