'use strict';

var Profile = require('../../models/profile');

module.exports = {
  handler: function(request, reply) {
    Profile.find({},'firstName _id image skills', function(err, profiles) {
      if (err) { reply().code(400); }
      reply({profiles: profiles});
    });
  }
};
