'use strict';

angular.module('angular-prototype')
.controller('NavCtrl', ['$rootScope', '$scope', 'User', '$auth', '$window', function($rootScope, $scope, User, $auth, $window) {
  $scope.logout = function() {
    delete $rootScope.user;
    $window.localStorage.clear();
    $auth.logout();
  };
}]);
