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
      { place : 'crown plasa hotel toilet', bestReview : "Best poo of my life" , upvotes: 4, downvotes: 1},
      { place : 'Mashov toilets', bestReview : 'By far the toilet with the most exotic smell' , upvotes: 0, downvotes: 1000}
    ];
  });
