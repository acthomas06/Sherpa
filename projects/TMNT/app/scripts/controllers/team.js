'use strict';

angular.module('tmntApp')
  .controller('TeamCtrl', function ($scope, team) {
    $scope.team = team;
    console.log($scope.team);
    angular.forEach($scope.team, function(value) {
    	$scope.characters = value;
    })
  });
