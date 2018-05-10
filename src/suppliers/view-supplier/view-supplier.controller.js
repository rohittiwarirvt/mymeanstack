/**
 * Created by nikpa on 10-05-2018.
 */
//controller for viewing Suppliers
(function() {
    'use strict';

    angular
        .module('app')
        .controller('ViewSuppliersCtrl',['$scope','$state','$window',ViewSuppliersCtrl])

    /**
     * @module Suppliers
     * @description
     * Controller for the Suppliers Page
     */

    function ViewSuppliersCtrl($scope,$state,$window){

        $scope.test = "Viewing Suppliers controller successfully loaded";


    }

})();
