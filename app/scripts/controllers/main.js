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
      { place : 'crown plasa hotel toilet', bestReview : "Best poo of my life" }
      { place : 'Mashov toilets', bestReview : 'By far the toilet with the most exotic smell'}
    ];
  });
