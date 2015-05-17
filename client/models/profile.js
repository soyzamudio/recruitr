'use strict';

angular.module('angular-prototype')
.factory('Profile', ['$http', function($http){

  function createProfile(info) {
    return $http.post('/profiles/create', info);
  }

  function getAll() {
    return $http.get('/profiles');
  }

  function getOne(info) {
    return $http.get('/profiles/' + info);
  }

  return {getAll:getAll, createProfile:createProfile, getOne:getOne};

}]);
