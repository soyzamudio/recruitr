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
  o.controller = ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
    $scope.super = false;
    $scope.normal = true;
    checkViewer();
    function checkViewer() {
      switch ($scope.admin.role) {
        case 'admin' || 'super': $scope.super = true; break;
        default: break;
      }
    }
    $scope.list = $state.params.list;
    $scope.index = $state.params.index;
  }];

  return o;
}]);
