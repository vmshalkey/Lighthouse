app.controller('JourneysController', function(UserFactory, JourneyFactory, $location){
	console.log("JourneysController Loaded");
	var that = this;
	that.journeys = {};
	if(JourneyFactory.currentjourney){
		that.currentjourney = JourneyFactory.currentjourney;
	}
	if(UserFactory.loggeduser){
		that.loggeduser = UsersFactory.loggeduser;
	}
	var getJourneys = function() {
		console.log("JourneysController getJourneys");
		JourneyFactory.getJourneys(function(journeys) {
			that.journeys = journeys;
			console.log(that.journeys, "hello I am back in the controller");
		});
	}
	this.selectJourney = function(journey){
		console.log("Clicked - journey through param ", journey);
		if(journey){
			JourneyFactory.selectJourney(journey);
			console.log('selecting journy');
			that.currentjourney = JourneyFactory.currentjourney;
			console.log(that.currentjourney);
			getJourneys();
		}
	}
	getJourneys();
})