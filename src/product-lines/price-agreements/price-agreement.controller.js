/**
 * Created by nikpa on 10-05-2018.
 */
//controller for Creating PriceAgreements
(function() {
    'use strict';

    angular
        .module('app')
        .controller('CreatePriceAgreementCtrl',['$scope','$state','$window',CreatePriceAgreementCtrl])

    /**
     * @module ProductLines
     * @description
     * Controller for the ProductLines Page
     */

    function ProductLinesCtrl($scope,$state,$window){

        $scope.test = "CreatePriceAgreementCtrl controller successfully loaded";


    }

})();