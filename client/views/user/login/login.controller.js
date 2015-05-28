'use strict';

angular.module('angular-prototype')
.controller('UserLoginController',
['$rootScope', '$scope', '$auth', '$state', '$window',
function($rootScope, $scope, $auth, $state, $window) {

  $scope.loginUser = function() {
    // console.log('in');
    $auth.login($scope.loginForm)
    .then(login);
  };

  $scope.signup = function() {
    if ($scope.signupForm.pass === $scope.signupForm.veriPass) {
      $auth.signup({
        firstName: $scope.signupForm.firstName,
        lastName: $scope.signupForm.lastName,
        email: $scope.signupForm.email,
        company: $scope.signupForm.company,
        password: $scope.signupForm.pass
      }).then(login);
    }
  };

  function login(response) {
    console.log(response);
    $window.localStorage.user = JSON.stringify(response.data.user);
    $rootScope.user = response.data.user;
    $state.go('home');
  }

}]);
