/**
 * Created by nikpa on 10-05-2018.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('ViewUsersCtrl',['$scope','$state','$window',ViewUsersCtrl])

    /**
     * @module Suppliers
     * @description
     * Controller for the Suppliers Page
     */

    function ViewUsersCtrl($scope,$state,$window){

        $scope.test = "Viewing users controller successfully loaded";


    }

})();