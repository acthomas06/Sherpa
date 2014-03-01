'use strict';

angular.module('rtfmApp', ['firebase'])
  .controller('ThreadCtrl', function ($scope, $firebase) {
    var ref = new Firebase('http://readtheeffingmanual.firebaseIO.com' + '/threads');
    $scope.threads = $firebase(ref);
    $scope.currentThread;
    $scope.addThread = function(e) {
    	if(e.keyCode !== 13)
    	{
    		return;
    	}

    	$scope.threads.$add({
    	    		body: $scope.newThread,
    	    		title: $scope.newTitle
    	    	});
    	    	$scope.newThread = '';
    	    	$scope.newTitle = '';)
    	
    };    

    $scope.changeThread = function(thread) {
    	$scope.currentThread = thread;
    };
  });