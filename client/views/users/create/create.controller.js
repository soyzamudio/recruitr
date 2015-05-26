'use strict';

angular.module('angular-prototype')
.controller('UsersCreateController', ['$scope', 'User', '$window', '$state', function($scope, User, $window, $state) {

  $scope.createUser = function(user) {
    User.createUser({
      email: user.email,
      password: user.pass,
      role: 'super'
    })
    .then(function(response) {
      $scope.createdUser = response.data.user;
      $scope.createdUser.password = user.pass;
      $window.swal({
        title: 'Success!',
        text: 'User (' + response.data.user.email + ') was created.',
        type: 'success',
        showCancelButton: false,
        confirmButtonColor: "#3996c6",
        confirmButtonText: "Ok!"
      }, function() {
        $state.go('users.list');
      })
    });
  };

}]);
