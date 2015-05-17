'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  auth: false,
  handler: function(request, reply){
    User.register(request.payload, function(err, user) {
      console.log(user);
      if (err) { return reply().code(400); }
      user.password = null;
      reply({user:user});
    });
  }
};
