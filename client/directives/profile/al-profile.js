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
  o.link = function($scope, element, attrs) {};
  o.controller = ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.super = false;
    $scope.normal = true;

    checkViewer();

    function checkViewer() {
      switch ($scope.admin.role) {
        case 'admin' || 'super': $scope.super = true; break;
        default: break;
      }
    }

    console.log($scope.super);
  }];

  return o;
}]);
