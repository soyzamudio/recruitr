'use strict';

var Profile = require('../../models/profile');

module.exports = {
  handler: function(request, reply){
    if(Array.isArray(request.payload.skills)){
      request.payload.skills = request.payload.skills.join()
    }
    if(Array.isArray(request.payload.exposed)){
      request.payload.exposed = request.payload.exposed.join()
    }
    if(Array.isArray(request.payload.interests)){
      request.payload.interests = request.payload.interests.join()
    }

    request.payload.skills = request.payload.skills.split(/\s*,\s*/);
    request.payload.exposed = request.payload.exposed.split(/\s*,\s*/);
    request.payload.interests = request.payload.interests.split(/\s*,\s*/);
    Profile.findOneAndUpdate({_id: request.payload._id}, request.payload, function(err, profile) {
      if (err) { console.log(err); reply().code(400); }
      else { reply({profile: profile}); }
    });
  }
};
