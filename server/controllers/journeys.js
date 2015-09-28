var Journeys = mongoose.model('Journey');

module.exports = (function() {
	return {
		index: function(request, response) {
			console.log("Server / Ctrl / Journeys - Index")
			var journeys = [{name: 'Winners!!!!!'}];
			response.json(journeys);

		},
		new: function(request, response) {
			console.log("Server / Ctrl / Journeys - New")
		},
		create: function(request, response) {
			console.log("Server / Ctrl / Journeys - Create")
		},
		edit: function(request, response) {
			console.log("Server / Ctrl / Journeys - Edit")
		},
		update: function(request, response) {
			console.log("Server / Ctrl / Journeys - Update")
		},
		show: function(request, response) {
			console.log("Server / Ctrl / Journeys - Show")
		},
		destroy: function(request, response) {
			console.log("Server / Ctrl / Journeys - Destroy")
		}
	}
})();