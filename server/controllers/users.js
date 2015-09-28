var Users = mongoose.model('User');

module.exports = (function() {
	return {
		index: function(request, response) {
			console.log("Server / Ctrl / Users - Index")
			var users = [{first_name: 'Winners!!!!!'}];
			response.json(users);

		},
		new: function(request, response) {
			console.log("Server / Ctrl / Users - New")
		},
		create: function(request, response) {
			console.log("Server / Ctrl / Users - Create")
		},
		edit: function(request, response) {
			console.log("Server / Ctrl / Users - Edit")
		},
		update: function(request, response) {
			console.log("Server / Ctrl / Users - Update")
		},
		show: function(request, response) {
			console.log("Server / Ctrl / Users - Show")
		},
		destroy: function(request, response) {
			console.log("Server / Ctrl / Users - Destroy")
		}
	}
})();