
module.exports = (function() {

	return {

		retrieve: function(request, response){
			console.log("S | users.js retrieve:", request.params.id);
			var query = "SELECT * FROM users WHERE auth0_id = ?";
			var values = request.params.id;
			con.query(query, values, function (err, rows){
				if (err) {
					response.json(err);
				}
				else {
					console.log("rows", rows);
					response.json(rows);
				}
			});
		},

		index: function(request, response) {
			console.log("Server / Ctrl / Users - Index")
			User.find({$query:{}}, function(err, users){
				console.log("searching");
				if(err){
					response.json([{date:"Updating, pleast be patient..."}]);
					// console.log(err);
				}
				else{
					response.json(users);
					console.log(users);
				}
			});

		},
		new: function(request, response) {
			console.log("Server / Ctrl / Users - New")
		},
		create: function(request, response) {
			console.log("S | users.js create:", request.body);
			var query = "INSERT INTO users (`auth0_id`, `first_name`, `last_name`, `username`, `email`, `created_at`, `updated_at`) VALUES (?, ?, ?, ?, ?, NOW(), NOW())";
			var values = [request.body.auth0_id, request.body.first_name, request.body.last_name, request.body.username, request.body.email];
			con.query(query, values, function (err, rows){
				if (err) {
					response.json(err);
				}
				else {
					console.log("rows", rows);
					response.json(rows);
				}
			});
		}
	}
})();