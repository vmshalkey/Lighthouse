app.controller('BeaconsController', function(UserFactory, BeaconFactory, $location){
	console.log("BeaconsController Loaded");
	var that = this;
	that.beacons = {};
	if(BeaconFactory.currentbeacon){
		that.currentbeacon = BeaconsFactory.currentbeacon;
	}

	if(UserFactory.loggeduser){
		that.loggeduser = UserFactory.loggeduser;
	}
	var getBeacons = function() {
		console.log("BeaconsController getBeacons");
		BeaconFactory.getBeacons(function(beacons) {
			that.beacons = beacons;
			console.log(that.beacons, "hello I am back i the controller");
		});
	}
	this.addBeacon = function(newBeacon){
		console.log("Clicked - newBeacon through param ", newBeacon);
		newBeacon.beacon_first_name = UserFactory.loggeduser.first_name;
		newBeacon.beacon_last_name = UserFactory.loggeduser.last_name;
		if(newBeacon){
			BeaconFactory.addBeacon(newBeacon, function(){
				getBeacons();
			})
		}
	}
	this.selectBeacon = function(beacon){
		console.log("Clicked - beacon through param ", beacon);
		if(beacon){
			BeaconFactory.selectBeacon(beacon);
			console.log('selecting beacon');
			that.currentbeacon = BeaconFactory.currentbeacon;
			console.log(that.currentbeacon);
			getBeacons();
		}
	}
	this.removeBeacon = function(currentbeacon){
		console.log("removeBeacon", currentbeacon);
		BeaconFactory.removeBeacon(currentbeacon, function(){
			getBeacons();
		});
		// $location.path("/beacons");
		that.currentbeacon = null;

	}
	getBeacons();
})