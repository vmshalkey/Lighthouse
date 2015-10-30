var app = angular.module('app', ['ngRoute', 'ngAnimate', 'bgImage', 'auth0', 'angular-storage', 'angular-jwt'])

<<<<<<< HEAD
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
=======
.config(function (authProvider, $routeProvider, $httpProvider, jwtInterceptorProvider) {
  authProvider.init({
    domain: 'shalkey.auth0.com',
    clientID: 'NPiBWuublwKGHK5REN5kJkXkinaxKXG0'
  });
>>>>>>> 2af92d557ea1e0fc25656dd00020e6259bc9d301

  jwtInterceptorProvider.tokenGetter = ['store', function(store) {
    // Return the saved token
    return store.get('token');
  }];

  $httpProvider.interceptors.push('jwtInterceptor');

	$routeProvider
	.when('/', {
		controller: 'UsersController',
		controllerAs: 'users_ctrl',
		templateUrl: '/partials/home.html'
	})
	.when('/dashboard', {
		controller: 'UsersController',
		controllerAs: 'users_ctrl',
		templateUrl: '/partials/dashboard.html'
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
	.when('/home', {
		controller: 'UsersController',
		controllerAs: 'users_ctrl',
		templateUrl: '/partials/home.html'
	})
	.otherwise('/')
})

.run(function($rootScope, auth, store, jwtHelper, $location) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
  // This events gets triggered on refresh or URL change
  $rootScope.$on('$locationChangeStart', function() {
    var token = store.get('token');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          auth.authenticate(store.get('profile'), token);
        }
      } else {
        // Either show the login page or use the refresh token to get a new idToken
        $location.path('/');
      }
    }
	})
});
