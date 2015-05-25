'use strict';

angular.module('angular-prototype')
.controller('ProfilesListController', ['$scope', 'Profile', function($scope, Profile) {
  $scope.sortType     = 'firstName'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  Profile.getAll()
  .then(function(response) {
    $scope.profiles = response.data.profiles;
  });

}]);
