'use strict';

angular.module('angular-prototype')
.directive('alCard', [function() {
  var o = {};

  o.restrict = 'A';
  o.templateUrl = '../directives/card/al-card.html';
  o.scope = {
    profile: '=',
    index: '=',
    list: '=',
    spotlight: '='
  };
  o.link = function() {};
  o.controller = ['$scope', '$state', function($scope, $state) {
    $scope.goToProfile = function(profile, index, list) {
      $state.go('profiles.show', {userId: profile._id, index: index, list: list});
    };
  }];

  return o;
}]);
