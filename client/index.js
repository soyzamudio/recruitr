'use strict';

angular.module('angular-prototype', ['ui.router', 'angularUtils.directives.dirPagination', 'ngMessages', 'satellizer', 'naif.base64'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url:'/', templateUrl:'/views/general/home.html', controller: 'HomeController'})

  .state('user', {url:'/user', templateUrl:'/views/user/user.html', abstract: true})
  .state('user.login', {url: '/login', templateUrl: '/views/user/login/login.html', controller: 'UserLoginController'})
  .state('user.edit', {url: '/edit', templateUrl: '/views/user/edit/edit.html', controller: 'UserEditController'})

  .state('profiles', {url: '/profiles', templateUrl:'/views/profiles/profiles.html', abstract: true})
  .state('profiles.create', {url: '/create', templateUrl:'/views/profiles/create/create.html', controller: 'ProfilesCreateController'})
  .state('profiles.list', {url: '', templateUrl:'/views/profiles/list/list.html', controller: 'ProfilesListController'})
  .state('profiles.edit', {url: '/{profileId}/edit/', templateUrl: '/views/profiles/edit/edit.html', controller: 'ProfilesEditController'})
  .state('profiles.show', {url: '/{userId}', params: { index: null, list: null }, templateUrl:'/views/profiles/show/show.html', controller: 'ProfilesShowController'})

  .state('users', {url: '/users', templateUrl:'/views/users/users.html', abstract: true})
  .state('users.list', {url: '', templateUrl:'/views/users/list/list.html', controller: 'UsersListController'})
  .state('users.create', {url: '/create', templateUrl:'/views/users/create/create.html', controller: 'UsersCreateController'});

}])
.run(['$rootScope', '$window', '$auth', function($rootScope, $window, $auth) {
  if ($auth.isAuthenticated()) {
    $rootScope.user = JSON.parse($window.localStorage.user);
    var user = JSON.parse($window.localStorage.user);
    $window.localStorage.user = JSON.stringify(user);
  }
}]);
