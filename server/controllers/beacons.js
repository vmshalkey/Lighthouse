var Beacons = mongoose.model('Beacon');

module.exports = (function() {
	return {
		index: function(request, response) {
			console.log("Server / Ctrl / Beacons - Index")
			var beacons = [{beacon_name: 'Winners!!!!!'}];
			response.json(beacons);

		},
		new: function(request, response) {
			console.log("Server / Ctrl / Beacons - New")
		},
		create: function(request, response) {
			console.log("Server / Ctrl / Beacons - Create")
		},
		edit: function(request, response) {
			console.log("Server / Ctrl / Beacons - Edit")
		},
		update: function(request, response) {
			console.log("Server / Ctrl / Beacons - Update")
		},
		show: function(request, response) {
			console.log("Server / Ctrl / Beacons - Show")
		},
		destroy: function(request, response) {
			console.log("Server / Ctrl / Beacons - Destroy")
		}
	}
})();