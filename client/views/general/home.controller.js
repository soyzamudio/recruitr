
'use strict';

angular.module('angular-prototype')
.controller('HomeController',
['$scope', 'Autocomplete', function($scope, Autocomplete) {
  Autocomplete.getAutocomplete()
  .then(function(response) {
    console.log(response.data);
  });
}]);
