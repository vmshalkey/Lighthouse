app.factory('JourneyFactory', function($http, $location) {
	return {
		getJourneys: function(callback){
			console.log("JourneyFactory getBeacons");
			$http.get('/journeys').success(function(response) {
				console.log(response);
				callback(response);
			})
		},
		selectJourney: function(journey){
			console.log("JourneyFactory selectJourney");
			this.currentjourney = journey;
			console.log("JourneyFactory selected " + this.currentjourney.journey_name);
			$location.path("/journeys");
		},
	}
})