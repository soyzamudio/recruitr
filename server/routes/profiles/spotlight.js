'use strict';

var Profile = require('../../models/profile');

module.exports = {
  handler: function(request, reply){
    Profile.findRandom({}, {firstName:1, skills:1, image:1}, {limit: 3}, function(err, profiles) {
      if (err) { console.log(err); }
      reply({profiles: profiles});
    });
  }
};
