var Beacon = mongoose.model('Beacon');

module.exports = (function() {

	return {

		retrieve: function(request, response){
			console.log("S | beacons.js retrieve:", request.body);
			var query = "SELECT * FROM beacons";
			con.query(query, function (err, rows){
				if (err) {
					return response.json(err);
				}
				else {
					console.log("rows", rows);
					return response.json(rows);
				}
			});
		},

		index: function(request, response){
			console.log("S | beacons.js index:", request.body);
			var query = "SELECT * FROM beacons WHERE id = ?";
			var values = [params.user_id];
			con.query(query, values, function (err, rows){
				console.log("ran retrieve query");
				if (err) {
					return response.json(err);
				}
				else {
					console.log("rows", rows);
					return response.json(rows);
				}
			});
		},

		// new: function(request, response) {
		// 	console.log("Server / Ctrl / Beacons - New")
		// },
		create: function(request, response) {
			console.log("Server / Ctrl / Beacons - Create");
			var beacon = new Beacon(request.body);
			// beacon = request.body;
			console.log(beacon);
			// beacon.beacon_first_name = request.body.first_name;
			// beacon.beacon_last_name = request.body.last_name;
			// beacon.description = request.body.email;
			// beacon.status = request.body.password;
			beacon.save(function(err){
				if(err){
					console.log('error');
					response.json({status:false});
					// response.json([{first_name:"Updating, pleast be patient..."}]);
				}
				else{
					response.json({status:true});
				}
			})
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / Beacons - Destroy");
			console.log("Destroy params id:", request.params.id);
			Beacon.remove({_id:request.params.id}, function(err){
				if(err){
					response.json({status:false});
					// response.json([{first_name:"Updating, pleast be patient..."}]);
				}
				else{
					response.json({status:true});
				}
			})
		},

		destroy: function(request, response){
			console.log("S | beacons.js destroy:", request.params.id);
			var query = "DELETE FROM beacons WHERE id =";

			con.query(query, function (err, rows){
				console.log("ran retrieve query");
				if (err) {
					return response.json(err);
				}
				else {
					console.log("rows", rows);
					return response.json(rows);
				}
			});
		},



		edit: function(request, response) {
			console.log("Server / Ctrl / Beacons - Edit")
		},
		update: function(request, response) {
			console.log("Server / Ctrl / Beacons - Update")
		},
		show: function(request, response) {
			console.log("Server / Ctrl / Beacons - Show")
		}
	}
})();