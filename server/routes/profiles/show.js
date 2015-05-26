'use strict';

var Profile = require('../../models/profile');

module.exports = {
  handler: function(request, reply) {
    Profile.findOne({_id: request.params.userId}, function(err, profile) {
      if (err) { reply().code(400); }
      profile = checkViewer(request.auth.credentials, profile);
      reply({profile: profile});
    });
  }
};

function checkViewer(user, profile) {
  if (user.role === 'normal') {
    profile.lastName = 'Contact Us';
    profile.experience = null;
    profile.twitter = null;
    profile.linkedIn = null;
    profile.stackoverflow = null;
    profile.github = null;
  }
  return profile;
}
