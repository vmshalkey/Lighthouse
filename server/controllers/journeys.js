//var Journey = mongoose.model('Journey');

module.exports = (function() {
	return {
		retrieve: function(request, response){
			console.log("S | journeys.js retrieve:", request.body);
			var query = "SELECT * FROM journeys";
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

		index: function(request, response){
			console.log("S | journeys.js index:", request.body);
			var query = "SELECT journeys.id as journey_id, journeys.name as journey_name, journeys.description as journey_description, journeys.date_time, journeys.user_id, journeys.beacon_id, journeys.created_at, journeys.updated_at, beacons.id as beacon_id, beacons.name as beacons_name, beacons.description as beacon_description FROM journeys JOIN beacons on journeys.beacon_id = beacons.id WHERE journeys.user_id = 1";
			con.query(query, function (err, rows){
				console.log("ran index query");
				if (err) {
					return response.json(err);
				}
				else {
					console.log("rows", rows);
					return response.json(rows);
				}
			});
		},

		create: function(request, response) {
			console.log("Server / Ctrl / Journeys - Create");
			var journey = new Journey(request.body);
			console.log(journey);
			journey.save(function(err){
				if(err){
					console.log('error');
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		},

		destroy: function(request, response){
			console.log("Server / Ctrl / Journeys - Destroy");
			console.log("Destroy params id:", request.params.id);
			Journey.remove({_id:request.params.id}, function(err){
				if(err){
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		}
	}
})();