'use strict';

angular.module('angular-prototype')
.factory('Profile', ['$http', function($http){

  var Profile = {};

  Profile.createProfile = function(info) {
    return $http.post('/profiles/create', info);
  };

  Profile.getAll = function() {
    return $http.get('/profiles');
  };

  Profile.getOne = function(info) {
    return $http.get('/profiles/' + info);
  };

  Profile.editProfile = function(profile) {
    return $http.put('/profiles/' + profile._id + '/edit', profile);
  };

  return Profile;

}]);
