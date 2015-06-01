'use strict';

var Profile = require('../../models/profile');
var Autocomplete = require('../../models/autocomplete.js');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    request.payload.skills = request.payload.skills.split(/\s*,\s*/);
    request.payload.exposed = request.payload.exposed.split(/\s*,\s*/);
    request.payload.interests = request.payload.interests.split(/\s*,\s*/);
    var profile = new Profile(request.payload);
    profile.save(function() {
      reply({profile: profile});
    });
  }
};
