'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  auth: false,
  handler: function(request, reply){
    User.findOneAndUpdate({_id:request.payload._id}, request.payload, function(err, user) {
      if (err) { reply().code(400); }
      reply({user:user});
    });
  }
};
