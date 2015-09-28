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