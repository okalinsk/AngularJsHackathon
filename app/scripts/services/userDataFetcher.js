'use strict';

angular.module('poogleApp').factory('pooUserDataFetcher', function (){
	this.getUserDataFor = function(){
		return { upvotes : 0, downvotes : 0 };
	};

	return this;
});
