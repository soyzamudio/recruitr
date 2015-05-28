'use strict';

var User = require('../../models/user');

module.exports = {
  handler: function(request, reply){
    User.findOne({_id:request.auth.credentials._id}, function(err, user) {
      user.password = user.hashPass(request.payload.password);
      user.save(function(err) {
        if (err) { reply().code(400); }
        reply().code(200);
      });
    });
  }
};
