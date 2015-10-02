var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'UsersController',
		controllerAs: 'usersCtrl',
		templateUrl: '/partials/home.html'
	})
	.when('/beacons', {
		controller: 'BeaconsController',
		controllerAs: 'beaconsCtrl',
		templateUrl: '/partials/myBeacons.html'
	})
	.when('/journeys', {
		controller: 'JourneysController',
		controllerAs: 'journeysCtrl',
		templateUrl: '/partials/myJourneys.html'
	})
	.when('/lookouts', {
		controller: 'LookoutsController',
		controllerAs: 'lookoutsCtrl',
		templateUrl: '/partials/myLookouts.html'
	})
	.when('/register', {
		controller: 'UsersController',
		controllerAs: 'usersCtrl',
		templateUrl: '/partials/loginReg.html'
	})
	.when('/login', {
		controller: 'UsersController',
		controllerAs: 'usersCtrl',
		templateUrl: '/partials/login.html'
	})
	.when('/home', {
		controller: 'UsersController',
		controllerAs: 'usersCtrl',
		templateUrl: '/partials/home.html'
	})
	.otherwise('/')
})