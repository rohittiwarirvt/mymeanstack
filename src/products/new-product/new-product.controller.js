/**
 * Created by nikpa on 10-05-2018.
 */

(function() {
    'use strict';

    angular
        .module('app')
        .controller('NewProductCtrl',['$scope','$state','$window',NewProductCtrl])



    function NewProductCtrl($scope,$state,$window){

        $scope.test = "NewProductCtrl controller successfully loaded";


    }

})();
