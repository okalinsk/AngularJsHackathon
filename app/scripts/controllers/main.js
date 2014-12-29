'use strict';

/**
 * @ngdoc function
 * @name poogleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the poogleApp
 */
angular.module('poogleApp')
  .controller('MainCtrl', function ($scope, ngGPlacesAPI) {
    $scope.toilets = [
      { place : 'crown plasa hotel toilet', bestReview : "Best poo of my life" , upvotes: 4, downvotes: 1 },
      { place : 'Mashov toilets', bestReview : 'By far the toilet with the most exotic smell' , upvotes: 0, downvotes: 1000 },
      { place : 'Kneset israel', bestReview : 'Shit is all over the place', upvotes: 100, downvotes: 100 }
    ];

    $scope.getStyle = function(toilet) {
    	console.log("Got style for " + toilet.place)
    	var downvotes = Math.max(1, toilet.downvotes);
    	var upvotes = toilet.upvotes;
    	var total = downvotes + upvotes;
    	return { color : "rgb(" + Math.floor(255*(downvotes / total)) + ", " + Math.floor(255*(upvotes / total)) + ", 0)" }
    }
    $scope.upVote = function (toilet) {
    	toilet.upvotes += 1;
    	toilet.toiletStyle = "getStyle(toilet)"
    }
    $scope.downVote = function (toilet) {
    	toilet.downvotes += 1;
    	toilet.toiletStyle = "getStyle(toilet)"
    }

	$scope.data = ngGPlacesAPI.nearbySearch({latitude:-33.8665433, longitude:151.1956316}).then(
		function(data){
			return data;
		});
  });
