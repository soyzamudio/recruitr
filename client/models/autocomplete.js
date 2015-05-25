'use strict';

angular.module('angular-prototype')
.factory('Autocomplete', ['$http', function($http){

  function getAutocomplete() {
    return $http.get('/autocomplete');
  }

  return {getAutocomplete:getAutocomplete};

}]);
