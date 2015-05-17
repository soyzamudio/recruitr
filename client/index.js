'use strict';

angular.module('angular-prototype', ['ui.router', 'ngMessages', 'satellizer'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url:'/', templateUrl:'/views/general/home.html'})
  .state('user', {url:'/user', templateUrl:'/views/user/user.html', controller: 'UserController'})

  .state('profiles', {url: '/profiles', templateUrl:'/views/profiles/profiles.html', abstract: true})
  .state('profiles.create', {url: '/create', templateUrl:'/views/profiles/create/create.html', controller: 'ProfilesCreateController'})
  .state('profiles.list', {url: '', templateUrl:'/views/profiles/list/list.html', controller: 'ProfilesListController'})
  .state('profiles.show', {url: '/{userId}', templateUrl:'/views/profiles/show/show.html', controller: 'ProfilesShowController'})

  .state('users', {url: '/users', templateUrl:'/views/users/users.html', abstract: true})
  .state('users.list', {url: '', templateUrl:'/views/users/list/list.html', controller: 'UsersListController'})
  .state('users.create', {url: '/create', templateUrl:'/views/users/create/create.html', controller: 'UsersCreateController'});

}])
.run(['$rootScope', '$window', '$auth', function($rootScope, $window, $auth) {
  if ($auth.isAuthenticated()) {
    $rootScope.user = JSON.parse($window.localStorage.user);
  }
}]);
