'use strict';

var User = require('../../models/user');

module.exports = {
  handler: function(request, reply){
    User.findOneAndRemove({_id:request.params.userId}, function(err) {
      if (err) { reply().code(400); }
      reply().code(200);
    });
  }
};
