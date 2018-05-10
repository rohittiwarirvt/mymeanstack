/**
 * Created by nikpa on 10-05-2018.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('NewUserCtrl',['$scope','$state','$window',NewUserCtrl])

    /**
     * @module NewUser
     * @description
     * Controller for the NewUserPage
     */

    function NewSupplierCtrl($scope,$state,$window){

        $scope.test = "NewUserCtrl controller successfully loaded";


    }

})();