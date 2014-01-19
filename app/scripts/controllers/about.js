'use strict';

angular.module('developerWorkflowApp')
	.controller('AboutCtrl', function ($scope, cordovaReady) {
		$scope.navigator = null;

		cordovaReady().then(function(data){
			$scope.navigator = data;
		},function(data){
			$scope.navigator = data;
		});
	});
