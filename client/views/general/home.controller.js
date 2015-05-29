
'use strict';

angular.module('angular-prototype')
.controller('HomeController',
['$rootScope', '$scope', 'Autocomplete', '$auth', 'User', '$window', 'Email', 'Profile', function($rootScope, $scope, Autocomplete, $auth, User, $window, Email, Profile) {

  Profile.spotlight()
  .then(function(response) {
    $scope.profiles = response.data.profiles;
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

  $scope.contactUs = function(email) {
    Email.mandrill('Zt9VJPNzZOrqVhOrUH3-Uw', 'jose@josezamudio.me', email.email, email.message, email.subject, email.name);
  };

}]);
