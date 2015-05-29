'use strict';

angular.module('angular-prototype')
.controller('ProfilesEditController',
['$scope', '$state', 'Profile', function($scope, $state, Profile) {
  if ($scope.user.role !== 'admin') { $state.go('home'); }

  Profile.getOne($state.params.profileId)
  .then(function(response) {
    $scope.student = response.data.profile;
  });

  $scope.editProfile = function() {
    Profile.editProfile($scope.student)
    .then(function() {
      $state.go('profiles.show', {userId: $scope.student._id});
    });
  };

}]);
