'use strict';

angular.module('tmntApp')
  .controller('TeamCtrl', function ($scope, $http) {
    // $scope.team = team;
    // console.log($scope.team);
    // angular.forEach($scope.team, function(value) {
    // 	$scope.characters = value;
    // })
  	//^^^Commented out for Testing purposes.
  	$scope.clickCount = 0;
  	$scope.mouseClicked = function() {
  		$scope.clickCount++;
  		$scope.isEven = ($scope.clickCount % 2 == 0);
  		$scope.isOdd = !$scope.isEven;
  	}

  	$scope.downloadFrogs = function() {
  		$http.get('/frogs').success(function(data) {
  			$scope.frogs = data;
  		});
  	}

  });
