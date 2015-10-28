var express = require('express')
var app = express();
var port = 8000;
var server = app.listen(port, function () {
	console.log('--------------------');
	console.log('--------'+port+'--------');
	console.log('--------------------');
});


// Sockets
// io = require('socket.io').listen(server)

// Body Parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())

// Session
var session = require('express-session')
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}))

app.use(express.static(__dirname + '/client'))

// Mongoose
require('./server/config/mongoose.js');
// HTTP Routes
require('./server/config/routes.js')(app);
// Socket Routes
// require('./server/config/socket/routes.js')(app);

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "lighthouse"
});

con.connect(function(err){
	if(err){
		console.log('Error connecting to database');
		return;
	}
	console.log('Connection to MySQL DB established');
});

con.end(function(err) {
	// The connection is terminated gracefully
	// Ensures all previously enqueued queries are still
	// before sending a COM_QUIT packet to the MySQL server.
});