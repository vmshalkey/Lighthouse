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