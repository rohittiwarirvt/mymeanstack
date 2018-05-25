/**
 * Created by nikpa on 10-05-2018.
 */
(function() {
'use strict';

  angular
    .module('app')
    .controller('NewUserCtrl', ['$scope','userEntityService', '$log', NewUserCtrl]);

/**
 * @module NewUser
 * @description
 * Controller for the NewUserPage
 */

  function NewUserCtrl($scope, userEntityService, $log) {

    $scope.createUser = function() {
      var userObjs = {
        name : $scope.name,
        username: $scope.username,
        password: $scope.password,
        email: $scope.email,
        is_active: $scope.is_active,
        activation_update_date: Date.now(),
        created: Date.now()
      };
      userEntityService.createUser(userObjs)
        .then(function(response) {
          console.log(response.data);
        }, function(error){
          $log.error(error);
        });
    }
  }

})();
