'use strict';

/**
 * @ngdoc function
 * @name poogleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the poogleApp
 */
angular.module('poogleApp')
  .controller('MainCtrl', function ($scope, $timeout, ngGPlacesAPI, pooUserDataFetcher, geolocation) {

    $scope.getStyle = function(toilet) {
    	if (toilet === undefined || toilet.userData === undefined) {
        return {};
      }
    	var downvotes = toilet.userData.downvotes;
    	var upvotes = toilet.userData.upvotes;
    	var total = Math.max(1,downvotes + upvotes);
    	return { color : 'rgb(' + Math.floor(255*(downvotes / total)) + ', ' + Math.floor(255*(upvotes / total)) + ', 0)' };
    };
    $scope.upVote = function (toilet) {
    	if(toilet.userData.upvotes === undefined) {
        toilet.userData.upvotes = 1;
      }
		  else {
        toilet.userData.upvotes +=1;
      }
    	toilet.toiletStyle = 'getStyle(toilet)';
    };
    $scope.downVote = function (toilet) {
    	if(toilet.userData.downvotes === undefined) {
        toilet.userData.downvotes = 1;
      }
			else {
        toilet.userData.downvotes +=1;
      }
    	toilet.toiletStyle = 'getStyle(toilet)';
    };

	$scope.nearByPlaces = function(data, coords){
		ngGPlacesAPI.nearbySearch(coords).then(function(data){
				$scope.data = data;
				//console.log(data);
				data.forEach(function(place){
					place.userData = pooUserDataFetcher.getUserDataFor();
				});
		});
	};

	geolocation.getLocation().then(function(data){
		$scope.coords = {latitude:data.coords.latitude, longitude:data.coords.longitude};
		$scope.nearByPlaces(data, $scope.coords);
		}, function(error)
		{
			console.log(error);
			//Default location
			$scope.coords = {latitude:-33.8665433, longitude:151.1956316};
			$scope.nearByPlaces($scope.data, $scope.coords);
		});

});
