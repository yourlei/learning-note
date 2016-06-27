var mymodule = angular.module('app', []);

mymodule.controller('contro-1', ['$scope', '$rootScope', function($scope, $rootScope) {
	$scope.greet = {
		text: 'hi, contro-1'
	};
	$scope.private = '私有属性1';
	$rootScope.commonEle = {
		text: '根域'
	};
	// bind method
	$scope.test = function() {
		alert('contro-1');
	};
}]);

mymodule.controller('contro-2', ['$scope', function($scope) {
	$scope.greet = {
		text: 'hi, contro-2'
	};

	// bind method
	$scope.test = function() {
		alert('contro-2');
	};
}]);

mymodule.controller('eventController', ['$scope', function($scope) {
	$scope.count = 0;

	$scope.$on('myevent', function () {
		$scope.count++;
	})
}])