'use strict';

angular.module('angular-prototype')
.controller('UserEditController', ['$scope', 'User', '$state', function($scope, User, $state) {

  $scope.message = null;

  $scope.changePassword = function() {
    if ($scope.newForm.password === $scope.newForm.veripassword) {
      User.editUser({password: $scope.newForm.password})
      .then(function() {
        $state.go('home');
      });
    } else {
      $scope.message = 'Your password does not match. Please try again.';
    }
  };
}]);
