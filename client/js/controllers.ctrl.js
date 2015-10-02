app.controller('MainController', function(UsersFactory){
	console.log("MainController Loaded");
	var that = this;
	// UsersFactory.user = {};
	// if(that.user == null){
		// that.user = prompt("Please enter your name");
	// 	if(UsersFactory.user){
	// 		that.user = UsersFactory.loggeduser.first_name;
	// // }console.log("my name is "+that.user);
	// 	}
		
	
});

app.controller('UsersController', function(UsersFactory, $location){
	console.log("UsersController Loaded");
	var that = this;
	if(UsersFactory.loggeduser){
		that.loggeduser = UsersFactory.loggeduser;
	}
	var getUsers = function() {
		console.log("UsersController getUsers");
		UsersFactory.getUsers(function(users) {
			that.users = users;
		});
	}

	this.loginUser = function(user){
		console.log("Click - user through param Login", user);
		console.log(user);
		// console.log(that.users);
		if(user){
			UsersFactory.loginUser(user, function(user){
				// that.loggeduser = user;
				that.loggeduser = user;
				console.log(that.loggeduser[0]);
				console.log("Controller says " + that.loggeduser[0]);
				console.log(that.loggeduser[0].first_name);

				UsersFactory.saveUser(that.loggeduser[0]);
				$location.path("/");

				// console.log(user);
			});
		}
	}
	// getUsers();

	this.addUser = function(newUser){
		console.log("Clicked - newUser through param ", newUser);
		// console.log("Clicked - data through scope ", that.newUser);
		if(newUser){
			UsersFactory.addUser(newUser, function(){
				getUsers();
			})
		}
	}
});
app.controller('BeaconsController', function(UsersFactory, BeaconsFactory){
	console.log("BeaconsController Loaded");
	var that = this;
	if(UsersFactory.loggeduser){
		that.loggeduser = UsersFactory.loggeduser;
	}
	var getBeacons = function() {
		console.log("BeaconsController getBeacons");
		BeaconsFactory.getUsers(function(beacons) {
			that.beacons = beacons;
		});
	}
	// getUsers();
})
app.controller('JourneysController', function(UsersFactory, JourneysController){
	console.log("JourneysController Loaded");
	var that = this;
	if(UsersFactory.loggeduser){
		that.loggeduser = UsersFactory.loggeduser;
	}
	var getBeacons = function() {
		console.log("BeaconsController getBeacons");
		BeaconsFactory.getUsers(function(beacons) {
			that.beacons = beacons;
		});
	}
	// getUsers();
})
app.controller('LookoutsController', function(UsersFactory, LookoutsController){
	console.log("LookoutsController Loaded");
	var that = this;
	if(UsersFactory.loggeduser){
		that.loggeduser = UsersFactory.loggeduser;
	}
	var getBeacons = function() {
		console.log("BeaconsController getBeacons");
		BeaconsFactory.getUsers(function(beacons) {
			that.beacons = beacons;
		});
	}
	// getUsers();
})