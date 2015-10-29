app.controller('JourneysController', function(UserFactory, BeaconFactory){
	console.log("JourneysController Loaded");
	var that = this;
	if(UserFactory.loggeduser){
		that.loggeduser = UsersFactory.loggeduser;
	}
	if(BeaconFactory.currentbeacon){
		that.currentbeacon = BeaconsFactory.currentbeacon;
	}
	var getBeacons = function() {
		console.log("BeaconsController getBeacons");
		BeaconFactory.getUsers(function(beacons) {
			that.beacons = beacons;
		});
	}
})