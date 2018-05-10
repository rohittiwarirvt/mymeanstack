/**
 * Created by nikpa on 10-05-2018.
 */
//controller for viewing Customers
(function() {
    'use strict';

    angular
        .module('app')
        .controller('ViewCustomersCtrl',['$scope','$state','$window',ViewCustomersCtrl])

    /**
     * @module Clients
     * @description
     * Controller for the Clients Page
     */

    function CustomersCtrl($scope,$state,$window){

        $scope.test = "Customers controller successfully loaded";



    }

})();