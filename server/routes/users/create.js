'use strict';

var User = require('../../models/user');
var Email = require('../../models/email');

module.exports = {
  auth: false,
  handler: function(request, reply){
    User.register(request.payload, function(err, user) {
      user.random = request.payload.password;
      Email.email(user, function(err) {
        if (err) { return reply().code(400); }
        user.password = null;
        user.random = null;
        reply({user:user});
      });
    });
  }
};
