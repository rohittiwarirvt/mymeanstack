'use strict';

angular.module('app')
  .constant('PORT','9999')
  .constant('HOST','localhost')
  .provider('DOMAIN', function(HOST, PORT) {
    this.domain  = "http://" + HOST + ":" + PORT;
    this.value = function() {
      return this.domain
    };
    this.$get = this.value;
  });
