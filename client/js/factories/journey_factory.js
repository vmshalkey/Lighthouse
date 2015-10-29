app.factory('JourneyFactory', function($http) {
	return {
		getBeacons: function(callback){
			console.log("BeaconFactory getBeacons");
			$http.get('/beacons').success(function(response) {
				callback(response);
			})
			// var response = [{first_name: 'Winners!'}];
			// callback(response);
		}
	}
})