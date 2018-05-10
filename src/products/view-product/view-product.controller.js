/**
 * Created by nikpa on 10-05-2018.
 */
/**
 * Created by nikpa on 10-05-2018.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('ViewProductCtrl',['$scope','$state','$window',ViewProductCtrl])

    /**
     * @module New Client Issue
     * @description
     * Controller for the New Client Issue Page
     */

    function ViewProductCtrl($scope,$state,$window){

        $scope.test = "NewClientIssue controller successfully loaded";


    }

})();
