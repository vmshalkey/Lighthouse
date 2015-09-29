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
			console.log("Server / Ctrl / Users - Create");
			var user = new User;
			user.first_name = request.body.first_name;
			user.last_name = request.body.last_name;
			user.email = request.body.email;
			user.email = request.body.password;
			user.save(function(err){
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