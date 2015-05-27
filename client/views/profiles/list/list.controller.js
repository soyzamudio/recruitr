'use strict';

angular.module('angular-prototype')
.controller('ProfilesListController', ['$scope', 'Profile', '$state', function($scope, Profile, $state) {
  if (!$scope.user) { $state.go('home'); }
  Profile.getAll()
  .then(function(response) {
    $scope.profiles = response.data.profiles;
  });

}]);
