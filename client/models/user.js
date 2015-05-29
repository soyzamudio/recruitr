'use strict';

angular.module('angular-prototype')
  .factory('User', ['$http', function($http){

    var User = {};

    User.getAll = function() {
      return $http.get('/users');
    };

    User.createUser = function(info) {
      return $http.post('/users/create', info);
    };

    User.upgrade = function(info) {
      return $http.put('/users/upgrade', info);
    };

    User.generatePassword = function() {
      return Math.random().toString(36).slice(-8);
    };

    User.editUser = function(info) {
      return $http.put('/user/edit', info);
    };

    User.destroy = function(userId) {
      return $http.delete('/users/' + userId + '/destroy');
    };

    return User;
  }]);
