'use strict';

angular.module('angular-prototype')
.factory('Email', ['$http', function($http) {

  var Email = {};

  Email.mandrill = function(key, to, from, message, subject, name) {
    var data = {
      'key':     key,
      'message': {
        'from_email': from,
        'to':         [
          {
            'email': to,
            'to':    'to'
          }
        ],
        'autotext': 'true',
        'subject':  name + ' - ' + subject,
        'html':     message
      }
    };
    return $http({
      method: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      headers: {'Authorization':null},
      data: data
    });
  };

  // Email.mandrill = function(name, email, msg, subject) {
  //   var data = {
  //     key: 'DV6iDBf0ZF_bcscqfJalXw',
  //     message: {
  //       from_email: email,
  //       // from_name: name,
  //       to: [{ email: 'jose@josezamudio.me', to: 'Agile Labs' }],
  //       autotext: 'true',
  //       subject: subject,
  //       html: name + ' has sent you the following message: <br><br>' + msg
  //     }
  //   };
  //   return $http.post('https://mandrillapp.com/api/1.0/messages/send.json', data);
  // };

  return Email;
}]);
