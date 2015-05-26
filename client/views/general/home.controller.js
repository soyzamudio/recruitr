
'use strict';

angular.module('angular-prototype')
.controller('HomeController',
['$rootScope', '$scope', 'Autocomplete', '$auth', 'User', '$window', function($rootScope, $scope, Autocomplete, $auth, User, $window) {
  Autocomplete.getAutocomplete()
  .then(function(response) {
    console.log(response.data);
  });

  $scope.createAccount = function(email) {
    $scope.newUser = {
      email: email,
      password: User.generatePassword()
    };
    $auth.signup($scope.newUser).then(login);
  };

  $scope.loginUser = function() {
    $auth.login($scope.newUser)
    .then(login);
  };

  function login(response) {
    $scope.newUser = null;
    $window.localStorage.user = JSON.stringify(response.data.user);
    $rootScope.user = response.data.user;
  }

}]);
