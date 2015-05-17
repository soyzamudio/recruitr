'use strict';

var Profile = require('../../models/profile');

module.exports = {
  handler: function(request, reply) {
    Profile.findOne({_id: request.params.userId}, function(err, profile) {
      if (err) { reply().code(400); }
      reply({profile: profile});
    });
  }
};
