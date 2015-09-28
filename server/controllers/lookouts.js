var Lookouts = mongoose.model('Lookout');

module.exports = (function() {
	return {
		index: function(request, response) {
			console.log("Server / Ctrl / Lookouts - Index")
			var lookouts = [{name: 'Winners!!!!!'}];
			response.json(lookouts);

		},
		new: function(request, response) {
			console.log("Server / Ctrl / Lookouts - New")
		},
		create: function(request, response) {
			console.log("Server / Ctrl / Lookouts - Create")
		},
		edit: function(request, response) {
			console.log("Server / Ctrl / Lookouts - Edit")
		},
		update: function(request, response) {
			console.log("Server / Ctrl / Lookouts - Update")
		},
		show: function(request, response) {
			console.log("Server / Ctrl / Lookouts - Show")
		},
		destroy: function(request, response) {
			console.log("Server / Ctrl / Lookouts - Destroy")
		}
	}
})();