angular.module('poogleApp').factory('pooUserDataFetcher', function (){

	var someId = "ChIJxXSgfDyuEmsR3X5VXGjBkFg"
	var otherId = "ChIJt9trB0euEmsRHdhhqjr37n4"
	var toilets = { }
      toilets[someId] = { 
      	bestReviews : [ { description : "Best poo of my life", upvotes : 5, downvotes : 0 } ] , upvotes: 4, downvotes: 1 }
      toilets[otherId] = { 
      	bestReviews : [ { description : "I'm not really sure where i was", upvotes : 3, downvotes : 2} ], upvotes: 4, downvotes: 1 }
      // { place : 'Mashov toilets', bestReview : 'By far the toilet with the most exotic smell' , upvotes: 0, downvotes: 1000 },
      // { place : 'Kneset israel', bestReview : 'Shit is all over the place', upvotes: 100, downvotes: 100 }
    // };

	this.getUserDataFor = function(id){
		return { upvotes : 0, downvotes : 0 };
		//toilets[id];
	}

	return this;
})