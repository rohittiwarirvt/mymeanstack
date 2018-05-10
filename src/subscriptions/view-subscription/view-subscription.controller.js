/**
 * Created by nikpa on 10-05-2018.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('ViewSubscriptionsCtrl',['$scope','$state','$window',ViewSubscriptionsCtrl])

    /**
     * @module Subscriptions
     * @description
     * Controller for the View Subscriptions Page
     */

    function SubscriptionsCtrl($scope,$state,$window){

        $scope.test = "View Subscriptions controller successfully loaded";


    }

})();
