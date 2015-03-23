(function(){
	var app = angular.module('imageWall',[]);
	app.controller("imageController", ['$scope', '$element', '$interval', function($scope, $element, $interval){
		// $scope.el

		$scope.image = [];

		$scope.small = [
			{
				chosen: false,
				breed: "Chihuahua",
				image: "assets/img/chihuahua.jpg"

			},
			{
				chosen: false,
				breed: "German Shepherd",
				image: "assets/img/german-shepherd.jpg"
			},
			{
				chosen: false,
				breed: "Golden Retriever",
				image: "assets/img/retriever.jpg"
			},
			{
				chosen: false,
				breed: "Bernese Mountain Dog",
				image: "assets/img/bernese.jpg"
			},
			{
				chosen: false,
				breed: "Corgi",
				image: "assets/img/corgi-1.jpg"
			},
			{
				chosen: false,
				breed: "Corgi",
				image: "assets/img/corgi-2.jpg"
			}
		];

		$scope.medium = [
			{
				breed:"German Shepherd",
				image: "assets/img/german-shepherd-puppy.jpg"
			},
			{
				breed:"German Shepherd",
				image: "assets/img/shihtzu.jpg"
			},
			{
				breed:"Pomerinian",
				image: "assets/img/pomerinian.jpg"
			},
			{
				breed:"Retriever",
				image: "assets/img/retriever-2.jpg"
			},
			{
				chosen: false,
				breed: "Corgi",
				image: "assets/img/corgi-3.jpg"
			}
		];

		$scope.large = [
			{
				breed: "French Bulldog",
				image: "assets/img/french-bulldog-hero.jpg"
			},
			{
				breed: "Corgi",
				image: "assets/img/puppy.jpg"
			}
		];

		function getRandomImage( photoArray ){
			return( photoArray[ getRan( 0, photoArray.length-1 ) ].image );
		}

		function getRan( min, max ){
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function loadImages(){
			$scope.image[1] = getRandomImage($scope.small);
			$scope.image[2] = getRandomImage($scope.small);
			$scope.image[3] = getRandomImage($scope.medium);
			$scope.image[4] = getRandomImage($scope.large);
			$scope.image[5] = getRandomImage($scope.medium);
			$scope.image[6] = getRandomImage($scope.medium);
		}

		function changeImgRan(){
			var index = getRan(1,6), ranImg;
			if ( index == 1 || index == 2 ) {
				ranImg = getRandomImage($scope.small);
			} else if ( index == 3 || index == 5 || index == 6 ) {
				ranImg = getRandomImage($scope.medium);
			} else {
				ranImg = getRandomImage($scope.large);
			}
			$scope.image[index] = ranImg;
		}

		loadImages();
		$interval( changeImgRan, 1000 );

	}]);	

})();