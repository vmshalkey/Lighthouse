app.factory('MainFactory', function($http){
	return {};
})

app.factory('UsersFactory', function($http, $location) {
	return {

		getUsers: function(callback){
			console.log("UsersFactory getUsers");
			$http.get('/users').success(function(response) {
				callback(response);
			})
			// var response = [{first_name: 'Winners!'}];
			// callback(response);
		},
		loginUser: function(user, callback){
			console.log("UsersFactory loginUser");
			$http.post('/users/login', user).success(function(response){
				callback(response);
				this.loggeduser = user;
				console.log("logged user is " + this.loggeduser);
				console.log(this.loggeduser);
			});
		},
		saveUser: function(user){
			console.log("UsersFactory saveUser");
			this.loggeduser = user;
			console.log("UsersFactory saved " + this.loggeduser.first_name);
		},
		addUser: function(newUser, callback){
			console.log("UsersFactory addUser", newUser);
			$http.post('/users', newUser).success(function(response){
				callback(response);

			});
			$location.path("/");
		}
	}
})
app.factory('BeaconsFactory', function($http, $location) {
	return {
		getBeacons: function(callback){
			console.log("BeaconsFactory getBeacons");
			$http.get('/beacons').success(function(response) {
				callback(response);
			})
			// var response = [{first_name: 'Winners!'}];
			// callback(response);
		},
		addBeacon: function(newBeacon, callback){
			console.log("BeaconsFactory addBeacon", newBeacon);
			$http.post('/beacons', newBeacon).success(function(response){
				callback(response);

			});
			$location.path("/beacons");
		},
		selectBeacon: function(beacon){
			console.log("BeaconsFactory selectBeacon");
			this.currentbeacon = beacon;
			console.log("BeaconsFactory selected " + this.currentbeacon.beacon_name);
			$location.path("/beacons");
		},
		removeBeacon: function(beacon, callback){
			console.log("BeaconsFactory removeBeacon", beacon);
			$http.delete('/beacons/'+beacon._id).success(function(response){
				callback();
			});
			//reset currentbeacon to null
			this.currentbeacon = null;
			$location.url("/beacons");
		},
	}
})
app.factory('LookoutsController', function($http) {
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
app.factory('JourneysController', function($http) {
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