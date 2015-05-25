'use strict';

angular.module('angular-prototype')
.controller('UsersListController', ['$scope', 'User', function($scope, User) {

  User.getAll()
  .then(function(response) {
    $scope.users = response.data.users;
  });

  $scope.upgrade = function(user) {
    User.upgrade(user);
  };

}]);
