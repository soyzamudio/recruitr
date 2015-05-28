'use strict';

angular.module('angular-prototype')
.factory('Autocomplete', ['$http', function($http){

  var Autocomplete = {};

  Autocomplete.getAutocomplete = function() {
    return $http.get('/autocomplete');
  };

  return Autocomplete;

}]);
