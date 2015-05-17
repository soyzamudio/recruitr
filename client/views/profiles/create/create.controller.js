'use strict';

angular.module('angular-prototype')
.controller('ProfilesCreateController',
['$scope', '$state', 'Profile', function($scope, $state, Profile) {
  if ($scope.user.role !== 'admin') { $state.go('home'); }

  $scope.createProfile = function() {
    Profile.createProfile($scope.student)
    .then(function(response) {
      $state.go('profiles.show', {userId: response.data._id});
    });
  };

}]);
