'use strict';

var Profile = require('../../models/profile');
var Autocomplete = require('../../models/autocomplete.js');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    request.payload.skills = request.payload.skills.split(/\s*,\s*/);
    request.payload.locations = request.payload.locations.split(/\s*,\s*/);
    request.payload.exposed = request.payload.exposed.split(/\s*,\s*/);
    request.payload.interests = request.payload.interests.split(/\s*,\s*/);
    var profile = new Profile(request.payload);
    profile.save(function() {
      Autocomplete.findOne({name: 'auto'}, function(err, auto) {
        if (!auto) {
          var auto = new Autocomplete({skills: profile.skills, locations: profile.locations});
          auto.save(function() {
            reply({profile: profile});
          });
        } else {
          console.log(auto);
          profile.skills.forEach(function(e) {
            auto.skills.push(e.toLowerCase());
          });
          profile.locations.forEach(function(e) {
            auto.locations.push(e.toLowerCase());
          });
          auto.skills = _.uniq(auto.skills);
          auto.locations = _.uniq(auto.locations);
          auto.save(function() {
            reply({profile: profile});
          })
        }
      });
    });
  }
};
