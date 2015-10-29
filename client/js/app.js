var app = angular.module('app', ['ngRoute', 'ngAnimate', 'bgImage']);

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
		controller: 'UsersController',
		controllerAs: 'users_ctrl',
		templateUrl: '/partials/login.html'
	})
	.when('/home', {
		controller: 'UsersController',
		controllerAs: 'users_ctrl',
		templateUrl: '/partials/home.html'
	})
	.otherwise('/')
})