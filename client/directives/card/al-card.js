'use strict';

angular.module('angular-prototype')
.directive('alCard', [function() {
  var o = {};

  o.restrict = 'A';
  o.templateUrl = '../directives/card/al-card.html';
  o.scope = {
    profile: '=',
  };
  o.link = function($scope, element, attrs) {};
  o.controller = ['$rootScope', '$scope', function($rootScope, $scope) {

  }];

  return o;
}]);
