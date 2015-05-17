'use strict';

var User = require('../../models/user');

module.exports = {
  handler: function(request, reply) {
    User.find({}, function(err, users) {
      if (err) { reply().code(400); }
      reply({users: users});
    });
  }
};
