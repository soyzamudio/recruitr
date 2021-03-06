'use strict';

var User = require('../../models/user');
var Email = require('../../models/email');
var Joi = require('joi');

module.exports = {
  auth: false,
  validate: {
    payload: {
      email: Joi.string().email(),
      password: Joi.string()
    }
  },
  handler: function(request, reply){
    User.register(request.payload, function(err, user) {
      user.random = request.payload.password;
      Email.email(user, function(err) {
        if (err) { return reply().code(400); }
        var token = user.token();
        user.password = null;
        user.random = null;
        reply({token:token, user:user});
      });
    });
  }
};
