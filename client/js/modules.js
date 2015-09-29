var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/myBeacons.html'
	})
	.when('/beacons', {
		// controller: 'BeaconsController',
		// controllerAs: 'beaconsCtrl',
		templateUrl: '/partials/myBeacons.html'
	})
	.when('/journeys', {
		// controller: 'UsersController',
		// controllerAs: 'usersCtrl',
		templateUrl: '/partials/myJourneys.html'
	})
	.when('/lookouts', {
		// controller: 'LookoutsController',
		// controllerAs: 'lookoutsCtrl',
		templateUrl: '/partials/myLookouts.html'
	})
	.when('/register', {
		// controller: 'UsersController',
		// controllerAs: 'usersCtrl',
		templateUrl: '/partials/loginReg.html'
	})
	.otherwise('/')
})

// app.directive('myModule', function() {
// 	return {
// 		restrict: 'A',
//     scope : {
//       title : '@'
//     },
//     templateUrl : '/partial/module.html',
//     transclude : true
//   };
// });