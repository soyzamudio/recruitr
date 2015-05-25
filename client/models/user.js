'use strict';

angular.module('angular-prototype')
  .factory('User', ['$http', function($http){

    function getAll() {
      return $http.get('/users');
    }

    function createUser(info) {
      return $http.post('/users/create', info);
    }

    function upgrade(info) {
      return $http.put('/users/upgrade', info);
    }

    return {getAll:getAll, createUser:createUser, upgrade:upgrade};
  }]);
