'use strict';

angular.module('developerWorkflowApp')
	.factory('cordovaReady', [
		'$q',
		function ($q) {
			return function () {
				var deferred = $q.defer();
				document.addEventListener('deviceready', function () {
					if(typeof navigator === 'object'){
						deferred.resolve(navigator);
					} else {
						deferred.reject('Could not load navigator');
					}
				}, false);
				return deferred.promise;
			};
		}
	]);