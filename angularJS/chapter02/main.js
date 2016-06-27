// function mycontrol($scope) {
// 	$scope.name = {
// 		first: 'leiyu'
// 	};
// }
var mymodule = angular.module('app', []);

mymodule.controller('mycontrol', ['$scope', function($scope) {
	$scope.person = {
		name:   'leiyu',
		sex:    '男',
		age:    23,
		weight: '55kg',
		city:   'GZ'
	};
	// $scope.city = 9;
}]);