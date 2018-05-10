/**
 * Created by nikpa on 10-05-2018.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('ViewClientIssueCtrl',['$scope','$state','$window',ViewClientIssueCtrl])

    /**
     * @module New Client Issue
     * @description
     * Controller for the New Client Issue Page
     */

    function NewClientIssueCtrl($scope,$state,$window){

        $scope.test = "NewClientIssue controller successfully loaded";


    }

})();
