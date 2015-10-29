app.controller('MainController', function (UserFactory, $scope, $timeout, QueueService, $http, auth, store, $location) {
	console.log("MainController Loaded");
	var that = this;

	var INTERVAL = 10000,
		slides = [
			{id:"image00", src:"assets/img/teens-walking.jpg", title: 'Our teens', subtitle: 'are side tracked!'},
			{id:"image01", src:"assets/img/teens-gang.jpg", title: 'Our teens', subtitle: 'choose wrong friends!'},
			{id:"image02", src:"assets/img/teens-walking3.jpg", title: 'Our teens', subtitle: 'can do wrong things!'},
			{id:"image03", src:"assets/img/teen-class.jpg", title: 'Our teens', subtitle: 'should be here!'},
			{id:"image04", src:"assets/img/beacon3-horizontal.png", title: 'A Parents', subtitle: 'answer!'}
		];

		function setCurrentSlideIndex(index) {
			$scope.currentIndex = index;
		}

		function isCurrentSlideIndex(index) {
				return $scope.currentIndex === index;
		}

		function nextSlide() {
				$scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
				$timeout(nextSlide, INTERVAL);
		}

		function loadSlides() {
				$timeout(nextSlide, INTERVAL);
		}

		$scope.slides = slides;
		$scope.currentIndex = 0;
		$scope.setCurrentSlideIndex = setCurrentSlideIndex;
		$scope.isCurrentSlideIndex = isCurrentSlideIndex;

		loadSlides();

		$scope.login = function () {
    		auth.signin({}, function (profile, token) {
		      // Success callback
		      store.set('profile', profile);
		      store.set('token', token);
		      $location.path('/');
		    }, function () {
		      // Error callback
		    });
	  	}
});

app.animation('.slide-animation', function ($window) {
	return {
		enter: function (element, done) {
			var startPoint = $window.innerWidth * 0.5,
				tl = new TimelineLite();

			tl.fromTo(element.find('.bg'), 1, { alpha: 0}, {alpha: 1})
				.fromTo(element.find('.xlarge'), 1,
					{ left: startPoint, alpha: 0},
					{left: 50, alpha: 1, ease: Ease.easeInOut})
				.fromTo(element.find('.title'), 3,
					{ left: startPoint, alpha: 0},
					{left: 50, alpha: 1, ease: Ease.easeInOut})
				.fromTo(element.find('.subtitle'), 3,
					{ left: startPoint, alpha: 0},
					{left: 50, alpha: 1, ease: Ease.easeInOut, onComplete: done});
		},

		leave: function (element, done) {
			var tl = new TimelineLite();

			tl.to(element, 1, {alpha: 0, onComplete: done});
		}
	}
});

