/**
 * Created by nikpa on 10-05-2018.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('ViewPlanCtrl',['$scope','$state','$window',ViewPlanCtrl])

    /**
     * @module NewPlan
     * @description
     * Controller for the NewPlan Page
     */

    function ViewPlanCtrl($scope,$state,$window){

        $scope.test = "NewPlan controller successfully loaded";
        this.myDate = new Date();


    }

})();
