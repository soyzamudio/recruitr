'use strict';

angular.module('angular-prototype')
.directive('alCard', [function() {
  var o = {};

  o.restrict = 'A';
  o.templateUrl = '../directives/card/al-card.html';
  o.scope = {
    profile: '=',
    index: '=',
    list: '='
  };
  o.link = function() {};
  o.controller = ['$scope', '$state', function($scope, $state) {
    $scope.goToProfile = function(profile, index, list) {
      console.log(profile);
      console.log(index);
      console.log(list);
      $state.go('profiles.show', {userId: profile._id, index: index, list: list});
    };
  }];

  return o;
}]);
