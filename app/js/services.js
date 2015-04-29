'use strict';

/* Services */

var etabServices = angular.module('etabServices', ['ngResource']);

etabServices.factory('Etab', ['$resource',
  function($resource){
    return $resource('etabs/:etabId.json', {}, {
      query: {method:'GET', params:{etabId:'etabs'}, isArray:true}
    });
  }]);
