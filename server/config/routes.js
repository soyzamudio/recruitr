'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},

  {method: 'post', path: '/auth/signup', config: require('../routes/users/register')},
  {method: 'post', path: '/auth/login', config: require('../routes/users/login')},
  {method: 'put', path: '/user/edit', config: require('../routes/users/edit')},
  {method: 'post', path: '/users/create', config: require('../routes/users/create')},
  {method: 'get', path: '/users', config: require('../routes/users/index')},
  {method: 'put', path: '/users/upgrade', config: require('../routes/users/upgrade')},
  {method: 'delete', path: '/users/{userId}/destroy', config: require('../routes/users/destroy')},

  {method: 'get', path: '/profiles', config: require('../routes/profiles/index')},
  {method: 'get', path: '/profiles/{userId}', config: require('../routes/profiles/show')},
  {method: 'post', path: '/profiles/create', config: require('../routes/profiles/create')},
  {method: 'put', path: '/profiles/{userId}/edit', config: require('../routes/profiles/edit')},

  {method: 'get', path: '/autocomplete', config: require('../routes/autocomplete/index')}
];
