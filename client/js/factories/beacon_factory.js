app.factory('BeaconFactory', function($http, $location) {
	return {
		getBeacons: function(callback){
			console.log("BeaconFactory getBeacons");
			$http.get('/beacons').success(function(response) {
				console.log(response);
				callback(response);
			})
			// var response = [{first_name: 'Winners!'}];
			// callback(response);
		},
		addBeacon: function(newBeacon, callback){
			console.log("BeaconFactory addBeacon", newBeacon);
			$http.post('/beacons', newBeacon).success(function(response){
				callback(response);

			});
			$location.path("/beacons");
		},
		selectBeacon: function(beacon){
			console.log("BeaconFactory selectBeacon");
			this.currentbeacon = beacon;
			console.log("BeaconFactory selected " + this.currentbeacon.beacon_name);
			$location.path("/beacons");
		},
		removeBeacon: function(beacon, callback){
			console.log("BeaconFactory removeBeacon", beacon);
			$http.delete('/beacons/'+beacon._id).success(function(response){
				callback();
			});
			//reset currentbeacon to null
			this.currentbeacon = null;
			$location.url("/beacons");
		},
	}
})