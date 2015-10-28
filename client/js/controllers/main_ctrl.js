app.controller('MainController', function(UserFactory, $scope, $timeout){
	console.log("MainController Loaded");
	var that = this;

	var INTERVAL = 3000,
		slides = [
			{id:"image00", src:"/img/image00.jpg"},
			{id:"image01", src:"/img/image01.jpg"},
			{id:"image02", src:"/img/image02.jpg"},
			{id:"image03", src:"/img/image03.jpg"},
			{id:"image04", src:"/img/image04.jpg"}
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
});

