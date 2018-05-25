//controller for Users
(function() {
    'use strict';

  angular
    .module('app')
    .controller('UsersCtrl',['$scope','userEntityService', '$log','$window', function UsersCtrl($scope, userEntityService, $log, $window){
      debugger;
      $scope.userList = $scope.userList || [];

      var getListOfUser = function () {
        userEntityService
          .listUser()
          .then(function(response) {
            $scope.userList = response.data;
          }, function(error) {
              $log.error(error);
          });
      }
      getListOfUser();
    }]);
})();
