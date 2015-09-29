var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/home.html'
	})
	.when('/users', {
		controller: 'UsersController',
		controllerAs: 'usersCtrl',
		templateUrl: '/partials/users.partial.html'
	})
	.when('/register', {
		controller: 'UsersController',
		controllerAs: 'usersCtrl',
		templateUrl: '/partials/loginReg.html'
	})
	.otherwise('/')
})