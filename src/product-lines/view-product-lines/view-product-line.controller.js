/**
 * Created by nikpa on 10-05-2018.
 */
//controller for viewing Product Lines
(function() {
    'use strict';

    angular
        .module('app')
        .controller('ViewProductLinesCtrl',['$scope','$state','$window',ViewProductLinesCtrl])

    /**
     * @module ProductLines
     * @description
     * Controller for the ProductLines Page
     */

    function ProductLinesCtrl($scope,$state,$window){

        $scope.test = "ViewProductLines controller successfully loaded";


    }

})();
