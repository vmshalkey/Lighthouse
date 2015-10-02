module.exports = function(app) {
	var users = require('../controllers/users.js');
	var beacons = require('../controllers/beacons.js')

//User
	// Index
	app.get('/users', function(request, response) { users.index(request, response) })
	// New
	// .get('/users/new', function(request, response) { users.create(request, response) })
	// Show
	.get('/users/:id', function(request, response) { users.show(request, response) })
	// Edit
	.post('/users/:id/edit', function(request, response) { users.update(request, response) })
	// Create
	
	//Destroy .delete('/users/:id')
	.post('/users/:id/destroy', function(request, response) { users. destroy(request, response) })
	// Update .put/patch('/users/:id')
	.post('/users/:id/update', function(request, response) { users.update(request, response) })
//
	//add user route
	// .get('/users/new', function(request, response) { users.create(request, response) })
	.post('/users', function(request, response) { users.create(request, response) })
	//log in user
	.post('/users/login', function(request, response){ users.login(request,response)})
	.get('/beacons', function(request, response){ beacons.index(request, response)})
	.post('/beacons', function(request, response){ beacons.create(request, response)})
}