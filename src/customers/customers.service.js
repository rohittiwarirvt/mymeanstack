//service for the customers page
(function () {
    'use strict';

    angular.module('app')
        .service('CustomersService', ['$resource', 'BASE_URL', CustomersService]);

    /**
     * @module CustomersService
     * @description
     * Service required for Customers Page
     */
    // function CustomersService($resource, BASE_URL) {

    //     this.template = function () {
    //         return $resource(BASE_URL + '/self/loans/template');
    //     }

    //     this.loan = function () {
    //         return $resource(BASE_URL + '/self/loans');
    //     }
    // }

})();