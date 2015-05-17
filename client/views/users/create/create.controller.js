'use strict';

angular.module('angular-prototype')
.controller('UsersCreateController', ['$scope', 'User', function($scope, User) {
  $scope.successfull = false;

  $scope.createUser = function(user) {
    if (user.pass === user.veriPass) {
      User.createUser({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        company: user.company,
        password: user.pass,
        role: 'super'
      })
      .then(function(response) {
        $scope.createdUser = response.data.user;
        $scope.createdUser.password = user.pass;
        $scope.successfull = true;
      });
    }
  };

}]);
