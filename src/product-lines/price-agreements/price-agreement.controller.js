/**
 * Created by nikpa on 10-05-2018.
 */
//controller for Creating PriceAgreements
(function() {
    'use strict';

    angular
        .module('app')
        .controller('PriceAgreementCtrl',['$scope','$state','$window',PriceAgreementCtrl])

    /**
     * @module ProductLines
     * @description
     * Controller for the ProductLines Page
     */

    function PriceAgreementCtrl($scope,$state,$window){

        $scope.test = "CreatePriceAgreementCtrl controller successfully loaded";


    }

})();