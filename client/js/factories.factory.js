app.factory('UsersFactory', function($http) {
	return {
		getUsers: function(callback){
			console.log("UsersFactory getUsers");
			$http.get('/users').success(function(response) {
				callback(response);
			})
			// var response = [{first_name: 'Winners!'}];
			// callback(response);
		}
	}
})
app.factory('BeaconsFactory', function($http) {
	return {
		getBeacons: function(callback){
			console.log("BeaconsFactory getBeacons");
			$http.get('/beacons').success(function(response) {
				callback(response);
			})
			// var response = [{first_name: 'Winners!'}];
			// callback(response);
		}
	}
})