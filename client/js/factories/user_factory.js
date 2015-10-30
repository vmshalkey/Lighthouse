app.factory('UserFactory', function($http, $location) {

	return {

		getUsers: function(id, callback){
			console.log("UserFactory getUsers");
			var url = "/users/" + id;
			console.log("url", url);
			$http.get(url).success(function(user) {
				callback(user);
				this.loggeduser = user;
				console.log("logged user is ", this.loggeduser);
			})
			// var response = [{first_name: 'Winners!'}];
			// callback(response);
		},

		saveUser: function(user){
			console.log("UserFactory saveUser");
			this.loggeduser = user;
			console.log("UserFactory saved " + this.loggeduser.first_name);
		},
		addUser: function(newUser, callback){
			console.log("UserFactory addUser", newUser);
			$http.post('/users', newUser).success(function(response){
				callback(response);

			});
			$location.path("/profile");
		}
	}
})