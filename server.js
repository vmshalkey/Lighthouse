// var http = require('http');
var express = require('express')
var app = express()
var jwt = require('express-jwt');

var bodyParser = require('body-parser')

// Configure express-jwt with Auth0 account
var jwtCheck = jwt({
  secret: new Buffer('IxvGIFqCdwfEcCeL4A2q_oK_9nqSQQW8wG6kPf06WnwpDytSw82GV1tdKybJ6MPT', 'base64'),
  audience: 'NPiBWuublwKGHK5REN5kJkXkinaxKXG0'
});

app.use('/api/secure', jwtCheck);

// app.configure(function () {

//  // Request body parsing middleware should be above methodOverride
//   app.use(express.bodyParser());
//   app.use(express.urlencoded());
//   app.use(express.json());

//   app.use('/secured', authenticate);
//   app.use(cors());

//   app.use(app.router);
// });

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

// Port
// var port = process.env.PORT || 3001;

// http.createServer(app).listen(port, function (err) {
//   console.log('listening in http://localhost:' + port);
// });

app.listen(8000);