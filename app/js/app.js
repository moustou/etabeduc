'use strict';

/* App Module */

var etabApp = angular.module('etabApp', [
  'ngRoute',
  'etabAnimations',
  'etabControllers',
  'etabFilters',
  'etabServices'
]);

etabApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/etabs', {
        templateUrl: 'partials/etab-list.html',
        controller: 'etabListCtrl'
      }).
      otherwise({
        redirectTo: '/etabs'
      });
  }]);
