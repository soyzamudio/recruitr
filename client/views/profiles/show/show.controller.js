'use strict';

angular.module('angular-prototype')
.controller('ProfilesShowController', ['$scope', '$state', 'Profile', function($scope, $state, Profile) {

  $scope.super = false;
  $scope.normal = true;

  console.log($scope.user.role);

  Profile.getOne($state.params.userId)
  .then(function(response) {
    checkViewer();
    console.log($scope.super);
    console.log($scope.normal);
    $scope.profile = response.data.profile;
  });

  function checkViewer() {
    console.log('in')
    switch ($scope.user.role) {
      case 'admin' || 'super': $scope.super = true; break;
      default: break;
    }
  }

}]);
