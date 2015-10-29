app.controller('LookoutsController', function(UserFactory, BeaconFactory){
	console.log("LookoutsController Loaded");
	var that = this;
	if(UserFactory.loggeduser){
		that.loggeduser = UsersFactory.loggeduser;
	}
	var getBeacons = function() {
		console.log("BeaconsController getBeacons");
		BeaconFactory.getUsers(function(beacons) {
			that.beacons = beacons;
		});
	}
})