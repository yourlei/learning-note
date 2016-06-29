var myForm = angular.module('myForm', []);

myForm.controller('userInfoForm', ['$scope', function($scope) {
	$scope.userInfo = {
		email:     'leiyu@gmail.com',
		password:  'leiyu123',
		autoLogin: true
	};
	// add three methods
	$scope.getFormData = function() {
		// alter($scope.userInfo);
		console.log($scope.userInfo);
	};
	$scope.setFormData = function() {
		$scope.userInfo = {
			email:    'youlei@qq.com',
			password: 'leiyu',
			autoLogin: false
		};
	};
	$scope.resetFormData = function() {
		$scope.userInfo = {
			email:     'leiyu@gmail.com',
			password:  'leiyu123',
			autoLogin: true
		};
	};
}]);