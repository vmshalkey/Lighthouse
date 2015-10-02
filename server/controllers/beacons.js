var Beacon = mongoose.model('Beacon');

module.exports = (function() {
	return {
		index: function(request, response) {
			console.log("Server / Ctrl / Beacons - Index");
			Beacon.find({$query:{}}, function(err, beacons){
				console.log("searching");
				if(err){
					response.json([{date:"Updating, pleast be patient..."}]);
					// console.log(err);
				}
				else{
					response.json(beacons);
					console.log(beacons);
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