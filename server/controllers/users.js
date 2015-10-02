var User = mongoose.model('User');

module.exports = (function() {
	return {
		index: function(request, response) {
			console.log("Server / Ctrl / Users - Index")
			User.find({$query:{}, $orderby:{date:-1}}, function(err, appts){
				console.log("searching");
				if(err){
					response.json([{date:"Updating, pleast be patient..."}]);
					// console.log(err);
				}
				else{
					response.json(appts);
					console.log(appts);
				}
			});

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
			user.password = request.body.password;
			user.save(function(err){
				if(err){
					console.log('error')
					response.json({status:false});
					// response.json([{first_name:"Updating, pleast be patient..."}]);
				}
				else{
					response.json({status:true});
				}
			})
		},
		login: function(request, response){
			console.log("Server / Ctrl / Users - Login");
			console.log(request.body.email);
			console.log(request.body.password);
			User.find({$query:{email: request.body.email, password:request.body.password}}, function(err, user){
				console.log("searching");
				if(err){
					response.json([{date:"Updating, pleast be patient..."}]);
					// console.log(err);
				}
				else{
					response.json(user);
				}
			}); 
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