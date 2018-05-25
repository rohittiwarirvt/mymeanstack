//service for the users page


(function(){
  'use strict';
    angular
    .module('app')
    .factory('userEntityService', ['$http', 'USER_ENDPOINTS', 'DOMAIN', '$log',function($http, USER_ENDPOINTS, DOMAIN, $log) {

      function listUser() {
        return $http({
          'method': 'GET',
           'url': DOMAIN + USER_ENDPOINTS.userEndPoint
        });
      }

      function createUser(params) {
        return $http({
          'method': 'POST',
          'url' : DOMAIN + USER_ENDPOINTS.userEndPoint,
          'data' : params
        });
      }

      return {
        listUser: listUser,
        createUser: createUser,
      };
    }])
    .constant('USER_ENDPOINTS', {
      userEndPoint: '/api/backendusers'
    });

})();
