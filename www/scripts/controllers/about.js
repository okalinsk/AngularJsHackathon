'use strict';

/**
 * @ngdoc function
 * @name poogleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the poogleApp
 */
angular.module('poogleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
