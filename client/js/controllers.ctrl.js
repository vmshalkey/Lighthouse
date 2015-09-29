app.controller('MainController', function(){
	console.log("MainController Loaded");
})

.controller('UsersController', function(UsersFactory){
	console.log("UsersController Loaded");
	var that = this;
	var getUsers = function() {
		console.log("UsersController getUsers");
		UsersFactory.getUsers(function(users) {
			that.users = users;
		});
	}
	getUsers();
})
.controller('BeaconsController', function(BeaconsFactory){
	console.log("BeaconsController Loaded");
	var that = this;
	var getBeacons = function() {
		console.log("BeaconsController getBeacons");
		BeaconsFactory.getUsers(function(beacons) {
			that.beacons = beacons;
		});
	}
	getUsers();
})