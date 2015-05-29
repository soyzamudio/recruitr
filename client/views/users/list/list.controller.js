'use strict';

angular.module('angular-prototype')
.controller('UsersListController', ['$scope', 'User', function($scope, User) {

  getAll();

  function getAll(){
    User.getAll()
    .then(function(response) {
      $scope.users = response.data.users;
    });
  }

  $scope.destroy = function(userId){
    User.destroy(userId)
    .then(function(){
      getAll();
    });
  };

  $scope.upgrade = function(user) {
    User.upgrade(user);
  };

}]);
