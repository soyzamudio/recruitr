'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  auth: false,
  validate: {
    payload: {
      email: Joi.string().email(),
      password: Joi.string().required(),
      company: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required()
    }
  },
  handler: function(request, reply){
    User.register(request.payload, function(err, user) {
      console.log(err);
      if (err) { return reply().code(400); }
      var token = user.token();
      user.password = null;
      reply({token:token, user:user});
    });
  }
};
