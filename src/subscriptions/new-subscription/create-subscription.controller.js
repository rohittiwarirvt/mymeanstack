/**
 * Created by nikpa on 10-05-2018.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('CreateSubscriptionCtrl',['$scope','$state','$window',CreateSubscriptionCtrl])

    /**
     * @module NewSupplier
     * @description
     * Controller for the NewSupplier Page
     */

    function CreateSubscriptionCtrl($scope,$state,$window){

        $scope.test = "CreateSubscriptionCtrl controller successfully loaded";


    }

})();