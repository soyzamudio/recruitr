'use strict';

angular.module('angular-prototype')
.directive('alProfile', [function() {
  var o = {};

  o.restrict = 'A';
  o.templateUrl = '../directives/profile/al-profile.html';
  o.scope = {
    userProfile: '=',
    admin: '='
  };
  o.link = function() {};
  o.controller = ['$scope', '$state', 'Profile', function($scope, $state, Profile) {
    $scope.super = false;
    $scope.normal = true;
    $scope.exp = false;

    checkViewer($scope.admin.role);
    function checkViewer(role) {
      switch (role) {
        case 'admin': $scope.super = true; break;
        case 'super': $scope.super = true; break;
      }
    }
    $scope.list = $state.params.list;
    $scope.index = $state.params.index * 1;

    $scope.available = function(link) {
      return link ? link : '#';
    };

    $scope.activeExperience = function() {
      $scope.exp = !$scope.exp;
    };

    $scope.addExperience = function(experience) {
      $scope.userProfile.experience.push(experience);
      Profile.editProfile($scope.userProfile)
      .then(function(response) {
        $scope.newExperience = {};
        $scope.exp = false;
      });
    };

  }];

  return o;
}]);
