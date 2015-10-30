var app = angular.module('app', ['ngRoute', 'ngAnimate', 'bgImage', 'auth0', 'angular-storage', 'angular-jwt'])

.config(function (authProvider) {
	authProvider.init({
		domain: 'shalkey.auth0.com',
		clientID: 'NPiBWuublwKGHK5REN5kJkXkinaxKXG0'
	});
})
.run(function(auth) {
	// This hooks al auth events to check everything as soon as the app starts
	auth.hookEvents();
});

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'UsersController',
		controllerAs: 'users_ctrl',
		templateUrl: '/partials/home.html'
	})
	.when('/beacons', {
		controller: 'BeaconsController',
		controllerAs: 'beacons_ctrl',
		templateUrl: '/partials/myBeacons.html'
	})
	.when('/journeys', {
		controller: 'JourneysController',
		controllerAs: 'journeys_ctrl',
		templateUrl: '/partials/myJourneys.html'
	})
	.when('/lookouts', {
		controller: 'LookoutsController',
		controllerAs: 'lookouts_ctrl',
		templateUrl: '/partials/myLookouts.html'
	})
	.when('/register', {
		controller: 'UsersController',
		controllerAs: 'users_ctrl',
		templateUrl: '/partials/loginReg.html'
	})
	.when('/login', {
		controller: 'LoginController',
		controllerAs: 'login_ctrl',
		templateUrl: '/partials/login.html'
	})
	.when('/home', {
		controller: 'UsersController',
		controllerAs: 'users_ctrl',
		templateUrl: '/partials/home.html'
	})
	.otherwise('/')
})