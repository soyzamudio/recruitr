'use strict';

var Profile = require('../../models/profile');

module.exports = {
  handler: function(request, reply){
    Profile.findOneAndUpdate({_id: request.payload._id}, request.payload, function(err, profile) {
      if (err) { console.log(err); reply().code(400); }
      else { reply({profile: profile}); }
    })
  }
};
