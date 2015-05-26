'use strict';

angular.module('angular-prototype')
.controller('ProfilesListController', ['$scope', 'Profile', function($scope, Profile) {

  Profile.getAll()
  .then(function(response) {
    $scope.profiles = response.data.profiles;
  });

}]);
