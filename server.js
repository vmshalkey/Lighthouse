// var http = require('http');
var express = require('express')
var app = express()
var jwt = require('express-jwt');

var port = 8000;
var server = app.listen(port, function () {
	console.log('--------------------');
	console.log('--------'+port+'--------');
	console.log('--------------------');
});

var bodyParser = require('body-parser')

// Configure express-jwt with Auth0 account
var jwtCheck = jwt({
  secret: new Buffer('IxvGIFqCdwfEcCeL4A2q_oK_9nqSQQW8wG6kPf06WnwpDytSw82GV1tdKybJ6MPT', 'base64'),
  audience: 'NPiBWuublwKGHK5REN5kJkXkinaxKXG0'
});

app.use('/api/secure', jwtCheck);

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

// Sockets
// io = require('socket.io').listen(server)

// MySQL Database
var mysql = require('mysql');

con = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "root",
	database: "lighthouse",
	multipleStatements: true
});

con.connect(function(err){
	if(err){
		console.log('Error connecting to database');
		return;
	}
	console.log('Connection to MySQL DB established');
});