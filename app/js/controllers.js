'use strict';

/* Controllers */

var etabControllers = angular.module('etabControllers', []);


etabControllers.controller('etabListCtrl', ['$scope', 'Etab',
  function($scope, Etab) {
    $scope.etabs = Etab.query();
    $scope.orderProp = 'nom_etab';
  }]);
etabControllers.controller('etabDetailCtrl', ['$scope', '$routeParams', 'Etab',
  function($scope, $routeParams, Etab) {
    $scope.etab = Etab.get({etabId: $routeParams.etabId}, function(etab) {
      $scope.image = etab.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.image = imageUrl;
    }
  }]);
