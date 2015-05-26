'use strict';

angular.module('angular-prototype')
.controller('ProfilesShowController', ['$scope', '$state', 'Profile', function($scope, $state, Profile) {

  Profile.getOne($state.params.userId)
  .then(function(response) {
    $scope.profile = response.data.profile;
  });

}]);
