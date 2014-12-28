'use strict';

/**
 * @ngdoc function
 * @name poogleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the poogleApp
 */
angular.module('poogleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.toilets = [
      { place : 'Mashov toilets', bestReview : 'By far the toilet with the most exotic smell'}
    ];
  });
